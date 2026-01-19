export type Project = {
  title: string;
  date: Date;
  coverPhoto?: string;  // Optional cover photo
  description: string;  // Full description shown in modal
  caption: string;      // Short caption shown in list
  githubUrl?: string;   // Optional GitHub link
  pdfUrl?: string;      // Optional PDF link
};

export const projects: Project[] = [
  {
    title: 'Flashback (HackMIT 2025)',
    date: new Date('09/14/2025'),
    caption: 'privacy-first memory capture for smart glasses',
    description: `A privacy-first social platform that captures memories through smart glasses, prioritizing authentic connections over traditional social media scrolling.

• Authentication and user authorization systems
• Video upload and memory storage pipeline
• Vector embedding system for semantic search
• File explorer and modal UI components

Tech Stack: Next.js, React, Supabase, GCP, Modal, Vector Embeddings`,
    githubUrl: 'https://github.com/sohamd22/flashback',
    pdfUrl: undefined,
  },
  {
    title: 'Dead Internet Simulator',
    date: new Date('06/17/2025'),
    caption: 'autonomous agents in a simulated social network',
    description: `A simulation where autonomous agents post, comment, and vote in a private Reddit-like environment. Agents develop evolving memory as others respond to their content, revealing emergent social dynamics.

• OpenAI proxy and agent system
• Simulation runner infrastructure
• Response parsing

Built in 6 hours at YC AI Sus 2025.

Tech Stack: TypeScript, Next.js, Tailwind CSS`,
    githubUrl: 'https://github.com/andrewcyuan/dead-internet-theory',
    pdfUrl: undefined,
  },
  {
    title: 'DreamCatcher',
    date: new Date('01/01/2025'),
    caption: 'sleep talking recorder',
    description: 'A sleep talking recorder app that captures and analyzes your nocturnal conversations.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: '2024 First Tech Challenge',
    date: new Date('09/05/2024'),
    caption: 'multi-threading, pure pursuit, and more',
    description: `The project emphasized the software design process of brainstorming, simulating, testing, and iterating throughout the season. Notable technical achievements include:

• Development of a physically-accurate differential gear simulation
• Creation of Pure Pursuit and airplane trajectory simulations
• Implementation of a custom multithreading system for optimized sensor polling
• Refinement of lookahead point-based Pure Pursuit path following for curved trajectory planning

1st place at NorCal championships; 2nd place Software Control Award at World Championships.`,
    githubUrl: undefined,
    pdfUrl: '/portfolio/pdfs/EngineeringPortfolioExcerpt-1.pdf',
  },
  {
    title: 'Project FoodLine',
    date: new Date('09/05/2024'),
    caption: 'camera stream for food pantry visitors',
    description: `Worked to improve public food pantry experience (think Little Free Library but for food) by informing visitors on pantry status. After installing a camera, created a website that interfaced with the camera, so frequent users could check the pantry before making a trip.`,
    githubUrl: 'https://github.com/jzfcoder/2022-24-Pif-Project',
    pdfUrl: undefined,
  },
  {
    title: '2023 First Tech Challenge',
    date: new Date('09/05/2024'),
    caption: 'CV, ML, EKF, and more',
    description: `Three major technical contributions:

1. Implemented an Extended Kalman Filter to fuse inputs from 5 different localization sensors, which has been used by the team for 3 seasons
2. Enhanced performance through asynchronous finite state machines in primary control loops
3. Led development of a custom OpenCV pipeline integrated with TensorFlow classification to identify, track, and align to game elements`,
    githubUrl: undefined,
    pdfUrl: '/portfolio/pdfs/EngineeringPortfolioExcerpt.pdf',
  },
  {
    title: 'Drone Braiding',
    date: new Date('09/03/2024'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'lightweight approach to space manufacturing',
    description: `A proof-of-concept demonstrating multiple coordinated drones manufacturing cables and structures in space environments. The system aims to reduce payload size with a flexible manufacturing method, inspired by NASA's Martian Ingenuity drone.

Technical approach:
• Single fleet controller managing trajectory planning
• Individual device controllers for each drone
• Visual Simultaneous Localization and Mapping (VSLAM) for position tracking

Prototype demonstrated three drones braiding string together, showing potential for creating cables, nets, and enclosures from standard cable.`,
    githubUrl: undefined,
    pdfUrl: '/portfolio/pdfs/h96Journal.pdf',
  },
  {
    title: 'AstroBall',
    date: new Date('09/03/2024'),
    coverPhoto: '/portfolio/astroball.png',
    caption: 'FTC tournament simulator',
    description: `A full-stack web application enabling end-to-end functionality. The system integrated public APIs to gather team statistics through data scraping and processing, allowing users to simulate tournaments.

Tech Stack: PostgreSQL, Node.js, Express.js, React

Over 3000 unique visits, leading to over $100 in donations to the team.`,
    githubUrl: 'https://github.com/jzfcoder/FTCScoreCounter',
    pdfUrl: undefined,
  },
  {
    title: '2D Procedural Light Generation',
    date: new Date('08/31/2024'),
    coverPhoto: '/portfolio/lightgen.png',
    caption: 'realtime procedural ray tracing',
    description: `AP Computer Science class final project. Generates 2D point and ray light ASCII simulations at any resolution in either realtime or single frame renders.

Features:
• Terminal-based interface
• Customizable light and map parameters
• User-created 2D map support
• Ray tracing using algebraic collision detection (tracks rays as lines and calculates collisions using basic algebra)

Tech Stack: Java`,
    githubUrl: 'https://github.com/jzfcoder/Light-Simulation',
    pdfUrl: '/portfolio/pdfs/project-Readme.pdf',
  },
  {
    title: 'HandTracking',
    date: new Date('08/31/2024'),
    coverPhoto: '/portfolio/handtracking.png',
    caption: 'accessible AR for edu and training',
    description: `A Unity-based mobile application addressing gaps in affordable professional training. Traditional training programs for industrial labor and auto mechanics can be prohibitively expensive ($1,000 to $20,000).

This solution employs augmented reality with hand-tracking capabilities:
• Uses NatML to track hand landmarks before being interpreted by a custom algorithm to identify hand pose
• Enables interactive, equipment-free training accessible via mobile devices
• Emerged from pandemic-era unemployment challenges

Tech Stack: Unity, NatML, Mobile AR`,
    githubUrl: 'https://github.com/jzfcoder/HandTracking',
    pdfUrl: '/portfolio/pdfs/F16.Notebook.pdf',
  },
  {
    title: 'Deskfab',
    date: new Date('08/31/2024'),
    coverPhoto: '/portfolio/deskfab.webp',
    caption: 'save and load tab presets',
    description: `A short HTML/JS Chrome extension project using Google Cloud Storage for saving and opening lists of tabs. Allows users to save and load collections of browser tabs, leveraging cloud storage for persistence across sessions.

Tech Stack: HTML, JavaScript, Google Cloud Storage

Note: No longer available on Chrome Web Store due to policy changes.`,
    githubUrl: 'https://github.com/jzfcoder/Deskfab',
    pdfUrl: undefined,
  },
  {
    title: 'Misinfo Project',
    date: new Date('08/30/2024'),
    coverPhoto: '/portfolio/misinfo.png',
    caption: 'ML and scraping to evaluate online articles',
    description: `2020 Synopsys Science Fair entry addressing online misinformation through multiple analytical approaches:

• Sentiment analysis of headlines
• Political bias detection (sourced from AllSides.com)
• Related article recommendations to broaden reader perspective
• Coverage reporting showing which outlets report on specific issues

Tech Stack: Flask backend, HTML/CSS frontend, database queries, NLP API integration`,
    githubUrl: 'https://github.com/jzfcoder/MisinformationProject',
    pdfUrl: '/portfolio/pdfs/G69.Notebook.pdf',
  },
];
