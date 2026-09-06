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
