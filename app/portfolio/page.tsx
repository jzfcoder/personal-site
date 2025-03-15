import AsciiBackground from "../AsciiBackground";
import Projects from './Projects';
import { Project } from "./Projects";

type ProjectProps = {
  project: Project
};

function formatDate(date: Date) {
  let arr = date.toLocaleDateString().split('/')
  return arr.map((arg) => {
    if (arg.length === 1) {
      return `0${arg}`;
    }
    if (arg.length === 4) {
      return `${arg[2]}${arg[3]}`;
    }
    return arg;
  }).join('.')
}

function ProjectItem({ project }: ProjectProps) {
  return (
    <div className='relative flex w-full max-w-2xl justify-center items-start p-4 my-3 min-w-[300px] transform transition-transform duration-300 hover:scale-105 box cursor-pointer'>
      {/* <img src={project.imagePath} alt={project.title} className='w-24 h-24 object-cover mr-6 mt-2' /> */}
      <div className='flex-1 text-left'>
        <div className='text-xl font-[family-name:var(--fira-header)] mb-2'>
          {project.title}
        </div>
        <p className='font-[family-name:var(--fira-body)]'>
          {formatDate(project.date)}
          {} | {project.description}
        </p>
      </div>
    </div>
  );
}

export default function Engineer() {
  const projects: Project[] = Projects();

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
      <div className='flex-1 flex flex-col items-center w-full p-5 md:p-20 overflow-y-auto'>
        <h1 className='text-5xl md:text-6xl font-[family-name:var(--fira-header)]'>Portfolio</h1>
        <div className='font-[family-name:var(--fira-body)]'>
          <span className='underline'><a href='/'>Return to Home</a></span>
        </div>
        <br />
        <div className='w-full flex flex-col items-center'>
          {projects.map((project) => {
            return (
              <ProjectItem project={project} key={project.title} />
            );
          })}
        </div>
      </div>
    </div>
  );
}