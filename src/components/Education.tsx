import { cvData } from '../data/cvData';

export const Education = () => {
  return (
    <section className="mb-12">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2.5">
        <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xl">
          🎓
        </span>
        Education
      </h2>

      {/* Timeline Container */}
      <div className="relative border-l-2 border-slate-200 pl-6 ml-3 space-y-10">
        {cvData.education.map((edu, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot */}
            <span className="absolute -left-[32px] top-1.5 bg-white border-2 border-indigo-600 h-3.5 w-3.5 rounded-full group-hover:bg-indigo-600 transition-colors duration-200" />

            {/* Top Section: Degree, Institution, and Dates */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                  {edu.degree}
                </h3>
                <p className="text-indigo-600 font-medium text-sm sm:text-base">
                  {edu.school}
                </p>
              </div>

              {/* Period Badge */}
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg shadow-2xs whitespace-nowrap border border-slate-200/50">
                {edu.startDate} – {edu.endDate}
              </span>
            </div>

            {/* Optional: Field of study or details if you have them in data */}
            {edu.description && (
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {edu.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};
