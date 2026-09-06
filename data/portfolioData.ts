export interface CaseStudy {
  problem: string;
  approach: string;
  architecture: string[];
  implementation: string[];
  results: string[];
  status: string;
}

export interface Project {
  id: string;
  title: string;
  role: string;
  date: string;
  technologies: string[];
  description: string;
  accentColor: string;
  domain?: string;
  category?: string;
  context?: string;
  highlights?: string[];
  image?: string;
  caseStudy?: CaseStudy;
  github?: string;
  demo?: string;
}

export interface Experience {
  organization: string;
  role: string;
  period: string;
  year: string;
  description: string;
  technologies: string[];
  image?: string;
}

export interface EducationEntry {
  id: string;
  institution: string;
  degree: string;
  duration: string;
  yearStart: number;
  yearEnd: number;
  score: string;
  scoreLabel: string;
  secondaryScore?: string;
  secondaryScoreLabel?: string;
  location: string;
  description: string;
  isPrimary: boolean;
  image?: string;
  courseworkOrFocus?: string[];
}

export interface Achievement {
  title: string;
  organizer: string;
  award: string;
  solution: string;
  role?: string;
  badge?: string;
  year: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
  year: string;
  technologies?: string[];
  type: "Journal" | "Conference";
}

export interface Certification {
  name: string;
  issuer: string;
  status: "Completed" | "Ongoing";
}

export interface SkillCategory {
  title: string;
  code: string;
  description: string;
  skills: string[];
}

export interface LeadershipActivity {
  role: string;
  organization: string;
  detail: string;
}

export const personalInfo = {
  name: "Abhishek Ahirrao",
  primaryTitle: "Electronics & Telecommunication Engineering Student",
  focus: "Embedded Systems • Simulation • FPGA • Autonomous Systems",
  secondaryDescription:
    "Electronics & Telecommunication Engineering student focused on Embedded Systems, Embedded Software, Real-Time Systems, and Hardware–Software Integration.",
  college: "K.K. Wagh Institute of Engineering Education & Research, Nashik",
  location: "Nashik, Maharashtra, India",
  profileImage: "/images/profile/abhishek.jpeg",
  education: {
    degree: "B.Tech. Electronics & Telecommunication Engineering",
    duration: "2023–2027",
    cgpa: "8.69 / 10",
    cgpaNote: "Up to Semester VI",
    highestSgpa: "9.00 / 10",
  },
  aboutParagraphs: [
    "I am an Electronics & Telecommunication Engineering student at K.K. Wagh Institute of Engineering Education & Research, focusing on Embedded Systems and deterministic real-time firmware.",
    "My hands-on engineering work bridges microcontrollers, sensor buses, low-latency wireless communication, and FPGA hardware acceleration. Rather than relying on simulated abstractions alone, I build and validate physical vehicle prototypes, custom sensor boards, and RTL digital logic.",
    "My practical work spans Embedded C, ESP32 FreeRTOS tasks, peer-to-peer ESP-NOW protocol pipelines, Verilog HDL synthesis on Artix-7 FPGAs, and MATLAB/Simulink dynamic system modeling.",
    "I focus on turning mathematical control models into reliable physical embedded systems, verifying timing constraints, and deploying low-latency solutions for autonomous vehicles, edge monitoring, and aerospace subsystems.",
  ],
  socials: {
    email: "abhishekahirrao3m4@gmail.com",
    github: "https://github.com/Abhishek3m4",
    linkedin: "https://www.linkedin.com/in/abhishek-ahirrao334",
  },
};

export const technicalSkillCategories: SkillCategory[] = [
  {
    title: "Embedded Systems",
    code: "MCU",
    description: "Firmware architecture, peripheral control, real-time deterministic execution",
    skills: [
      "Embedded C",
      "C",
      "C++",
      "ESP32",
      "Arduino",
      "Microcontrollers",
      "Sensor Interfacing",
      "GPIO",
      "PWM",
      "Real-Time Systems",
      "Hardware–Software Integration",
    ],
  },
  {
    title: "Communication Buses",
    code: "BUS",
    description: "Synchronous, asynchronous, industrial and wireless peer-to-peer protocols",
    skills: [
      "UART",
      "SPI",
      "I²C",
      "CAN",
      "ESP-NOW",
      "Wi-Fi",
    ],
  },
  {
    title: "Digital / FPGA",
    code: "RTL",
    description: "Hardware description, register-transfer logic, simulation and FPGA implementation",
    skills: [
      "Verilog HDL",
      "RTL Design",
      "Xilinx Vivado",
      "ModelSim",
      "Artix-7 FPGA",
      "Digital Design",
    ],
  },
  {
    title: "Control / Simulation",
    code: "SIM",
    description: "Model-based design, dynamic system simulation and scenario validation",
    skills: [
      "MATLAB",
      "Simulink",
      "Control Systems",
      "RoadRunner",
      "Automated Driving Toolbox",
      "Driving Scenario Designer",
      "OpenRocket",
      "Model-Based Design",
    ],
  },
  {
    title: "Software & Edge ML",
    code: "ML",
    description: "Data pipelines, computer vision, machine learning models and edge integration",
    skills: [
      "Python",
      "OpenCV",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Scikit-learn",
      "Streamlit",
      "REST APIs",
    ],
  },
  {
    title: "Industrial Automation",
    code: "PLC",
    description: "Programmable logic controllers, human-machine interfaces and fieldbus networking",
    skills: [
      "Siemens TIA Portal",
      "S7-1200 PLC",
      "WinCC HMI",
      "PLCSIM",
      "PROFINET",
      "Modbus",
    ],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "twinx-digital-twin",
    title: "TwinX — AI-Powered Digital Twin Platform for Indian Traffic Simulation",
    role: "Simulation & Digital Twin Developer",
    date: "Dec 2025",
    accentColor: "#00f0ff",
    image: "/images/projects/twinx.jpg",
    technologies: [
      "MATLAB",
      "Simulink",
      "RoadRunner",
      "Automated Driving Toolbox",
      "Python",
    ],
    description:
      "High-fidelity Indian traffic simulation platform combining RoadRunner 3D road models, MATLAB/Simulink vehicle dynamics, and AI scenario generation. Contributed to winning 1st Prize nationally at Smart India Hackathon 2025 out of 50,000+ teams.",
    github: "https://github.com/Abhishek3m4",
    caseStudy: {
      problem:
        "Standard traffic simulators assume strict lane adherence and homogeneous traffic, failing completely when applied to dense, heterogeneous, non-lane-based Indian road networks.",
      approach:
        "Engineered a digital twin platform combining RoadRunner high-fidelity 3D road models, MATLAB/Simulink vehicle dynamics, and AI scenario generation to replicate real Indian traffic environments.",
      architecture: [
        "Scenario Generator: RoadRunner + Driving Scenario Designer for realistic road geometry",
        "Dynamics Core: MATLAB & Simulink vehicle dynamics and collision logic",
        "AI Co-Pilot: Multi-LLM integration for dynamic incident simulation and traffic policy testing",
      ],
      implementation: [
        "Calibrated mixed-vehicle interaction models (auto-rickshaws, two-wheelers, heavy vehicles)",
        "Integrated Automated Driving Toolbox sensor models for ADAS evaluation",
        "Demonstrated live dynamic simulation at the national finals",
      ],
      results: [
        "National Winner — Smart India Hackathon 2025 (AICTE × MathWorks, ₹1,50,000 cash prize)",
        "Selected as 1st prize winner out of 50,000+ participating engineering teams",
      ],
      status: "National Champion — SIH 2025",
    },
  },
  {
    id: "v2v-autonomous-vehicle-control",
    title: "V2V-Based Autonomous Vehicle Control Prototype Using Edge Computing",
    role: "Embedded Software Developer",
    date: "Feb 2026 – Present",
    accentColor: "#10b981",
    image: "/images/projects/v2v.jpg",
    technologies: [
      "ESP32",
      "Embedded C",
      "FreeRTOS",
      "ESP-NOW",
      "MPU6050",
      "Ultrasonic Sensors",
      "PWM",
    ],
    description:
      "Engineered dual-core ESP32 vehicle nodes executing an ESP-NOW peer-to-peer telemetry loop with sub-10ms packet dispatch. Integrated MPU6050 inertial sensing, ultrasonic ranging, and Time-To-Collision (TTC) safety logic to control throttle and braking.",
    github: "https://github.com/Abhishek3m4",
    caseStudy: {
      problem:
        "Conventional automotive collision avoidance is constrained by sensor occlusions, line-of-sight blind spots, and cellular communication latency (>100ms). Safe cooperative platooning requires deterministic, real-time wireless telemetry directly between vehicle nodes without external infrastructure.",
      approach:
        "Engineered dual-core ESP32 vehicle nodes executing an ESP-NOW peer-to-peer telemetry loop with sub-10ms packet dispatch. Coupled an MPU6050 6-DOF IMU, ultrasonic rangefinder, and GPS module with an embedded Time-To-Collision (TTC) safety supervisor controlling PWM motor drivers.",
      architecture: [
        "Telemetry Node: Dual-core ESP32 (FreeRTOS scheduler for parallel sensing & transmission)",
        "Sensor Suite: MPU6050 IMU + Ultrasonic transceiver + GPS module",
        "P2P Protocol: ESP-NOW 2.4 GHz low-latency connectionless packet broadcast",
        "Control Engine: Time-To-Collision (TTC) algorithm with automated throttle/braking actuation",
        "HIL Verification: Python telemetry logger & trajectory visualization harness",
      ],
      implementation: [
        "Authored deterministic Embedded C firmware with FreeRTOS ring buffers for packet parsing",
        "Formulated dynamic velocity-dependent safety distances to prevent rear-end collisions",
        "Designed physical prototype chassis with dedicated motor driver isolation and regulated power delivery",
        "Integrated Python-based visualization and testing suite for multi-scenario validation",
      ],
      results: [
        "Validated cooperative braking and collision prevention across moving vehicle nodes",
        "Maintained sub-10ms packet delivery across peer-to-peer wireless links",
        "Authored paper accepted in International Journal of Emerging Trends in Engineering and Development (IJETED, May 2026)",
      ],
      status: "Physical Hardware Prototype Operational & Published",
    },
  },
  {
    id: "fpga-image-deduplication-engine",
    title: "FPGA-Based Real-Time Image Deduplication Engine for Edge Wildlife Monitoring",
    role: "Team Lead & RTL Design Developer",
    date: "Apr 2026",
    accentColor: "#f59e0b",
    image: "/images/projects/fpga.jpg",
    technologies: [
      "Verilog HDL",
      "Xilinx Vivado",
      "ModelSim",
      "Artix-7 FPGA",
      "RTL Design",
    ],
    description:
      "Designed a Verilog HDL pipeline that constructs 64-bit perceptual image signatures in hardware registers and performs clock-cycle Hamming-distance comparison against cached references. Synthesized on an Artix-7 FPGA and verified in ModelSim, winning 1st Prize at the Unplugged Hackathon.",
    github: "https://github.com/Abhishek3m4",
    caseStudy: {
      problem:
        "Edge wildlife camera traps capture thousands of redundant, empty frames that overwhelm storage arrays and cellular backhaul bandwidth. Software-based deduplication consumes excessive power on remote battery installations, requiring dedicated low-power RTL hardware acceleration.",
      approach:
        "Designed a high-throughput Verilog HDL pipeline that constructs 64-bit perceptual image signatures in hardware registers and performs clock-cycle deterministic Hamming-distance comparison against cached references.",
      architecture: [
        "Data Interface: Pipelined pixel-stream input buffer with clock synchronization",
        "Signature Core: 64-bit gradient-based perceptual signature extraction block",
        "Comparison Array: Parallel bitwise Hamming-distance comparator with configurable threshold",
        "Control Logic: Single-cycle duplicate decision flag inhibiting redundant SD card writes",
      ],
      implementation: [
        "Modeled structural and behavioral RTL logic entirely in Verilog HDL",
        "Verified corner cases and timing transitions using ModelSim testbenches",
        "Synthesized and targeted the logic architecture onto a Xilinx Artix-7 FPGA using Vivado",
        "Optimized lookup table (LUT) and flip-flop footprints to minimize edge power draw",
      ],
      results: [
        "Awarded First Prize (₹25,000) at Unplugged Hackathon, DJ Sanghvi College of Engineering",
        "Achieved clock-cycle real-time deduplication with zero software CPU overhead",
        "Verified complete timing closure and clean simulation traces",
      ],
      status: "Synthesized on Artix-7 FPGA & ModelSim Verified",
    },
  },
  {
    id: "mobile-smart-home-automation",
    title: "Mobile-Controlled Smart Home Automation System",
    role: "Embedded Hardware Developer",
    date: "Apr 2024 – May 2024",
    accentColor: "#a855f7",
    image: "/images/projects/smart-home.jpg",
    technologies: [
      "ESP32",
      "Arduino C++",
      "Relay Drivers",
      "Wi-Fi",
      "GPIO Switching",
    ],
    description:
      "Developed an ESP32-based multi-channel appliance switching system with optocoupler galvanic isolation between 3.3V logic and AC mains. Implemented non-blocking state firmware for reliable wireless control.",
    github: "https://github.com/Abhishek3m4",
    caseStudy: {
      problem:
        "Standard home electrical appliances require physical switch interaction and lack intelligent power control or state monitoring, while retrofit commercial solutions are proprietary and inflexible.",
      approach:
        "Built an optocoupler-isolated multi-channel relay module controlled by an ESP32 microcontroller with non-blocking wireless state management.",
      architecture: [
        "Controller: Dual-core ESP32 running custom non-blocking state firmware",
        "Isolation: Optocoupler ICs providing galvanic isolation between 3.3V logic and AC mains",
        "Switching: 4-channel high-current mechanical relays with flyback diode protection",
        "Interface: Remote mobile control interface over wireless LAN",
      ],
      implementation: [
        "Programmed Arduino C++ firmware with state-saving in flash memory",
        "Designed physical hardware enclosure ensuring mains voltage creepage distances",
        "Stress-tested continuous load switching across prolonged operating cycles",
      ],
      results: [
        "Reliable zero-latency switching response across all connected electrical channels",
        "Zero reported false triggers or relay latching failures",
      ],
      status: "Hardware Prototype Tested & Operational",
    },
  },
  {
    id: "water-rocket-parametric-optimization",
    title: "Automated Parametric Optimization for Water Rocket",
    role: "Research Intern (BSERC)",
    date: "Dec 2025 – Jan 2026",
    accentColor: "#ff6b6b",
    image: "/images/projects/water-rocket.jpg",
    technologies: [
      "MATLAB",
      "Simulink",
      "OpenRocket",
      "Trajectory Dynamics",
      "Optimization",
    ],
    description:
      "Developed automated MATLAB/Simulink and OpenRocket aerodynamic models to optimize water-fill ratios, launch pressures, and apogee trajectories across multiple flight simulation scenarios.",
    github: "https://github.com/Abhishek3m4",
    caseStudy: {
      problem:
        "Water rocket performance depends on non-linear thermodynamic interactions between air pressure, water volume, and nozzle thrust dynamics that are difficult to optimize via manual trial and error.",
      approach:
        "Built a parametric MATLAB/Simulink dynamic simulation framework integrated with OpenRocket to mathematically determine peak apogee configurations.",
      architecture: [
        "Thermodynamic Engine: Adiabatic air expansion model calculating instantaneous chamber pressure",
        "Thrust Core: Mass-depletion thrust curves determining propellant burnout altitude",
        "Trajectory Integrator: 3-DOF aerodynamic drag and gravity solver",
      ],
      implementation: [
        "Iterated over parametric grids spanning water-fill ratios from 20% to 50% across variable pressures",
        "Automated batch simulation scripts to extract optimal apogee and stability margins",
        "Correlated simulation predictions against physical launch telemetry logs",
      ],
      results: [
        "Identified the global optimal water-fill ratio for maximum vertical apogee",
        "Completed research internship at Bharat Space Education Research Centre with commended evaluation",
      ],
      status: "Research Completed & Validated",
    },
  },
];

export const engineeringExperiences: Experience[] = [
  {
    organization: "Bharat Space Education Research Centre",
    role: "Winter Research Intern",
    period: "Dec 2025 – Jan 2026",
    year: "2025",
    image: "/images/experience/bharat-space.jpg",
    technologies: ["MATLAB", "Simulink", "OpenRocket", "Trajectory Dynamics"],
    description:
      "Developed automated parametric simulation and optimization workflows for water rocket propulsion and aerodynamics. Analyzed water-fill ratios, chamber pressures, and apogee trajectories using MATLAB, Simulink, and OpenRocket.",
  },
  {
    organization: "Team Antariiksh (Space Club of KKWIEER)",
    role: "Avionics Sub-Lead",
    period: "2025 – Present",
    year: "2026",
    image: "/images/experience/team-antariiksh.jpg",
    technologies: ["Avionics", "Embedded Systems", "Flight Computer", "Sensor Buses"],
    description:
      "Leading avionics subsystem architecture, flight computer verification, and embedded hardware validation. Coordinating telemetry acquisition, sensor bus interfacing, and prototyping environments.",
  },
  {
    organization: "Systems & Embedded Hardware Research",
    role: "Independent Hardware & RTL Developer",
    period: "2024 – Present",
    year: "PRESENT",
    technologies: ["ESP32", "Artix-7 FPGA", "Verilog HDL", "FreeRTOS", "MATLAB"],
    description:
      "Designing deterministic embedded firmware, RTL hardware acceleration on Artix-7 FPGAs, and low-latency peer-to-peer communication architectures for autonomous vehicular and edge monitoring applications.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "National Winner — Smart India Hackathon 2025",
    organizer: "AICTE × MathWorks",
    award: "₹1,50,000 Cash Prize",
    solution: "TwinX / High-Fidelity Indian Traffic Simulation",
    badge: "1st of 50,000+ Teams",
    year: "2025",
  },
  {
    title: "First Prize — Unplugged Hackathon",
    organizer: "DJ Sanghvi College of Engineering",
    award: "₹25,000 Cash Prize",
    solution: "Real-Time Image Deduplication Engine on Artix-7 FPGA",
    role: "Team Lead & RTL Developer",
    badge: "Champion",
    year: "2026",
  },
];

export const publications: Publication[] = [
  {
    title: "V2V-Based Autonomous Vehicle Control Prototype Using Edge Computing",
    venue: "International Journal of Emerging Trends in Engineering and Development (IJETED)",
    date: "May 2026",
    year: "2026",
    type: "Journal",
  },
  {
    title: "IoT-Oriented Low-Power ALU with Dynamic Mode Switching for Energy Harvesting Applications",
    venue: "International Conference on Interdisciplinary Technology & Science Convergence (ICITSC)",
    date: "Dec 2025",
    year: "2025",
    technologies: ["Xilinx Vivado", "ModelSim", "Digital Design"],
    type: "Conference",
  },
];

export const certifications: Certification[] = [
  {
    name: "MATLAB & Simulink Onramp",
    issuer: "MathWorks",
    status: "Completed",
  },
  {
    name: "C Programming Certification",
    issuer: "Spoken Tutorial, IIT Bombay",
    status: "Completed",
  },
  {
    name: "Introduction to Quantum Computing",
    issuer: "NPTEL / SWAYAM",
    status: "Completed",
  },
  {
    name: "Cisco CCNA 200-301",
    issuer: "Networking",
    status: "Ongoing",
  },
  {
    name: "Siemens S7-1200 PLC & HMI using TIA Portal",
    issuer: "Industrial Automation",
    status: "Ongoing",
  },
];

export const educationTimeline: EducationEntry[] = [
  {
    id: "btech-entc",
    institution: "K.K. Wagh Institute of Engineering Education & Research, Nashik",
    degree: "B.Tech. Electronics & Telecommunication Engineering",
    duration: "2023–2027",
    yearStart: 2023,
    yearEnd: 2027,
    score: "8.69 / 10",
    scoreLabel: "CUMULATIVE CGPA (UP TO SEM VI)",
    secondaryScore: "9.00 / 10",
    secondaryScoreLabel: "HIGHEST SEMESTER SGPA",
    location: "Nashik, Maharashtra, India",
    description:
      "Specializing in Embedded Systems, Real-Time Firmware Architecture, Hardware–Software Co-Design, Communication Buses (CAN, SPI, I²C, ESP-NOW), and RTL/VLSI Synthesis on Artix-7 FPGAs.",
    isPrimary: true,
    image: "/images/education/college.jpg",
    courseworkOrFocus: [
      "Embedded Systems Design",
      "Microcontrollers & Real-Time OS",
      "Digital VLSI / Verilog HDL",
      "Serial & Wireless Telemetry",
      "Control Systems Engineering",
      "Digital Signal Processing",
    ],
  },
  {
    id: "hsc-bhonsala",
    institution: "Bhonsala Military College, Nashik",
    degree: "Higher Secondary Certificate (HSC) — Science Stream",
    duration: "2021–2023",
    yearStart: 2021,
    yearEnd: 2023,
    score: "87.51 %ile",
    scoreLabel: "JEE MAIN PERCENTILE",
    secondaryScore: "65.17%",
    secondaryScoreLabel: "HSC BOARD SCORE",
    location: "Nashik, Maharashtra, India",
    description:
      "Core foundation in Advanced Mathematics, Classical Physics, and Physical Chemistry with disciplined analytical aptitude training.",
    isPrimary: false,
    image: "/images/education/hsc.png",
    courseworkOrFocus: ["Mathematics", "Physics", "Chemistry", "State Board"],
  },
  {
    id: "ssc-stpeters",
    institution: "St. Peters English Medium School, Nashik",
    degree: "Secondary School Certificate (SSC)",
    duration: "2021",
    yearStart: 2020,
    yearEnd: 2021,
    score: "91.20%",
    scoreLabel: "SSC BOARD EXAMINATION",
    location: "Nashik, Maharashtra, India",
    description:
      "Foundational scholastic training with distinction in Mathematics and General Sciences.",
    isPrimary: false,
    image: "/images/education/ssc.jpg",
    courseworkOrFocus: ["Mathematics", "General Science", "Computer Fundamentals"],
  },
];

export const leadershipActivities: LeadershipActivity[] = [
  {
    role: "Avionics Sub-Lead",
    organization: "Team Antariiksh",
    detail: "Leading avionics subsystem architecture, telemetry coordination, and embedded prototyping.",
  },
  {
    role: "Student Coordinator",
    organization: "Training & Placement Cell",
    detail: "Coordinating technical recruitment drives, company relations, and student orientation.",
  },
  {
    role: "Circuit Trace Competition Head",
    organization: "Telekinesis Techfest",
    detail: "Designing circuit debugging challenges, rule formulation, and competition evaluation.",
  },
];

export const otherProjects: Project[] = [];

