import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../variants";
import "./css/Banner.css";

const Banner = ({ isDarkTheme, onToggleTheme }) => {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [sendStatus, setSendStatus] = useState("");

  const EMAILJS_CONFIG = {
    serviceId: "service_po3tnt8",
    templateId: "template_tvbbtge",
    publicKey: "BF88A9DW6wlliviAo",
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!message.trim()) {
      setSendStatus("Please enter a message");
      setTimeout(() => setSendStatus(""), 3000);
      return;
    }

    if (message.length < 5) {
      setSendStatus("Message is too short");
      setTimeout(() => setSendStatus(""), 3000);
      return;
    }

    setIsSending(true);
    setSendStatus("Sending your message...");

    try {
      await sendEmailWithEmailJS(message);
      setSendStatus("Message sent successfully! 🎉");
      setMessage("");

      // Clear status after 4 seconds
      setTimeout(() => setSendStatus(""), 4000);
    } catch (error) {
      console.error("Email sending failed:", error);
      setSendStatus("Failed to send message. Please try again or contact me directly.");

      // Clear error after 5 seconds
      setTimeout(() => setSendStatus(""), 5000);
    } finally {
      setIsSending(false);
    }
  };

  const sendEmailWithEmailJS = async (msg) => {
    // Check if EmailJS credentials are configured
    if (EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID" ||
      EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID" ||
      EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") {
      throw new Error("EmailJS not configured. Please set up your EmailJS credentials.");
    }

    const templateParams = {
      from_name: "Portfolio Visitor",
      message: msg,
      to_name: "Charles",
      reply_to: "visitor@portfolio.com",
      timestamp: new Date().toLocaleString(),
    };

    return await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId,
      templateParams,
      EMAILJS_CONFIG.publicKey
    );
  };

  // Fallback to mailto if EmailJS fails or isn't configured
  const handleMailToFallback = () => {
    const subject = "Message from Portfolio";
    const body = message;
    const mailtoLink = `mailto:charleswambua@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(mailtoLink, '_blank');
  };

  return (
    <div className={isDarkTheme ? "dark-theme" : "light-theme"}>
      <div className="banner-container-ios">
        {/* Dark Mode Overlay */}
        <div className="banner-dark-overlay"></div>

        <div className="banner-left-ios">
          {/* Theme Toggle */}
          <label className={`theme-toggle-ios d-flex ${isDarkTheme ? "checked" : ""}`}>
            <input
              id="toggle-theme"
              type="checkbox"
              checked={isDarkTheme}
              onChange={onToggleTheme}
            />
            <span className="light-txt">light</span>
            <span className="dark-txt">dark</span>
          </label>


       <h1 className="main-heading-ios">
  <span className="heading-role">Software Engineer</span><br />
  <span className="heading-first-name">Charles</span><br />
  <span className="heading-last-name">Wambua</span>
</h1>



          {/* Description Section */}
          <div className="banner-desc-ios">
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="type-animation-ios"
            >
              <TypeAnimation
                sequence={[
                  "FULL STACK SOFTWARE ENGINEER",
                  2000,
                  "MOBILE APP SOFTWARE ENGINEER",
                  2000,
                  "DEVOPS AND CLOUD EXPERT",
                  2000,
                ]}
                speed={50}
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>

            <form
              className="message-form-ios"
              onSubmit={handleSubmit}
            >
              <div className="form-group-ios">
                <input
                  type="text"
                  className="form-input-ios"
                  placeholder="Type your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  disabled={isSending}
                  maxLength={500}
                />
                <button
                  type="submit"
                  className="submit-btn-ios"
                  disabled={isSending || !message.trim()}
                >
                  {isSending ? (
                    <span className="sending-indicator">
                      <i className="fas fa-spinner fa-spin"></i> Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </div>

              {/* Character counter */}
              <div className="char-counter">
                {message.length}/500
              </div>

              {/* Status Message */}
              {sendStatus && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`status-message ${sendStatus.includes("successfully") ? "success" :
                    sendStatus.includes("Failed") ? "error" : "info"
                    }`}
                >
                  {sendStatus}
                  {sendStatus.includes("Failed") && (
                    <button
                      onClick={handleMailToFallback}
                      className="fallback-btn"
                    >
                      Try Email Instead
                    </button>
                  )}
                </motion.div>
              )}

              {/* Configuration reminder */}
              {(EMAILJS_CONFIG.serviceId === "YOUR_SERVICE_ID" ||
                EMAILJS_CONFIG.templateId === "YOUR_TEMPLATE_ID" ||
                EMAILJS_CONFIG.publicKey === "YOUR_PUBLIC_KEY") && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="config-warning"
                  >
                    ⚠️ EmailJS not configured. Messages won't be sent.
                    Please set up your EmailJS credentials.
                  </motion.div>
                )}
            </form>
          </div>

          {/* Social Links */}
          <div className="social-section-ios">
            <ul className="social-list-ios">
              <li>
                <a
                  href="https://wa.me/254114652533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-ios"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/thatsme.charles/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-ios"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/Charles59676543"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-ios"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Charles-Wambua"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-ios"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/charles-wambua-918a0724a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link-ios"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
              </li>
            </ul>
            <span className="social-label-ios">My Socials</span>
          </div>
        </div>

        {/* Right Gallery Section */}
        <div className="banner-right-ios">
          <div className="gallery-column-ios">
            <img
              src="/assets/1f87b29a2df46100a75aa86b170a21cb.jpg"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
            <img
              src="/assets/78313357198a836e64cc07f7fab3da8b.jpg"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
            <div className="stats-card-ios gallery-item-ios">
              <h2 className="stats-number-ios">100+</h2>
              <span className="stats-text-ios">
                completed <br /> projects
              </span>
              <img
                src="https://yudiz.com/codepen/real-estate/heart-icon.svg"
                alt="heart-icon"
                className="stats-icon-ios"
              />
            </div>
            <img
              src="/assets/e7e9437b012c8d40acaa501be5afafa3.jpg"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-four.png"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
          </div>

          <div className="gallery-column-ios">
            <img
              src="/assets/10ee98130fcb4261135dce02f701518a.jpg"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-six.png"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
            <div className="stats-card-ios gallery-item-ios">
              <h2 className="stats-number-ios">4+</h2>
              <span className="stats-text-ios">
                Years <br /> Of Experience
              </span>
              <img
                src="https://yudiz.com/codepen/real-estate/unit-icon.svg"
                alt="unit-icon"
                className="stats-icon-ios"
              />
            </div>
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-seven.png"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
            <img
              src="https://yudiz.com/codepen/real-estate/property-img-eight.png"
              alt="Project showcase"
              className="gallery-image-ios gallery-item-ios"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;