import { Link as ScrollLink } from 'react-scroll';
import { ArrowUp } from 'lucide-react'; // Icon library for the arrow

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-6 relative">
      <div className="container mx-auto text-center">
        <p className="mb-4">&copy; {currentYear} Zubair_Coder. All rights reserved.</p>
        
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="inline-flex items-center bg-blue-500 hover:bg-blue-700 text-white justify-center font-bold rounded-full p-2 cursor-pointer absolute bottom-20 right-20 animate-bounce"
        >
          <ArrowUp className="h-8 w-8 rounded-full =" />
        </ScrollLink>
      </div>
    </footer>
  );
};

export default Footer;
