// Projects.js
import * as React from "react";
import { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "react-bootstrap/Modal";
import "./css/Projects.css";
import { Carousel } from "antd";

export default function Projects({ isDarkTheme }) {
  const [show, setShow] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const openModal = (project) => {
    setSelectedProject(project);
    setShow(true);
  };

  const projects = [
    {
      id: 1,
      title: (
        <a
          href="https://member.divasecretintl.com/backend/register"
          className="title-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Diva International
        </a>
      ),
      year: "2022",
      images: ["/assets/diva1.PNG", "/assets/diva2.PNG", "/assets/diva3.PNG"],
      description:
        "Diva International is a dynamic marketing platform designed to empower users to earn income through referrals and service purchases. The platform allows users to seamlessly engage with the system, track their referral progress, and access a variety of services, all within a user-friendly interface.",
      technologies: [
        "React Js",
        "AntD & Material UI",
        "Express Js",
        "Postgres",
        "Iconify Icons",
      ],
    },
    {
      id: 2,
      title: (
        <a
          href="https://machakoscdf-api.onrender.com/"
          className="title-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Sub County CDF Bursary
        </a>
      ),
      year: "2023",
      images: ["/assets/mks1.PNG", "/assets/mks2.PNG", "/assets/mks3.PNG"],
      description:
        "I created a comprehensive bursary application website designed to streamline the application process for students seeking financial aid. This project demonstrates my ability to develop efficient, user-centric solutions that address real-world needs in the education sector.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: (
        <a
          href="https://charles-dev-portfolio.onrender.com/"
          className="title-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Portfolio
        </a>
      ),
      year: "2024",
      images: ["/assets/port1.PNG", "/assets/port2.PNG", "/assets/port3.PNG"],
      description:
        "A dynamic and responsive portfolio showcasing my development work. Built with a modern tech stack, it features seamless navigation, interactive elements, and a minimalist design that emphasizes content. Deployed on a robust platform for optimal performance and accessibility.",
      technologies: [
        "React.js",
        "Bootstrap CSS",
        "Iconify",
        "FontAwesome",
        "Ant Design",
        "Material-UI",
      ],
    },
    {
      id: 4,
      title: (
        <a
          href="https://www.motorhub.co.ke/about-us"
          className="title-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          MotoHub: Car Marketplace
        </a>
      ),
      year: "2022",
      images: [
        "/assets/sell1.PNG",
        "/assets/sell2.PNG",
        "/assets/sale3.PNG",
      ],
      description:
        "MotoHub is an online marketplace for buying and selling vehicles, offering a seamless experience for both buyers and sellers. The platform is powered by the MERN stack, ensuring robust performance, real-time updates, and an intuitive interface that facilitates easy transactions.",
      technologies: ["TypeScript", "Express.js", "MongoDB", "Node.js"],
    },
    {
      id: 5,
      title: (
        <a
          href="https://tripwheelsnation.onrender.com/"
          className="title-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          TripWheels: Car Rental Service
        </a>
      ),
      year: "2023",
      images: ["/assets/trip1.PNG", "/assets/trip2.PNG", "/assets/trip3.PNG"],
      description:
        "A comprehensive car rental platform designed to simplify the process of booking vehicles online. Featuring a sleek, user-friendly interface and secure transaction handling, this project was built with a robust tech stack, ensuring reliability and scalability for a seamless user experience.",
      technologies: ["JavaScript","React js", "Express", "MySQL"],
    },
    {
      id: 6,
      title: (
        <a 
          href="https://efootball.onrender.com/" 
          className="title-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Gaming Analyzer
        </a>
      ),
      year: "2021",
      images: ["/assets/ef3.PNG", "/assets/ef2.PNG", "/assets/ef1.PNG"],
      description:
        "A gaming website dedicated to eFootball enthusiasts with the latest updates and content. It has a user-friendly interface for hosting tournaments, generating fixtures, and calculating results for each participant.",
      technologies: ["React Js", "BootStrap and MUI", "Express.js", "MongoDB"],
    },
    {
      id: 8,
      title: "Corporate Websites & DevOps Automation",
      year: "2024",
      images: [
        "/assets/corp1.jpg",
        "/assets/corp2.PNG",
        "/assets/corp3.PNG",
      ],
      description:
        "Led the development and deployment of corporate websites, enhancing the company's online presence with a modern and responsive design. Additionally, implemented CI/CD pipelines and automated deployment processes using Google Cloud Platform and GitLab CI, ensuring seamless and efficient updates.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Cloud Platform", "GitLab CI", "DevOps"],
    },
    {
      id: 9,
      title: "Mobile App Development & AppSheet Integration",
      year: "2024",
      images: [
        "/assets/app2.PNG",
        "/assets/app3.PNG",
        "/assets/app4.PNG",
      ],
      description:
        "Contributed to the development of a mobile application aimed at improving customer engagement. The project involved integrating Google AppSheet for rapid prototyping and deploying the app to the Google Play Store and Apple App Store.",
      technologies: ["React Native", "AppSheet", "Google Cloud Platform", "Apple Developer", "Google Play Console"],
    },
  ];

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="projects-container">
        <div className="projects-heading">
          <h2>Projects</h2>
          <p>A curated collection of my solo projects and contributions</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="custom-card"
              onClick={() => openModal(project)}
            >
              <CardMedia 
                sx={{ height: 200 }} 
                image={project.images[0]}
                className="card-media"
              />
              <CardContent className="card-content">
                <Typography gutterBottom variant="h5" component="div" className="card-title">
                  {project.title}
                </Typography>
                <Typography variant="body2" className="card-description">
                  {project.description}
                </Typography>
                <Typography variant="body2" className="card-technologies">
                  <strong>Technologies:</strong> {project.technologies.join(", ")}
                </Typography>
                <Typography variant="body2" className="card-year">
                  <strong>Year:</strong> {project.year}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </div>

        {selectedProject && (
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            className={`custom-modal ${isDarkTheme ? "dark-theme" : ""}`}
          >
            <Modal.Header closeButton className="custom-header">
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="custom-header">
              <Carousel arrows infinite={false} autoplay>
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        maxHeight: "400px",
                        borderRadius: "12px"
                      }}
                    />
                  </div>
                ))}
              </Carousel>

              <div>
                <Typography sx={{ mt: 2, mb: 2 }} className={isDarkTheme ? "dark-theme" : ""}>
                  {selectedProject.description}
                </Typography>
                <Typography sx={{ mt: 2, mb: 1 }} className={isDarkTheme ? "dark-theme" : ""}>
                  <strong>Technologies:</strong> {selectedProject.technologies.join(", ")}
                </Typography>
                <Typography sx={{ mt: 1 }} className={isDarkTheme ? "dark-theme" : ""}>
                  <strong>Year:</strong> {selectedProject.year}
                </Typography>
              </div>
            </Modal.Body>

            <Modal.Footer className="custom-header">
              <Button 
                variant="contained" 
                onClick={handleClose}
                sx={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '12px',
                  padding: '8px 20px',
                  fontWeight: '600',
                  textTransform: 'none',
                  boxShadow: '0 4px 15px rgba(102, 126, 234, 0.3)',
                  '&:hover': {
                    boxShadow: '0 6px 20px rgba(102, 126, 234, 0.4)',
                    transform: 'translateY(-1px)'
                  }
                }}
              >
                Close Project
              </Button>
            </Modal.Footer>
          </Modal>
        )}
      </div>
    </div>
  );
}