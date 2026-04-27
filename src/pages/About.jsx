import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const ClientsReview = () => {

  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth - 0.5) * 30,
        y: (e.clientY / window.innerHeight - 0.5) * 30
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
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
    <div id="experience" style={{
      width: "100%",
      background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
      color: "#e2e8f0",
      padding: "5rem 1rem 6rem",
      position: "relative",
      overflow: "hidden"
    }}>

      {/* Elegant Gold Mouse Glow */}
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

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 2 }}>

        {/* Header - Gold Theme */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={{ textAlign: "center", marginBottom: "70px" }}
        >
          <motion.div
            animate={{ rotate: [0, 12, -12, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              display: "inline-block", 
              fontSize: "4rem", 
              color: "#f59e0b", 
              marginBottom: "20px" 
            }}
          >
            ⚖️
          </motion.div>

          <h2 style={{
            fontSize: "3.1rem",
            marginBottom: "16px",
            fontWeight: 800,
            color: "#fff",
            letterSpacing: "-1px"
          }}>
            What Our Clients Say
          </h2>
          
          <p style={{ 
            color: "#f59e0b", 
            fontSize: "1.35rem", 
            fontWeight: 600,
            letterSpacing: "1px"
          }}>
            Where trust meets legal expertise
          </p>
          
          <p style={{ 
            color: "#d97706", 
            fontSize: "1.25rem", 
            marginTop: "12px"
          }}>
            Real stories from real clients in Sibsagar &amp; Assam
          </p>
        </motion.div>

        {/* Reviews Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
          gap: "32px",
          padding: "0 20px"
        }}>
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -20, scale: 1.04 }}
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "2px solid #f59e0b",
                borderRadius: "32px",
                padding: "42px 38px",
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
                top: "32px",
                right: "32px"
              }} />

              <div style={{ display: "flex", gap: "6px", marginBottom: "24px", color: "#fbbf24" }}>
                {[...Array(review.rating)].map((_, starIndex) => (
                  <FaStar key={starIndex} size={22} />
                ))}
              </div>

              <p style={{
                fontSize: "1.18rem",
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

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            textAlign: "center",
            marginTop: "80px",
            color: "#fbbf24",
            fontSize: "1.2rem",
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