import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Box, 
  Typography, 
  Chip,
  useTheme,
  useMediaQuery 
} from '@mui/material';
import "./css/Experiences.css";

const Experience = ({ isDarkTheme }) => {
  const [expandedItems, setExpandedItems] = useState({});
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const experiences = [
    {
      id: 'freelance',
      title: 'Freelance Full-Stack Developerhhh',
      period: '2021 - Present',
      company: 'Various Clients',
      location: 'Remote',
      description: 'Delivered end-to-end web and mobile solutions for diverse clients across industries. Specialized in MERN stack applications, responsive design, and scalable architecture.',
      fullDescription: 'As a freelance developer, I\'ve successfully delivered 50+ projects including e-commerce platforms, SaaS applications, and mobile apps. My focus has been on creating scalable, maintainable code while ensuring excellent client communication and project management. Key achievements include reducing load times by 60% for e-commerce clients and implementing CI/CD pipelines that improved deployment efficiency.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'React Native', 'TypeScript'],
      achievements: ['50+ projects delivered', '95% client satisfaction', '60% performance improvement'],
      type: 'work'
    },
    {
      id: 'talentcompass',
      title: 'Software Development Intern',
      period: '2023',
      company: 'TalentCompass',
      location: 'Nairobi, Kenya',
      description: 'Contributed to enterprise-level applications and gained industry experience in agile development practices and cloud technologies.',
      fullDescription: 'During my internship at TalentCompass, I worked on mission-critical applications serving the HR industry. I was involved in full-stack development, database optimization, and implementing microservices architecture. Collaborated with senior developers to refactor legacy code and introduce modern development practices that improved team productivity by 30%.',
      technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Docker', 'AWS'],
      achievements: ['Improved team productivity by 30%', 'Refactored legacy systems', 'Implemented microservices'],
      type: 'work'
    },
    {
      id: 'hackathons',
      title: 'Hackathon Participant',
      period: '2021 - 2023',
      company: 'KU, KCA, MKU',
      location: 'Multiple Locations',
      description: 'Competed in university hackathons, developing innovative solutions under time constraints with cross-functional teams.',
      fullDescription: 'Participated in 10+ hackathons across Kenyan universities, consistently ranking in top positions. Developed solutions ranging from educational platforms to fintech applications. Led teams in agile development sprints, mentored junior developers, and pitched solutions to industry judges. Won 3 hackathons with innovative solutions in ed-tech and health-tech domains.',
      technologies: ['React', 'Firebase', 'APIs', 'UI/UX Design'],
      achievements: ['3 hackathon wins', '10+ competitions', 'Team leadership'],
      type: 'competition'
    },
    {
      id: 'supervised',
      title: 'Mentored Projects',
      period: '2022 - 2024',
      company: 'Industry Professionals',
      location: 'Remote',
      description: 'Received guidance from senior developers on complex projects, enhancing technical skills and industry knowledge.',
      fullDescription: 'Engaged in structured mentorship programs with senior software engineers and tech leads. Worked on advanced concepts including system architecture, performance optimization, and security best practices. Completed guided projects in machine learning integration, real-time applications, and enterprise-scale systems that prepared me for senior development roles.',
      technologies: ['System Design', 'Performance', 'Security', 'Architecture'],
      achievements: ['Advanced architecture skills', 'Security best practices', 'Performance optimization'],
      type: 'education'
    },
    {
      id: 'personal',
      title: 'Personal Projects & Innovation',
      period: '2020 - Present',
      company: 'Self-Directed',
      location: 'Remote',
      description: 'Built innovative applications exploring new technologies and solving real-world problems through code.',
      fullDescription: 'Developed 20+ personal projects including open-source contributions, tech blog with 10K+ readers, and experimental applications using emerging technologies. Focused on learning cutting-edge tools while creating practical solutions. Projects include AI-powered applications, IoT systems, and contributions to popular open-source libraries with 500+ GitHub stars collectively.',
      technologies: ['Next.js', 'AI/ML', 'IoT', 'Open Source'],
      achievements: ['20+ projects', '10K+ blog readers', 'Open source contributions'],
      type: 'projects'
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

  const getBorderColor = () => {
    return isDarkTheme 
      ? 'rgba(255, 255, 255, 0.1)' 
      : 'rgba(0, 0, 0, 0.1)';
  };

  const getTextColor = () => {
    return isDarkTheme ? '#E2E8F0' : '#1E293B';
  };

  const getAccentColor = () => {
    return isDarkTheme ? '#4ECDC4' : '#667eea';
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
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
            Professional Journey
          </Typography>
          <Typography 
            variant="h6" 
            className="section-subtitle"
            style={{ color: isDarkTheme ? '#94A3B8' : '#64748B' }}
          >
            My path through technology and innovation
          </Typography>
        </motion.div>

        <motion.div
          className="experiences-container"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              className={`experience-card ${exp.type} ${expandedItems[exp.id] ? 'expanded' : ''}`}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5
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
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="timeline-connector"></div>
              )}

              {/* Header */}
              <div className="experience-header">
                <div className="experience-badge">
                  <span 
                    className="badge-dot"
                    style={{ backgroundColor: getAccentColor() }}
                  ></span>
                  <span className="badge-period" style={{ color: getTextColor() }}>
                    {exp.period}
                  </span>
                </div>
                
                <div className="experience-title-section">
                  <Typography 
                    variant="h5" 
                    className="experience-title"
                    style={{ color: getTextColor() }}
                  >
                    {exp.title}
                  </Typography>
                  <Typography 
                    variant="subtitle1" 
                    className="experience-company"
                    style={{ color: getAccentColor() }}
                  >
                    {exp.company} • {exp.location}
                  </Typography>
                </div>
              </div>

              {/* Description */}
              <div className="experience-content">
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
                      <div className="technologies-section">
                        <Typography 
                          variant="h6" 
                          style={{ color: getTextColor(), marginBottom: '10px' }}
                        >
                          Technologies Used:
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
                                margin: '2px'
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="achievements-section">
                        <Typography 
                          variant="h6" 
                          style={{ color: getTextColor(), marginBottom: '10px' }}
                        >
                          Key Achievements:
                        </Typography>
                        <ul className="achievements-list">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} style={{ color: getTextColor() }}>
                              {achievement}
                            </li>
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
                >
                  ▼
                </motion.span>
              </motion.button>

              {/* Type Indicator */}
              <div 
                className="type-indicator"
                style={{ 
                  background: getThemeGradient(),
                  color: getTextColor()
                }}
              >
                {exp.type}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="experience-stats"
          style={{
            background: isDarkTheme 
              ? 'rgba(17, 25, 40, 0.8)'
              : 'rgba(255, 255, 255, 0.8)',
            border: `1px solid ${getBorderColor()}`,
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)'
          }}
        >
          <div className="stat-item">
            <Typography 
              variant="h3" 
              style={{
                background: isDarkTheme 
                  ? 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
                  : 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              4+
            </Typography>
            <Typography style={{ color: getTextColor() }}>
              Years Experience
            </Typography>
          </div>
          <div className="stat-item">
            <Typography 
              variant="h3"
              style={{
                background: isDarkTheme 
                  ? 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
                  : 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              50+
            </Typography>
            <Typography style={{ color: getTextColor() }}>
              Projects Delivered
            </Typography>
          </div>
          <div className="stat-item">
            <Typography 
              variant="h3"
              style={{
                background: isDarkTheme 
                  ? 'linear-gradient(45deg, #FF6B6B, #4ECDC4)'
                  : 'linear-gradient(45deg, #667eea, #764ba2)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              10+
            </Typography>
            <Typography style={{ color: getTextColor() }}>
              Hackathons
            </Typography>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;