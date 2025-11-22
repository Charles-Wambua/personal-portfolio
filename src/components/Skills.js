import React, { useState } from "react";
import { Flex, Progress, Tooltip } from "antd";
import { motion } from "framer-motion";
import "./css/Skills.css";

export const Skills = ({ isDarkTheme }) => {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const skillsData = [
    { name: "Java", icon: "devicon-java-plain", level: 92, color: "#ED8B00", category: "Backend" },
    { name: "Spring Boot", icon: "devicon-spring-plain", level: 94, color: "#6DB33F", category: "Backend" },
    { name: "Microservices", icon: "devicon-docker-plain", level: 91, color: "#2496ED", category: "Architecture" },
    { name: "Apache Kafka", icon: "devicon-apachekafka-original", level: 88, color: "#231F20", category: "Messaging" },
    { name: "AWS SQS", icon: "devicon-amazonwebservices-plain-wordmark", level: 89, color: "#FF9900", category: "Messaging" },
    { name: "Redis", icon: "devicon-redis-plain", level: 93, color: "#DC382D", category: "Database" },
    { name: "Kubernetes", icon: "devicon-kubernetes-plain", level: 87, color: "#326CE5", category: "DevOps" },
    { name: "AWS", icon: "devicon-amazonwebservices-plain-wordmark", level: 90, color: "#FF9900", category: "Cloud" },
    { name: "Docker", icon: "devicon-docker-plain", level: 95, color: "#2496ED", category: "DevOps" },
    { name: "PostgreSQL", icon: "devicon-postgresql-plain", level: 92, color: "#336791", category: "Database" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", level: 91, color: "#47A248", category: "Database" },
    { name: "Grafana", icon: "devicon-grafana-plain", level: 86, color: "#F46800", category: "Monitoring" },
    { name: "Loki", icon: "devicon-grafana-plain", level: 84, color: "#2C8BEB", category: "Monitoring" },
    { name: "Sentry", icon: "devicon-sentry-plain", level: 88, color: "#362D59", category: "Monitoring" },
    { name: "Twilio", icon: "devicon-twilio-plain", level: 89, color: "#F22F46", category: "Communication" },
    { name: "USSD", icon: "fas fa-mobile-alt", level: 87, color: "#10B981", category: "Communication" },
    { name: "Africas Talking", icon: "fas fa-comments", level: 85, color: "#EF4444", category: "Communication" },
    { name: "React", icon: "devicon-react-original", level: 96, color: "#61DAFB", category: "Frontend" },
    { name: "Next.js", icon: "devicon-nextjs-original", level: 94, color: "#000000", category: "Frontend" },
    { name: "TypeScript", icon: "devicon-typescript-plain", level: 95, color: "#3178C6", category: "Frontend" },
    { name: "Node.js", icon: "devicon-nodejs-plain-wordmark", level: 93, color: "#339933", category: "Backend" },
    { name: "Python", icon: "devicon-python-plain", level: 90, color: "#3776AB", category: "Backend" },
    { name: "Git", icon: "devicon-git-plain", level: 96, color: "#F05032", category: "Tools" },
    { name: "GitHub Actions", icon: "devicon-github-original", level: 88, color: "#2088FF", category: "DevOps" },
    { name: "Terraform", icon: "devicon-terraform-plain", level: 85, color: "#7B42BC", category: "DevOps" },
    { name: "GraphQL", icon: "devicon-graphql-plain", level: 89, color: "#E10098", category: "Backend" },
    { name: "Elasticsearch", icon: "devicon-elasticsearch-plain", level: 86, color: "#005571", category: "Database" },
  ];

  const categories = [...new Set(skillsData.map(skill => skill.category))];
  const filteredSkills = activeCategory === "All" 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);

  // Calculate average proficiency
  const averageProficiency = Math.round(skillsData.reduce((acc, skill) => acc + skill.level, 0) / skillsData.length);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.05,
      y: -5,
      transition: {
        duration: 0.2
      }
    }
  };

  const getProgressColor = (level) => {
    if (level >= 90) return isDarkTheme ? "#10B981" : "#059669";
    if (level >= 80) return isDarkTheme ? "#3B82F6" : "#2563EB";
    if (level >= 70) return isDarkTheme ? "#F59E0B" : "#D97706";
    return isDarkTheme ? "#EF4444" : "#DC2626";
  };

  const getThemeGradient = () => {
    return isDarkTheme 
      ? "linear-gradient(45deg, #FF6B6B, #4ECDC4)" 
      : "linear-gradient(45deg, #667eea, #764ba2)";
  };

  const getCardBackground = () => {
    return isDarkTheme 
      ? "rgba(17, 25, 40, 0.8)" 
      : "rgba(255, 255, 255, 0.8)";
  };

  const getBorderColor = () => {
    return isDarkTheme 
      ? "rgba(255, 255, 255, 0.1)" 
      : "rgba(0, 0, 0, 0.1)";
  };

  const getTextColor = () => {
    return isDarkTheme ? "#E2E8F0" : "#1E293B";
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="skills" id="skills">
        <div className="col-lg-12 heading">
          <motion.h2
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ color: getTextColor() }}
          >
            Enterprise Skills & Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ color: isDarkTheme ? "#94A3B8" : "#64748B" }}
          >
            Expert-level proficiency across the full technology stack
          </motion.p>
        </div>

        {/* Category Filter */}
        <motion.div 
          className="skills-categories"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            className={`category-filter ${activeCategory === "All" ? "active" : ""} ${isDarkTheme ? "dark" : "light"}`}
            onClick={() => setActiveCategory("All")}
            style={{
              background: activeCategory === "All" ? getThemeGradient() : isDarkTheme ? "rgba(30, 41, 59, 0.8)" : "rgba(248, 250, 252, 0.8)",
              color: activeCategory === "All" ? "white" : getTextColor(),
              border: `1px solid ${activeCategory === "All" ? "transparent" : getBorderColor()}`
            }}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`category-filter ${activeCategory === category ? "active" : ""} ${isDarkTheme ? "dark" : "light"}`}
              onClick={() => setActiveCategory(category)}
              style={{
                background: activeCategory === category ? getThemeGradient() : isDarkTheme ? "rgba(30, 41, 59, 0.8)" : "rgba(248, 250, 252, 0.8)",
                color: activeCategory === category ? "white" : getTextColor(),
                border: `1px solid ${activeCategory === category ? "transparent" : getBorderColor()}`
              }}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              className={`skill-card ${isDarkTheme ? "dark" : "light"}`}
              variants={itemVariants}
              whileHover="hover"
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              style={{
                background: getCardBackground(),
                border: `1px solid ${getBorderColor()}`,
                color: getTextColor(),
                '--skill-color': skill.color,
                '--glow-opacity': hoveredSkill === skill.name ? 1 : 0,
                '--theme-gradient': getThemeGradient()
              }}
            >
              {/* Animated Background Glow */}
              <div className="skill-glow"></div>
              
              {/* Skill Icon */}
              <Tooltip title={`${skill.level}% Proficiency`} placement="top">
                <div className="skill-icon-wrapper">
                  <i 
                    className={skill.icon} 
                    style={{ color: skill.color }}
                  ></i>
                  <div 
                    className="skill-level-badge"
                    style={{
                      background: getThemeGradient()
                    }}
                  >
                    {skill.level}%
                  </div>
                </div>
              </Tooltip>

              {/* Skill Info */}
              <div className="skill-info">
                <h4 
                  className="skill-name"
                  style={{
                    background: getThemeGradient(),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {skill.name}
                </h4>
                <span 
                  className="skill-category"
                  style={{
                    background: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)",
                    color: getTextColor()
                  }}
                >
                  {skill.category}
                </span>
                
                {/* Animated Progress Bar */}
                <div 
                  className="skill-progress-container"
                  style={{
                    background: isDarkTheme ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"
                  }}
                >
                  <div 
                    className="skill-progress-bar"
                    style={{
                      width: `${skill.level}%`,
                      backgroundColor: getProgressColor(skill.level)
                    }}
                  >
                    <div className="progress-glow"></div>
                  </div>
                </div>
                
                <div 
                  className="skill-level-text"
                  style={{ color: getTextColor() }}
                >
                  {skill.level >= 90 ? "Expert" : 
                   skill.level >= 80 ? "Advanced" : 
                   skill.level >= 70 ? "Intermediate" : "Beginner"}
                </div>
              </div>

              {/* Hover Effect */}
              <div 
                className="skill-hover-effect"
                style={{
                  background: isDarkTheme 
                    ? "linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, transparent 50%)"
                    : "linear-gradient(135deg, rgba(0, 0, 0, 0.05) 0%, transparent 50%)"
                }}
              ></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div 
          className="skills-summary"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div 
            className="summary-card"
            style={{
              background: getCardBackground(),
              border: `1px solid ${getBorderColor()}`,
              color: getTextColor()
            }}
          >
            <h3 style={{ color: getTextColor() }}>Expert-Level Proficiency</h3>
            <div className="summary-stats">
              <div className="stat">
                <span 
                  className="stat-number"
                  style={{
                    background: getThemeGradient(),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {skillsData.length}+
                </span>
                <span className="stat-label" style={{ color: getTextColor() }}>
                  Technologies
                </span>
              </div>
              <div className="stat">
                <span 
                  className="stat-number"
                  style={{
                    background: getThemeGradient(),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {averageProficiency}%
                </span>
                <span className="stat-label" style={{ color: getTextColor() }}>
                  Average Proficiency
                </span>
              </div>
              <div className="stat">
                <span 
                  className="stat-number"
                  style={{
                    background: getThemeGradient(),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  {categories.length}
                </span>
                <span className="stat-label" style={{ color: getTextColor() }}>
                  Specializations
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};