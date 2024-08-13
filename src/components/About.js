import { useTheme } from "@mui/material/styles";
import { Grid, Typography, Box } from "@mui/material";
import "./css/About.css";
import { motion } from "framer-motion";

export const About = () => {
  const theme = useTheme();

  return (
    <div
      className="about"
      style={{
        marginRight: 0,
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.text.primary,
      }}
    >
      <div>
        <h2>About Me</h2>
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
              , a junior full-stack developer with a passion for creating
              innovative solutions. My skills span various domains, including
              web application development, cross-platform mobile app
              development, and custom software development using a diverse range
              of tools and frameworks. In addition to my proficiency in these
              areas, I also have experience in process automation and developing
              embedded software for edge processing. Thank you for visiting! 💜
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
  );
};
