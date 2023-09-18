import "./css/Projects.css";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "My Portfolio",
      year: "2023",
      image: "/portfolio.PNG",
      description: "I build this project using Reactjs, html5 and css. I used icons from iconify and reactjs icon together with fontawesome",
    },
    {
      title: "TensorFlow Project",
      year: "2023",
      image: "/tensoflow.jpg",
      description: "A machine learning project using TensorFlow to solve complex tasks. It utilizes Python for machine learning tasks and data analysis. It detects faces, and reads peoples emotions through facial expressios",
    },
    {
      title: "Car Rental Website (MERN)",
      year: "2023",
      image: "/tripwheels.PNG",
      description: "An online platform for renting cars with a user-friendly interface. Built using Javascript, Django and mysql"
    },
    {
      title: "eFootball Gaming Website",
      year: "2022",
      image: "/efootball.jpg",
      description: "A gaming website dedicated to eFootball enthusiasts with the latest updates and content. It has a user-friendly interface for hosting tounaments, generating fixtures and calculating results for each participant. Developed using HTML, CSS JavaScript, expressjs and Mongodb.",
    },
    {
      title: "Car Selling Website (MERN)",
      year: "2022",
      image: "/carhub.PNG",
      description: "A platform for buying and selling cars, connecting buyers and sellers. Built using the MERN (MongoDB, Express.js, React, Node.js) stack.",
    },
  ];
  

  const openProjectModal = (project) => {
    setSelectedProject(project);
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="title">
      <h2 style={{ paddingTop: 5, fontSize: 24, fontWeight: "900" }}>
        Projects
      </h2>

      <div className="projects" id="projects">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            // variants={fadeIn("left", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="project"
            onClick={() => openProjectModal(project)}
          >
            <img src={project.image} alt="image" />
            <span className="yearr">{project.year}</span>
            <br />
            <span className="titleee">{project.title}</span>
          </motion.div>
        ))}
      </div>

      {selectedProject && (
        <div className={`modal ${selectedProject ? "active" : ""}`}>
          <div className="modal-content">
            <span className="close" onClick={closeProjectModal}>
              &times;
            </span>
            <div className="separator"></div> {/* Add the separator line */}
            <div className="above">
              <img src={selectedProject.image} alt="Project Image" />
              <span className="yearr">{selectedProject.year}</span>
              <br />
              <span className="titlee">{selectedProject.title}</span>
              <br />
              <span className="descriptionn">{selectedProject.description}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
