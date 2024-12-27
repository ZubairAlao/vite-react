import { animateScroll as scroll } from 'react-scroll';
import { ArrowUp } from 'lucide-react'; // Icon library for the arrow

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <footer className="bg-gray-800 text-white py-6 relative">
      <div className="container mx-auto text-center">
        <p>&copy; {currentYear} Zubair_Coder. All rights reserved.</p>
        
        <div
        onClick={scrollToTop}
          className="inline-flex items-center bg-dark-foreground dark:bg-foreground bg-opacity-40 dark:bg-opacity-40 text-white justify-center font-bold rounded-full p-2 cursor-pointer absolute bottom-20 right-20 animate-bounce"
        >
          <ArrowUp className="h-8 w-8 rounded-full =" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
