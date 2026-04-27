import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({ x: e.clientX, y: e.clientY });
    };
    const handleResize = () => setIsMobile(window.innerWidth < 768);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.contact || !form.service) {
      setStatus("⚠️ Please fill all required fields.");
      return;
    }

    setStatus("Sending...");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          service_type: form.service,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setStatus("✅ Message sent successfully! We'll contact you soon.");
          setForm({ name: "", contact: "", service: "", message: "" });
        },
        () => setStatus("❌ Failed to send. Please try again.")
      );
  };

  const practiceAreas = [
    "Criminal Law & Bail Matters",
    "Family & Matrimonial Disputes",
    "Civil & Property Law",
    "Corporate & Commercial Cases",
    "High Court & District Court Practice",
    "General Legal Consultation",
    "Others"
  ];

  return (
    <section
      id="contact"
      style={{
        padding: isMobile ? "80px 15px 100px" : "100px 20px 120px",
        background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
        color: "#e2e8f0",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Elegant Gold Mouse Glow - Only on Desktop */}
      {!isMobile && (
        <motion.div
          animate={{ x: mouse.x - 220, y: mouse.y - 220 }}
          style={{
            position: "fixed",
            width: 440,
            height: 440,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.25), transparent 70%)",
            filter: "blur(100px)",
            pointerEvents: "none",
            zIndex: 0
          }}
        />
      )}

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: isMobile ? 60 : 80 }}
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            style={{ 
              display: "inline-block", 
              fontSize: isMobile ? "3.5rem" : "4.5rem", 
              color: "#f59e0b", 
              marginBottom: 20 
            }}
          >
            ⚖️
          </motion.div>

          <h1 style={{
            fontSize: isMobile ? "2.6rem" : "3.8rem",
            fontWeight: 800,
            color: "#fff",
            marginBottom: 12,
            letterSpacing: "-1px"
          }}>
            Get In Touch
          </h1>
          
          <p style={{ 
            color: "#f59e0b", 
            fontSize: isMobile ? "1.25rem" : "1.4rem", 
            fontWeight: 600,
            maxWidth: "620px",
            margin: "0 auto",
            lineHeight: 1.4
          }}>
            Ready for expert legal consultation? Let's discuss your case.
          </p>
        </motion.div>

        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 50 : 80,
          alignItems: "start"
        }}>
          
          {/* Contact Info - Premium Card Style */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "2px solid #f59e0b",
              borderRadius: 32,
              padding: isMobile ? "40px 30px" : "50px 40px",
              height: "100%"
            }}
          >
            <h3 style={{ 
              color: "#f59e0b", 
              fontSize: isMobile ? "1.8rem" : "2rem", 
              marginBottom: 40,
              fontWeight: 700
            }}>
              Office &amp; Contact
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              <div>
                <p style={{ color: "#d97706", marginBottom: 8, fontSize: "1.1rem" }}>📍 Office Address</p>
                <p style={{ fontSize: "1.2rem", lineHeight: 1.5 }}>
                  Rupohi Pathar,<br />
                  Rudrasagar, Sibsagar, Assam
                </p>
              </div>

              <div>
                <p style={{ color: "#d97706", marginBottom: 8, fontSize: "1.1rem" }}>📞 Phone / WhatsApp</p>
                <a 
                  href="tel:7575995712" 
                  style={{ 
                    color: "#fbbf24", 
                    fontSize: "1.55rem", 
                    textDecoration: "none",
                    fontWeight: 700
                  }}
                >
                  75759 95712
                </a>
              </div>

              <div>
                <p style={{ color: "#d97706", marginBottom: 8, fontSize: "1.1rem" }}>✉️ Email</p>
                <a 
                  href="mailto:poppyshreya06@gmail.com" 
                  style={{ 
                    color: "#fbbf24", 
                    fontSize: "1.2rem", 
                    textDecoration: "none"
                  }}
                >
                  poppyshreya06@gmail.com
                </a>
              </div>
            </div>

            <div style={{ marginTop: 60, paddingTop: 30, borderTop: "1px solid rgba(245,158,11,0.3)" }}>
              <p style={{ color: "#d97706", fontSize: "1.15rem" }}>
                Response time: <strong>Within 2 hours</strong> during working hours
              </p>
            </div>

            <p style={{ 
              marginTop: 50, 
              color: "#fbbf24", 
              fontSize: "1.1rem",
              fontWeight: 500,
              textAlign: "center"
            }}>
              Where trust meets legal expertise
            </p>
          </motion.div>

          {/* Contact Form - Elegant Gold Theme */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "2px solid #f59e0b",
              borderRadius: 32,
              padding: isMobile ? "40px 30px" : "50px 45px",
              boxShadow: "0 30px 70px rgba(245,158,11,0.25)"
            }}
          >
            <div style={{ display: "grid", gap: 24 }}>
              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={form.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <input
                type="tel"
                name="contact"
                placeholder="Phone / WhatsApp *"
                value={form.contact}
                onChange={handleChange}
                required
                style={inputStyle}
              />

              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Select Practice Area / Case Type *</option>
                {practiceAreas.map((area, i) => (
                  <option key={i} value={area}>{area}</option>
                ))}
              </select>

              <textarea
                name="message"
                placeholder="Brief details about your case or requirements..."
                rows={isMobile ? "5" : "6"}
                value={form.message}
                onChange={handleChange}
                style={inputStyle}
              />

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.96 }}
                style={{
                  marginTop: 12,
                  padding: isMobile ? "18px 40px" : "20px 40px",
                  background: "linear-gradient(90deg, #f59e0b, #fbbf24)",
                  color: "#111111",
                  fontSize: isMobile ? "1.2rem" : "1.25rem",
                  fontWeight: 800,
                  border: "none",
                  borderRadius: 50,
                  cursor: "pointer",
                  boxShadow: "0 20px 50px rgba(245,158,11,0.5)",
                  letterSpacing: "1px"
                }}
              >
                📩 SEND CONSULTATION REQUEST
              </motion.button>

              {status && (
                <p style={{
                  textAlign: "center",
                  marginTop: 20,
                  fontSize: "1.15rem",
                  fontWeight: 600,
                  color: status.includes("✅") ? "#fbbf24" : "#f87171"
                }}>
                  {status}
                </p>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

const inputStyle = {
  width: "100%",
  padding: "18px 24px",
  borderRadius: 16,
  border: "1px solid rgba(245,158,11,0.4)",
  background: "rgba(255,255,255,0.05)",
  color: "#e2e8f0",
  fontSize: "1.1rem",
  outline: "none",
  transition: "all 0.3s"
};  