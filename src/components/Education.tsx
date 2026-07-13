import { cvData } from '../data/cvData';

export const Education = () => {
  return (
    <section className="mb-12">
      {/* Заглавие на секцията */}
      <h2 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2.5">
        <span className="p-1.5 bg-indigo-50 text-indigo-600 rounded-lg text-xl">
          💼
        </span>
        Професионален Опит
      </h2>

      {/* Таймлайн контейнер */}
      <div className="relative border-l-2 border-slate-200 pl-6 ml-3 space-y-10">
        {cvData.experience.map((job, idx) => (
          <div key={idx} className="relative group">
            {/* Точка на таймлайна (променя цвета си леко, когато посочиш позицията) */}
            <span className="absolute -left-[32px] top-1.5 bg-white border-2 border-indigo-600 h-3.5 w-3.5 rounded-full group-hover:bg-indigo-600 transition-colors duration-200" />

            {/* Горна част: Позиция, Компания и Дати */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between items-start gap-2 mb-3">
              <div>
                <h3 className="text-lg font-bold text-slate-950 tracking-tight group-hover:text-indigo-600 transition-colors duration-200">
                  {job.role}
                </h3>
                <p className="text-indigo-600 font-medium text-sm sm:text-base">
                  {job.company}
                </p>
              </div>

              {/* Период (Петичка/Badge) */}
              <span className="text-xs font-semibold px-3 py-1.5 bg-slate-100 text-slate-600 rounded-lg shadow-2xs whitespace-nowrap border border-slate-200/50">
                {job.startDate} – {job.endDate}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
