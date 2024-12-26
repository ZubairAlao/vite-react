import { ThemeProvider } from "@/components/theme-provider"
import Header from './components/head-footer/Header'
import LandingPage from "./components/LandingPage"
import About from "./components/About"
import MyPortfolio from "./components/MyPortfolio"
import Experience from "./components/Experience"
import ContactMe from "./components/ContactMe"
import Footer from "./components/head-footer/Footer"

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <LandingPage />
      <About />
      <MyPortfolio />
      <Experience />
      <ContactMe />
      <Footer />
    </ThemeProvider>
  )
}

export default App
