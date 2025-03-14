import AsciiBackground from "../AsciiBackground";

type Project = {
  title: string,
  description: string,
  imagePath: string,
}

type ProjectProps = {
  project: Project
};

function Project({ project }: ProjectProps) {
  return (
    <div className='flex w-full max-w-2xl justify-center items-start p-4 my-3 min-w-[300px]'>
      <img src={project.imagePath} alt={project.title} className='w-24 h-24 object-cover mr-6' />
      <div className='flex-1 text-left'>
        <h1 className='text-xl font-[family-name:var(--fira-header)] mb-2'>{project.title}</h1>
        <p className='font-[family-name:var(--fira-body)]'>{project.description}</p>
      </div>
    </div>
  );
}

export default function Engineer() {
  const projects: Project[] = [
    {
      title: 'Drone',
      description: 'Braiding on Mars',
      imagePath: 'portfolio/drone.png',
    },
    {
      title: 'FTC',
      description: 'Braiding on Mars',
      imagePath: 'asdf',
    },
  ]
  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-white'>
      <AsciiBackground 
        cX={2}
        cY={2}
        rW={2}
        rH={1}
        fR={1}
        inverse
      />
      <div className='flex-1 flex flex-col items-center w-full p-5 md:p-20'>
        <h1 className='text-5xl md:text-6xl font-[family-name:var(--fira-header)]'>Engineering Portfolio</h1>
        <br />
        <div className='w-full flex flex-col items-center'>
          {projects.map((project) => {
            return (
              <Project project={project} key={project.title} />
            );
          })}
        </div>
        <div className='font-[family-name:var(--fira-body)]'>
            <span className='underline'><a href='/'>Return to Home</a></span>
        </div>
      </div>
    </div>
  );
}