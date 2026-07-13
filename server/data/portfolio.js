// Single source of truth for resume-derived content.
// Consumed by the /api routes and by the chat RAG corpus builder.

export const profile = {
  name: "Amrit Bhardwaj",
  tagline: "MERN | MACHINE LEARNING | DSA | GENAI",
  bio: [
    "I am a final-year Electronics and Communication Engineering student with a strong focus on C++, frontend development, backend development, and Generative AI.",
    "I am an active competitive programmer with profiles on LeetCode, Codeforces, and CodeChef, with a maximum rating of 1726 on LeetCode (Top 15%), 1100+ on Codeforces, and 1300+ on CodeChef. As an active learner, I am also building my fundamentals in machine learning and exploring real-world use cases."
  ],
  email: "amritbharadwaj4@gmail.com"
};

export const education = [
  {
    school: "Gati Shakti Vishwavidyalaya (Central University)",
    location: "Vadodara, India",
    degree: "B.Tech in Electronics and Communication Engineering (Specialization in Rail Engineering)",
    cgpa: "8.53",
    graduation: "July 2027",
    coursework: ["DSA", "OOP", "Machine Learning", "DBMS", "Computer Networks", "Computer Architecture"]
  }
];

export const experience = [
  {
    title: "Project Management Intern",
    company: "Frauscher Sensor Technology",
    tagColor: "bg-green-200",
    date: "May 2026 - Present",
    location: "Mumbai, India",
    points: [
      "Built a Windows background service (Node.js, TypeScript) using chokidar to detect stable file writes and upload tender documents to Amazon S3 via resumable multipart uploads.",
      "Designed an interfacing demo of reset relays for the axle counter system for the design and hardware teams."
    ]
  },
  {
    title: "Full Stack Production Engineer (Freelance)",
    company: "Hibiscus Tech",
    tagColor: "bg-green-200",
    date: "Feb 2026 - Present",
    location: "Remote",
    points: [
      "Built the real-time leaderboard system using Redis Sorted Sets, with monthly archival snapshots into PostgreSQL.",
      "Built the platform's analysis section end-to-end, from design to production, with data visualization and player metrics.",
      "Engineered heuristic-based chess puzzle generation matched to player skill level."
    ]
  },
  {
    title: "Data Science & Machine Learning Intern",
    company: "Mumbai Metropolitan Region Development Authority (MMRDA) - DB RAIL",
    tagColor: "bg-green-200",
    date: "May 2025 - Jun 2025",
    location: "Mumbai, India",
    points: [
      "Engineered ML-based solutions to optimize rolling stock scheduling and reduce headway latency.",
      "Contributed to headway design for Mumbai Metro Line 14 at Shreyas Cinema station, predicting dwell time and headway impact."
    ]
  }
];

export const stack = [
  {
    title: "Languages",
    icon: "</>",
    color: "bg-blue-200",
    items: ["C++", "JavaScript", "TypeScript", "Python"]
  },
  {
    title: "Frontend",
    icon: "🎨",
    color: "bg-purple-300",
    items: ["React.js", "Next.js", "Redux", "HTML5", "CSS3", "Tailwind CSS", "ShadCN UI"]
  },
  {
    title: "Backend & Databases",
    icon: "🗄️",
    color: "bg-red-300",
    items: ["Node.js", "Express.js", "REST APIs", "WebSockets", "WebRTC", "JWT Auth", "Mongoose", "Prisma", "PostgreSQL", "MongoDB", "SQLite", "Redis"]
  },
  {
    title: "AI / ML & LLM Tooling",
    icon: "🧠",
    color: "bg-green-200",
    items: ["Scikit-learn", "XGBoost", "CatBoost", "Pandas", "NumPy", "SpaCy", "LangChain", "LangGraph", "RAG", "Vector Embeddings", "Gemini API"]
  },
  {
    title: "System Design & Tools",
    icon: "🛠️",
    color: "bg-yellow-200",
    items: ["Event-Driven Architecture", "Producer-Consumer", "Pub/Sub Messaging", "Git/GitHub", "Docker", "Postman", "Jupyter", "VS Code", "AWS S3", "EC2"]
  }
];

export const projects = [
  {
    title: "DRISHTI: Traffic Intelligence Platform",
    tech: ["FastAPI", "Next.js", "XGBoost"],
    link: null,
    points: [
      "Built a full-stack AI triage system for Bengaluru Traffic Police, predicting incident priority, clearance time, and deployment needs from multilingual citizen complaints.",
      "Trained an XGBoost classifier/regressor on 2,718 traffic incidents using structural features fused with multilingual sentence embeddings.",
      "Built a MultiOutputRegressor predicting 9 resource targets (constables, units, barricades, etc.), wired to a weekly retraining pipeline."
    ]
  },
  {
    title: "Secure Tender Document Ingestion Agent",
    tech: ["TypeScript", "AWS S3", "SQLite"],
    link: null,
    points: [
      "Built a Windows service that monitors document folders, validates files, and queues uploads durably via SQLite.",
      "Implemented resumable multipart S3 uploads with presigned URLs, ETag persistence, and automatic failure recovery.",
      "Added per-machine API-key authentication and structured logging."
    ]
  },
  {
    title: "Sosyo - Privacy-First Real-Time Social Networking Platform",
    tech: ["Express.js", "PostgreSQL", "Redis"],
    link: null,
    points: [
      "Built a location-aware social platform with user discovery, mutual friendships, private messaging, and presence tracking.",
      "Designed a scalable backend with Node.js, Express.js, PostgreSQL, and Redis, using JWT auth, OTP verification, and role-based access.",
      "Engineered real-time messaging architecture with typing indicators, read receipts, and Redis-backed caching."
    ]
  }
];

export const achievements = [
  {
    title: "TCS iON NQT - IT Certification",
    tech: ["Programming", "C++"],
    points: [
      "Scored 89% in Programming (C++).",
      "Ranked in the top percentile in the Cognitive Ability assessment."
    ]
  },
  {
    title: "Competitive Programming",
    tech: ["DSA", "Algorithms"],
    points: [
      "LeetCode maximum rating: 1726 (Top 15%).",
      "CodeChef rating: 1300+.",
      "Codeforces rating: 1100+."
    ]
  },
  {
    title: "Flipkart Gridathon",
    tech: ["Hackathon"],
    points: ["Selected for Round 2 among the top 1.6k teams."]
  },
  {
    title: "Wabtec Exceed 3.0",
    tech: ["Hackathon"],
    points: ["Among the top 25 teams to qualify for the Wabtec Exceed Hackathon 3.0."]
  },
  {
    title: "DBMS (NPTEL)",
    tech: ["Certification"],
    points: ["Completed under Prof. Partha Pratim Das & Prof. Samiran Chattopadhyay, IIT Kharagpur."]
  },
  {
    title: "Intro to Machine Learning (NPTEL)",
    tech: ["Certification"],
    points: ["Completed under Prof. Balaram Subramanian, IIT Madras."]
  },
  {
    title: "Junior Scientist Award",
    tech: ["Research", "Science Congress"],
    points: [
      "Awarded Junior Scientist recognition by the National Children's Science Congress, Dept. of Science and Technology.",
      "Part of the KVS National team for the JNMSEE Exhibition."
    ]
  }
];
