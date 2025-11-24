// Projects.js - Ultra Premium Version
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "react-bootstrap/Modal";
import "./css/Projects.css";
import { Carousel } from "antd";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Sparkles, 
  ExternalLink, 
  Github, 
  Play, 
  X, 
  ArrowRight,
  Calendar,
  Code2,
  Smartphone,
  Globe,
  Server
} from "lucide-react";

export default function Projects({ isDarkTheme }) {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isHovered, setIsHovered] = useState(null);
  const cardsRef = useRef([]);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleClose = () => {
    setShow(false);
    setTimeout(() => setSelectedProject(null), 300);
  };
  
  const openModal = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const projects = [
    {
      id: 1,
      title: "Softnova Lab",
      link: "https://softnova-lab.onrender.com/",
      year: "2024",
      images: ["/assets/softnova1.PNG", "/assets/softnova2.PNG", "/assets/softnova3.PNG"],
      description: "Softnova Lab is an innovative platform designed to connect clients with top-tier software development services. The platform offers a seamless experience for users to explore various software solutions, engage with expert developers, and manage projects efficiently.",
      technologies: ["Next Js", "Tailwind CSS", "Framer Motion", "Firebase", "AntD & Material UI", "Iconify Icons", "Node Js"],
      github: "#",
      category: "Full Stack",
      icon: <Globe className="project-icon" />,
      accentColor: "#667eea"
    },
    {
      id: 2,
      title: "Diva International",
      link: "https://member.divasecretintl.com/backend/register",
      year: "2022",
      images: ["/assets/diva1.PNG", "/assets/diva2.PNG", "/assets/diva3.PNG"],
      description: "Diva International is a dynamic marketing platform designed to empower users to earn income through referrals and service purchases. The platform allows users to seamlessly engage with the system, track their referral progress, and access a variety of services.",
      technologies: ["React Js", "AntD & Material UI", "Express Js", "Postgres", "Iconify Icons"],
      github: "#",
      category: "Full Stack",
      icon: <Server className="project-icon" />,
      accentColor: "#764ba2"
    },
    {
      id: 3,
      title: "Sub County CDF Bursary",
      link: "https://machakoscdf-api.onrender.com/",
      year: "2023",
      images: ["/assets/mks1.PNG", "/assets/mks2.PNG", "/assets/mks3.PNG"],
      description: "I created a comprehensive bursary application website designed to streamline the application process for students seeking financial aid. This project demonstrates my ability to develop efficient, user-centric solutions that address real-world needs in the education sector.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
      github: "#",
      category: "Mobile App",
      icon: <Smartphone className="project-icon" />,
      accentColor: "#f093fb"
    },
    {
      id: 4,
      title: "My Portfolio",
      link: "https://charles-dev-portfolio.onrender.com/",
      year: "2024",
      images: ["/assets/port1.PNG", "/assets/port2.PNG", "/assets/port3.PNG"],
      description: "A dynamic and responsive portfolio showcasing my development work. Built with a modern tech stack, it features seamless navigation, interactive elements, and a minimalist design that emphasizes content. Deployed on a robust platform for optimal performance and accessibility.",
      technologies: ["React.js", "Bootstrap CSS", "Iconify", "FontAwesome", "Ant Design", "Material-UI"],
      github: "#",
      category: "Frontend",
      icon: <Code2 className="project-icon" />,
      accentColor: "#4fd1c5"
    },
    {
      id: 5,
      title: "MotoHub: Car Marketplace",
      link: "https://www.motorhub.co.ke/about-us",
      year: "2022",
      images: ["/assets/sell1.PNG", "/assets/sell2.PNG", "/assets/sale3.PNG"],
      description: "MotoHub is an online marketplace for buying and selling vehicles, offering a seamless experience for both buyers and sellers. The platform is powered by the MERN stack, ensuring robust performance, real-time updates, and an intuitive interface that facilitates easy transactions.",
      technologies: ["TypeScript", "Express.js", "MongoDB", "Node.js"],
      github: "#",
      category: "Full Stack",
      icon: <Globe className="project-icon" />,
      accentColor: "#ed8936"
    },
    {
      id: 6,
      title: "Gaming Analyzer",
      link: "https://efootball.onrender.com/",
      year: "2021",
      images: ["/assets/ef3.PNG", "/assets/ef2.PNG", "/assets/ef1.PNG"],
      description: "A gaming website dedicated to eFootball enthusiasts with the latest updates and content. It has a user-friendly interface for hosting tournaments, generating fixtures, and calculating results for each participant.",
      technologies: ["React Js", "BootStrap and MUI", "Express.js", "MongoDB"],
      github: "#",
      category: "Full Stack",
      icon: <Server className="project-icon" />,
      accentColor: "#9f7aea"
    },
    {
      id: 8,
      title: "Corporate Websites & DevOps",
      year: "2024",
      images: ["/assets/corp1.jpg", "/assets/corp2.PNG", "/assets/corp3.PNG"],
      description: "Led the development and deployment of corporate websites, enhancing the company's online presence with a modern and responsive design. Additionally, implemented CI/CD pipelines and automated deployment processes using Google Cloud Platform and GitLab CI.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Cloud Platform", "GitLab CI", "DevOps"],
      github: "#",
      category: "DevOps",
      icon: <Server className="project-icon" />,
      accentColor: "#4299e1"
    },
    {
      id: 9,
      title: "Mobile App Development",
      year: "2024",
      images: ["/assets/app2.PNG", "/assets/app3.PNG", "/assets/app4.PNG"],
      description: "Contributed to the development of a mobile application aimed at improving customer engagement. The project involved integrating Google AppSheet for rapid prototyping and deploying the app to the Google Play Store and Apple App Store.",
      technologies: ["React Native", "AppSheet", "Google Cloud Platform", "Apple Developer", "Google Play Console"],
      github: "#",
      category: "Mobile App",
      icon: <Smartphone className="project-icon" />,
      accentColor: "#48bb78"
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 80,
      scale: 0.8,
      rotateX: 15
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
        duration: 1.2
      }
    },
    hover: {
      y: -15,
      scale: 1.02,
      rotateX: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    }
  };

  const modalVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.75,
      y: 50,
      rotateY: 15
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      rotateY: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 25,
        duration: 1
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -50,
      rotateY: -15,
      transition: {
        duration: 0.4
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const backgroundVariants = {
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <div className={isDarkTheme ? "dark-theme projects-wrapper" : "light-theme projects-wrapper"} ref={sectionRef}>
      {/* Animated Background Layers */}
      <motion.div 
        className="background-layers"
        variants={backgroundVariants}
        animate="animate"
      >
        <div className="bg-layer-1"></div>
        <div className="bg-layer-2"></div>
        <div className="bg-layer-3"></div>
      </motion.div>

      {/* Floating Particles */}
      <div className="floating-particles">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="projects-container">
        {/* Enhanced Heading with Premium Animations */}
        <motion.div 
          className="projects-heading"
          initial={{ opacity: 0, y: -60 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -60 }}
          transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <motion.div
            className="heading-badge"
            initial={{ scale: 0, rotate: -180 }}
            animate={isVisible ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -180 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="sparkle-icon" />
            </motion.div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.5 }}
            >
              Masterpiece Collection
            </motion.span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Innovative <span className="gradient-text">Projects</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            Where cutting-edge technology meets exceptional design - A showcase of digital excellence
          </motion.p>

          {/* Animated Scroll Indicator */}
          <motion.div
            className="scroll-indicator"
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 1 }}
          >
            <motion.div
              className="scroll-arrow"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowRight />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Enhanced Projects Grid */}
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-item"
              variants={cardVariants}
              whileHover="hover"
              onHoverStart={() => setIsHovered(project.id)}
              onHoverEnd={() => setIsHovered(null)}
              custom={index}
            >
              <Card 
                className={`premium-card ${isDarkTheme ? 'dark-glass' : 'light-glass'}`}
                onClick={() => openModal(project)}
                style={{
                  '--accent-color': project.accentColor,
                }}
              >
                {/* Animated Card Border */}
                <div className="card-border-glow"></div>
                
                {/* Card Header */}
                <div className="card-header">
                  <div className="card-icon-wrapper">
                    {project.icon}
                  </div>
                  <div className="card-meta">
                    <span className="card-category">{project.category}</span>
                    <span className="card-year">
                      <Calendar className="year-icon" />
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Enhanced Card Media */}
                <div className="card-media-container">
                  <CardMedia 
                    sx={{ height: 220 }} 
                    image={project.images[0]}
                    className="card-media"
                  />
                  <div className="card-overlay">
                    <motion.div 
                      className="overlay-content"
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                    >
                      <motion.div
                        className="play-button"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="play-icon" />
                      </motion.div>
                      <motion.span
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        Explore Project
                      </motion.span>
                    </motion.div>
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="media-gradient"></div>
                </div>

                <CardContent className="card-content">
                  <Typography gutterBottom variant="h5" component="div" className="card-title">
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {project.title}
                    </motion.span>
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 45 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <ExternalLink className="external-link" />
                    </motion.div>
                  </Typography>
                  
                  <Typography variant="body2" className="card-description">
                    {project.description}
                  </Typography>

                  {/* Animated Technology Tags */}
                  <motion.div 
                    className="tech-tags"
                    layout
                  >
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <motion.span
                        key={idx}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                        whileHover={{ 
                          scale: 1.1, 
                          y: -2,
                          transition: { type: "spring", stiffness: 400 }
                        }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <motion.span 
                        className="tech-tag-more"
                        whileHover={{ scale: 1.05 }}
                      >
                        +{project.technologies.length - 4}
                      </motion.span>
                    )}
                  </motion.div>
                </CardContent>

                {/* Interactive Hover Effect */}
                <div className="card-hover-effect"></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Ultra Premium Modal */}
        <AnimatePresence mode="wait">
          {selectedProject && (
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              size="xl"
              centered
              className={`premium-modal ${isDarkTheme ? "dark-theme" : "light-theme"}`}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="modal-content-wrapper"
                style={{
                  '--modal-accent': selectedProject.accentColor,
                }}
              >
                {/* Modal Background Effects */}
                <div className="modal-background-effects">
                  <div className="modal-glow"></div>
                </div>

                <Modal.Header closeButton className="premium-modal-header">
                  <Modal.Title>
                    <div className="modal-title-content">
                      <div className="modal-title-main">
                        <div className="modal-icon">
                          {selectedProject.icon}
                        </div>
                        <motion.span
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {selectedProject.title}
                        </motion.span>
                      </div>
                      <div className="modal-links">
                        <motion.a
                          href={selectedProject.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="modal-link-btn"
                        >
                          <ExternalLink />
                        </motion.a>
                        <motion.a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.2, y: -2 }}
                          whileTap={{ scale: 0.9 }}
                          className="modal-link-btn"
                        >
                          <Github />
                        </motion.a>
                      </div>
                    </div>
                  </Modal.Title>
                </Modal.Header>

                <Modal.Body className="premium-modal-body">
                  {/* Enhanced Carousel */}
                  <motion.div 
                    className="carousel-container"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    <Carousel 
                      arrows 
                      infinite={true} 
                      autoplay
                      effect="fade"
                      speed={1000}
                      className="premium-carousel"
                    >
                      {selectedProject.images.map((image, index) => (
                        <div key={index} className="carousel-slide">
                          <motion.div
                            className="image-container"
                            whileHover={{ scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <img
                              src={image}
                              alt={`Project image ${index + 1}`}
                              className="carousel-image"
                            />
                            <div className="image-overlay"></div>
                          </motion.div>
                        </div>
                      ))}
                    </Carousel>
                  </motion.div>

                  <div className="modal-content">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="description-section"
                    >
                      <Typography className="modal-description">
                        {selectedProject.description}
                      </Typography>
                    </motion.div>

                    <motion.div 
                      className="modal-details-grid"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="detail-section">
                        <motion.h4
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 }}
                        >
                          Technologies Used
                        </motion.h4>
                        <motion.div 
                          className="tech-tags-modal"
                          layout
                        >
                          {selectedProject.technologies.map((tech, index) => (
                            <motion.span
                              key={index}
                              className="tech-tag-modal"
                              initial={{ opacity: 0, scale: 0, y: 20 }}
                              animate={{ opacity: 1, scale: 1, y: 0 }}
                              transition={{ 
                                delay: 0.7 + index * 0.1,
                                type: "spring",
                                stiffness: 200
                              }}
                              whileHover={{ 
                                scale: 1.1, 
                                y: -2,
                                transition: { type: "spring", stiffness: 400 }
                              }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </motion.div>
                      </div>
                      
                      <motion.div 
                        className="detail-section"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 }}
                      >
                        <h4>Project Details</h4>
                        <div className="project-meta">
                          <motion.div 
                            className="meta-item"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Calendar className="meta-icon" />
                            <span><strong>Year:</strong> {selectedProject.year}</span>
                          </motion.div>
                          <motion.div 
                            className="meta-item"
                            whileHover={{ scale: 1.05 }}
                          >
                            <Code2 className="meta-icon" />
                            <span><strong>Category:</strong> {selectedProject.category}</span>
                          </motion.div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </Modal.Body>

                <Modal.Footer className="premium-modal-footer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      onClick={handleClose}
                      className="close-modal-btn"
                      startIcon={<X />}
                    >
                      Close Project
                    </Button>
                  </motion.div>
                </Modal.Footer>
              </motion.div>
            </Modal>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}