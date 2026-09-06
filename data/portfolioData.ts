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
  concepts?: string[];
  highlights?: string[];
  context?: string;
  category?: string;
  caseStudy?: CaseStudy;
}

export interface Experience {
  organization: string;
  role: string;
  position?: string;
  date?: string;
  project?: string;
  tools?: string[];
  work: string[];
  description?: string;
}

export interface Achievement {
  title: string;
  organizer: string;
  award: string;
  solution: string;
  role?: string;
  badge?: string;
}

export interface Publication {
  title: string;
  venue: string;
  date: string;
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
  relatedProjectIds?: string[];
}

export interface LeadershipActivity {
  role: string;
  organization: string;
  detail?: string;
}

export const personalInfo = {
  name: "Abhishek Ahirrao",
  callsign: "AA // EMBEDDED",
  primaryTitle: "Embedded Systems & Electronics Engineering Student",
  secondaryDescription:
    "Electronics & Telecommunication Engineering student focused on Embedded Systems, Embedded Software, Real-Time Systems and Hardware–Software Integration.",
  college: "K.K. Wagh Institute of Engineering Education & Research, Nashik",
  location: "Nashik, Maharashtra, India",
  education: {
    degree: "B.Tech. Electronics & Telecommunication Engineering",
    duration: "2023–2027",
    cgpa: "8.69 / 10",
    cgpaNote: "Up to Semester VI",
    highestSgpa: "9.00 / 10",
  },
  aboutParagraphs: [
    "I'm Abhishek Ahirrao, an Electronics & Telecommunication Engineering student at K.K. Wagh Institute of Engineering Education & Research, with a primary focus on Embedded Systems and real-time engineering.",
    "I enjoy building systems that bridge hardware and software — from ESP32-based embedded communication and sensor systems to FPGA/RTL designs and autonomous vehicle control prototypes.",
    "My work spans Embedded C, microcontrollers, communication protocols, FPGA development, control systems and edge computing, with additional experience in MATLAB/Simulink, Python and AI-assisted engineering applications.",
    "I like turning engineering concepts into working prototypes, validating them through simulation and testing, and continuously learning how embedded systems can solve real-world problems.",
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
    code: "MCU_CORE",
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
    relatedProjectIds: ["v2v-autonomous-vehicle-control", "mobile-smart-home-automation"],
  },
  {
    title: "Communication",
    code: "BUS_PROTO",
    description: "Synchronous, asynchronous, industrial and wireless peer-to-peer protocols",
    skills: [
      "UART",
      "SPI",
      "I²C",
      "CAN",
      "ESP-NOW",
      "Wi-Fi",
    ],
    relatedProjectIds: ["v2v-autonomous-vehicle-control", "mobile-smart-home-automation"],
  },
  {
    title: "Digital / FPGA",
    code: "RTL_SYNTH",
    description: "Hardware description, register-transfer logic, simulation and FPGA implementation",
    skills: [
      "Verilog HDL",
      "RTL Design",
      "Xilinx Vivado",
      "ModelSim",
      "Artix-7 FPGA",
      "Digital Design",
    ],
    relatedProjectIds: ["fpga-image-deduplication-engine"],
  },
  {
    title: "Control / Simulation",
    code: "CTRL_SIM",
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
    relatedProjectIds: ["twinx-digital-twin", "water-rocket-parametric-optimization", "v2v-autonomous-vehicle-control"],
  },
  {
    title: "Software / AI",
    code: "EDGE_ML",
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
      "LLM API Integration",
    ],
    relatedProjectIds: ["gaganix-space-weather", "twinx-digital-twin"],
  },
  {
    title: "Industrial Automation",
    code: "IND_AUTO",
    description: "Programmable logic controllers, human-machine interfaces and fieldbus networking",
    skills: [
      "Siemens TIA Portal",
      "S7-1200 PLC",
      "WinCC HMI",
      "PLCSIM",
      "PROFINET",
      "Modbus",
    ],
    relatedProjectIds: ["mobile-smart-home-automation"],
  },
];

export const featuredProjects: Project[] = [
  {
    id: "v2v-autonomous-vehicle-control",
    title: "V2V-Based Autonomous Vehicle Control Prototype Using Edge Computing",
    role: "Embedded Software Developer",
    date: "Feb 2026 – Present",
    technologies: [
      "ESP32",
      "Embedded C",
      "Python",
      "ESP-NOW",
      "Wi-Fi",
      "OpenCV",
      "GPS",
      "MPU6050",
      "Ultrasonic Sensors",
      "Motor Drivers",
      "PWM",
    ],
    description:
      "Developed an ESP32-based Vehicle-to-Vehicle communication and autonomous control prototype focused on cooperative driving and collision avoidance. Implemented real-time wireless communication using ESP-NOW, explored Time-To-Collision based safety logic, and integrated embedded control with Python-based simulation and validation.",
    concepts: [
      "V2V communication",
      "Adaptive Cruise Control",
      "Collision prediction",
      "Time-To-Collision",
      "Cooperative driving",
      "Autonomous decision making",
      "Edge computing",
    ],
    caseStudy: {
      problem:
        "Conventional automotive collision avoidance is constrained by sensor occlusions, line-of-sight blind spots, and cellular communication latency (>100ms). Safe cooperative platooning requires deterministic, real-time wireless telemetry directly between vehicle nodes without dependency on external infrastructure.",
      approach:
        "Engineered dual-core ESP32 vehicle nodes executing an ESP-NOW peer-to-peer telemetry loop with sub-10ms packet dispatch. Coupled an MPU6050 6-DOF IMU, ultrasonic rangefinder, and GPS module with an embedded Time-To-Collision (TTC) safety supervisor controlling PWM motor drivers.",
      architecture: [
        "Telemetry Node: Dual-core ESP32 (FreeRTOS scheduler for parallel sensing & transmission)",
        "Sensor Suite: MPU6050 IMU (inertial vectors) + Ultrasonic transceiver + GPS module",
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
    role: "Team Lead – RTL Design Developer",
    date: "Apr 2026",
    technologies: [
      "Verilog HDL",
      "Xilinx Vivado",
      "ModelSim",
      "Artix-7 FPGA",
    ],
    description:
      "Designed and verified a Verilog HDL-based real-time image deduplication engine for edge devices. Developed a 64-bit image signature generation architecture, verified the RTL using ModelSim, and synthesized the design on an Artix-7 FPGA using Xilinx Vivado.",
    highlights: [
      "RTL architecture",
      "64-bit image signature generation",
      "Real-time duplicate detection",
      "ModelSim verification",
      "Vivado synthesis",
      "FPGA resource/latency optimization",
    ],
    caseStudy: {
      problem:
        "Edge wildlife camera traps capture thousands of redundant, empty frames that overwhelm storage arrays and cellular backhaul bandwidth. Software-based deduplication consumes excessive power on remote battery installations, requiring dedicated, low-power RTL hardware acceleration.",
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
    role: "Developer",
    date: "Apr 2024 – May 2024",
    technologies: [
      "ESP32",
      "Arduino",
      "Arduino IDE",
      "Relays",
      "Microcontrollers",
    ],
    description:
      "Developed an ESP32-based smart home automation system for remotely controlling household electrical loads through a microcontroller-based architecture.",
    highlights: [
      "Microcontroller-based switching architecture",
      "Multi-channel relay isolation & driver circuitry",
      "Remote wireless state control & monitoring",
    ],
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
];

export const otherProjects: Project[] = [
  {
    id: "twinx-digital-twin",
    title: "TwinX — AI-Powered Digital Twin Platform for Indian Traffic Simulation",
    role: "Simulation & Digital Twin Developer",
    date: "SIH 2025",
    category: "Simulation & Digital Twin",
    technologies: [
      "MATLAB",
      "Simulink",
      "RoadRunner",
      "Automated Driving Toolbox",
      "Driving Scenario Designer",
      "Python",
      "Claude API",
      "Grok API",
      "TRELLIS",
    ],
    description:
      "High-fidelity Indian traffic simulation platform built with MATLAB/Simulink and scenario design tools. Contributed to the National Winner Smart India Hackathon 2025 solution.",
    context: "Contributed to the National Winner Smart India Hackathon 2025 solution.",
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
    id: "gaganix-space-weather",
    title: "GaganiX — AI-Driven Space Weather Radiation Forecasting System",
    role: "Machine Learning & Data Processing Engineer",
    date: "Space Weather Project",
    category: "Machine Learning & Edge Data",
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "PyTorch",
      "Scikit-learn",
      "CDFlib",
      "Streamlit",
      "Git",
    ],
    description:
      "Engineered machine learning pipelines for multi-horizon radiation forecasting using 11 years of satellite radiation and solar-wind datasets, encompassing feature engineering, preprocessing, and model training.",
    context:
      "Worked with 11 years of satellite radiation and solar-wind datasets including preprocessing, feature engineering, model training and multi-horizon forecasting.",
    caseStudy: {
      problem:
        "Solar energetic particle events and coronal mass ejections can degrade satellite electronics and endanger aerospace missions. Early predictive warnings require parsing decades of astrophysical data.",
      approach:
        "Built an end-to-end predictive machine learning pipeline ingesting 11 years of NASA/satellite CDF telemetry to forecast radiation flux horizons.",
      architecture: [
        "Ingestion: CDFlib parser reading multi-dimensional satellite radiation logs",
        "Feature Pipeline: Solar wind speed, magnetic field IMF vectors, and proton flux metrics",
        "Model Architecture: Multi-horizon PyTorch regression models with cross-validation",
        "Dashboard: Streamlit real-time interactive telemetry visualization",
      ],
      implementation: [
        "Handled missing values and sensor drift across 11 years of temporal telemetry",
        "Trained and compared deep learning and gradient boosted models for multi-hour forecasting",
        "Optimized inference time for edge and operations center deployment",
      ],
      results: [
        "Accurate predictive horizons for high-energy solar radiation events",
        "Clean interactive dashboard interface for mission controllers",
      ],
      status: "Validated on 11-Year Satellite Dataset",
    },
  },
  {
    id: "water-rocket-parametric-optimization",
    title: "Automated Parametric Optimization for Water Rocket",
    role: "Simulation & Optimization Developer",
    date: "Dec 2025 – Jan 2026",
    category: "Trajectory Modelling & Simulation",
    technologies: ["MATLAB", "Simulink", "OpenRocket"],
    description:
      "Developed a simulation-based optimization workflow for water-rocket design by analyzing parameters such as water-fill ratio and launch pressure using MATLAB, Simulink and OpenRocket.",
    context: "Connected to research work at Bharat Space Education Research Centre.",
    caseStudy: {
      problem:
        "Water rocket apogee altitude is determined by non-linear pneumatic expansion, transient water mass loss, and variable aerodynamic drag. Finding optimal launch parameters manually requires prohibitive trial-and-error.",
      approach:
        "Formulated automated mathematical simulation sweeps linking MATLAB differential equation solvers with OpenRocket trajectory aerodynamics.",
      architecture: [
        "Thermodynamic Model: Isentropic air expansion and water mass ejection dynamics in MATLAB",
        "Flight Simulator: OpenRocket 6-DOF trajectory and aerodynamic drag simulation",
        "Optimization Engine: Automated parameter sweep evaluating fill ratios (20%–60%) and pressures",
      ],
      implementation: [
        "Developed coupled differential equations modeling pressure decay and thrust profile",
        "Scripted automated multi-run scenario batches across varied atmospheric conditions",
        "Correlated simulation predictions with experimental water-rocket launch trials",
      ],
      results: [
        "Identified precise optimal water-fill fraction for maximum altitude efficiency",
        "Completed as primary research deliverable during winter internship at Bharat Space Education Research Centre",
      ],
      status: "Completed Research Internship Deliverable",
    },
  },
];

export const engineeringExperiences: Experience[] = [
  {
    organization: "Bharat Space Education Research Centre",
    role: "Virtual Research Intern",
    position: "Winter Research Intern",
    date: "Dec 2025 – Jan 2026",
    project: "Automated Parametric Optimization for Water Rocket",
    tools: ["MATLAB", "Simulink", "OpenRocket"],
    work: [
      "Water-fill ratio modelling",
      "Launch-pressure modelling",
      "Automated parameter analysis",
      "Simulation-based optimization",
      "OpenRocket trajectory visualization",
      "Validation through multiple scenarios",
    ],
    description:
      "Developed a simulation-based optimization workflow for water-rocket design by analyzing parameters such as water-fill ratio and launch pressure using MATLAB, Simulink and OpenRocket.",
  },
  {
    organization: "Team Antariiksh",
    role: "Avionics Sub-Lead / Avionics & Flight Computer Member",
    work: [
      "Avionics subsystem development",
      "Embedded systems",
      "MATLAB",
      "Arduino IDE",
      "Proteus",
      "Wokwi",
      "Simulation-assisted validation",
      "Technical coordination",
    ],
    description:
      "Contributing to avionics subsystem architecture, flight computer verification, and embedded hardware validation using simulation and prototyping environments.",
  },
];

export const achievements: Achievement[] = [
  {
    title: "National Winner — Smart India Hackathon 2025",
    organizer: "AICTE × MathWorks",
    award: "₹1,50,000",
    solution: "TwinX / high-fidelity Indian traffic simulation",
    badge: "1st of 50,000+ Teams",
  },
  {
    title: "First Prize — Unplugged Hackathon",
    organizer: "DJ Sanghvi College of Engineering",
    award: "₹25,000",
    solution: "FPGA / VLSI solution — Real-Time Image Deduplication Engine",
    role: "Team Lead / RTL Design Developer",
    badge: "Champion",
  },
];

export const publications: Publication[] = [
  {
    title: "V2V-Based Autonomous Vehicle Control Prototype Using Edge Computing",
    venue: "International Journal of Emerging Trends in Engineering and Development (IJETED)",
    date: "May 2026",
    type: "Journal",
  },
  {
    title: "IoT-Oriented Low-Power ALU with Dynamic Mode Switching for Energy Harvesting Applications",
    venue: "International Conference on Interdisciplinary Technology & Science Convergence (ICITSC 2025)",
    date: "Dec 2025",
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
    name: "Introduction to Quantum Computing: Quantum Algorithms & Qiskit",
    issuer: "NPTEL / SWAYAM",
    status: "Completed",
  },
  {
    name: "Cisco CCNA 200-301",
    issuer: "Udemy",
    status: "Ongoing",
  },
  {
    name: "Siemens S7-1200 PLC & HMI using TIA Portal",
    issuer: "Udemy",
    status: "Ongoing",
  },
  {
    name: "Japanese JLPT N5",
    issuer: "In Progress",
    status: "Ongoing",
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

export const hardwareSignalFlowNodes = [
  {
    step: "01",
    label: "Microcontroller",
    sub: "ESP32 Core / FreeRTOS",
    code: "CORE_MCU",
    accent: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20",
    dot: "bg-cyan-400",
  },
  {
    step: "02",
    label: "Sensors",
    sub: "MPU6050 • Ultrasonic • GPS",
    code: "SENS_ACQ",
    accent: "border-sky-500/30 text-sky-400 bg-sky-950/20",
    dot: "bg-sky-400",
  },
  {
    step: "03",
    label: "Communication",
    sub: "ESP-NOW • UART • SPI • CAN",
    code: "BUS_LINK",
    accent: "border-indigo-500/30 text-indigo-400 bg-indigo-950/20",
    dot: "bg-indigo-400",
  },
  {
    step: "04",
    label: "Control",
    sub: "TTC Safety • PID / PWM Actuation",
    code: "CTRL_LOOP",
    accent: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
    dot: "bg-emerald-400",
  },
  {
    step: "05",
    label: "Edge Computing",
    sub: "Artix-7 FPGA / Edge Models",
    code: "EDGE_PROC",
    accent: "border-teal-500/30 text-teal-400 bg-teal-950/20",
    dot: "bg-teal-400",
  },
  {
    step: "06",
    label: "Real-World System",
    sub: "Cooperative Autonomous V2V",
    code: "PHYS_SYS",
    accent: "border-amber-500/30 text-amber-400 bg-amber-950/20",
    dot: "bg-amber-400",
  },
];
