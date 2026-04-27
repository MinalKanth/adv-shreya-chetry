import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const navLinks = [
  { label: "Home", id: "home", type: "scroll" },
  { label: "Practice Areas", id: "practice-areas", type: "scroll" },
  { label: "About Me", id: "about", type: "scroll" },
  { label: "Testimonials", id: "experience", type: "scroll" },
  { label: "Contact", id: "contact", type: "scroll" },
];

const legalLinks = [
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms of Service", path: "/terms-of-service" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [scrolled, setScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu + SCROLL TO TOP when navigating to legal pages
  useEffect(() => {
    setIsOpen(false);

    // Fix: Scroll to top when going to Privacy Policy or Terms of Service
    if (location.pathname === "/privacy-policy" || location.pathname === "/terms-of-service") {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"   // instant so it doesn't animate from bottom
      });
    }
  }, [location]);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 150);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }

    if (isMobile) setIsOpen(false);
  };

  const isActive = (link) => {
    if (link.type === "scroll") {
      return location.pathname === "/" && window.location.hash === `#${link.id}`;
    }
    return location.pathname === link.path;
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
      if (window.innerWidth >= 992) setIsOpen(false);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: isMobile ? "0.9rem 1.2rem" : "1.1rem 2.8rem",
          background: scrolled 
            ? "rgba(17, 17, 17, 0.98)" 
            : "rgba(17, 17, 17, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(245, 158, 11, 0.35)",
          boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.6)" : "none",
        }}
      >
        {/* LOGO - Matching Visiting Card Style */}
        <Link 
          to="/"
          style={{ 
            display: "flex", 
            alignItems: "center", 
            gap: 14, 
            cursor: "pointer",
            textDecoration: "none"
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* <motion.div
            whileHover={{ scale: 1.15, rotate: 12 }}
            transition={{ type: "spring", stiffness: 400 }}
            style={{
              fontSize: isMobile ? "42px" : "52px",
              color: "#f59e0b",
              filter: "drop-shadow(0 4px 12px rgba(245,158,11,0.6))",
            }}
          >
            ⚖️
          </motion.div> */}
          <motion.img
            src="/logos/Shreya-Chetry-Advocate-Logo.png"
            alt="Shreya Chetry Advocate Logo"
            whileHover={{ scale: 1.12, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{
              height: isMobile ? "52px" : "82px",
              width: "auto",
              objectFit: "contain",

              // ✨ Premium gold glow
              filter: "drop-shadow(0 6px 14px rgba(245,158,11,0.45))",

              // optional subtle contrast boost
              mixBlendMode: "screen"
            }}
          />

          <div>
            <div style={{ 
              display: "flex", 
              alignItems: "center", 
              gap: "10px",
              flexWrap: "wrap"
            }}>
              <h1 style={{ 
                margin: 0, 
                fontSize: isMobile ? "1.35rem" : "1.75rem", 
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.6px"
              }}>
                Shreya Chetry
              </h1>

              <span style={{
                fontSize: isMobile ? "0.72rem" : "0.82rem",
                color: "#f59e0b",
                letterSpacing: "2px",
                fontWeight: 700,
                background: "rgba(245,158,11,0.15)",
                padding: "2px 10px",
                borderRadius: "4px"
              }}>
                ADVOCATE
              </span>
            </div>

            <p style={{ 
              margin: "4px 0 0 0", 
              fontSize: isMobile ? "0.82rem" : "0.95rem", 
              color: "#fcd34d",
              letterSpacing: "1.2px",
              fontWeight: 600
            }}>
              MA, LLM, NET • Sibsagar Bar Association
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        {!isMobile && (
          <div style={{
            display: "flex",
            gap: "2.6rem",
            alignItems: "center",
          }}>
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ y: -3, color: "#f59e0b" }}
                style={{
                  cursor: "pointer",
                  color: isActive(link) ? "#f59e0b" : "#e2e8f0",
                  fontWeight: isActive(link) ? 700 : 600,
                  position: "relative",
                  fontSize: "1.08rem",
                  letterSpacing: "0.5px",
                }}
              >
                {link.label}
                {isActive(link) && (
                  <motion.div
                    layoutId="underline"
                    style={{
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "100%",
                      height: 3,
                      background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                      borderRadius: 10,
                    }}
                  />
                )}
              </motion.div>
            ))}

            {/* Legal Links */}
            {legalLinks.map((legal) => (
              <Link
                key={legal.path}
                to={legal.path}
                style={{
                  color: location.pathname === legal.path ? "#f59e0b" : "#e2e8f0",
                  fontWeight: location.pathname === legal.path ? 700 : 600,
                  textDecoration: "none",
                  fontSize: "1.08rem",
                  letterSpacing: "0.5px",
                }}
              >
                {legal.label}
              </Link>
            ))}
          </div>
        )}

        {/* CTA Button - Gold Theme */}
        {!isMobile && (
          <motion.a
            href="tel:7575995712"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: "13px 32px",
              background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
              color: "#111111",
              borderRadius: 50,
              fontWeight: 800,
              textDecoration: "none",
              boxShadow: "0 12px 35px rgba(245,158,11,0.55)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
              fontSize: "1.05rem",
              border: "2px solid #fff",
            }}
          >
            <span style={{ fontSize: "1.4rem" }}>📞</span>
            <span>75759 95712</span>
          </motion.a>
        )}

        {/* Mobile Menu Button */}
        {isMobile && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "2rem",
              color: "#f59e0b",
              cursor: "pointer",
              padding: "8px",
            }}
          >
            {isOpen ? "✕" : "☰"}
          </button>
        )}
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              background: "rgba(17,17,17,0.98)",
              backdropFilter: "blur(20px)",
              zIndex: 9999,
              paddingTop: "100px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {navLinks.map((link) => (
              <motion.div
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                whileHover={{ scale: 1.05, color: "#f59e0b" }}
                style={{
                  padding: "20px 0",
                  width: "80%",
                  textAlign: "center",
                  fontSize: "1.45rem",
                  color: "#e2e8f0",
                  borderBottom: "1px solid rgba(245,158,11,0.25)",
                  cursor: "pointer",
                  fontWeight: 600,
                }}
              >
                {link.label}
              </motion.div>
            ))}

            {legalLinks.map((legal) => (
              <Link
                key={legal.path}
                to={legal.path}
                style={{
                  padding: "20px 0",
                  width: "80%",
                  textAlign: "center",
                  fontSize: "1.45rem",
                  color: location.pathname === legal.path ? "#f59e0b" : "#e2e8f0",
                  borderBottom: "1px solid rgba(245,158,11,0.25)",
                  textDecoration: "none",
                  fontWeight: 600,
                }}
              >
                {legal.label}
              </Link>
            ))}

            <motion.a
              href="tel:7575995712"
              style={{
                marginTop: "50px",
                padding: "18px 60px",
                background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                color: "#111",
                borderRadius: 50,
                fontSize: "1.3rem",
                fontWeight: 800,
                textDecoration: "none",
                boxShadow: "0 15px 40px rgba(245,158,11,0.6)",
              }}
            >
              📞 Call Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}