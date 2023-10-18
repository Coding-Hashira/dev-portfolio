type NavLink = { id: number; url: string; title: string };
type Skill = { id: number; path: string; title: string };

export const navLinks: NavLink[] = [
  { id: 1, url: "#about", title: "About" },
  { id: 2, url: "#experience", title: "Experience" },
  { id: 4, url: "#projects", title: "Projects" },
  { id: 5, url: "#contact", title: "Contact" },
];

export const skills: Skill[] = [
  {
    id: 1,
    path: "html5-plain",
    title: "HTML",
  },
  {
    id: 2,
    path: "css-plain",
    title: "CSS",
  },
  {
    id: 3,
    path: "javascript-plain",
    title: "JavaScript",
  },
  {
    id: 4,
    path: "typescript-plain",
    title: "TypeScript",
  },
  { id: 5, path: "git", title: "Git" },
  {
    id: 6,
    path: "react",
    title: "React",
  },
  {
    id: 7,
    path: "nextjs",
    title: "Next.js",
  },
  {
    id: 8,
    path: "tailwind",
    title: "TailwindCSS",
  },
  {
    id: 9,
    path: "figma",
    title: "Figma",
  },
  { id: 10, path: "three", title: "Three.js" },
  { id: 11, path: "node", title: "Node.js" },
];
