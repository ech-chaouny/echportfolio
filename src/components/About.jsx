import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  fadeIn,
  textContainer,
  textVariant,
  textVariant2,
} from "../utils/motion";
import { description, services } from "../constants";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring, 0.5" * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          className="bg-tertiary rounded-[20px] py-5
          px-12 min-h-[280px] flex justify-evenly
          items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>introduction</p>
        <h2 className={styles.sectionHeadText}>About Me.</h2>
      </motion.div>
      <motion.p
        variants={textContainer}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {Array.from(description).map((letter, index) => (
          <motion.span variants={textVariant2} key={index}>
            {letter}
          </motion.span>
        ))}
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={index} index={index} {...service} />
        ))}
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
