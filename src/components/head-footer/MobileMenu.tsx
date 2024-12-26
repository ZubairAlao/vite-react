import { headerLinks } from "./header-links";
import { Link as ScrollLink , Button as ScrollButton, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
interface MobileMenuProps {
    toggle: boolean;
    menuRef: any;
    }

    const MobileMenu: React.FC<MobileMenuProps> = ({ toggle, menuRef }) => {
  return (
    <nav ref={menuRef} className={`w-full md:w-[70%] absolute top-[81px] lg:hidden right-0 z-30 flex h-screen transform flex-col p-6 transition-all duration-500 ease-in-out ${toggle ? "translate-x-0 opacity-100" : "translate-x-full opacity-50"} bg-secondary dark:bg-dark-secondary `}>
        <ul className="space-y-6">
        {headerLinks.map((link) => (
            <li
                className=""
                key={link.label}
            >
                <ScrollLink className="cursor-pointer" to={link.link}>{link.label}</ScrollLink>
            </li>
        ))}
        </ul>
    </nav>
  )
}

export default MobileMenu