import { projectsData } from '../data/cvData';

export const Projects = () => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2.5">
        <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xl">
          🚀
        </span>
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project, idx) => (
          <div
            key={idx}
            className="border border-slate-200 p-6 bg-white shadow-sm flex flex-col justify-between rounded-lg"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-slate-950 tracking-tight">
                  {project.title}
                </h3>

                <span
                  className={`text-xs px-2.5 py-1 rounded-full font-semibold border ${
                    project.projectType === 'commercial'
                      ? 'bg-blue-50 text-blue-700 border-blue-100'
                      : project.projectType === 'group'
                        ? 'bg-purple-50 text-purple-700 border-purple-100'
                        : 'bg-green-50 text-green-700 border-green-100'
                  }`}
                >
                  {project.projectType === 'commercial'
                    ? 'Work'
                    : project.projectType === 'group'
                      ? 'Group'
                      : 'Personal'}
                </span>
              </div>

              {project.features && project.features.length > 0 && (
                <div className="mb-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Features
                  </h4>
                  <ul className="list-disc list-outside ml-4 text-slate-600 space-y-1.5 text-sm sm:text-base leading-relaxed pl-1">
                    {project.features.map((feature, fIdx) => (
                      <li key={fIdx} className="marker:text-indigo-500">
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map((tech, tIdx) => (
                  <span
                    key={tIdx}
                    className="text-xs bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium border border-slate-200/40"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 text-sm sm:text-base font-semibold">
                {project.githubLink && (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="text-indigo-600 hover:underline"
                  >
                    View Map
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
