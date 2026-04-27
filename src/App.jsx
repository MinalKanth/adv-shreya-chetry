import React from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import PrivacyPolicy from './pages/Privacy-Policy';     
import TermsOfService from './pages/Terms-of-Service';   
import About from './pages/About';
import Contact from './pages/Contact';
import { motion } from "framer-motion";

export default function App() {
  const navigate = useNavigate();

  const handleNavClick = (id) => {
    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 200);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="app"
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff"
      }}
    >
      {/* NAVBAR */}
      <Navbar />

      {/* MAIN CONTENT */}
      <main style={{ flex: 1 }}>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <section id="home" style={{ scrollMarginTop: "80px" }}>
                  <Home />
                </section>

                <section id="about" style={{ scrollMarginTop: "80px" }}>
                  <About />
                </section>

                <section id="contact" style={{ scrollMarginTop: "80px" }}>
                  <Contact />
                </section>
              </>
            } 
          />

          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
        </Routes>
      </main>

      {/* ==================== PREMIUM BLACK & GOLD LAWYER FOOTER ==================== */}
      <footer
        style={{
          background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
          borderTop: "2px solid #f59e0b",
          padding: "80px 20px 50px",
          color: "#e2e8f0",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Subtle Gold Diagonal Accent (matching your visiting card) */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(45deg, transparent 48%, rgba(245,158,11,0.08) 50%, transparent 52%)",
          pointerEvents: "none",
          zIndex: 1,
        }} />

        <div style={{ maxWidth: "1300px", margin: "0 auto", position: "relative", zIndex: 2 }}>

          {/* Logo / Name Section - Card Style */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "30px",
              textAlign: "center"
            }}
          >
            <div style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              borderBottom: "4px solid #f59e0b",
              paddingBottom: "18px"
            }}>
              {/* Scales Icon - Exactly like your visiting card */}
              {/* <motion.div
                animate={{ rotate: [0, 12, -12, 0] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                style={{ fontSize: "3.2rem", color: "#f59e0b" }}
              >
                ⚖️
              </motion.div> */}
              <motion.img
  src="/logos/Shreya-Chetry-Advocate-Logo.png"
  alt="Advocate Logo"
  animate={{ rotate: [0, 10, -10, 0] }}
  transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
  style={{
    height: "175px",
    width: "auto",
    objectFit: "contain",

    // ✨ Gold glow effect
    filter: "drop-shadow(0 6px 16px rgba(245,158,11,0.5))",

    // Optional polish
    borderRadius: "8px"
  }}
/>

              <div>
                <h1 style={{
                  fontSize: "2.8rem",
                  fontWeight: "800",
                  color: "#fff",
                  margin: "0 0 6px 0",
                  letterSpacing: "-1.5px",
                  textShadow: "0 8px 25px rgba(245,158,11,0.4)"
                }}>
                  Shreya Chetry
                </h1>
                <p style={{
                  color: "#f59e0b",
                  fontSize: "1.25rem",
                  margin: 0,
                  fontWeight: "600",
                  letterSpacing: "2px"
                }}>
                  Legal Assistant • MA, LLM, NET
                </p>
              </div>
            </div>
          </motion.div>

          {/* Main Footer Content */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "60px",
            marginBottom: "70px",
            textAlign: "center"
          }}>
            
            {/* Column 1 - About */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 style={{ 
                color: "#f59e0b", 
                marginBottom: "20px", 
                fontSize: "1.45rem",
                fontWeight: "700"
              }}>
                Shreya Chetry
              </h3>
              <p style={{ 
                color: "#e2e8f0", 
                lineHeight: "1.85",
                fontSize: "1.05rem"
              }}>
                Enrolled Advocate<br />
                Sibsagar Bar Association<br />
                Practicing in Civil, Criminal, Family &amp; Property Matters
              </p>
            </motion.div>

            {/* Column 2 - Quick Links */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 style={{ 
                color: "#f59e0b", 
                marginBottom: "20px",
                fontSize: "1.3rem",
                fontWeight: "700"
              }}>Quick Links</h4>
              <div style={{ 
                display: "flex", 
                flexDirection: "column", 
                gap: "14px",
                color: "#e2e8f0"
              }}>
                <motion.span 
                  onClick={() => handleNavClick("about")} 
                  whileHover={{ x: 12, color: "#f59e0b" }}
                  style={{ cursor: "pointer", fontSize: "1.1rem", fontWeight: 500 }}
                >
                  About Me
                </motion.span>
                <motion.span 
                  onClick={() => handleNavClick("practice-areas")} 
                  whileHover={{ x: 12, color: "#f59e0b" }}
                  style={{ cursor: "pointer", fontSize: "1.1rem", fontWeight: 500 }}
                >
                  Practice Areas
                </motion.span>
                <motion.span 
                  onClick={() => handleNavClick("experience")} 
                  whileHover={{ x: 12, color: "#f59e0b" }}
                  style={{ cursor: "pointer", fontSize: "1.1rem", fontWeight: 500 }}
                >
                  Experience
                </motion.span>
                <motion.span 
                  onClick={() => handleNavClick("contact")} 
                  whileHover={{ x: 12, color: "#f59e0b" }}
                  style={{ cursor: "pointer", fontSize: "1.1rem", fontWeight: 500 }}
                >
                  Book Consultation
                </motion.span>
              </div>
            </motion.div>

            {/* Column 3 - Contact */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 style={{ 
                color: "#f59e0b", 
                marginBottom: "20px",
                fontSize: "1.3rem",
                fontWeight: "700"
              }}>Office &amp; Contact</h4>
              <div style={{ color: "#e2e8f0", lineHeight: "2.2", fontSize: "1.05rem" }}>
                <p>📍 Rupohi Pathar, Rudrasagar, Sibsagar, Assam</p>
                <p>
                  📞 <a href="tel:7575995712" style={{ color: "#f59e0b", textDecoration: "none", fontWeight: 600 }}>
                    75759 95712
                  </a>
                </p>
                <p>
                  ✉️ <a href="mailto:poppyshreya06@gmail.com" style={{ color: "#f59e0b", textDecoration: "none", fontWeight: 600 }}>
                    poppyshreya06@gmail.com
                  </a>
                </p>
              </div>
            </motion.div>

            {/* Column 4 - Credentials */}
            <motion.div
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h4 style={{ 
                color: "#f59e0b", 
                marginBottom: "20px",
                fontSize: "1.3rem",
                fontWeight: "700"
              }}>Credentials</h4>
              <p style={{ 
                color: "#e2e8f0", 
                lineHeight: "1.95",
                fontSize: "1.05rem"
              }}>
                • MA, LLM<br />
                • NET Qualified<br />
                • Member, Sibsagar Bar Association<br />
                • High Court &amp; District Court Practice
              </p>
            </motion.div>
          </div>

          {/* Bottom Bar - Gold Accents */}
          <div style={{
            paddingTop: "40px",
            borderTop: "1px solid rgba(245,158,11,0.25)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "22px",
            color: "#d97706",
            fontSize: "0.98rem",
            textAlign: "center"
          }}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              © {new Date().getFullYear()} Adv. Shreya Chetry • All Rights Reserved
            </motion.div>

            <div style={{ 
              display: "flex", 
              gap: "40px", 
              flexWrap: "wrap", 
              justifyContent: "center" 
            }}>
              <Link 
                to="/privacy-policy" 
                style={{ 
                  color: "#f59e0b", 
                  textDecoration: "none", 
                  fontWeight: 600,
                  transition: "all 0.3s"
                }}
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service" 
                style={{ 
                  color: "#f59e0b", 
                  textDecoration: "none", 
                  fontWeight: 600,
                  transition: "all 0.3s"
                }}
              >
                Terms of Service
              </Link>
            </div>

            <motion.div 
              style={{ fontSize: "1.05rem", color: "#fbbf24", fontWeight: 500 }}
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              Where trust meets legal expertise • Sibsagar, Assam
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  );
}