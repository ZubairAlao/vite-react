import { motion } from 'framer-motion';
import weatherLeakImg from "@/assets/images/projects/WeatherLeak.png";
import CampusHelpDeskImg from "@/assets/images/projects/campus-helpdesk.jpg";
import MovieMazeImg from "@/assets/images/projects/MovieMaze.png";
import MillencoImg from "@/assets/images/projects/millenco.jpg";
import NaijaDeliImg from "@/assets/images/projects/naijadeli.jpg";
import EventifyImg from "@/assets/images/projects/eventify.jpg";
import { Element } from "react-scroll";

const MyPortfolio = () => {
  const projects = [
    {
      name: "Eventify",
      description: "A dashboard chart application featuring chart, dark-mode and event history.",
      technologies: ["React", "TailwindCSS", "TypeScript", "ShadCN"],
      image: EventifyImg,
      demo: "https://alpha-eventify.vercel.app/",
      github: "https://github.com/ZubairAlao/alphatwelves_frontend_assessment"
    },
    {
      name: "Naija Deli",
      description: "A project on World of Nigerian Popular Tribal Dishes.",
      technologies: ["Next.js", "Cloudinary", "MongoDB", "TailwindCSS", "TypeScript"],
      image: NaijaDeliImg,
      demo: "https://naija-deli-recipe.vercel.app/",
      github: "https://github.com/ZubairAlao/naija_deli_recipe-app.git",
    },
    {
      name: "Millenco",
      description: "A financial cooperative focused on empowering individuals through collective financial efforts.",
      technologies: ["React", "React Query", "Firebase", "TailwindCSS", "Framer Motion"],
      image: MillencoImg,
      demo: "https://millenco.netlify.app/",
      github: "https://github.com/ZubairAlao/Millenco-coop",
    },
    {
      name: "Movie Maze",
      description: "A web application to help users with information about popular movies and manage their favorite TV shows effortlessly.",
      technologies: ["React", "Firebase", "Chakra UI"],
      image: MovieMazeImg,
      demo: "https://moviemazedb.netlify.app/",
      github: "https://github.com/ZubairAlao/movie-database-app",
    },
    {
      name: "Weather Leaks",
      description: "A simple Weather App providing accurate and up-to-date weather information.",
      technologies: ["React", "React Query", "TailwindCSS"],
      image: weatherLeakImg,
      demo: "https://weatherleak.netlify.app/",
      github: "https://github.com/ZubairAlao/WeatherLeak",
    },
    {
      name: "Campus Help-Desk",
      description: "A web app for students to submit campus-related requests, managed by administrators.",
      technologies: ["HTML", "Bootstrap", "Flask"],
      image: CampusHelpDeskImg,
      demo: "https://youtu.be/JfdqHv_XJek",
      github: "https://github.com/ZubairLanre/project",
    },
  ];

  return (
    <Element name="portfolio" className="bg-primary dark:bg-dark-primary-dark ~py-20/40">
      <div className="container mx-auto px-5">
        <h1 className="h1 text-center mb-12">My Portfolio</h1>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg text-sm"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <motion.img
                src={project.image}
                alt={project.name}
                className="h-56 w-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div
                className="absolute left-0 h-full cursor-pointer bg-black bg-opacity-70 flex flex-col justify-center items-center -top-full opacity-50 group-hover:opacity-100 group-hover:top-0 transition-all duration-300 space-y-2"
              >
                <h2 className="text-xl font-bold">{project.name}</h2>
                <p className="text-white px-4 text-center">{project.description}</p>
                <div className="flex flex-wrap justify-center items-center gap-1 text-gray-300">
                  {project.technologies.map((tech, i) => (
                    <p key={i}>• {tech}</p>
                  ))}
                </div>
                <div className="flex gap-4 text-white">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-3xl bg-primary dark:bg-dark-primary-dark hover:bg-accent-light dark:hover:bg-dark-accent-dark transition-colors"
                  >
                    Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-3xl bg-primary dark:bg-dark-primary-dark hover:bg-accent-light dark:hover:bg-dark-accent-dark transition-colors"
                  >
                    GitHub
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default MyPortfolio;
