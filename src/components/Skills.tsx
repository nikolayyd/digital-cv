import { cvData } from '../data/cvData';

export const Skills = () => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
        🛠️ Skills & Tech Stack
      </h2>
      <div className="space-y-4">
        {cvData.skills.map((skillGroup, idx) => (
          <div
            key={idx}
            className="bg-slate-50 border border-slate-100 rounded-xl p-4"
          >
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              {skillGroup.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <span
                  key={sIdx}
                  className="text-sm bg-white border border-slate-200 text-slate-700 px-3 py-1 rounded-lg font-medium shadow-sm hover:border-indigo-400 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
