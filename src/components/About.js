import { Grid, Typography, Box } from "@mui/material";
import "./css/About.css";
import { motion } from "framer-motion";

export const About = ({ isDarkTheme }) => {
  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="about">
        <div className="col-lg-12 heading">
          <h2>About Me</h2>
          <p>A brief overview of my background and interests</p>
        </div>

        <Grid container spacing={2} className="aboutme">
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="about-me"
            >
              <Typography variant="h6" component="span">
                Hello there! 👋
              </Typography>
              <br />
              <Typography variant="h4" component="span" className="charles">
                I'm Charles
              </Typography>
              <Typography variant="body1" component="span">
                , a Full-Stack Software Developer with a diverse skill set and a
                knack for crafting innovative solutions. My expertise spans web
                and mobile application development, DevOps, and cloud
                engineering, with a strong focus on the MERN stack (MongoDB,
                Express, React, Node.js) and T3 Stack. I excel in designing scalable
                architectures, automating processes, and implementing CI/CD
                pipelines for seamless deployments. Additionally, I have
                hands-on experience with GCP and Kubernetes, ensuring robust and
                scalable cloud solutions. My journey also includes developing
                embedded software for edge processing, blending creativity with
                technical prowess. I am driven by a passion for transforming
                complex challenges into elegant solutions and am always eager to
                explore new technologies. Thank you for visiting and joining me
                on this tech adventure! 💜
              </Typography>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="about-me"
            >
              <Box
                component="img"
                src="./mern2.png"
                alt="image"
                sx={{ maxWidth: "100%" }}
              />
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};
