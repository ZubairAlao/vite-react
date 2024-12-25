import SakunaImg from "@/assets/images/sakuna.png"
import SakunaTwoImg from "@/assets/images/sakuna-two.png"
import GojoImg from "@/assets/images/satoru-gojo.png"
import { useTheme } from "./theme-provider";

const LandingPage = () => {
  const { theme } = useTheme();

  return (
    <div className='bg-jujustu-city-background bg-center bg-cover w-full'>
      <div className="bg-opacity-85 bg-primary dark:bg-dark-primary dark:bg-opacity-85 overflow-hidden relative">
        <div className="container min-h-screen flex justify-start items-center">
          <div className="max-w-[38rem] w-1/2">
            <p className="h3 uppercase">Web Developer</p>
            <h1 className="h1 ~mb-4/8">Zubair Alao</h1>
            <p className="border-l-[3px] ~pl-5/8 border-accent dark:border-dark-accent">Web developer skilled in React, Next.js, and UI/UX design, creating responsive, high-quality solutions.</p>
          </div>

          <div>
            <img
                src={theme === "dark" ? SakunaImg : GojoImg}
                alt="Jujustu Kaisen"
                className={`${theme === "dark" ? "transform scale-x-[-1]" : "~max-w-[20rem]/[90rem]"} absolute top-0 -right-80 ~max-w-[20rem]/[80rem]`}
                loading="lazy"
              />
          </div>

        </div>
      </div>

    </div>
  )
}

export default LandingPage