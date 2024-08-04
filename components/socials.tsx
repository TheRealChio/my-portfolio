// utils
import { socials } from "@/constants";

// components
import Link from "next/link";

// icons
import { FaGithub, FaLinkedinIn, FaDiscord } from "react-icons/fa";

interface SocialsProps {
  containerStyles?: string;
  iconStyles?: string;
}

const Socials = ({ containerStyles, iconStyles }: SocialsProps) => {
  return (
    <div className={containerStyles}>
      {socials.map((social) => {
        return (
          <Link key={social.name} href={social.path} className={iconStyles}>
            {social.name === "github" && <FaGithub className="w-5 h-5" />}
            {social.name === "linkedin" && <FaLinkedinIn className="w-5 h-5" />}
            {social.name === "discord" && <FaDiscord className="w-5 h-5" />}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
