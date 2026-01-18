export type Project = {
  title: string;
  date: Date;
  coverPhoto: string;
  description: string;  // Full description shown in modal
  caption: string;      // Short caption shown in list
  githubUrl?: string;   // Optional GitHub link
  pdfUrl?: string;      // Optional PDF link
};

export const projects: Project[] = [
  {
    title: 'DreamCatcher',
    date: new Date('01/01/2025'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'sleep talking recorder',
    description: 'A sleep talking recorder app that captures and analyzes your nocturnal conversations.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: '2024 FTC',
    date: new Date('04/22/2024'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'multi-threading, pure pursuit, and more',
    description: 'Advanced robotics control systems featuring multi-threading, pure pursuit path following, and autonomous navigation.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: 'Project Foodline',
    date: new Date('08/28/2024'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'Camera stream for food pantry visitors',
    description: 'A camera streaming system designed to help food pantry visitors check wait times and availability.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: '2023 FTC',
    date: new Date('03/04/2023'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'CV, ML, EKF, and more',
    description: 'Robotics project featuring computer vision, machine learning, Extended Kalman Filter for localization, and advanced autonomous capabilities.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: 'Drone Braiding',
    date: new Date('03/04/2023'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'lightweight approach to space manufacturing',
    description: 'Research project exploring drone-based braiding techniques for lightweight space manufacturing applications.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: 'AstroBall',
    date: new Date('10/15/2022'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'FTC tournament simulator',
    description: 'A tournament simulator for FIRST Tech Challenge competitions, helping teams strategize and predict match outcomes.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: '2D Light Generation',
    date: new Date('05/23/2022'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'realtime procedural ray tracing',
    description: 'Real-time procedural ray tracing engine for 2D light simulation and generation.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: 'HandTracking',
    date: new Date('04/01/2022'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'accessible AR for edu and training',
    description: 'Accessible augmented reality application using hand tracking for educational and training purposes.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: 'Deskfab',
    date: new Date('09/22/2020'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'save and load tab presets',
    description: 'Browser extension that allows users to save and load tab presets for different workflows.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
  {
    title: 'Misinfo Project',
    date: new Date('03/20/2020'),
    coverPhoto: '/portfolio/drone.png',
    caption: 'ML and scraping to evaluate online articles',
    description: 'Machine learning project that scrapes and evaluates online articles for misinformation detection.',
    githubUrl: 'https://github.com/flint',
    pdfUrl: undefined,
  },
];
