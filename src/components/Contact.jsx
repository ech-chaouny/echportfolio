import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const [textMessage, setTextMessage] = useState({
    text: "",
    color: "",
  });
  const formRef = useRef();
  const [form, setFrom] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFrom({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name !== "" && form.email !== "" && form.message !== "") {
      setLoading(true);
      emailjs
        .send(
          "service_7paqlg3",
          "template_iltvgni",
          {
            from_name: form.name,
            to_name: "Ismael",
            from_email: form.email,
            to_email: "chaouniismail4@gmail.com",
            message: form.message,
          },
          "0q_Iq6Z0DvP-5R7zg"
        )
        .then(
          () => {
            setLoading(false);
            setTextMessage({
              text: "Thank you. I will reply you as soon as possible.",
              color: "text-green-400",
            });
            setFrom({ name: "", email: "", message: "" });
          },
          (error) => {
            setLoading(false);
            console.log(error);
            setTextMessage({
              text: "Something went wrong.",
              color: "text-red-400",
            });
          }
        );
    } else {
      setTextMessage({
        text: "Don't leave anything empty please?",
        color: "text-red-400",
      });
    }
  };
  return (
    <div className="xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white
              rounded-lg outlined-none
              border-none font-meduim"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white
              rounded-lg outlined-none
              border-none font-meduim"
            />
          </label>
          <label htmlFor="" className="flex flex-col">
            <span className="text-white font-medium mb-4">Your message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className="bg-tertiary py-4 px-6
              placeholder:text-secondary text-white
              rounded-lg outlined-none
              border-none font-meduim"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8
            outline-none w-fit text-white font-bold
            shadow-md shadow-primary rounded-xl
          "
            disabled={loading ? true : false}
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <span className={`${textMessage.color} font-normal text-[14px]`}>
            {textMessage.text}
          </span>
        </form>
      </motion.div>
      <motion.dev
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.dev>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
