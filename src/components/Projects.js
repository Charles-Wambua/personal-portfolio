import * as React from "react";
import { useState } from "react";
// import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Button from 'react-bootstrap/Button';
import Modal from "react-bootstrap/Modal";
import "./css/Projects.css";
import { Carousel } from "antd";

export default function Projects({ isDarkTheme }) {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const openModal = (project) => {
    setSelectedProject(project);
    setShow(true);
  };
  const contentStyle = {
    margin: 0,
    height: "160px",
    lineHeight: "160px",
    textAlign: "center",
  };

  const projects = [
    {
      id: 1,
      title: (
        <a
          href="https://member.divasecretintl.com/backend/register"
          className="tittle"
          target="_blank"
            rel="noopener noreferrer"
        >
          Diva International
        </a>
      ),
      year: "2022",
      images: ["/assets/diva1.PNG", "/assets/diva2.PNG", "/assets/diva3.PNG"],
      description:
        "Diva International is a dynamic marketing platform designed to empower users to earn income through referrals and service purchases. The platform allows users to seamlessly engage with the system, track their referral progress, and access a variety of services, all within a user-friendly interface. This project highlights my ability to create robust, scalable solutions tailored to meet the needs of a growing digital marketplaceF",
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
          className="tittle"
          target="_blank"
            rel="noopener noreferrer"
        >
          Sub County CDF Busary
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
          className="tittle"
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
          className="tittle"
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
          className="tittle"
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
        <a href="https://efootball.onrender.com/" className="tittle">
          Gaming analyser
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
      title: (
        <a
          href="#"
          className="tittle"
         
        >
          Corporate Websites & DevOps Automation
        </a>
      ),
      year: "2024",
      images: [
        "/assets/corp1.jpg",
        "/assets/corp2.PNG",
        "/assets/corp3.PNG",
      ],
      description:
        "Led the development and deployment of a corporate websites, enhancing the company's online presence with a modern and responsive design. Additionally, implemented CI/CD pipelines and automated deployment processes using Google Cloud Platform and GitLab CI, ensuring seamless and efficient updates. Collaborated closely with cross-functional teams to align the website with business goals.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Google Cloud Platform", "GitLab CI", "DevOps"],
    },
    
    {
      id: 9,
      title: (
        <a
          href="#"
          className="tittle"
      
        >
          Mobile App Development, Deployments & AppSheet Integration
        </a>
      ),
      year: "2024",
      images: [
        "/assets/app2.PNG",
        "/assets/app3.PNG",
        "/assets/app4.PNG",
      ],
      description:
        "Contributed to the development of a mobile application aimed at improving customer engagement. The project involved integrating Google AppSheet for rapid prototyping and deploying the app to the Google Play Store and Apple App Store. Worked with a multidisciplinary team to ensure smooth functionality across platforms and implemented cloud-based services for scalable backend support using Google Cloud Platform.",
      technologies: ["React Native", "AppSheet", "Google Cloud Platform", "Apple Developer", "Google Play Console"],
    },
    
    
  ];

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="projecs">
        <div className="col-lg-12 heading">
          <h2>Projects</h2>
          <p>Collection some of my solo projects</p>
        </div>

        <div className="projects">
          {projects.map((project) => (
            <Card
              key={project.id}
              sx={{ maxWidth: 375 }}
              onClick={() => openModal(project)}
              style={{ zIndex: 1 }}
              className="custom-card"
            >
              <CardMedia sx={{ height: 140 }} image={project.images[0]} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {project.title}
                </Typography>
                <Typography variant="body2">{project.description}</Typography>
                <Typography variant="body2">
                  <strong>Technologies:</strong>{" "}
                  {project.technologies.join(", ")}
                </Typography>
                <Typography variant="body2" color="text.secondary">
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
            dialogClassName={`custom-modal ${isDarkTheme ? "dark-theme" : ""}`}
          >
            <Modal.Header closeButton className="custom-header">
              <Modal.Title>{selectedProject.title}</Modal.Title>
            </Modal.Header>

            <Modal.Body className="custom-header">
              <Carousel arrows infinite={false}>
                {selectedProject.images.map((image, index) => (
                  <div key={index}>
                    <img
                      src={image}
                      alt={`Project image ${index + 1}`}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        maxHeight: "500px",
                      }}
                    />
                  </div>
                ))}
              </Carousel>

              <div>
                <Typography sx={{ mt: 2 }}>
                  {selectedProject.description}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <strong>Technologies:</strong>{" "}
                  {selectedProject.technologies.join(", ")}
                </Typography>
                <Typography sx={{ mt: 2 }}>
                  <strong>Year:</strong> {selectedProject.year}
                </Typography>
              </div>
            </Modal.Body>

            <Modal.Footer className="custom-header">
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>

          /* <div
              style={{
                padding: 20,
                margin: "10% auto",
                maxWidth: 600,
            
              }}
            >
              <Typography id="modal-title" variant="h6" component="h2">
                {selectedProject.title}
              </Typography>
              <Typography id="modal-description" sx={{ mt: 2 }}>
                {selectedProject.description}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Technologies:</strong>{" "}
                {selectedProject.technologies.join(", ")}
              </Typography>
              <Typography sx={{ mt: 2 }}>
                <strong>Year:</strong> {selectedProject.year}
              </Typography>
            </div> */
        )}
      </div>
    </div>
  );
}
