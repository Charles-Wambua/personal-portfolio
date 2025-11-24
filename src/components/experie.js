import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Box,
  Typography,
  Chip,
  useTheme,
  useMediaQuery
} from "@mui/material";
import "./css/Experiences.css";

const Experience = ({ isDarkTheme }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      id: 'SPIRO',
      title: 'Software Engineer',
      period: '2025.06 - Present',
      company: 'Spiro(Africa Smart Mobility Solutions Kenya Ltd) ',
      location: 'Nairobi, Kenya',
      description: 'Building and maintaining high-performance backend microservices powering Spiro’s payment and customer onboarding operations across Africa.',
      fullDescription: 'At Spiro, I work as a core backend engineer responsible for developing, optimizing, and scaling Java Spring Boot and Python microservices that handle mission-critical payment workflows across multiple African markets. My work includes integrating with telecom operators (MTN Rwanda, Safaricom, Airtel Uganda, etc.), implementing secure transaction processing, building Kafka-based event streams, leveraging Redis for caching, and ensuring system reliability and observability across the platform. I also collaborate across teams to build internal services, automate processes, and strengthen platform performance.',
      technologies: ['Java', 'Spring Boot', 'Python', 'Kafka', 'Redis', 'PostgreSQL', 'Docker', 'Kubernetes', 'GCP'],
      tools: ['Git', 'GitLab', 'Sentry', 'Grafana', 'Prometheus', 'JIRA', 'Slack'],
      achievements: [
        'Implemented and optimized payment integration services across multiple African markets',
        'Improved system performance using Redis caching and Kafka streaming',
        'Built and maintained microservices supporting onboarding, payments, and internal operations'
      ]
    },

    {
      id: 'venertech',
      title: 'Lead Software Engineer',
      period: '2024.10 - 2025.05',
      company: 'VenerTech Solutions',
      location: 'Nairobi, Kenya',
      //  type: 'work',
      description: 'Leading full-stack development, DevOps, and deployment processes for scalable web applications with real-time functionality.',
      fullDescription: 'As the main Software Engineer at the startup, I lead the full-stack development, DevOps, and deployment processes, building scalable web applications with real-time functionality using WebSockets. I am responsible for architecting and implementing the backend, designing intuitive frontend interfaces, managing cloud infrastructure, and ensuring seamless CI/CD pipelines.',
      technologies: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'MongoDB', 'WebSockets', 'Docker', 'Kubernetes', 'GCP', 'AWS'],
      tools: ['Git', 'JIRA', 'Docker', 'GitLab', 'Slack', 'ClickUp', 'Sentry', 'PagerDuty', 'pgAdmin'],
      achievements: ['End-to-end software lifecycle ownership', 'Real-time application development', 'Cloud infrastructure management']
    },
    {
      id: 'roam',
      title: 'Software Engineer',
      period: '2024.01 - 2024.10',
      company: 'Roam Electric',
      location: 'Nairobi, Kenya',
     // type: 'work',
      description: 'Developed and maintained software solutions for electric vehicle products and services.',
      fullDescription: 'Worked on both front-end and back-end development for various projects, including web and mobile applications. Implemented and deployed features using React.js, React Native, and Express.js. Managed databases with MySQL, and handled deployments using Google Cloud Platform (GCP) and Kubernetes. Successfully deployed iOS and Android applications to their respective stores.',
      technologies: ['React.js', 'React Native', 'Express.js', 'MySQL', 'GCP', 'Kubernetes'],
      tools: ['Git', 'JIRA', 'Docker', 'GitLab', 'Slack', 'ClickUp', 'Sentry', 'PagerDuty', 'Google Play Console', 'Apple Developer'],
      achievements: ['iOS/Android app deployments', 'Cloud infrastructure management', 'Full-stack feature development']
    },
    {
      id: 'andela',
      title: 'Software Engineer',
      period: '2021.02 - 2023.10',
      company: 'Andela',
      location: 'Nairobi, Kenya',
   //   type: 'work',
      description: 'Built cross-platform applications and dynamic websites for global clients.',
      fullDescription: 'Played a key role in building cross-platform applications and dynamic websites using Next.js and FastAPI. Collaborated closely with other developers to implement scalable, high-performance features. Focused on clean code, component reusability, and seamless API integration.',
      technologies: ['Next.js', 'FastAPI', 'PostgreSQL', 'React.js', 'TypeScript', 'Node.js'],
      tools: ['Git', 'JIRA', 'VS Code', 'GitLab', 'Postman'],
      achievements: ['Scalable application development', 'Clean code practices', 'API integration']
    },
    {
      id: 'techa',
      title: 'Software Developer Apprentice',
      period: '2020.01 - 2020.06',
      company: 'TechA',
      location: 'Remote, Kenya',
  //    type: 'work',
      description: 'Hands-on exposure to real-world development workflows and collaborative coding practices.',
      fullDescription: 'This apprenticeship was a pivotal point in my career, offering hands-on exposure to real-world development workflows. I worked closely with a supportive team to build and maintain websites and mobile applications while learning to navigate version control, task tracking, and agile methodologies.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Next.js', 'PostgreSQL', 'Express.js', 'Node.js'],
      tools: ['Git', 'JIRA', 'VS Code', 'GitLab'],
      achievements: ['Full-stack development foundation', 'Agile methodology experience', 'Collaborative coding practices']
    },
    {
      id: 'hackathons',
      title: 'Hackathon Participant',
      period: '2022.05 - Present',
      company: 'Various (KU, KCA, MKU)',
      location: 'Worldwide',
   //   type: 'competition',
      description: 'Participated in hackathons developing innovative solutions under tight deadlines.',
      fullDescription: 'Collaborated with teams to develop projects under tight deadlines, leveraging a range of technologies including web and mobile app development. Contributed to brainstorming sessions, coding, testing, and presenting final solutions. Achieved recognition for creativity, problem-solving, and technical proficiency.',
      technologies: ['React.js', 'Node.js', 'Python', 'Rapid Prototyping'],
      tools: ['GitHub', 'VS Code', 'Slack', 'Zoom'],
      achievements: ['Multiple competition participations', 'Creative problem-solving', 'Team collaboration under pressure']
    },
    {
      id: 'personal',
      title: 'Self-Initiated Projects',
      period: '2020.01 - Present',
      company: 'Personal Ventures',
      location: 'Remote',
  //    type: 'projects',
      description: 'Building projects to solve real-world problems and explore emerging technologies.',
      fullDescription: 'Dedicated personal time to building several projects aimed at solving real-world problems and exploring emerging technologies. Successfully developed and deployed multiple web and mobile applications. Actively contributed to open-source software and participated in coding challenges.',
      technologies: ['React.js', 'Next.js', 'FastAPI', 'Node.js', 'Python', 'PostgreSQL', 'TypeScript', 'Docker', 'Firebase'],
      tools: ['GitHub', 'VS Code', 'Docker', 'Vercel', 'Netlify', 'Railway', 'Firebase'],
      achievements: ['Multiple deployed applications', 'Open-source contributions', 'Emerging technology exploration']
    },
    {
      id: 'freelance',
      title: 'Freelance Software Developer',
      period: '2019.01 - 2022.10',
      company: 'Fiverr & Freelance',
      location: 'Remote',
  //    type: 'work',
      description: 'Provided custom software solutions and API development services to clients worldwide.',
      fullDescription: 'Developed a range of custom software applications and APIs, working directly with clients to understand their requirements and deliver solutions that meet their specifications. Managed projects from inception through deployment, ensuring high-quality and timely delivery.',
      technologies: ['JavaScript', 'React.js', 'Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'MySQL'],
      tools: ['Git', 'VS Code', 'Postman', 'JIRA', 'Swagger UI'],
      achievements: ['50+ projects delivered', 'Client requirement analysis', 'End-to-end project management']
    }
  ];

  const toggleExpand = (id) => {
    setExpandedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getThemeGradient = () => {
    return isDarkTheme
      ? 'linear-gradient(135deg, rgba(255, 107, 107, 0.1), rgba(78, 205, 196, 0.1))'
      : 'linear-gradient(135deg, rgba(102, 126, 234, 0.1), rgba(118, 75, 162, 0.1))';
  };

  const getAccentGradient = () => {
    return isDarkTheme
      ? 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
      : 'linear-gradient(45deg, #667eea, #764ba2)';
  };

  const getBorderColor = () => {
    return isDarkTheme
      ? 'rgba(255, 255, 255, 0.1)'
      : 'rgba(0, 0, 0, 0.1)';
  };

  const getTextColor = () => {
    return isDarkTheme ? '#E2E8F0' : '#1E293B';
  };

  const getSecondaryTextColor = () => {
    return isDarkTheme ? '#94A3B8' : '#64748B';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="experience-section" id="experience">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="experience-header"
        >
          <Typography
            variant="h2"
            className="section-title"
            style={{ color: getTextColor() }}
          >
            Professional Experience
          </Typography>
          <Typography
            variant="h6"
            className="section-subtitle"
            style={{ color: getSecondaryTextColor() }}
          >
            My journey through software engineering and innovation
          </Typography>
        </motion.div>

        <motion.div
          className="experiences-timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} ${exp.type}`}
              variants={itemVariants}
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="timeline-connector"></div>
              )}

              {/* Timeline dot */}
              <div
                className="timeline-dot"
                style={{
                  background: getAccentGradient(),
                  border: `3px solid ${isDarkTheme ? '#1e293b' : 'white'}`
                }}
              >
                <div className="dot-pulse"></div>
              </div>

              {/* Experience card */}
              <motion.div
                className="experience-card"
                whileHover={{
                  scale: 1.02,
                  y: -2
                }}
                style={{
                  background: isDarkTheme
                    ? 'rgba(17, 25, 40, 0.8)'
                    : 'rgba(255, 255, 255, 0.8)',
                  border: `1px solid ${getBorderColor()}`,
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)'
                }}
              >
                {/* Header */}
                <div className="card-header">
                  <div className="header-left">
                    <Typography
                      variant="h5"
                      className="experience-title"
                      style={{ color: getTextColor() }}
                    >
                      {exp.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      className="experience-company"
                      style={{
                        background: getAccentGradient(),
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      {exp.company}
                    </Typography>
                  </div>
                  <div className="header-right">
                    <Typography
                      variant="body2"
                      className="experience-period"
                      style={{ color: getSecondaryTextColor() }}
                    >
                      {exp.period}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="experience-location"
                      style={{ color: getSecondaryTextColor() }}
                    >
                      📍 {exp.location}
                    </Typography>
                  </div>
                </div>

                {/* Description */}
                <div className="card-content">
                  <Typography
                    variant="body1"
                    className="experience-description"
                    style={{ color: getTextColor() }}
                  >
                    {expandedItems[exp.id] ? exp.fullDescription : exp.description}
                  </Typography>

                  <AnimatePresence>
                    {expandedItems[exp.id] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="expanded-content"
                      >
                        {/* Technologies */}
                        <div className="content-section">
                          <Typography
                            variant="h6"
                            style={{ color: getTextColor(), marginBottom: '12px' }}
                          >
                            Technologies:
                          </Typography>
                          <div className="tech-chips">
                            {exp.technologies.map(tech => (
                              <Chip
                                key={tech}
                                label={tech}
                                size="small"
                                style={{
                                  background: getThemeGradient(),
                                  color: getTextColor(),
                                  border: `1px solid ${getBorderColor()}`,
                                  margin: '2px',
                                  fontWeight: 500
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Tools */}
                        <div className="content-section">
                          <Typography
                            variant="h6"
                            style={{ color: getTextColor(), marginBottom: '12px' }}
                          >
                            Tools:
                          </Typography>
                          <div className="tools-list">
                            {exp.tools.map(tool => (
                              <span
                                key={tool}
                                className="tool-tag"
                                style={{
                                  background: getThemeGradient(),
                                  color: getTextColor(),
                                  border: `1px solid ${getBorderColor()}`
                                }}
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div className="content-section">
                          <Typography
                            variant="h6"
                            style={{ color: getTextColor(), marginBottom: '12px' }}
                          >
                            Key Achievements:
                          </Typography>
                          <ul className="achievements-list">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                style={{ color: getTextColor() }}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                              >
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Expand Button */}
                <motion.button
                  className="expand-button"
                  onClick={() => toggleExpand(exp.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: getThemeGradient(),
                    color: getTextColor(),
                    border: `1px solid ${getBorderColor()}`
                  }}
                >
                  {expandedItems[exp.id] ? 'Show Less' : 'Learn More'}
                  <motion.span
                    animate={{ rotate: expandedItems[exp.id] ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{ marginLeft: '8px' }}
                  >
                    ▼
                  </motion.span>
                </motion.button>

                {/* Type Badge */}
                <div
                  className="type-badge"
                  style={{
                    background: getAccentGradient(),
                    color: 'white'
                  }}
                >
                  {exp.type}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="experience-summary"
          style={{
            background: isDarkTheme
              ? 'rgba(17, 25, 40, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
            border: `1px solid ${getBorderColor()}`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <div className="summary-item">
            <Typography
              variant="h3"
              style={{
                background: getAccentGradient(),
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              5+
            </Typography>
            <Typography style={{ color: getTextColor() }}>
              Years Experience
            </Typography>
          </div>
          <div className="summary-item">
            <Typography
              variant="h3"
              style={{
                background: getAccentGradient(),
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              7+
            </Typography>
            <Typography style={{ color: getTextColor() }}>
              Companies
            </Typography>
          </div>
          <div className="summary-item">
            <Typography
              variant="h3"
              style={{
                background: getAccentGradient(),
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              50+
            </Typography>
            <Typography style={{ color: getTextColor() }}>
              Projects
            </Typography>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;