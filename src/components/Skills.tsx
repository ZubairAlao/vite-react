import { FaReact, FaHtml5, FaCss3Alt, FaGitAlt, FaPython, FaDatabase } from "react-icons/fa";
import { SiJavascript, SiNextdotjs, SiTypescript, SiFirebase, SiTailwindcss, SiFlask, SiMongodb } from "react-icons/si";

const skills = [
    { name: "JavaScript", icon: <SiJavascript color="#f7df1e" /> },
    { name: "React", icon: <FaReact color="#61dafb" /> },
    { name: "HTML", icon: <FaHtml5 color="#e34f26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
    { name: "Next.js", icon: <SiNextdotjs color="#000000" /> },
    { name: "TypeScript", icon: <SiTypescript color="#007acc" /> },
    { name: "Python", icon: <FaPython color="#3776ab" /> },
    { name: "Firebase", icon: <SiFirebase color="#ffca28" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss color="#38b2ac" /> },
    { name: "Flask", icon: <SiFlask color="#000000" /> },
    { name: "SQL", icon: <FaDatabase color="#f29111" /> },
    { name: "Version Control (Git)", icon: <FaGitAlt color="#f05032" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
]
const Skills = () => {
  return (
    <div className="container">
      <h2 className="h1 text-center mb-12">My Skills</h2>
      <div
        className="flex justify-center items-center ~gap-4/8 flex-wrap"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex justify-center flex-col ~gap-2/4 bg-primary dark:bg-dark-primary-dark hover:bg-accent-light dark:hover:bg-dark-accent-dark rounded-md items-center ~h-[6rem]/[10rem] ~w-[6rem]/[10rem] cursor-pointer"
          >
            <div className="~text-[2.5rem]/[6rem]">
              {skill.icon}
            </div>
            <p className="~text-sm/base text-wrap">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skills