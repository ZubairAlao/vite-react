import SakunaImg from "@/assets/images/sakuna.png"
import GojoImg from "@/assets/images/satoru-gojo.png"
import { useTheme } from "./theme-provider";
import HomepageSocialIcons from "./HomepageSocialIcons";
import { Element } from "react-scroll";

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <Element name="home"  className='bg-jujustu-city-background bg-center bg-cover w-full'>
      <div className="bg-opacity-90 bg-gradient-to-r from-primary to-transparent dark:from-dark-primary dark:bg-opacity-90 overflow-hidden relative">
        <div className="container min-h-screen flex justify-start items-center">
          <div className="max-w-[40rem] lg:w-1/2 relative z-30">
            <p className="h3 uppercase">Web Developer</p>
            <h1 className="h1 ~mb-4/8">Zubair Alao</h1>
            <p className="border-l-[3px] ~pl-5/8 border-accent dark:border-dark-accent">Web developer skilled in React, Next.js, and UI/UX design, creating responsive, high-quality solutions.</p>
          </div>

          <div>
            <HomepageSocialIcons />
            <img
                src={theme === "dark" ? SakunaImg : GojoImg}
                alt="Jujustu Kaisen"
                className={`absolute transition-all duration-500 ease-out -bottom-10 ~-right-20/36  ~max-w-[40rem]/[64rem]`}
                loading="lazy"
              />
          </div>

        </div>
      </div>

    </Element>
  )
}

export default LandingPage