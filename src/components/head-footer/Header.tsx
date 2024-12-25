import { useState, useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link as ScrollLink , Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { headerLinks } from "./header-links";
import { Link as RouterLink } from 'react-router-dom';
import { ArrowDown, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import myAvatar from "@/assets/images/zubair-avatar-one.webp"
import { Button } from "../ui/button";
import { motion } from "framer-motion";

interface HeaderLink {
    label: string;
    link: string;
  }

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { theme, setTheme } = useTheme();

    const handleToggleButton = () => {
        setToggle(!toggle);
    };
    // close the menu if click outside the box
    const closeMenu = () => {
        setToggle(false);
    };

    /*-------------------------------------------------------------------- */
    // clicking outside the mobile menu box will close the mobile menu
    const menuRef = useRef<HTMLDivElement | null>(null);
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent): void => {
          if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            closeMenu();
          }
        };
        // Add event listener to detect outside clicks
        document.addEventListener("mousedown", handleClickOutside);
    
        // Clean up the event listener on component unmount
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
      }, []);

      /*-------------------------------------------------------------------- */
      // Manage body scroll lock on toggle
  useEffect(() => {
    if (toggle) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [toggle]);

  // Handle screen resizing to reset scroll on desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && toggle) {
        // If on desktop view, reset toggle and remove scroll lock
        setToggle(false);
        enableBodyScroll(document.body);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [toggle]);

  /* ------------------------------------------------------------------ */
  // Change 50 to the scroll position where you want the header to change
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
        className={`fixed top-0 z-50 w-full text-white transition-all duration-500 py-4 max-2xl:px-4  ${
            isScrolled
                ? "bg-blue-primary shadow-lg"
                : "bg-transparent"
        }   `}
    >
        <div className="container border rounded-2xl py-1 flex justify-between items-center">
        <a
            href="/"
            className="cursor-pointer bg-white p-[0.18rem] rounded-full"
            aria-label="Home"
            title="Go to Home"
          >
            <img
              src={myAvatar}
              alt="Zubair Porfolio"
              className="h-fit ~w-[2rem]/[3.75rem] rounded-full"
              loading="lazy"
            />
          </a>

            <nav className="~text-base/lg">
                <ul className="flex justify-center items-center ~gap-4/6">
                    {headerLinks.map((link) => (
                        <li
                            key={link.label}
                        >
                            <ScrollLink className="cursor-pointer" to={link.link}>{link.label}</ScrollLink>
                        </li>
                    ))}
                    <li>
                      <Button className="rounded-xl">
                        <span>Download CV</span>
                        <ArrowDown />
                      </Button>
                    </li>
                    <li>
                    <Button
                      size="icon"
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    >
                      {theme === "dark" ? (
                        <motion.div
                          initial={{ rotate: 90, scale: 0 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Sun className="h-[1.2rem] w-[1.2rem]" />
                        </motion.div>
                      ) : (
                        <motion.div
                          initial={{ rotate: -90, scale: 0 }}
                          animate={{ rotate: 0, scale: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <Moon className="h-[1.2rem] w-[1.2rem]" />
                        </motion.div>
                      )}
                      <span className="sr-only">Toggle theme</span>
                    </Button>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header