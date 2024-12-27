import { Outlet } from "react-router-dom"
import Header from "./head-footer/Header"
import Footer from "./head-footer/Footer"


const Layout = () => {
  return (
    <div>
        <Header />
        <main>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout