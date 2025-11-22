import React, { useEffect, useState } from "react";
import "./css/Footer.css";

const Footer = ({ isDarkTheme }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Create floating code elements
  const codeSnippets = [
    "const dev = new Developer();",
    "function createMagic() { }",
    "<Code quality='excellent'/>",
    "AI.assist(developer);"
  ];

  // Create particles
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 4
  }));

  return (
    <footer className={`footer-container ${isDarkTheme ? "dark-theme" : "light-theme"}`}>
      {/* Animated Background Elements */}
      <div className="footer-bg-elements">
        {codeSnippets.map((code, index) => (
          <div key={index} className="floating-code">
            {code}
          </div>
        ))}
      </div>

      {/* Floating Particles */}
      <div className="footer-particles">
        {particles.map(particle => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: `${particle.left}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`
            }}
          />
        ))}
      </div>

      <div className="footer-glass">
        <div className="footer-content">
          {/* Brand Section */}
          <div className="footer-brand">
            <div className="brand-logo">
              CHARLES.W
            </div>
            <p className="brand-tagline">
              Crafting digital experiences with clean code, innovative solutions, 
              and passion for technology. Turning ideas into reality, one line at a time.
            </p>
            <div className="live-status">
              <div className="status-dot"></div>
              Available for new projects
            </div>
          </div>

          {/* Social Links */}
          <div className="social-section">
            <h3 className="social-title">Connect With Me</h3>
            <div className="social-links-grid">
              <a
                href="https://wa.me/254114652533"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-glass whatsapp"
                aria-label="WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/thatsme.charles/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-glass instagram"
                aria-label="Instagram"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://twitter.com/Charles59676543"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-glass twitter"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/Charles-Wambua"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-glass github"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link-glass linkedin"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div className="contact-section">
            <h3 className="contact-title">Get In Touch</h3>
            <div className="contact-info-glass">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:cm3290006@gmail.com" className="contact-link">
                  cm3290006@gmail.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <a href="tel:+254114652533" className="contact-link">
                  +254 114 652 533
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">🕐</span>
                <span>Nairobi Time: {currentTime.toLocaleTimeString()}</span>
              </div>
              <div className="location-pin">
                <span>📍</span>
                <span>Based in Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="tech-stack">
            <div className="tech-title">Tech Stack</div>
            <div className="tech-tags">
              <span className="tech-tag">React</span>
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Python</span>
              <span className="tech-tag">AWS</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">MongoDB</span>
              <span className="tech-tag">Firebase</span>
            </div>
          </div>

          {/* Credits */}
          <div className="footer-credits">
            <p className="credits-text">
              © {new Date().getFullYear()} Charles Wambua. All rights reserved. 
              Built with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="credits-link">React</a>, 
              designed in <a href="https://figma.com" target="_blank" rel="noopener noreferrer" className="credits-link">Figma</a>, 
              styled with <a href="https://mui.com" target="_blank" rel="noopener noreferrer" className="credits-link">Material-UI</a>, 
              <a href="https://ant.design" target="_blank" rel="noopener noreferrer" className="credits-link"> Ant Design</a>, 
              and <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer" className="credits-link">Bootstrap</a>.
              Deployed with passion and ☕.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;