import { Grid, Typography, Box, useTheme, useMediaQuery } from "@mui/material";
import "./css/About.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const About = ({ isDarkTheme }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [displayText, setDisplayText] = useState("");
const fullText = `I'm Charles, a Full Stack Software Engineer specializing in building scalable, high-performance systems. I work across backend, frontend, DevOps, and cloud, with strong expertise in Java, Spring Boot, microservices architecture, and the MERN/Next.js ecosystem.

I design and develop distributed systems, event-driven services, and modern cloud-native applications using tools such as Kafka, Redis, Docker, and Kubernetes. I also integrate robust monitoring and reliability practices with Sentry, Grafana, and OpenTelemetry.

On the cloud side, I have hands-on experience with AWS and GCP—building secure, production-grade deployments, crafting CI/CD pipelines, and optimizing infrastructure for scale and reliability.

Whether it's backend API design, frontend experiences, microservices, or cloud engineering, I’m driven by a passion for solving complex problems and delivering clean, efficient, and maintainable solutions. Thanks for stopping by—welcome to my tech world! 🚀💜`;


  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 20);

    return () => clearInterval(timer);
  }, [fullText]);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      rotate: 2,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

 const techStack = [
  "Java & Spring Boot",
  "Next.js / MERN",
  "AWS & GCP",
  "Kafka & Redis",
  "Docker & Kubernetes"
];


  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="about" id="about">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.3 }}
          variants={containerVariants}
          className="col-lg-12 heading"
        >
          <motion.h2 variants={itemVariants}>About Me</motion.h2>
          <motion.p variants={itemVariants}>
            A passionate developer crafting digital experiences
          </motion.p>
        </motion.div>

        <Grid container spacing={4} className="aboutme" alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="about-content"
            >
              <motion.div variants={itemVariants} className="greeting-section">
                <Typography 
                  variant="h4" 
                  component="span" 
                  className="greeting-text"
                  sx={{ 
                    fontWeight: 600,
                    background: isDarkTheme 
                      ? 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
                      : 'linear-gradient(45deg, #667eea, #764ba2)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent',
                    display: 'block',
                    mb: 1
                  }}
                >
                  Hello there! 👋
                </Typography>
                <Typography 
                  variant="h3" 
                  component="span" 
                  className="name-highlight"
                  sx={{ 
                    fontWeight: 700,
                    color: isDarkTheme ? '#4ECDC4' : '#764ba2',
                    display: 'block',
                    mb: 2
                  }}
                >
                  {/* I'm Charles */}
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants} className="description-section">
                <Typography 
                  variant="body1" 
                  component="div"
                  sx={{ 
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                    textAlign: 'justify',
                    minHeight: isMobile ? '300px' : '200px'
                  }}
                >
                  {displayText}
                  <span className="cursor">|</span>
                </Typography>
              </motion.div>

              <motion.div variants={itemVariants} className="tech-stack-section">
                <Typography 
                  variant="h6" 
                  sx={{ 
                    mb: 2,
                    fontWeight: 600,
                    color: isDarkTheme ? '#4ECDC4' : '#667eea'
                  }}
                >
                  Technologies I Work With:
                </Typography>
                <div className="tech-tags">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech}
                      className="tech-tag"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ 
                        scale: 1.1,
                        y: -2
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              whileHover="hover"
              className="image-container"
            >
              <Box
                component="img"
                src="./mern2.png"
                alt="Charles Wambua - Full Stack Software Engineer"
                sx={{ 
                  maxWidth: "100%",
                  borderRadius: 4,
                  boxShadow: isDarkTheme 
                    ? '0 20px 40px rgba(0,0,0,0.3)'
                    : '0 20px 40px rgba(0,0,0,0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: isDarkTheme
                      ? '0 25px 50px rgba(78, 205, 196, 0.2)'
                      : '0 25px 50px rgba(102, 126, 234, 0.2)'
                  }
                }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="floating-element element-1"
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                ⚡
              </motion.div>
              
              <motion.div
                className="floating-element element-2"
                animate={{
                  y: [0, 15, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                💻
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};