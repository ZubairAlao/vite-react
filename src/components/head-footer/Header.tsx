import { useState, useEffect, useRef } from "react";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { headerLinks } from "./header-links";

interface HeaderLink {
    label: string;
    link: string;
  }

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        className={`fixed top-0 z-50 w-full text-white shadow-lg transition-all duration-500 max-lg:py-4 ${
            isScrolled
                ? "bg-blue-primary py-4"
                : "bg-transparent py-8"
        }   `}
    >
        <div className="container">
            <Link to="/">Logo</Link>

            <nav>
                <ul>
                    {headerLinks.map((link) => (
                        <li
                            key={link.label}
                        >
                            <Link to={link.link}>{link.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default Header