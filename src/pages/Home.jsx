import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30,
      });
    };

    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const practiceAreas = [
    {
      title: "Criminal Law",
      desc: "Bail, FIR, Criminal Defense, NDPS, POCSO & Cyber Crime Cases",
      icon: "⚖️",
    },
    {
      title: "Family & Matrimonial",
      desc: "Divorce, Maintenance, Custody, Domestic Violence & Adoption",
      icon: "👨‍👩‍👧",
    },
    {
      title: "Civil & Property Law",
      desc: "Property Disputes, Title Verification, Partition Suits & Agreements",
      icon: "🏛️",
    },
    {
      title: "Corporate & Commercial",
      desc: "Company Matters, Contracts, Recovery Suits & Arbitration",
      icon: "📜",
    },
  ];

  const stats = [
    { value: "500+", label: "Cases Handled" },
    { value: "98%", label: "Success Rate" },
    { value: "8+", label: "Years Experience" },
    { value: "200+", label: "Happy Clients" },
  ];

  const reviews = [
  { name: "Rahul Sharma", role: "Business Owner", review: "Adv. Shreya Chetry handled my property dispute with exceptional professionalism. She secured a favorable outcome in record time. Highly recommended!", rating: 5, location: "Sibsagar" },
  { name: "Priya Das", role: "Homemaker", review: "She guided me through a difficult divorce and custody case with compassion and expertise. Truly felt supported throughout the entire process.", rating: 5, location: "Rudrasagar" },
  { name: "Amit Baruah", role: "Entrepreneur", review: "Excellent legal support in my criminal defense case. She fought hard and got me bail on the first hearing. Very knowledgeable and trustworthy.", rating: 5, location: "Sibsagar" },
  { name: "Anjali Hazarika", role: "School Teacher", review: "Adv. Shreya helped resolve a family property partition matter smoothly. Her attention to detail and clear communication made everything easy.", rating: 5, location: "Sibsagar" },
  { name: "Sanjay Saikia", role: "Retired Officer", review: "Professional and result-oriented. She represented me in a civil recovery suit and won the case. Best advocate I have worked with.", rating: 5, location: "Assam" },
  { name: "Bijoy Dutta", role: "Contractor", review: "Adv. Shreya Chetry drafted my property agreement and successfully handled a land dispute. Very efficient, honest and result-driven. Thank you!", rating: 5, location: "Sibsagar" },
  ];

  return (
    <section style={{ padding: "2px", overflow: "hidden", background: "#0a0a0a", color: "#e2e8f0", minHeight: "100vh" }}>
      
      {/* Elegant Gold Mouse Glow */}
      {!isMobile && (
        <motion.div
          animate={{ x: mouse.x * 8, y: mouse.y * 8 }}
          style={{
            position: "fixed",
            width: 620,
            height: 620,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245, 158, 11, 0.28), transparent 70%)",
            filter: "blur(110px)",
            top: "35%",
            left: "32%",
            zIndex: 0,
            pointerEvents: "none",
          }}
        />
      )}

      {/* HERO SECTION */}
      <div 
        id="home" 
        style={{ 
          position: "relative", 
          minHeight: "100vh", 
          display: "flex", 
          alignItems: "center", 
          paddingTop: "80px",
          overflow: "hidden"
        }}
      >
        {/* Background & Gold Accents (unchanged) */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(135deg, #111111 0%, #1a1a1a 50%, #2a1f0f 100%)",
          zIndex: 1,
        }} />

        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(45deg, transparent 45%, rgba(245, 158, 11, 0.12) 50%, transparent 55%)",
          zIndex: 2,
          pointerEvents: "none",
        }} />

        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 18, repeat: Infinity }}
          style={{
            position: "absolute",
            width: "900px",
            height: "900px",
            background: "radial-gradient(circle, rgba(245,158,11,0.35), transparent 65%)",
            borderRadius: "50%",
            top: "-15%",
            left: "-10%",
            filter: "blur(120px)",
            zIndex: 3,
          }}
        />

        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 40px", position: "relative", zIndex: 10 }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "80px", alignItems: "center" }}>
            
            {/* Left Content - Unchanged */}
            <motion.div 
              animate={{ x: mouse.x * 0.25, y: mouse.y * 0.25 }}
              style={{ textAlign: isMobile ? "center" : "left" }}
            >
              <motion.div
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                style={{ display: "inline-block", fontSize: "4.5rem", marginBottom: 20, color: "#f59e0b" }}
              >
                ⚖️
              </motion.div>

              <p style={{ 
                color: "#f59e0b", 
                fontSize: "1.35rem", 
                fontWeight: 700, 
                letterSpacing: "6px", 
                marginBottom: 12 
              }}>
                SIBSAGAR BAR ASSOCIATION & GAUHATI HIGH COURT
              </p>

              <h1 style={{
                fontSize: isMobile ? "3.8rem" : "6rem",
                fontWeight: 800,
                lineHeight: 1.02,
                color: "#fff",
                marginBottom: 12,
                textShadow: "0 10px 40px rgba(245,158,11,0.3)",
              }}>
                Shreya Chetry
              </h1>

              <p style={{
                fontSize: "1.65rem",
                color: "#f59e0b",
                marginBottom: 32,
                fontWeight: 600,
                letterSpacing: "1px"
              }}>
                Legal Assistant • MA, LLM, NET
              </p>

              <h2 style={{
                fontSize: isMobile ? "2.2rem" : "3rem",
                lineHeight: 1.25,
                color: "#e2e8f0",
                marginBottom: 50,
              }}>
                Where trust meets<br />
                <span style={{ 
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24, #f59e0b)", 
                  WebkitBackgroundClip: "text", 
                  WebkitTextFillColor: "transparent",
                  backgroundSize: "200% 200%",
                  animation: "goldShift 8s ease infinite",
                }}>
                  legal expertise
                </span>
              </h2>

              <div style={{ margin: "30px 0 60px", minHeight: "88px" }}>
                <Typewriter
                  words={[
                    "Criminal Defense & Bail Matters",
                    "Family & Matrimonial Disputes",
                    "Civil & Property Law Expert",
                    "High Court & District Court Practice",
                    "Dedicated to Justice & Fairness"
                  ]}
                  loop
                  cursor
                  cursorStyle="|"
                  typeSpeed={75}
                  deleteSpeed={45}
                  delaySpeed={2600}
                />
              </div>

              <div style={{ display: "flex", gap: 24, justifyContent: isMobile ? "center" : "flex-start", flexWrap: "wrap" }}>
                <motion.a
                  href="tel:7575995712"
                  whileHover={{ scale: 1.1, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "24px 58px",
                    background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                    borderRadius: 50,
                    color: "#111111",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    textDecoration: "none",
                    boxShadow: "0 25px 60px rgba(245,158,11,0.6)",
                    display: "flex",
                    alignItems: "center",
                    gap: 16,
                    border: "3px solid #fff",
                  }}
                >
                  📞 75759 95712
                </motion.a>

                <motion.a
                  href="https://wa.me/7575995712"
                  target="_blank"
                  whileHover={{ scale: 1.1, y: -6 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "24px 52px",
                    background: "#111111",
                    border: "3px solid #f59e0b",
                    borderRadius: 50,
                    color: "#f59e0b",
                    fontWeight: 800,
                    fontSize: "1.35rem",
                    textDecoration: "none",
                    boxShadow: "0 20px 50px rgba(245,158,11,0.4)",
                  }}
                >
                  💬 WhatsApp
                </motion.a>
              </div>

              <p style={{ marginTop: 50, color: "#d97706", fontSize: "1.1rem", fontWeight: 500, letterSpacing: "2px" }}>
                📍 Rupohi Pathar, Rudrasagar, Sibsagar • poppyshreya06@gmail.com
              </p>
            </motion.div>

            {/* Right Profile - Unchanged */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              style={{ display: isMobile ? "none" : "flex", justifyContent: "center", position: "relative" }}
            >
              <div style={{
                width: "460px",
                height: "460px",
                borderRadius: "50%",
                overflow: "hidden",
                border: "18px solid #f59e0b",
                boxShadow: "0 40px 100px rgba(245,158,11,0.5), 0 0 120px rgba(251,191,36,0.3)",
                background: "#111",
                position: "relative",
              }}>
                <img
                  src="/shreya-profile.png"
                  alt="Adv. Shreya Chetry"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div style={{
                  position: "absolute",
                  inset: "12px",
                  border: "4px solid rgba(251,191,36,0.6)",
                  borderRadius: "50%",
                }} />
              </div>

              <motion.div
                animate={{ y: [-12, 12, -12] }}
                transition={{ duration: 4, repeat: Infinity }}
                style={{
                  position: "absolute",
                  top: "-25px",
                  right: "-25px",
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  color: "#111",
                  padding: "14px 32px",
                  borderRadius: "9999px",
                  fontWeight: 800,
                  fontSize: "1.15rem",
                  boxShadow: "0 20px 50px rgba(245,158,11,0.6)",
                  zIndex: 20,
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                Advocate
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          animate={{ y: [0, 28, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "60px",
            left: "50%",
            transform: "translateX(-50%)",
            color: "#f59e0b",
            fontSize: "3.2rem",
            zIndex: 20,
            cursor: "pointer",
          }}
          onClick={() => document.getElementById("practice-areas").scrollIntoView({ behavior: "smooth" })}
        >
          ↓
        </motion.div>
      </div>

      {/* PRACTICE AREAS */}
      <div id="practice-areas" style={{ padding: "130px 20px", background: "#111111" }}>
        {/* ... your existing practice areas code (unchanged) ... */}
        <div style={{ maxWidth: "1280px", margin: "0 auto", textAlign: "center" }}>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            style={{ 
              fontSize: "3.4rem", 
              fontWeight: 800, 
              color: "#fff", 
              marginBottom: 24,
              textShadow: "0 10px 30px rgba(245,158,11,0.3)"
            }}
          >
            Practice Areas
          </motion.h2>
          
          <p style={{ color: "#f59e0b", fontSize: "1.35rem", maxWidth: "720px", margin: "0 auto 80px" }}>
            Where trust meets legal expertise
          </p>

          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: 40 }}>
            {practiceAreas.map((area, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -22, scale: 1.04 }}
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border: "2px solid #f59e0b",
                  borderRadius: "32px",
                  padding: "52px 40px",
                  textAlign: "center",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <div style={{ fontSize: "4.8rem", marginBottom: 28, color: "#f59e0b" }}>{area.icon}</div>
                <h3 style={{ fontSize: "1.95rem", color: "#fff", marginBottom: 20 }}>{area.title}</h3>
                <p style={{ color: "#e2e8f0", lineHeight: 1.75 }}>{area.desc}</p>
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 90,
                  height: 90,
                  borderBottom: "12px solid #f59e0b",
                  borderRight: "12px solid #f59e0b",
                  borderRadius: "0 0 32px 0",
                  opacity: 0.25,
                }} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ==================== NEW ABOUT ME SECTION ==================== */}
      <section 
        id="about" 
        style={{ 
          padding: "130px 20px", 
          background: "#0a0a0a",
          position: "relative"
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "80px", alignItems: "center" }}>
            
            {/* Left - About Text */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 8, repeat: Infinity }}
                style={{ fontSize: "3.5rem", color: "#f59e0b", marginBottom: 20, display: "inline-block" }}
              >
                ⚖️
              </motion.div>

              <h2 style={{
                fontSize: "3.2rem",
                fontWeight: 800,
                color: "#fff",
                marginBottom: 24,
                lineHeight: 1.2
              }}>
                About Me
              </h2>

              <p style={{ 
                fontSize: "1.25rem", 
                lineHeight: "1.85", 
                color: "#e2e8f0",
                marginBottom: 28
              }}>
                I am Adv. Shreya Chetry, an enrolled Advocate with the Sibsagar Bar Association and a practicing lawyer in the District Court and Gauhati High Court.
              </p>

              <p style={{ 
                fontSize: "1.18rem", 
                lineHeight: "1.85", 
                color: "#cbd5e1",
                marginBottom: 32
              }}>
                With a strong academic background — MA, LLM, and NET qualified — I am deeply passionate about delivering justice with integrity, empathy, and excellence. 
                My practice focuses on providing personalized legal solutions in Criminal, Family, Civil, and Property matters.
              </p>

              <div style={{ display: "flex", gap: 40, flexWrap: "wrap" }}>
                <div>
                  <p style={{ color: "#f59e0b", fontWeight: 700 }}>EDUCATION</p>
                  <p style={{ color: "#e2e8f0" }}>• MA • LLM • NET Qualified</p>
                </div>
                <div>
                  <p style={{ color: "#f59e0b", fontWeight: 700 }}>BAR ENROLLMENT</p>
                  <p style={{ color: "#e2e8f0" }}>Sibsagar Bar Association</p>
                </div>
                <div>
                  <p style={{ color: "#f59e0b", fontWeight: 700 }}>COURTS</p>
                  <p style={{ color: "#e2e8f0" }}>District Court • Gauhati High Court</p>
                </div>
              </div>
            </motion.div>

            {/* Right - Professional Portrait / Description */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "3px solid #f59e0b",
                borderRadius: "32px",
                padding: "40px",
                textAlign: "center"
              }}
            >
              <div style={{
                width: "220px",
                height: "220px",
                margin: "0 auto 30px",
                borderRadius: "50%",
                border: "8px solid #fbbf24",
                overflow: "hidden",
                boxShadow: "0 20px 50px rgba(245,158,11,0.4)"
              }}>
                <img
                  src="/shreya-profile.png"
                  alt="Adv. Shreya Chetry"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              <h3 style={{ color: "#fff", fontSize: "1.6rem", marginBottom: 12 }}>
                Dedicated to Justice with Compassion
              </h3>
              <p style={{ color: "#d97706", fontSize: "1.15rem", lineHeight: "1.7" }}>
                I believe every client deserves honest guidance, strong representation, and complete transparency. 
                My goal is not just to win cases — but to deliver peace of mind.
              </p>

              <p style={{ 
                marginTop: 40, 
                color: "#fbbf24", 
                fontSize: "1.1rem", 
                fontWeight: 600 
              }}>
                "Justice Delivered with Integrity"
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS - unchanged */}
      <div style={{ padding: "110px 20px", background: "#0a0a0a" }}>
        {/* ... your existing stats code ... */}
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 50 }}>
          {stats.map((stat, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 1.15, y: -8 }}
              style={{ 
                textAlign: "center", 
                minWidth: "190px",
                borderBottom: "4px solid #f59e0b",
                paddingBottom: 20,
              }}
            >
              <h3 style={{ 
                fontSize: "4rem", 
                color: "#fbbf24", 
                margin: 0, 
                fontWeight: 800 
              }}>{stat.value}</h3>
              <p style={{ color: "#e2e8f0", fontSize: "1.25rem", fontWeight: 500 }}>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FINAL CTA - unchanged */}
      <motion.div 
        style={{
          margin: "120px auto",
          maxWidth: "1180px",
          padding: "110px 60px",
          borderRadius: "40px",
          background: "linear-gradient(135deg, #1a1a1a, #2a1f0f)",
          border: "3px solid #f59e0b",
          textAlign: "center",
          boxShadow: "0 40px 100px rgba(245,158,11,0.35)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h2 style={{ fontSize: "3.4rem", color: "#fff", marginBottom: 28 }}>
          Ready for Expert Legal Guidance?
        </h2>
        <p style={{ fontSize: "1.45rem", color: "#f59e0b", maxWidth: "680px", margin: "0 auto 60px" }}>
          Professional legal assistance in Sibsagar with integrity and excellence
        </p>

        <motion.a
          href="tel:7575995712"
          whileHover={{ scale: 1.12 }}
          style={{
            padding: "28px 68px",
            background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
            color: "#111",
            fontSize: "1.55rem",
            fontWeight: 800,
            borderRadius: 50,
            textDecoration: "none",
            display: "inline-flex",
            alignItems: "center",
            gap: 18,
            boxShadow: "0 30px 70px rgba(245,158,11,0.6)",
          }}
        >
          📞 Book Consultation • 75759 95712
        </motion.a>
      </motion.div>

      <style jsx>{`
        @keyframes goldShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
}