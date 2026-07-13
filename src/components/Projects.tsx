import { projectsData } from '../data/cvData';

export const Projects = () => {
  return (
    <section className="mb-8">
      <h2 className="text-2xl font-bold mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="border border-slate-200 p-5 bg-white shadow-sm flex flex-col justify-between rounded-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>

                {/* Dynamic Badge based on project type */}
                <span
                  className={`text-xs px-2 py-1 rounded-full font-medium ${
                    project.projectType === 'commercial'
                      ? 'bg-blue-100 text-blue-800'
                      : project.projectType === 'group'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-green-100 text-green-800'
                  }`}
                >
                  {project.projectType === 'commercial'
                    ? 'Work'
                    : project.projectType === 'group'
                      ? 'Group'
                      : 'Personal'}
                </span>
              </div>

              <p className="text-slate-600 text-sm mb-4">
                {project.description}
              </p>

              {project.features && project.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
                    Key Features
                  </h4>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-1 pl-1">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx}>{feature}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              {/* Tech Stack Tags */}
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Conditional Links */}
              <div className="flex gap-3 text-sm font-medium">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    className="text-indigo-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    className="text-indigo-600 hover:underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
