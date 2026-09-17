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
  status?: string;
  link?: string;
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
  primaryTitle:
    "E&TC Embedded Engineer | SIH'25 National Hackathon Winner | Autonomous Systems & AI/ML | Unplugged Hardware Hackathon Winner'26 | Innovator & Builder",
  titleSegments: [
    "E&TC Embedded Engineer",
    "SIH'25 National Hackathon Winner",
    "Autonomous Systems & AI/ML",
    "Unplugged Hardware Hackathon Winner'26",
    "Innovator & Builder",
  ],
  focus: "Embedded Systems • Autonomous Systems • AI/ML • VLSI/FPGA",
  shortDescription:
    "I’m an E&TC engineer focused on embedded systems, autonomous technology, and AI/ML. A SIH’25 National Hackathon Winner and Unplugged Hardware Hackathon Winner’26, I build practical engineering solutions through hands-on projects, research, and experimentation. My work spans embedded systems, VLSI, FPGA, intelligent vehicles, and real-world problem solving—turning ideas into functional technology.",
  secondaryDescription:
    "I’m an E&TC engineer focused on embedded systems, autonomous technology, and AI/ML. A SIH’25 National Hackathon Winner and Unplugged Hardware Hackathon Winner’26, I build practical engineering solutions through hands-on projects, research, and experimentation. My work spans embedded systems, VLSI, FPGA, intelligent vehicles, and real-world problem solving—turning ideas into functional technology.",
  college: "K.K. Wagh Institute of Engineering Education & Research, Nashik",
  location: "Nashik, Maharashtra, India",
  profileImage: "/images/profile/abhishek.jpeg",
  resumeUrl: "/resume.pdf",
  education: {
    degree: "B.Tech. Electronics & Telecommunication Engineering",
    duration: "2023–2027",
    cgpa: "8.69 / 10",
    cgpaNote: "Up to Semester VI",
    highestSgpa: "9.00 / 10",
  },
  aboutParagraphs: [
    "I’m an E&TC engineer focused on embedded systems, autonomous technology, and AI/ML. A SIH’25 National Hackathon Winner and Unplugged Hardware Hackathon Winner’26, I build practical engineering solutions through hands-on projects, research, and experimentation. My work spans embedded systems, VLSI, FPGA, intelligent vehicles, and real-world problem solving—turning ideas into functional technology.",
    "My hands-on work focuses on turning hardware and mathematical models into working systems — from programming dual-core ESP32 microcontrollers with FreeRTOS and low-latency ESP-NOW wireless communication to synthesizing digital logic on Xilinx Artix-7 FPGAs and simulating dynamic control systems in MATLAB/Simulink.",
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
    description: "Firmware architecture, peripheral control, and real-time execution",
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
      "FreeRTOS",
      "Hardware–Software Integration",
    ],
  },
  {
    title: "Communication Buses",
    code: "BUS",
    description: "Synchronous, asynchronous, and low-latency wireless protocols",
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
    description: "Hardware description, register-transfer logic, and FPGA synthesis",
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
    description: "Model-based design, dynamic system simulation, and scenario modeling",
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
    title: "Software & Tools",
    code: "DEV",
    description: "Development environments, scripting, and engineering toolchains",
    skills: [
      "Python",
      "Git & GitHub",
      "Linux CLI",
      "VS Code",
      "REST APIs",
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
      "Engineered dual-core ESP32 vehicle nodes executing an ESP-NOW peer-to-peer telemetry loop with sub-10ms packet dispatch. Integrated MPU6050 inertial sensing, ultrasonic ranging, and Time-To-Collision (TTC) safety logic to control throttle and automated braking.",
    github: "https://github.com/Abhishek3m4",
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
      "Designed a Verilog HDL pipeline that constructs 64-bit perceptual image signatures in hardware registers and performs clock-cycle Hamming-distance comparison against cached references. Synthesized on Artix-7 FPGA, winning 1st Prize at the Unplugged Hackathon.",
    github: "https://github.com/Abhishek3m4",
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
      "Developed automated MATLAB/Simulink and OpenRocket aerodynamic models to optimize water-fill ratios, launch pressures, and apogee trajectories across multiple flight simulation scenarios during research internship at BSERC.",
    github: "https://github.com/Abhishek3m4",
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
    title: "First Prize — Unplugged Hardware Hackathon 2026",
    organizer: "DJ Sanghvi College of Engineering",
    award: "₹25,000 Cash Prize",
    solution: "Real-Time Image Deduplication Engine on Artix-7 FPGA",
    role: "Team Lead & RTL Developer",
    badge: "Winner '26",
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
    status: "Published",
  },
  {
    title: "IoT-Oriented Low-Power ALU with Dynamic Mode Switching for Energy Harvesting Applications",
    venue: "International Conference on Interdisciplinary Technology & Science Convergence (ICITSC)",
    date: "Dec 2025",
    year: "2025",
    technologies: ["Xilinx Vivado", "ModelSim", "Digital Design"],
    type: "Conference",
    status: "Published",
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
      "Specializing in Embedded Systems, Real-Time Firmware, Hardware–Software Integration, Serial & Bus Protocols (CAN, SPI, I²C, ESP-NOW), and RTL Design on Artix-7 FPGAs.",
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
      "Rigorous analytical aptitude foundation in Advanced Mathematics, Classical Physics, and Physical Chemistry.",
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
