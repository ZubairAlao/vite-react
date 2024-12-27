import { headerLinks } from "./header-links";
import { Link as ScrollLink } from 'react-scroll';

interface MobileMenuProps {
    toggle: boolean;
    menuRef: React.RefObject<HTMLDivElement>;
    handleToggleButton: () => void; 
    }

    const MobileMenu: React.FC<MobileMenuProps> = ({ toggle, menuRef, handleToggleButton }) => {
  return (
    <nav ref={menuRef} className={`w-full ~text-lg/2xl md:w-[70%] absolute top-[70px] md:top-[74px] lg:hidden right-0 z-30 flex h-screen transform flex-col p-6 transition-all duration-500 ease-in-out ${toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-50"} bg-primary-light dark:bg-dark-primary `}>
        <ul className="space-y-6">
        {headerLinks.map((link) => (
            <li
                className=""
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
                    onClick={handleToggleButton}
                >
                        {link.label}
                </ScrollLink>
            </li>
        ))}
        </ul>
    </nav>
  )
}

export default MobileMenu