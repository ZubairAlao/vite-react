import { MdEmail } from "react-icons/md";
import { FaTwitter, FaWhatsapp, FaLinkedin, FaGithubAlt } from "react-icons/fa";

const HomepageSocialIcons = () => {
  const socialLinks = [
    {
      href: "mailto:alaozubair@gmail.com",
      icon: <MdEmail className="w-8 h-8 text-red-500" />,
      label: "Email",
    },
    {
      href: "https://twitter.com/zubair_coder",
      icon: <FaTwitter className="w-8 h-8 text-blue-400" />,
      label: "Twitter",
    },
    {
      href: "https://wa.me/+2348130030894",
      icon: <FaWhatsapp className="w-8 h-8 text-green-500" />,
      label: "WhatsApp",
    },
    {
      href: "https://linkedin.com/in/zubairAlao",
      icon: <FaLinkedin className="w-8 h-8 text-blue-700" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/zubairAlao",
      icon: <FaGithubAlt className="w-8 h-8 text-gray-700 dark:text-gray-300" />,
      label: "GitHub",
    },
  ];

  return (
    <div 
      className="flex flex-col max-md:flex-row fixed max-md:bottom-4 max-md:right-1/2 max-md:translate-x-1/2 right-2 md:translate-y-1/2 bottom-1/2 z-20 
      bg-opacity-60 dark:bg-opacity-60 bg-dark-foreground dark:bg-foreground 
      items-center ~gap-2/4 p-3 border 
      border-accent dark:border-dark-accent rounded-3xl "
    >
      {socialLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="transition duration-300"
          >
            {link.icon}
          </a>
          ))}
    </div>
  )
}

export default HomepageSocialIcons