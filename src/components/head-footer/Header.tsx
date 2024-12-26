import { useState, useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link as ScrollLink , Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { headerLinks } from "./header-links";
import { Link as RouterLink } from 'react-router-dom';
import { ArrowDown, Book, BookAIcon, Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import myAvatar from "@/assets/images/zubair-avatar-one.webp"
import myAvatarTwo from "@/assets/images/zubair-avatar-two.webp"
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { MenuIcon } from "lucide-react";
import MobileMenu from "./MobileMenu";

export const CancelIcon = ({ size = 24, color = "black" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

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
        className={`fixed top-0 z-50 w-full text-dark-foreground transition-all duration-500 py-4 max-lg:px-0 max-2xl:px-4`}
    >
        <div className={`container rounded-2xl py-1 flex justify-between items-center ${
            isScrolled
                ? "bg-primary dark:bg-dark-primary-dark shadow-lg"
                : "bg-transparent"
        }`}>
        <a
            href="/"
            className="cursor-pointer bg-white p-[0.18rem] rounded-full"
            aria-label="Home"
            title="Go to Home"
          >
            <img
              src={myAvatarTwo}
              alt="Zubair Porfolio"
              className="h-fit ~w-[2rem]/[3.75rem] rounded-full"
              loading="lazy"
            />
          </a>

            <div className="flex justify-center items-center ~gap-2/4">
              <nav className="~text-base/lg">
                  <ul className="flex items-center ~gap-4/6 max-lg:hidden">
                      {headerLinks.map((link) => (
                          <li
                              key={link.label}
                          >
                            <ScrollLink 
                              className="cursor-pointer" 
                              to={link.link}
                              activeClass="active" 
                              spy={true} 
                              smooth={true} 
                              offset={0} 
                              duration={500} 
                            >
                              {link.label}
                            </ScrollLink>
                          </li>
                      ))}
                  </ul>
              </nav>

              <MobileMenu menuRef={menuRef} toggle={toggle} />

              <div className="flex justify-center items-center ~gap-2/4">
              <a href="/zubair_alao_cv.docx" download="zubair_alao_cv.docx">
                <Button className="rounded-xl">
                  <div className="flex items-center gap-2"><span className="max-lg:hidden">Download</span><Book className="lg:hidden" />CV</div>
                  <ArrowDown />
                </Button>
              </a>
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

                {/* toggle button */}
                  {toggle ? (
                  <button
                    aria-label="Toggle navigation menu"
                    className="relative z-30 cursor-pointer object-contain"
                    onClick={handleToggleButton}
                  >
                    <CancelIcon size={32} color="white" />
                  </button>
                ) : (
                  <button
                    aria-label="Toggle navigation menu"
                    className="relative z-30 cursor-pointer object-contain text-white lg:hidden"
                    onClick={handleToggleButton}
                  >
                    <MenuIcon className="h-fit w-[32px]" />
                  </button>
                )}
              </div>
            </div>
        </div>
    </header>
  )
}

export default Header