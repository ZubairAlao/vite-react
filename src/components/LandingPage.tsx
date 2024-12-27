import SakunaImg from "@/assets/images/sakuna.png"
import GojoImg from "@/assets/images/satoru-gojo.png"
import { useTheme } from "./theme-provider";
import HomepageSocialIcons from "./HomepageSocialIcons";
import { Element } from "react-scroll";

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <Element name="home"  className='bg-jujustu-city-background bg-center bg-cover w-full'>
      <div className="bg-opacity-95 bg-gradient-to-r from-primary to-transparent dark:from-dark-primary dark:bg-opacity-90 overflow-hidden relative">
        <div className="container max-lg:~py-40/60 lg:min-h-screen flex justify-start items-center">
          <div className="max-w-[40rem] md:w-[45%] relative z-30">
            <p className="h3 uppercase">Web Developer</p>
            <h1 className="h1 ~mb-4/8">Zubair Alao</h1>
            <p className="border-l-[3px] ~pl-5/8 border-accent dark:border-dark-accent">Web developer skilled in React, Next.js, and UI/UX design, creating responsive, high-quality solutions.</p>
          </div>

          <div>
            <HomepageSocialIcons />
            <img
                src={theme === "dark" ? SakunaImg : GojoImg}
                alt="Jujustu Kaisen"
                className={`absolute transition-all duration-500 ease-out max-md:right-0 -bottom-0 ${theme === "dark" ? "right-0 max-md:max-w-[12rem] lg:max-w-[44rem]  max-w-[32rem] scale-x-[-1]" : "~-right-20/36 max-md:max-w-[12rem] max-w-[52rem]"}  `}
                loading="lazy"
              />
          </div>

        </div>
      </div>

    </Element>
  )
}

export default LandingPage