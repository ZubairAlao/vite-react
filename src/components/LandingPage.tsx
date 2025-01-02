import { motion } from 'framer-motion';
import SakunaImg from "@/assets/images/sakuna.png";
import GojoImg from "@/assets/images/satoru-gojo.png";
import { useTheme } from "./theme-provider";
import HomepageSocialIcons from "./HomepageSocialIcons";
import { Element } from "react-scroll";

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <Element name="home" className="bg-jujustu-city-background bg-center bg-cover w-full">
      <div className="bg-opacity-95 max-md:bg-gradient-to-b bg-gradient-to-r from-primary to-transparent dark:from-dark-primary dark:bg-opacity-90 overflow-hidden relative">
        <div className="container max-md:min-h-screen md:~py-40/60 lg:min-h-screen lg:py-0 flex justify-start items-center">
          <div className="max-w-[40rem] md:w-[45%] relative z-30">
            {/* Animate Text */}
            <motion.p 
              className="h3 uppercase" 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
            >
              Web Developer
            </motion.p>
            
            <motion.h1 
              className="h1 ~mb-4/8" 
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Zubair Alao
            </motion.h1>
            
            <motion.p 
              className="border-l-[3px] ~pl-5/8 border-accent dark:border-dark-accent text-black bg-white bg-opacity-50  dark:text-white dark:bg-black dark:bg-opacity-50 p-3 rounded-md"
              initial={{ opacity: 0, y: -50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1, delay: 0.4 }}
            >
              Web developer skilled in React, Next.js, and UI/UX design, creating responsive, high-quality solutions.
            </motion.p>
          </div>

          <div>
            <HomepageSocialIcons />
            
            {/* Animate Image with Movement Effect */}
            <motion.img
              src={theme === "dark" ? SakunaImg : GojoImg}
              alt="Jujutsu Kaisen"
              className={`absolute transition-all duration-500 ease-out max-md:right-0 -bottom-2 ${theme === "dark" ? "right-0 max-md:max-w-[20rem] lg:max-w-[44rem] max-w-[32rem] scale-x-[-1]" : "~-right-32/36 max-md:max-w-[32rem] max-w-[52rem]"}`}
              loading="lazy"
              initial={{ opacity: 0, scale: 0.8, y: 100 }}
              animate={{
                opacity: 1, // Animate opacity
                scale: 1, // Keep scale at 1
                y: [0, 5, 0], // Moves up and down
                rotate: [0, 2, 0], // Slight rotation
              }}
              transition={{
                duration: 1.2, // Smooth animation
                delay: 0.6, // Delay before animation starts
                repeat: Infinity, // Loop the animation
                ease: "easeInOut", // Smooth easing for the movement
                times: [0, 0.5, 1], // Smooth movement timing
              }}
            />
          </div>
        </div>
      </div>
    </Element>
  );
};

export default LandingPage;
