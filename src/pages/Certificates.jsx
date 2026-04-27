import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CERTS = [
  {
    title: "Power BI for Beginners",
    org: "Microsoft | Simpli learn",
    date: "2026",
    img: "/certs/cert1.jpg",
  },
  {
    title: "SQL Analytics and BI on Databricks",
    org: "Databrics | Simpli learn",
    date: "2026",
    img: "/certs/cert2.jpg",
  },
  {
    title: "SQL & Power BI Analytics and Visualization",
    org: "Udemy",
    date: "2026",
    img: "/certs/cert3.jpg",
  },
  {
    title: "15 Days Power BI Bootcamp",
    org: "Udemy",
    date: "2026",
    img: "/certs/cert4.jpg",
  },
  {
    title: "Analysing Sales using data mining techniques",
    org: "ARGUCOM",
    date: "2022",
    img: "/certs/cert5.jpg",
  },
  {
    title: "Innovation & Think Award 2020",
    org: "ARGUCOM",
    date: "2022",
    img: "/certs/cert10.jpg",
  },
  {
    title: "Smart Helmet System using IoT",
    org: "ARGUCOM",
    date: "2021",
    img: "/certs/cert7.jpg",
  },
  {
    title: "Plant Irrigation System using IoT",
    org: "ARGUCOM",
    date: "2021",
    img: "/certs/cert8.jpg",
  },
  {
    title: "Smart Chair with Health Monitoring using IoT",
    org: "ARGUCOM",
    date: "2021",
    img: "/certs/cert11.jpg",
  },
  {
    title: "Featured in News for Innovation Work",
    org: "ARGUCOM Projects",
    date: "2021",
    img: "/certs/Innovation_Drive_Argucom.png",
  },
  
];

const TEXT_CERTS = [
  {
    title: "PHP, Android Development & Network Technology",
    org: "Certification",
    date: "Sept 2018",
  },
  {
    title: "Machine Learning & Cyber Security",
    org: "Tech Savvy Eduventures",
    date: "July 2020",
  },
  {
    title: "Deep Learning Using Python",
    org: "Apptronix Technologies",
    date: "August 2020",
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const [hovered, setHovered] = useState(null);

  return (
    <section
      style={{
        padding: "70px 20px",
        background: "radial-gradient(circle at top, #050505, #000)",
        position: "relative"
      }}
    >

      {/* 🔥 Glow background */}
      <div style={{
        position: "absolute",
        width: 500,
        height: 500,
        background: "radial-gradient(circle, rgba(0,255,200,0.15), transparent)",
        filter: "blur(100px)",
        top: -100,
        left: -100
      }} />

      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          textAlign: "center",
          fontSize: "2.6rem",
          background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        🏅 Certifications & Achievements
      </motion.h2>

      <p
        style={{
          textAlign: "center",
          color: "#888",
          maxWidth: 600,
          margin: "10px auto 50px",
        }}
      >
        A collection of certifications and achievements that reflect my continuous learning and growth.
      </p>

              {/* 🔥 Text Certifications */}
<div
  style={{
    display: "flex",
    justifyContent: "center",
    gap: 16,
    flexWrap: "wrap",
    marginBottom: 40
  }}
>
  {TEXT_CERTS.map((c, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ scale: 1.05, y: -4 }}
      style={{
        position: "relative",
        padding: "14px 18px",
        borderRadius: 12,
        background: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(0,255,255,0.2)",
        backdropFilter: "blur(10px)",
        minWidth: "260px",
        maxWidth: "320px",
        boxShadow: "0 0 20px rgba(0,255,200,0.06)",
        overflow: "hidden",
        cursor: "pointer"
      }}
    >

      {/* 🔥 Glow Sweep */}
      <motion.div
        initial={{ x: "-120%", opacity: 0 }}
        whileHover={{ x: "120%", opacity: 0.12 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "40%",
          height: "100%",
          background:
            "linear-gradient(120deg,transparent,#00ffc8,transparent)",
          filter: "blur(30px)"
        }}
      />

      {/* CONTENT */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <h4 style={{
          fontSize: 14,
          color: "#32bd9f",
          marginBottom: 6,
          textShadow: "0 0 6px #04352a"
        }}>
          {c.title}
        </h4>

        <p style={{
          fontSize: 12,
          color: "#aaa"
        }}>
          {c.org} • {c.date}
        </p>
      </div>

    </motion.div>
  ))}
</div>

      {/* GRID */}
      <div
        style={{
          display: "grid",
          gap: 24,
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          maxWidth: 1100,
          margin: "auto",
        }}
      >
        <AnimatePresence>
          {CERTS.map((c, idx) => (
            <motion.div
              key={c.title}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                setHovered({ x, y, id: idx });
              }}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.08 }}
              whileHover={{
                scale: 1.05,
                rotateX: 5,
                rotateY: -5,
              }}
              style={{
                position: "relative",
                background: "rgba(255,255,255,0.05)",
                borderRadius: 16,
                padding: 14,
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                cursor: "pointer"
              }}
            >

              {/* 🔥 Mouse Glow */}
              {hovered?.id === idx && (
                <div
                  style={{
                    position: "absolute",
                    top: hovered.y - 100,
                    left: hovered.x - 100,
                    width: 200,
                    height: 200,
                    background:
                      "radial-gradient(circle, rgba(0,255,200,0.25), transparent)",
                    pointerEvents: "none",
                  }}
                />
              )}

              {/* IMAGE */}
              <div style={{ overflow: "hidden", borderRadius: 10 }}>
                <motion.img
                  src={c.img}
                  alt={c.title}
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: 170,
                    objectFit: "cover",
                  }}
                />
              </div>

              {/* CONTENT */}
              <h3 style={{ fontSize: 15, color: "#00b4ff", marginTop: 10 }}>
                {c.title}
              </h3>

              <p style={{ fontSize: 12, color: "#aaa" }}>
                {c.org} • {c.date}
              </p>

              {/* BUTTON */}
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCert(c)}
                style={{
                  marginTop: 12,
                  padding: "7px 16px",
                  borderRadius: 8,
                  border: "none",
                  background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
                  color: "#000",
                  fontSize: 13,
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 0 15px rgba(0,255,200,0.4)"
                }}
              >
                View Certificate
              </motion.button>

            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.92)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: 20
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: 900,
                width: "100%",
                borderRadius: 14,
                overflow: "hidden",
                background: "#111",
                border: "1px solid rgba(255,255,255,0.1)"
              }}
            >

              {/* IMAGE */}
              <img
                src={selectedCert.img}
                alt={selectedCert.title}
                style={{
                  width: "100%",
                  maxHeight: 450,
                  objectFit: "contain",
                  background: "#000"
                }}
              />

              {/* DETAILS */}
              <div style={{ padding: 20 }}>
                <h3 style={{ color: "#00ffc8" }}>
                  {selectedCert.title}
                </h3>

                <p style={{ color: "#aaa", marginTop: 6 }}>
                  {selectedCert.org} • {selectedCert.date}
                </p>

                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    marginTop: 15,
                    padding: "8px 18px",
                    borderRadius: 8,
                    border: "none",
                    background: "#222",
                    color: "#fff",
                    cursor: "pointer"
                  }}
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      

    </section>
  );
}