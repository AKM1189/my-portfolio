import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { MyInfo } from "../constants";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300 py-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-center md:text-left text-sm">
          © {year} {MyInfo.name}. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/akm1189"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/aung-kaung-myat1189/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-primary hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
