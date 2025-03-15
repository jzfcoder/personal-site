export type Project = {
  title: string,
  description: string,
  imagePath: string,
  date: Date
}

export default function Projects() {
    return [
    {
      title: 'DreamCatcher',
      description: 'sleep talking recorder',
      imagePath: 'portfolio/drone.png',
      date: new Date()
    },
    {
      title: '2024 FTC',
      description: 'multi-threading, pure pursuit, and more',
      imagePath: 'portfolio/drone.png',
      date: new Date('04/22/2024')
    },
    {
      title: 'Project Foodline',
      description: 'Camera stream for food pantry visitors',
      imagePath: 'asdf',
      date: new Date('08/28/2024')
    },
    {
      title: '2023 FTC',
      description: 'CV, ML, EKF, and more',
      imagePath: 'asdf',
      date: new Date('03/04/2023')
    },
    {
      title: 'Drone Braiding',
      description: 'lightweight approach to space manufacturing',
      imagePath: 'portfolio/drone.png',
      date: new Date('03/04/2023')
    },
    {
      title: 'AstroBall',
      description: 'FTC tournament simulator',
      imagePath: 'asdf',
      date: new Date('10/15/2022')
    },
    {
      title: '2D Light Generation',
      description: 'realtime procedural ray tracing',
      imagePath: 'asdf',
      date: new Date('05/23/2022')
    },
    {
      title: 'HandTracking',
      description: 'accessible AR for edu and training',
      imagePath: 'asdf',
      date: new Date('04/1/2022')
    },
    {
      title: 'Deskfab',
      description: 'save and load tab presets',
      imagePath: 'asdf',
      date: new Date('09/22/2020')
    },
    {
      title: 'Misinfo Project',
      description: 'ML and scraping to evaluate online articles',
      imagePath: 'asdf',
      date: new Date('03/20/2020')
    }

    ];
}