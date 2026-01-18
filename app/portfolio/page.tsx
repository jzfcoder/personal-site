'use client';

import { useState } from 'react';
import AsciiBackground from "../AsciiBackground";
import { projects, Project } from './projects';
import ProjectModal from './ProjectModal';

type ProjectProps = {
  project: Project;
  onClick: () => void;
};

function formatDate(date: Date) {
  const arr = date.toLocaleDateString().split('/');
  return arr.map((arg) => {
    if (arg.length === 1) {
      return `0${arg}`;
    }
    if (arg.length === 4) {
      return `${arg[2]}${arg[3]}`;
    }
    return arg;
  }).join('.');
}

function ProjectItem({ project, onClick }: ProjectProps) {
  return (
    <div
      className='relative flex w-full max-w-2xl justify-center items-start p-4 my-3 min-w-[300px] transform transition-transform duration-300 hover:scale-105 box cursor-pointer'
      onClick={onClick}
    >
      <div className='flex-1 text-left'>
        <div className='text-xl font-[family-name:var(--fira-header)] mb-2'>
          {project.title}
        </div>
        <p className='font-[family-name:var(--fira-body)]'>
          {formatDate(project.date)} | {project.caption}
        </p>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='flex flex-col h-screen text-center items-center justify-center min-h-screen py-2 text-black'>
      <AsciiBackground />
      <div className='flex-1 flex flex-col items-center w-full p-5 md:p-20 overflow-y-auto'>
        <h1 className='text-5xl md:text-6xl font-[family-name:var(--fira-header)]'>Portfolio</h1>
        <div className='font-[family-name:var(--fira-body)]'>
          <span className='underline'><a href='/'>Return to Home</a></span>
        </div>
        <br />
        <div className='w-full flex flex-col items-center'>
          {projects.map((project) => (
            <ProjectItem
              project={project}
              key={project.title}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
