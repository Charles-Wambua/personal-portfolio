import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "antd";
import "./css/Projects.css";
import { Carousel } from "antd";

export default function Projects() {
  const [open, setOpen] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const theme = useTheme();
  const [selectedProject, setSelectedProject] = useState(null);
  const openModal = (project) => {
    setSelectedProject(project);
    setOpen(true);
    // const showLoading = () => {
    //   setOpen(true);
    //   setLoading(true);
    //   setTimeout(() => {
    //     setLoading(false);
    //   }, 2000);
    // };
  };
  const contentStyle = {
    margin: 0,
    height: "160px",
    // color: '#fff',
    lineHeight: "160px",
    textAlign: "center",
    // background: '#364d79',
  };

  const projects = [
    {
      id: 1,
      title: (
        <a href="/" className="tittle">
          My Recipes App
        </a>
      ),
      year: "2023",
      images: [
        "/assets/portfolio.PNG",
        "/assets/mks.PNG",
        "/assets/machakps.PNG",
      ],
      description:
        "I built this app using React Native. I used an open API to fetch the recipes. The icons in this project are from Iconify.",
      technologies: [
        "React Native",
        "JavaScript",
        "API Integration",
        "Iconify",
      ],
    },
    {
      id: 2,
      title: (
        <a href="https://machakoscdf-api.onrender.com/" className="tittle">
          Machakos Town CDFs WebApp
        </a>
      ),
      year: "2023",
      images: [
        "/assets/portfolio.PNG",
        "/assets/mks.PNG",
        "/assets/machakps.PNG",
      ],
      description:
        "I built this project using React Native, Node.js, Express, and MongoDB. I developed it specifically for Machakos Town students and pupils to apply for bursaries via the app or website.",
      technologies: ["React Native", "Node.js", "Express", "MongoDB"],
    },
    {
      id: 3,
      title: (
        <a
          href="https://charles-dev-portfolio.onrender.com/"
          className="tittle"
        >
          My Portfolio
        </a>
      ),
      year: "2023",
      images: [
        "/assets/portfolio.PNG",
        "/assets/mks.PNG",
        "/assets/machakps.PNG",
      ],
      description:
        "I built this project using React.js, HTML5, and CSS. I used icons from Iconify, React.js Icon, and FontAwesome. I hosted this site on Render.com.",
      technologies: ["React.js", "HTML5", "CSS", "Iconify", "FontAwesome"],
    },
    {
      id: 4,
      title: "TensorFlow Project",
      year: "2023",
      images: [
        "/assets/portfolio.PNG",
        "/assets/mks.PNG",
        "/assets/machakps.PNG",
      ],
      description:
        "A machine learning project using TensorFlow to solve complex tasks. It utilizes Python for machine learning tasks and data analysis. It detects faces and reads people's emotions through facial expressions. I used a Kaggle dataset for training, which contains thousands of facial expressions.",
      technologies: ["TensorFlow", "Python", "Machine Learning", "Kaggle"],
    },
    {
      id: 5,
      title: (
        <a href="https://tripwheelsnation.onrender.com/" className="tittle">
          Car Renting Website
        </a>
      ),
      year: "2023",
      images: ["/assets/tripwheels.PNG"],
      description:
        "An online platform for renting cars with a user-friendly interface. Built using JavaScript, Django, and MySQL.",
      technologies: ["JavaScript", "Django", "MySQL"],
    },
    {
      id: 6,
      title: (
        <a href="https://efootball.onrender.com/" className="tittle">
          eFootball Gaming WebApp
        </a>
      ),
      year: "2022",
      images: [
        "/assets/portfolio.PNG",
        "/assets/mks.PNG",
        "/assets/machakps.PNG",
      ],
      description:
        "A gaming website dedicated to eFootball enthusiasts with the latest updates and content. It has a user-friendly interface for hosting tournaments, generating fixtures, and calculating results for each participant. Developed using HTML, CSS, JavaScript, Express.js, and MongoDB.",
      technologies: ["HTML", "CSS", "JavaScript", "Express.js", "MongoDB"],
    },
    {
      id: 7,
      title: (
        <a href="#" className="tittle">
          Car Selling Website (MERN)
        </a>
      ),
      year: "2022",
      images: [
        "/assets/portfolio.PNG",
        "/assets/mks.PNG",
        "/assets/machakps.PNG",
      ],
      description:
        "A platform for buying and selling cars, connecting buyers and sellers. Built using the MERN (MongoDB, Express.js, React, Node.js) stack.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    },
  ];

  return (
    <div className="projects">
      {projects.map((project) => (
        <Card
          key={project.id}
          sx={{ maxWidth: 375 }}
          onClick={() => openModal(project)}
        >
          <CardMedia
            sx={{ height: 140 }}
            image={project.images[0]} // Display the first image from the images array
            // title={project.title.props.children}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {project.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {project.description}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Technologies:</strong> {project.technologies.join(", ")}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <strong>Year:</strong> {project.year}
            </Typography>
          </CardContent>
          {/* <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions> */}
        </Card>
      ))}
      {selectedProject && (
        <Modal
          open={open}
          onCancel={() => setOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
         className="custom-modal"
          // style={{
          //   backgroundColor: theme.palette.background.paper, 
          //   color: theme.palette.text.primary,
          // }}
        >
          <Carousel arrows infinite={false}>
            {selectedProject.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  style={{ width: "100%", height: "auto", ...contentStyle }}
                />
              </div>
            ))}
          </Carousel>
          <div
            style={{
              padding: 20,
              margin: "10% auto",
              maxWidth: 600,
              // backgroundColor: theme.palette.background.default,
              // color: theme.palette.text.primary,
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
            {/* <Button type="primary" onClick={() => openModal(selectedProject)}>
              Reload
            </Button> */}
          </div>
        </Modal>
      )}
    </div>
  );
}
