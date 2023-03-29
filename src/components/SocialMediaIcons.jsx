import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/veervijaysinhrana/",
  github: "https://github.com/Veervijay38",
  instagram: "https://www.instagram.com/_veer_vijay_sinh_",
  facebook: "https://www.facebook.com/viraj.rana38",
  twitter: "https://twitter.com/Virajhrana",
};
const size = "2rem";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href={socialLinks.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedinIn size={size} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href={socialLinks.github}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillGithub size={size} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href={socialLinks.instagram}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillInstagram size={size} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href={socialLinks.facebook}
        target="_blank"
        rel="noreferrer"
      >
        <AiFillFacebook size={size} />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href={socialLinks.twitter}
        target="_blank"
        rel="noreferrer"
      >
        <AiOutlineTwitter size={size} />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
