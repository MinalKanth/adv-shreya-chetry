import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Resume() {

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

  function Counter({ value }) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const interval = setInterval(() => {
      start += Math.ceil(value / 20);
      if (start >= value) {
        start = value;
        clearInterval(interval);
      }
      setCount(start);
    }, 40);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{count}</span>;
}
  return (
    <section
      className="container"
      style={{
        // padding: "70px 0",
        position: "relative",
        overflow: "hidden",
        zIndex: 1   
      }}
    >

      {/* 🔥 Mouse Glow (FIXED) */}
      <motion.div
        animate={{ x: mouse.x * 5, y: mouse.y * 5 }}
        transition={{ type: "spring", stiffness: 60 }}
        style={{
          position: "fixed",   // 🔥 IMPORTANT CHANGE
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,255,200,0.25), transparent)",
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          zIndex: 2,
          background: "linear-gradient(145deg, #050505, #0b0b0b)",
          borderRadius: 20,
          padding: "50px 40px",
          color: "#e5e5e5",
          boxShadow: "0 0 50px rgba(0,180,255,0.12)",
          border: "1px solid rgba(255,255,255,0.05)"
        }}
      >

        {/* HEADER */}
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 34,
            background: "linear-gradient(90deg,#00b4ff,#00ffc8)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            marginBottom: 10
          }}
        >
          📄 Resume
        </motion.h2>

        <p style={{ color: "#888", marginBottom: 35, fontSize: 15 }}>
          A detailed overview of my experience, technical capabilities, and real-world projects — focused on building scalable, high-performance systems.
        </p>

        {/* PROFILE + SUMMARY */}
        <motion.div
          whileHover={{ scale: 1.01, rotateX: 2 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            maxWidth: 1100,
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 20,
            padding: 25,
            borderRadius: 14,
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)"
          }}
        >
          <div>
            <h3 style={{ fontSize: 28, color: "#00b4ff" }}>
              👨‍💻 Mrinal Kanth Padhi
            </h3>

            <p style={{ marginTop: 8, color: "#ccc" }}>
              Full Stack Developer • Laravel Specialist • Backend Engineer
            </p>

            <p style={{ fontSize: 14, color: "#aaa" }}>
              📍 Nagaon, Assam, India
            </p>

            <p style={{ fontSize: 14, color: "#aaa" }}>
              ✉️ minalkanth.9@gmail.com | 📞 +91 9678001910
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            style={{
              maxWidth: 1100,
              fontSize: 14,
              lineHeight: 1.8,
              background: "linear-gradient(135deg,#00b4ff22,#000)",
              padding: 18,
              borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.08)"
            }}
          >
            <strong style={{ color: "#00b4ff" }}>Professional Summary</strong>
            <p style={{ marginTop: 8 }}>
              Full Stack Web Developer with 3+ years of experience delivering scalable web applications across SaaS, eCommerce, and automation platforms. Specialized in Laravel architecture, API design, and performance optimization. Proven ability to translate complex business requirements into reliable, production-ready systems.
            </p>
          </motion.div>
        </motion.div>

       

        {/* PROJECTS */}
        <section style={{ marginTop: 50 }}>
          <h4 style={{ color: "#00b4ff", marginBottom: 15 }}>💼 Key Projects</h4>

          <ul style={{ lineHeight: 1.9 }}>
            {[
              "Fitness Nexa — SEO-driven WordPress platform",
              "Greenery Foods & SmartBiz — E-commerce platforms (Wix + PHP)",
              "AP Engineering — Business website",
              "OG Analysis — Market research & SEO analytics platform (Laravel)",
              "SSL Management System — Dynamic pricing + API integrations",
              "LIVRE UR — Marketplace with automation workflows",
              "Logiride — Ride & delivery system",
              "Real-time Chat Application",
              "Automation Testing Framework (WebDriverIO)"
            ].map((item, i) => (
              <motion.li key={i} whileHover={{ x: 10, color: "#00ffc8" }}>
                {item}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* SKILLS */}
       <section style={{ marginTop: 60 }}>

  {/* 🔥 Heading */}
  <h4
    style={{
      color: "#00b4ff",
      marginBottom: 20,
      fontSize: "1.6rem",
      textShadow: "0 0 10px rgba(0,180,255,0.4)"
    }}
  >
    ⚙️ Technical Skills
  </h4>

  {/* 🔥 Grid Layout */}
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
      gap: 18
    }}
  >

    {[
      {
        title: "Backend",
        skills: [
          { name: "PHP", level: 90 },
          { name: "Laravel", level: 88 },
          { name: "Node.js", level: 80 },
          { name: "API Development", level: 85 },
        ]
      },
      {
        title: "Frontend",
        skills: [
          { name: "React", level: 85 },
          { name: "JavaScript", level: 90 },
          { name: "HTML", level: 95 },
          { name: "CSS", level: 90 },
        ]
      },
      {
        title: "Database & Tools",
        skills: [
          { name: "MySQL", level: 88 },
          { name: "MongoDB", level: 78 },
          { name: "Git", level: 85 },
          { name: "Postman", level: 82 },
        ]
      },
      {
        title: "Other Skills",
        skills: [
          { name: "WordPress", level: 90 },
          { name: "System Design", level: 80 },
          { name: "Performance Optimization", level: 82 },
          { name: "Canva", level: 75 },
        ]
      }
    ].map((group, i) => (

      <motion.div
        key={i}
        whileHover={{ scale: 1.03, rotateX: 4, rotateY: -4 }}
        transition={{ type: "spring", stiffness: 120 }}
        style={{
          padding: 18,
          borderRadius: 16,
          background: "rgba(0,0,0,0.6)",
          border: "1px solid rgba(0,255,255,0.2)",
          backdropFilter: "blur(12px)",
          boxShadow: "0 0 25px rgba(0,255,200,0.08)",
          position: "relative",
          overflow: "hidden"
        }}
      >

        {/* 🔥 Glow Sweep */}
        <motion.div
          animate={{
            x: ["-120%", "120%"],
            opacity: [0, 0.15, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "40%",
            height: "100%",
            background: "linear-gradient(120deg,transparent,#00ffc8,transparent)",
            filter: "blur(40px)"
          }}
        />

        {/* Title */}
        <h5
          style={{
            color: "#00ffc8",
            marginBottom: 12,
            fontSize: "1rem",
            textShadow: "0 0 6px #00ffc8"
          }}
        >
          {group.title}
        </h5>

        {/* Skills */}
        {group.skills.map((skill, j) => (
          <div key={j} style={{ marginBottom: 12 }}>

            {/* Top row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                fontSize: 13,
                color: "#ccc",
                marginBottom: 4
              }}
            >
              <span>{skill.name}</span>
              <span style={{ color: "#8b5cf6" }}>
                {skill.level}%
              </span>
            </div>

            {/* Progress bar */}
            <div
              style={{
                width: "100%",
                height: 6,
                background: "rgba(255,255,255,0.08)",
                borderRadius: 10,
                overflow: "hidden"
              }}
            >
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
                style={{
                  height: "100%",
                  borderRadius: 10,
                  background:
                    "linear-gradient(90deg,#00ffc8,#00b4ff,#8b5cf6)",
                  boxShadow: "0 0 10px rgba(0,255,200,0.6)"
                }}
              />
            </div>

          </div>
        ))}

      </motion.div>
    ))}

  </div>
</section>

        {/* LINKS */}
        <div
  style={{
    marginTop: 60,
    display: "flex",
    justifyContent: "center",
    gap: 20,
    flexWrap: "wrap"
  }}
>
  {[
    {
      name: "GitHub",
      link: "https://github.com/MinalKanth",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
    },
    {
      name: "LinkedIn",
      link: "https://linkedin.com/in/mrinalkanth/",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
    }
  ].map((item, i) => (

    <motion.a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1 }}
      whileHover={{ scale: 1.05, y: -6 }}
      style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "12px 18px",
        borderRadius: 14,
        background: "rgba(0,0,0,0.6)",
        border: "1px solid rgba(0,255,255,0.25)",
        backdropFilter: "blur(10px)",
        textDecoration: "none",
        color: "#fff",
        boxShadow: "0 0 20px rgba(0,255,200,0.08)",
        overflow: "hidden",
        cursor: "pointer",
        minWidth: "150px",
        justifyContent: "center"
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

      {/* Icon */}
      <motion.img
        src={item.icon}
        alt={item.name}
        width={22}
        whileHover={{ rotate: 8, scale: 1.2 }}
        style={{
          zIndex: 2,
          filter: "drop-shadow(0 0 6px rgba(0,255,200,0.6))"
        }}
      />

      {/* Text */}
      <motion.span
        whileHover={{ color: "#00ffc8" }}
        style={{
          zIndex: 2,
          fontSize: "14px",
          fontWeight: 500,
          letterSpacing: "0.4px"
        }}
      >
        {item.name}
      </motion.span>

      {/* Arrow */}
      <motion.span
        initial={{ opacity: 0, x: -5 }}
        whileHover={{ opacity: 1, x: 5 }}
        style={{
          marginLeft: "auto",
          color: "#00ffc8",
          fontSize: "12px"
        }}
      >
        →
      </motion.span>

    </motion.a>
  ))}
</div>

        {/* PDF */}
        <div style={{ marginTop: 50 }}>
          <iframe
            src="/Resume.pdf"
            title="Resume"
            style={{
              width: "100%",
              height: "650px",
              borderRadius: 10,
              border: "1px solid rgba(255,255,255,0.1)"
            }}
            onError={(e) => e.target.style.display = "none"}
          />
        </div>

        {/* BUTTON */}
        <motion.a
          href="/Resume.pdf"
          download
          whileHover={{ scale: 1.08 }}
          style={{
            display: "inline-block",
            marginTop: 20,
            background: "linear-gradient(90deg,#00b4ff,#00ffc8)",
            padding: "12px 26px",
            borderRadius: 10,
            color: "#000",
            fontWeight: 600,
            textDecoration: "none",
            boxShadow: "0 0 20px rgba(0,255,200,0.4)"
          }}
        >
          Download Resume
        </motion.a>

      </motion.div>
    </section>
  );
}