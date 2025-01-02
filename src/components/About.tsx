import { motion } from 'framer-motion';
import AboutImg from '@/assets/images/about.jpg';
import { ArrowDownRight } from 'lucide-react';
import { Button } from './ui/button';
import Skills from './Skills';
import { Element } from 'react-scroll';
import { Link as ScrollLink } from 'react-scroll';

const About = () => {
  return (
    <Element
      name="about"
      className="bg-primary-light dark:bg-dark-primary min-h-screen flex flex-col justify-center items-center ~gap-32/44 ~py-20/40"
    >
      <motion.div
        className="container md:flex justify-center items-start ~gap-6/12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: false }}
      >
        {/* Image First */}
        <motion.div
          className="w-full max-w-[20rem] h-fit rounded-full md:w-1/2 overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <img
            src={AboutImg}
            className="hover:brightness-95 w-full h-fit cursor-pointer"
            alt="computer"
            loading="lazy"
          />
        </motion.div>

        {/* About Me Text and Arrow */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="h1 md:-ml-24">About</h2>
            <div className="flex items-center">
              <h2 className="h1 md:-ml-24">Me</h2>
              {/* Animated Arrow */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'easeInOut',
                }}
              >
                <ArrowDownRight size={80} />
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            I am a web developer with expertise in both front-end and insatiable curiosity about back-end technologies. Proficient in HTML, CSS, JavaScript, React, Next.js, and UI/UX design, converting Figma designs into responsive React applications. I approach every project with determination and a focus on delivering effective, high-quality solutions.
          </motion.p>

          <ScrollLink
            className="cursor-pointer flex max-md:justify-center"
            to="contact-us"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <Button children="Hire Me" className="~mt-6/8 rounded-2xl px-12 py-2" />
          </ScrollLink>
        </motion.div>
      </motion.div>

      <Skills />
    </Element>
  );
};

export default About;
