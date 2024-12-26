import LightaboutImg from '@/assets/images/about.jpg'
import DarkaboutImg from '@/assets/images/about-dark.jpg'
import { useTheme } from "./theme-provider";
import { ArrowDownRight } from 'lucide-react';
import { Button } from './ui/button';
import Skills from './Skills';
import { Element } from 'react-scroll';


const About = () => {
    const { theme } = useTheme();
  return (
    <Element name="about" className='bg-primary-light dark:bg-dark-primary min-h-screen flex flex-col justify-center items-center ~gap-10/32 ~py-20/40'>
        <div className='container md:flex justify-center items-start ~gap-6/12'>
            <div className='w-full max-w-[20rem] h-fit rounded-full  md:w-1/2 overflow-hidden'>
                <img src={theme === "dark" ? DarkaboutImg : LightaboutImg} className='hover:brightness-95 w-full h-fit cursor-pointer' alt="computer" />
            </div>

            <div className='w-full md:w-1/2'>
            <div>
                <h2 className="h1 md:-ml-24">About</h2>
                <div className="flex items-center">
                    <h2 className="h1 md:-ml-24">Me</h2>
                    <ArrowDownRight size={80}/>
                </div>
            </div>
                <p>I am a web developer with expertise in both front-end and insatiable curiosity about back-end technologies. Proficient in HTML, CSS, JavaScript, React, Next.js, and UI/UX design, converting Figma designs into responsive React applications. I approach every project with determination and a focus on delivering effective, high-quality solutions.</p>
                <Button children="Hire Me" className='~mt-6/8 rounded-2xl' />
            </div>
        </div>

        <Skills />
    </Element>  
  )
}

export default About