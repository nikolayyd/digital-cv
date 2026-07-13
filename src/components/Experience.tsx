import { cvData } from '../data/cvData';

export default function Experience() {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
        💼 Work Experience
      </h2>
      <div className="relative border-l-2 border-slate-200 pl-6 ml-2 space-y-8">
        {cvData.experience.map((job, idx) => (
          <div key={idx} className="relative">
            <span className="absolute -left-[31px] top-1.5 bg-indigo-600 h-3 w-3 rounded-full ring-4 ring-white" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
              <h3 className="text-lg font-bold text-slate-900">
                {job.role}{' '}
                <span className="text-indigo-600 font-medium">
                  @ {job.company}
                </span>
              </h3>
              <span className="text-sm font-semibold px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md shadow-sm">
                {job.startDate} – {job.endDate}
              </span>
            </div>

            <ul className="list-disc list-outside ml-4 text-slate-600 space-y-1.5 text-sm md:text-base">
              {job.key_responsibilities && job.key_responsibilities.map(
                (bullet, bIdx) => (
                  <li key={bIdx} className="pl-1">
                    {bullet}
                  </li>
                ),
              )}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
