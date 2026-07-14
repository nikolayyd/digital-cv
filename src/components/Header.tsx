import { cvData } from '../data/cvData';

export const Header = () => {
  const { name, title, summary, contact } = cvData;
  console.log('Contact object:', contact);
  return (
    <header className="border-b border-slate-200 pb-8 mb-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950">
            {name}
          </h1>
          <p className="text-xl text-indigo-600 font-medium mt-1">{title}</p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-wrap gap-4 text-sm text-slate-600">
          <a
            href={`mailto:${contact.email}`}
            className="hover:text-indigo-600 transition-colors"
          >
            📧 {contact.email}
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            💻 GitHub
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-indigo-600 transition-colors"
          >
            👔 LinkedIn
          </a>
        </div>
      </div>

      <p className="mt-6 text-base leading-relaxed text-slate-600 max-w-2xl">
        {summary}
      </p>
    </header>
  );
};
