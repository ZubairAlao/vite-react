import { MdEmail } from "react-icons/md";
import { FaTwitter, FaWhatsapp, FaLinkedin, FaGithubAlt } from "react-icons/fa";

const HomepageSocialIcons = () => {
  const socialLinks = [
    {
      href: "mailto:alaozubair@gmail.com",
      icon: <MdEmail className="w-8 h-8" />,
      label: "Email",
    },
    {
      href: "https://twitter.com/zubair_coder",
      icon: <FaTwitter className="w-8 h-8" />,
      label: "Twitter",
    },
    {
      href: "https://wa.me/+2348130030894",
      icon: <FaWhatsapp className="w-8 h-8" />,
      label: "WhatsApp",
    },
    {
      href: "https://linkedin.com/in/zubairAlao",
      icon: <FaLinkedin className="w-8 h-8" />,
      label: "LinkedIn",
    },
    {
      href: "https://github.com/zubairAlao",
      icon: <FaGithubAlt className="w-8 h-8" />,
      label: "GitHub",
    },
  ];

  return (
    <div className="flex flex-col fixed right-2 bottom-16 z-20 bg-opacity-60 items-center ~gap-2/4 p-3 border border-accent dark:border-dark-accent rounded-3xl">
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