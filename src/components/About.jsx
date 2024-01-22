import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import {
  fadeIn,
  textContainer,
  textVariant,
} from "../utils/motion";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";

// eslint-disable-next-line react/prop-types
const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="sm:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 1)}
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
        I'm Frontend Web Developer with experience in JavaScript,TypeScript and
        expertise in React.js and Next.js. Committed to continuous improvement,
        I focus on refining my skills and personality to acquire new
        professional abilities. Passionate about creating engaging interfaces, I
        stay updated on the latest trends in React.js and Next.js. My goal is to
        seamlessly integrate into a team, contributing knowledge to deliver
        high-quality software solutions.
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
