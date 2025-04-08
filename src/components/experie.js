import React, { useEffect } from "react";
import "./css/exx.css";
import "./css/back.css";

const Experience = ({ isDarkTheme }) => {
  useEffect(() => {
    const timelineBlocks = document.querySelectorAll(".timeline>li");
    const offset = 0.8;

    const hideBlocks = (blocks, offset) => {
      blocks.forEach((block) => {
        if (block.getBoundingClientRect().top > window.innerHeight * offset) {
          block
            .querySelectorAll(
              ".timeline-badge, .timeline-content, .timeline-panel"
            )
            .forEach((el) => {
              el.classList.add("is-hidden");
            });
        }
      });
    };

    const showBlocks = (blocks, offset) => {
      blocks.forEach((block) => {
        if (block.getBoundingClientRect().top <= window.innerHeight * offset) {
          block
            .querySelectorAll(
              ".timeline-badge, .timeline-content, .timeline-panel"
            )
            .forEach((el) => {
              el.classList.remove("is-hidden");
              el.classList.add("bounce-in");
            });
        } else {
          block
            .querySelectorAll(
              ".timeline-badge, .timeline-content, .timeline-panel"
            )
            .forEach((el) => {
              el.classList.remove("bounce-in");
              el.classList.add("is-hidden");
            });
        }
      });
    };

    const handleScroll = () => {
      showBlocks(timelineBlocks, offset);
    };

    hideBlocks(timelineBlocks, offset);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <section id="experience">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 heading">
              <h2>Experience</h2>
              <p>Professional Experience, Projects, and Internships</p>

            </div>
            <div className="experience_container">
              <ul className="timeline">
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2024.10 - Present</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Nairobi,
                          Kenya
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Lead Software Engineer</h4>
                    </div>

                    <div className="timeline-body">
                      <p>
                        <b>Company:</b> VenerTech Solutions
                        <br />
                        <b>Introduction:</b> VenerTech Solutions is an IT Solutions company that offers System support and IT Consulting services to Businesses.
                        <br />
                        <b>Contribution:</b> As the main Software Engineer at the startup, I lead the full-stack development, DevOps, and deployment processes, building scalable web applications with real-time functionality using WebSockets. I am responsible for architecting and implementing the backend, designing intuitive frontend interfaces, managing cloud infrastructure, and ensuring seamless CI/CD pipelines. My role requires end-to-end ownership of the software lifecycle, from development and testing to deployment and monitoring, while optimizing system performance to meet the dynamic needs of a growing business.
                        <br />
                        <b>Skills:</b>Full-Stack Development, WebSockets, React.js, Node.js, Express.js, PostgreSQL, MongoDB, REST APIs, CI/CD Pipelines, DevOps, Cloud Infrastructure (GCP, AWS), Docker, Kubernetes, Agile Development, Real-Time Communication, Version Control (Git), Unit Testing, System Monitoring and Optimization.
                        <br />
                        <b>Main Tools:</b> Git, JIRA, Docker,Gitlab, Slack,
                        Clickup, Sentry, Pagerduty,GCP, pgAdmin
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2024.01 - 2024.10</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Nairobi,
                          Kenya
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Software Engineer</h4>
                    </div>

                    <div className="timeline-body">
                      <p>
                        <b>Company:</b> Roam Electric
                        <br />
                        <b>Introduction:</b> Roam Electric is a leading company
                        in the electric vehicle industry, focusing on
                        sustainable transportation solutions. I was part of the
                        team responsible for developing and maintaining various
                        software solutions that support the company's products
                        and services.
                        <br />
                        <b>Contribution:</b> Worked on both front-end and
                        back-end development for various projects, including web
                        and mobile applications. Implemented and deployed
                        features using React.js, React Native, and Express.js.
                        Managed databases with MySQL, and handled deployments
                        using Google Cloud Platform (GCP) and Kubernetes.
                        Successfully deployed iOS and Android applications to
                        their respective stores.
                        <br />
                        <b>Skills:</b> React.js, React Native, Express.js,
                        MySQL, GCP, Kubernetes, iOS/Android Deployments
                        <br />
                        <b>Main Tools:</b> Git, JIRA, Docker,Gitlab, Slack,
                        Clickup, Sentry, Pagerduty,GCP, Google Play Console,
                        Apple Developer
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2021.02 - 2023.10</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Nairobi,
                          Kenya
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        Software Engineer
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Company:</b> Andela, Nairobi, Kenya
                        <br />
                        <b>Introduction:</b> Andela is a global talent network that connects companies with vetted engineers from emerging markets. Based in Nairobi, the local team contributes to world-class tech solutions across industries.
                        <br />
                        <b>Contribution:</b> Played a key role in building cross-platform applications and dynamic websites using Next.js and FastAPI. Collaborated closely with other developers to implement scalable, high-performance features. Focused on clean code, component reusability, and seamless API integration.
                        <br />
                        <b>Skills:</b> Next.js, FastAPI, PostgreSQL, React.js, TypeScript, Node.js
                        <br />
                        <b>Main Tools:</b> Git, JIRA, Visual Studio Code, GitLab, Postman
                      </p>
                    </div>
                  </div>

                </li>
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2020.01 - 2020.06</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Remote, Kenya
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        Software Developer Apprentice
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Company:</b> TechA
                        <br />
                        <b>Introduction:</b> TechA is a technology solutions provider focusing on web and mobile app development across diverse industries.
                        <br />
                        <b>Experience:</b> This apprenticeship was a pivotal point in my career, offering hands-on exposure to real-world development workflows. I worked closely with a supportive team to build and maintain websites and mobile applications while learning to navigate version control, task tracking, and agile methodologies.
                        <br />
                        <b>Growth:</b> Gained practical experience in full-stack development, responsive design, RESTful APIs, and collaborative coding practices. This role sparked my passion for clean, maintainable code and scalable architecture.
                        <br />
                        <b>Skills:</b> HTML5, CSS3, JavaScript, React.js, Next.js, PostgreSQL, Express.js, Node.js
                        <br />
                        <b>Main Tools:</b> Git, JIRA, Visual Studio Code, GitLab
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2022.05 - Present</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span>WorldWide🌏
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">Hackathon Participant</h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Scope:</b> Participated in various hackathons held in
                        Nairobi, Nakuru, and online platforms. These events
                        focused on solving real-world problems, developing
                        innovative solutions, and showcasing technical skills in
                        a competitive environment.
                        <br />
                        <b>Contribution:</b> Collaborated with teams to develop
                        projects under tight deadlines, leveraging a range of
                        technologies including web and mobile app development.
                        Contributed to brainstorming sessions, coding, testing,
                        and presenting final solutions. Achieved recognition for
                        creativity, problem-solving, and technical proficiency.
                        <br />
                        <b>Skills:</b> Hackathon Strategy, Rapid Prototyping,
                        Team Collaboration, React.js, Node.js, Python
                        <br />
                        <b>Main Tools:</b> GitHub, Visual Studio Code, Slack,
                        Zoom
                      </p>
                    </div>
                  </div>
                </li>

                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2020.01 - present</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Remote
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        Self-Initiated Projects
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Scope:</b> Dedicated personal time to building several projects aimed at solving real-world problems and exploring emerging technologies. These projects have helped strengthen my skills across full-stack development and software architecture.
                        <br />
                        <b>Contribution:</b> Successfully developed and deployed multiple web and mobile applications. Actively contributed to open-source software, collaborated with other developers online, and participated in hackathons and coding challenges. These efforts have expanded my understanding of scalable systems, clean code practices, and modern dev workflows.
                        <br />
                        <b>Skills:</b> React.js, Next.js, FastAPI, Node.js, Python, PostgreSQL, TypeScript, Docker, Firebase
                        <br />
                        <b>Main Tools:</b> GitHub, VS Code, Docker, Vercel, Netlify, Railway, Firebase
                      </p>
                    </div>
                  </div>

                </li>
                <li>
                  <div className="timeline-badge default">
                    <span className="fab fa-gratipay"></span>
                  </div>
                  <div className="timeline-panel">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">2019.01 - 2022.10</h4>
                      <p>
                        <small className="text-muted">
                          <span className="fa fa-map-marker"></span> Remote
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-heading">
                      <h4 className="timeline-title">
                        Freelance Software Developer
                      </h4>
                    </div>
                    <div className="timeline-body">
                      <p>
                        <b>Platform:</b> Fiverr and Freelance Projects
                        <br />
                        <b>Introduction:</b> As a freelance software developer,
                        I offer custom software solutions and API development
                        services to clients worldwide. My projects vary from
                        creating bespoke applications to developing and
                        integrating APIs tailored to specific business needs.
                        <br />
                        <b>Contribution:</b> Developed a range of custom
                        software applications and APIs, working directly with
                        clients to understand their requirements and deliver
                        solutions that meet their specifications. Managed
                        projects from inception through deployment, ensuring
                        high-quality and timely delivery.
                        <br />
                        <b>Skills:</b>JavaScript, React.js, Node.js, Express.js,
                        RESTful APIs, MongoDB, MySQL, (MERN Stack)
                        <br />
                        <b>Main Tools:</b> Git, VS Code, Postman, JIRA, Swagger
                        UI
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
