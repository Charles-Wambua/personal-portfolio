import "./css/About.css";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
export const About = () => {
  return (
    <div className="about" style={{marginRight:0}}>
      <div>
        <h2 style={{ paddingBottom: 5, fontSize: 24, fontWeight: "900" }}>
          About Me
        </h2>
      </div>
      <div className="aboutme">
        <motion.div
          // variants={fadeIn("left", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="about-me"
          // style={{ fontWeight: "900", fontSize: 16 }}
        >
          <span>Hello there! 👋</span> <br />
          <span className="charles">I'm Charles</span>, a junior full-stack
          developer with a passion for creating innovative solutions. My skills
          span various domains, including web application development,
          cross-platform mobile app development, and custom software development
          using a diverse range of tools and frameworks. In addition to my
          proficiency in these areas, I also have experience in process
          automation and developing embedded software for edge processing. Thank
          you for visiting! 💜
        </motion.div>
        <motion.div
          // variants={fadeIn("left", 0.5)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="about-me"
        >
          <img src="./mern2.png" alt="image" />
        </motion.div>
      </div>
    </div>
  );
};
