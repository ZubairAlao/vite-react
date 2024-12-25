import { ThemeProvider } from "@/components/theme-provider"
import Header from './components/head-footer/Header'
import LandingPage from "./components/LandingPage"

function App() {

  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Header />
      <LandingPage />
    </ThemeProvider>
  )
}

export default App
