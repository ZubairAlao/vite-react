import About from "@/components/About"
import ContactMe from "@/components/ContactMe"
import Experience from "@/components/Experience"
import LandingPage from "@/components/LandingPage"
import MyPortfolio from "@/components/MyPortfolio"

const HomePage = () => {
  return (
    <>
      <LandingPage />
      <About />
      <MyPortfolio />
      <Experience />
      <ContactMe />

    </>
  )
}

export default HomePage