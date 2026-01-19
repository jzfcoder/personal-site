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
      className='relative flex w-full max-w-2xl items-center p-4 min-w-[300px] transition-colors duration-200 hover:bg-gray-50 cursor-pointer border-b border-gray-200 last:border-b-0'
      onClick={onClick}
    >
      <div className='flex-1 text-left'>
        <div className='text-xl mb-1'>
          {project.title}
        </div>
        <p className='text-sm text-gray-600'>
          {formatDate(project.date)} | {project.caption}
          {project.githubUrl && (
            <>
              {' | '}
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:opacity-70"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            </>
          )}
        </p>
      </div>
      {project.coverPhoto && (
        <img
          src={project.coverPhoto}
          alt={project.title}
          className='w-16 h-16 object-cover ml-4 flex-shrink-0'
        />
      )}
    </div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className='min-h-screen text-center text-black overflow-y-auto'>
      <AsciiBackground />
      <div className='relative z-10 flex flex-col items-center min-h-screen'>
        <div className='w-full max-w-2xl bg-white min-h-screen p-5 md:p-20'>
          <h1 className='text-5xl'>Portfolio</h1>
          <div>
            <span className='underline'><a href='/'>Return to Home</a></span>
          </div>
          <br />
          <div className='w-full'>
            {projects.map((project) => (
              <ProjectItem
                project={project}
                key={project.title}
                onClick={() => setSelectedProject(project)}
              />
            ))}
          </div>
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
