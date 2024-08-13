import "./css/Home.css";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Switch from '@mui/material/Switch';

export const Home = ({ isDark, toggleTheme }) => {

  function openWhatsAppLink() {
    window.open(
      "https://wa.me/254114652533",
      "_blank", 
      "noopener noreferrer"
    );
  }

  return (
    <>
      <div className="Cover">
        <a
          href="https://github.com/Charles-Wambua"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="home" id="home">
        <div>
          <i class="fa-solid fa-laptop-code fa-fade fa-7x"></i>
        </div>
        <div className="name">
          <div className="nm">
            <span className="n-n">Charles Wambua</span>
          </div>
        </div>

        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.7 }}
          className="mtion"
        >
          <span className="mi-4"> </span>
          <TypeAnimation
            sequence={[
              "FULL STACK DEVELOPER",
              2000,
              "MOBILE APP DEVELOPER",
              2000,
              "MACHINE LEARNING ARCHITECT",
              2000,
            ]}
            speed={50}
            className="text-accent"
            wrapper="span"
            repeat={Infinity}
          />
        </motion.div>
        <div>
          <button className="buttton" onClick={openWhatsAppLink}>
            Contact ME
          </button>
        </div>
        <div className="links">
          <div class="social-icons">
            <a
              href="https://wa.me/254114652533"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/thatsme.charles/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/Charles59676543"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/Charles-Wambua"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
        <div className="switchbox">
          <Switch 
            checked={isDark} 
            onChange={toggleTheme} 
            color="primary" 
            inputProps={{ 'aria-label': 'theme switch' }} 
          />
          <label>{isDark ? "Dark Mode" : "Light Mode"}</label>
        </div>
      </div>
    </>
  );
};
