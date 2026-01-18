'use client';

import { Project } from './projects';

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
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

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white max-w-3xl w-full max-h-[90vh] overflow-y-auto box p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-2xl font-bold hover:opacity-70 transition-opacity"
        >
          &times;
        </button>

        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <h2 className="text-3xl font-[family-name:var(--fira-header)] mb-2">
              {project.title}
            </h2>
            <p className="text-sm font-[family-name:var(--fira-body)] text-gray-600 mb-4">
              {formatDate(project.date)}
            </p>
            <p className="font-[family-name:var(--fira-body)] mb-4">
              {project.description}
            </p>
            <div className="flex gap-4 flex-wrap">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-[family-name:var(--fira-body)] hover:opacity-70 transition-opacity"
                >
                  GitHub
                </a>
              )}
              {project.pdfUrl && (
                <a
                  href={project.pdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-[family-name:var(--fira-body)] hover:opacity-70 transition-opacity"
                >
                  PDF
                </a>
              )}
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={project.coverPhoto}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
