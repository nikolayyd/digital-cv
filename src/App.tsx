import { Header } from './components/Header';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { Projects }from './components/Projects';
import Education  from './components/Education';
export const App = () => {
  return (
    <div className="min-h-screen bg-slate-50/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="bg-white border border-slate-200 rounded-2xl shadow-sm p-6 md:p-10">
          <Header />
          <Education />
          <Experience />
          <Projects />
          <Skills />
        </div>
      </div>
    </div>
  );
}
