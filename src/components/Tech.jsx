import { BallCanvas } from "./canvas";
import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className="text-secondary text-[28px] mb-5 font-bold text-center sl:text-start">
          Tech Stack
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justufy-center gap-3">
        {technologies.map((technology) => (
          <div key={technology.name} className="w-28 h-28">
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
