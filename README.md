# Modern Digital CV / Portfolio

A minimalist, high-performance digital CV built using **React**, **TypeScript**, and **Vite**, styled with **Tailwind CSS**. Designed to be fast, fully responsive, and typed safely from the ground up.

## 🚀 Live Demo

You can view the live site here: **[https://nikolayyd.github.io/digital-cv/]**

---

## 🛠️ Tech Stack & Architecture

- **Framework:** React 19 + Vite
- **Language:** TypeScript (Strictly typed data structures)
- **Styling:** Tailwind CSS v4
- **Deployment:** GitHub Pages (Automated via the `gh-pages` pipeline)

### Data-Driven Design

The project separates application logic and layout from the actual resume content. All portfolio information (Work Experience, Skills, Education, Projects) is managed via a single strongly-typed data object located in `src/data/cvData.ts`. This makes updating the CV as simple as editing a static object.

---

## 📁 Project Structure

```text
src/
├── types/
│   └── cv.ts          # Strict TS interfaces for CV entities (Experiences, Projects, Skills)
├── data/
│   └── cvData.ts      # Main data engine containing resume content
├── components/
│   ├── Header.tsx     # Profile summary and dynamic contact links
│   ├── Experience.tsx # Vertical chronological timeline of professional history
│   ├── Projects.tsx   # Categorized showcase cards (Work, Personal, Group) with feature tags
│   └── Skills.tsx     # Categorized pill layout for tech stack visualization
├── App.tsx            # Main layout layout orchestration
└── main.tsx           # Application root entry
```
