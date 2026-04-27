import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ClientsReview = () => {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const reviews = [
    {
      name: "Rahul Sharma",
      role: "Business Owner",
      review: "Adv. Shreya Chetry handled my property dispute with exceptional professionalism. She secured a favorable outcome in record time. Highly recommended!",
      rating: 5,
      location: "Sibsagar"
    },
    {
      name: "Priya Das",
      role: "Homemaker",
      review: "She guided me through a difficult divorce and custody case with compassion and expertise. Truly felt supported throughout the entire process.",
      rating: 5,
      location: "Rudrasagar"
    },
    {
      name: "Amit Baruah",
      role: "Entrepreneur",
      review: "Excellent legal support in my criminal defense case. She fought hard and got me bail on the first hearing. Very knowledgeable and trustworthy.",
      rating: 5,
      location: "Sibsagar"
    },
    {
      name: "Anjali Hazarika",
      role: "School Teacher",
      review: "Adv. Shreya helped resolve a family property partition matter smoothly. Her attention to detail and clear communication made everything easy.",
      rating: 5,
      location: "Sibsagar"
    },
    {
      name: "Sanjay Saikia",
      role: "Retired Officer",
      review: "Professional and result-oriented. She represented me in a civil recovery suit and won the case. Best advocate I have worked with.",
      rating: 5,
      location: "Assam"
    },
    {
      name: "Bijoy Dutta",
      role: "Contractor",
      review: "Adv. Shreya Chetry drafted my property agreement and successfully handled a land dispute. Very efficient, honest and result-driven. Thank you!",
      rating: 5,
      location: "Sibsagar"
    }
  ];

  return (
    <div 
      id="experience" 
      style={{
        width: "100%",
        background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
        color: "#e2e8f0",
        padding: isMobile ? "4rem 1rem 5rem" : "5rem 1rem 6rem",
        position: "relative",
        overflow: "hidden"
      }}
    >

      {/* Elegant Gold Mouse Glow - Only on Desktop */}
      {!isMobile && (
        <motion.div
          animate={{ x: mouse.x * 6, y: mouse.y * 6 }}
          style={{
            position: "absolute",
            width: "480px",
            height: "480px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,158,11,0.28), transparent 70%)",
            filter: "blur(110px)",
            zIndex: 0,
            pointerEvents: "none",
            top: "25%",
            left: "35%"
          }}
        />
      )}

      <div style={{ 
        maxWidth: "1280px", 
        margin: "0 auto", 
        position: "relative", 
        zIndex: 2 
      }}>

        {/* Header - Gold Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ 
            textAlign: "center", 
            marginBottom: isMobile ? "50px" : "70px" 
          }}
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              display: "inline-block", 
              fontSize: isMobile ? "3.2rem" : "4rem", 
              color: "#f59e0b", 
              marginBottom: "20px" 
            }}
          >
            ⚖️
          </motion.div>

          <h2 style={{
            fontSize: isMobile ? "2.4rem" : "3.1rem",
            marginBottom: "16px",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-1px"
          }}>
            What Our Clients Say
          </h2>
          
          <p style={{ 
            color: "#f59e0b", 
            fontSize: isMobile ? "1.15rem" : "1.35rem", 
            fontWeight: 600,
            letterSpacing: "1px"
          }}>
            Where trust meets legal expertise
          </p>
          
          <p style={{ 
            color: "#d97706", 
            fontSize: isMobile ? "1.05rem" : "1.25rem", 
            marginTop: "12px"
          }}>
            Real stories from real clients in Sibsagar &amp; Assam
          </p>
        </motion.div>

        {/* Reviews Grid - Fully Responsive */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile 
            ? "1fr" 
            : "repeat(auto-fit, minmax(360px, 1fr))",
          gap: isMobile ? "24px" : "32px",
          padding: isMobile ? "0 10px" : "0 20px"
        }}>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: isMobile ? 0 : -20, scale: isMobile ? 1 : 1.04 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "2px solid #f59e0b",
                borderRadius: "32px",
                padding: isMobile ? "32px 28px" : "42px 38px",
                position: "relative",
                boxShadow: "0 25px 55px rgba(245,158,11,0.15)",
                height: "100%",
                transition: "all 0.4s ease"
              }}
            >
              <FaQuoteLeft style={{
                fontSize: "3.8rem",
                color: "#f59e0b",
                opacity: 0.15,
                position: "absolute",
                top: isMobile ? "24px" : "32px",
                right: isMobile ? "24px" : "32px"
              }} />

              <div style={{ 
                display: "flex", 
                gap: "6px", 
                marginBottom: "24px", 
                color: "#fbbf24" 
              }}>
                {[...Array(review.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} size={22} />
                ))}
              </div>

              <p style={{
                fontSize: isMobile ? "1.08rem" : "1.18rem",
                lineHeight: "1.8",
                color: "#e2e8f0",
                marginBottom: "32px",
                fontStyle: "italic"
              }}>
                "{review.review}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
                <div style={{
                  width: "58px",
                  height: "58px",
                  background: "linear-gradient(135deg, #f59e0b, #fbbf24)",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.6rem",
                  color: "#111",
                  fontWeight: "700",
                  boxShadow: "0 8px 20px rgba(245,158,11,0.4)"
                }}>
                  {review.name[0]}
                </div>
                <div>
                  <h4 style={{ 
                    color: "#fff", 
                    margin: "0 0 4px 0",
                    fontSize: "1.25rem",
                    fontWeight: 700
                  }}>
                    {review.name}
                  </h4>
                  <p style={{ 
                    color: "#d97706", 
                    margin: 0, 
                    fontSize: "1rem" 
                  }}>
                    {review.role} • {review.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Note */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            textAlign: "center",
            marginTop: isMobile ? "60px" : "80px",
            color: "#fbbf24",
            fontSize: isMobile ? "1.1rem" : "1.2rem",
            fontWeight: 600,
            letterSpacing: "1px"
          }}
        >
          ★★★★★ Trusted by clients across Sibsagar &amp; Assam • 100% Genuine Testimonials
        </motion.p>
      </div>
    </div>
  );
};

export default ClientsReview;