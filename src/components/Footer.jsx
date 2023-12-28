import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-tertiary">
      <div className="py-10 max-w-6xl mx-auto flex flex-col sl:flex-row justify-between  items-center">
        <p className="font-semibold text-[17px]">
          Copyright © 2024. All rights are reserved
        </p>
        <div className="flex flex-row mt-4 gap-2">
          <a
            href="https://www.linkedin.com/in/ismail-ech-chaouny-924399267/"
            target="_blank"
            rel="noreferrer"
          >
            <RiLinkedinBoxFill className="size-7 text-white hover:text-secondary duration-300 ease-in-out" />
          </a>
          <a
            href="https://www.instagram.com/i.echchaouny"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="size-7 text-white hover:text-secondary duration-300 ease-in-out" />
          </a>
          <a
            href="https://github.com/ech-chaouny"
            target="_blank"
            rel="noreferrer"
          >
            <RiGithubFill className="size-7 text-white hover:text-secondary duration-300 ease-in-out" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
