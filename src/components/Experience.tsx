import { cvData } from '../data/cvData';

export const Experience = () => {
  return (
    <section className="mb-12">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2.5">
        <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xl">
          💼
        </span>
        Work Experience
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-slate-200 pl-6 ml-3 space-y-10">
        {cvData.experience.map((job, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[32px] top-1.5 bg-white border-2 border-indigo-600 h-3.5 w-3.5 rounded-full group-hover:bg-indigo-600 transition-colors duration-200" />

            {/* Top Section: Role, Company, and Dates */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                  {job.role}
                </h3>
                <p className="text-indigo-600 font-medium text-sm sm:text-base">
                  {job.company}
                </p>
              </div>

              {/* Period Badge */}
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg shadow-2xs whitespace-nowrap border border-slate-200/50">
                {job.startDate} – {job.endDate}
              </span>
            </div>

            {/* Responsibilities List */}
            <ul className="list-disc list-outside ml-4 text-slate-600 space-y-2 text-sm sm:text-base leading-relaxed">
              {job.key_responsibilities &&
                job.key_responsibilities.map((bullet, bIdx) => (
                  <li key={bIdx} className="pl-1 marker:text-indigo-500">
                    {bullet}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
