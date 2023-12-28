import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { RiGithubFill, RiLinkedinBoxFill } from "react-icons/ri";
import { AiFillInstagram } from "react-icons/ai";
import Typed from "typed.js";

const Hero = () => {
  const name = useRef(null);

  useEffect(() => {
    const typed = new Typed(name.current, {
      strings: ["Ismaeel!", "Front-End", "Developer"],
      startDelay: 1200,
      typeSpeed: 100,
      backSpeed: 100,
      loop: true,
      backDelay: 2700,
      onBegin: (self) => {
        self.toggleBlinking(true);
      },
    });
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="home"
      className="relative w-full h-screen sl:h-screen sm:h-[50rem] mx-auto"
    >
      <div
        className={`${styles.paddingX} absolute inset-0
        mx-auto flex flex-col-reverse sl:flex-row sl:top-[0px] top-[80px] justify-center items-center gap-6 sl:gap-[8rem]`}
      >
        <div className="flex flex-row gap-4 sl:mt-10 mt-0">
          <div className="flex flex-col justify-center items-center">
            <div className="w-7 h-7 rounded-full bg-[#5785A9]" />
            <div className="w-1 sl:h-80 h-60 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Hi, I&apos;m
              <br />
              <span className="text-[#5785A9]">
                <span ref={name} />
                {/* <img
                  src={sayHii}
                  alt="sayHii"
                  className="h-[3.8rem] sm:h-[4.2rem] lg:h-[5.2rem] sl:h-[4.6rem]"
                /> */}
              </span>
            </h1>
            <p
              className={`${styles.heroSubText} mt-2 text-white-100 max-w-[500px]`}
            >
              A passionate Front-end React Developer based in Morocco,
              Casablanca. 👋
            </p>
            <div className="flex flex-row mt-8 gap-2">
              <a
                href="https://www.linkedin.com/in/ismail-ech-chaouny-924399267/"
                target="_blank"
                rel="noreferrer"
              >
                <RiLinkedinBoxFill className="size-8 text-white-100 hover:text-secondary duration-300 ease-in-out" />
              </a>
              <a
                href="https://www.instagram.com/i.echchaouny"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillInstagram className="size-8 text-white-100 hover:text-secondary duration-300 ease-in-out" />
              </a>
              <a
                href="https://github.com/ech-chaouny"
                target="_blank"
                rel="noreferrer"
              >
                <RiGithubFill className="size-8 text-white-100 hover:text-secondary duration-300 ease-in-out" />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-img"></div>
      </div>
      <div className="absolute xs:bottom-10 bottom-10 w-full justify-center hidden sl:flex items-center">
        <a href="#about">
          <div
            className="w-[33px] h-[62px]
          rounded-3xl border-[3px] border-secondary
          flex justify-center items-start p-2"
          >
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
