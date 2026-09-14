import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 0;

// Baseline view count to account for established portfolio visits
const BASELINE_VIEWS = 142;

// In-memory fallback if third-party network is temporarily unavailable
let memoryViewCount = BASELINE_VIEWS;

// Primary zero-config persistent remote counter configuration
const COUNTER_NAMESPACE = "abhishek3m4-portfolio-v2";
const COUNTER_KEY = "profile-views";
const ABACUS_BASE = "https://abacus.jasoncameron.dev";

/**
 * Atomic increment or fetch using Upstash Redis if configured
 */
async function handleUpstash(increment: boolean): Promise<number | null> {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;

  if (!url || !token) return null;

  try {
    const command = increment ? "INCR" : "GET";
    const res = await fetch(`${url}/${command}/portfolio_total_views`, {
      headers: { Authorization: `Bearer ${token}` },
      cache: "no-store",
      signal: AbortSignal.timeout(2500),
    });

    if (res.ok) {
      const data = await res.json();
      const count = Number(data.result);
      if (!isNaN(count)) {
        return Math.max(count, BASELINE_VIEWS);
      }
    }
  } catch (error) {
    console.warn("Upstash Redis count error, falling back to public counter:", error);
  }

  return null;
}

/**
 * Atomic increment or fetch using Abacus zero-config cloud counter
 */
async function handleAbacus(increment: boolean): Promise<number | null> {
  try {
    const action = increment ? "hit" : "get";
    const res = await fetch(`${ABACUS_BASE}/${action}/${COUNTER_NAMESPACE}/${COUNTER_KEY}`, {
      cache: "no-store",
      headers: {
        "User-Agent": "Abhishek-Portfolio-ViewCounter/1.0",
      },
      signal: AbortSignal.timeout(2500),
    });

    if (res.ok) {
      const data = await res.json();
      const val = Number(data?.value);
      if (!isNaN(val)) {
        return BASELINE_VIEWS + val;
      }
    }
  } catch (error) {
    console.warn("Abacus counter error, falling back to memory counter:", error);
  }

  return null;
}

/**
 * Format view count with thousands separator
 */
function formatCount(num: number): string {
  return new Intl.NumberFormat("en-US").format(num);
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const shouldIncrement = searchParams.get("inc") === "true";

  let finalCount: number | null = null;
  let isLive = true;

  // 1. Try Upstash Redis if configured
  finalCount = await handleUpstash(shouldIncrement);

  // 2. Try Abacus zero-config persistent cloud counter
  if (finalCount === null) {
    finalCount = await handleAbacus(shouldIncrement);
  }

  // 3. Fallback to resilient memory counter
  if (finalCount === null) {
    if (shouldIncrement) {
      memoryViewCount += 1;
    }
    finalCount = memoryViewCount;
    isLive = false;
  } else {
    // Keep memory in sync
    memoryViewCount = Math.max(memoryViewCount, finalCount);
  }

  return NextResponse.json(
    {
      count: finalCount,
      formatted: formatCount(finalCount),
      isLive,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );
}

export async function POST() {
  // Alias POST to increment
  let finalCount = await handleUpstash(true);
  if (finalCount === null) {
    finalCount = await handleAbacus(true);
  }
  if (finalCount === null) {
    memoryViewCount += 1;
    finalCount = memoryViewCount;
  }

  return NextResponse.json(
    {
      count: finalCount,
      formatted: formatCount(finalCount),
      isLive: true,
    },
    {
      status: 200,
      headers: {
        "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
        Pragma: "no-cache",
        Expires: "0",
      },
    }
  );
}
