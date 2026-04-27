import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Skills.css";

const SKILLS = [
  { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Bootstrap", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "WordPress", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "C#", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
  { name: ".NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg" },
  { name: "AJAX", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "JSON", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Selenium", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg" },
  { name: "WebDriverIO", logo: "https://webdriver.io/img/webdriverio.png" },
];

const ROWS = [
  [
    {
      title: "Backend Engineering",
      items: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 88 },
        { name: "Node.js", level: 82 },
        { name: "REST APIs", level: 87 },
        { name: "MVC Architecture", level: 85 },
      ]
    },
    {
      title: "Frontend Development",
      items: [
        { name: "HTML5", level: 95 },
        { name: "CSS3", level: 90 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 85 },
        { name: "Responsive UI", level: 92 },
      ]
    },
    {
      title: "Databases & Dev Tools",
      items: [
        { name: "MySQL", level: 88 },
        { name: "MongoDB", level: 80 },
        { name: "Git", level: 85 },
        { name: "Postman", level: 83 },
        { name: "VS Code", level: 90 },
      ]
    },
    {
      title: "CMS & Platforms",
      items: [
        { name: "WordPress", level: 92 },
        { name: "Wix", level: 75 },
        { name: "Custom PHP", level: 88 },
      ],
    },
  ],
  [
    {
      title: "Core Concepts",
      items: [
        { name: "OOP", level: 90 },
        { name: "API Integration", level: 88 },
        { name: "System Design", level: 82 },
        { name: "Optimization", level: 85 },
      ],
    },
    {
      title: "Professional Skills",
      items: [
        { name: "Problem Solving", level: 92 },
        { name: "Teamwork", level: 90 },
        { name: "Execution", level: 88 },
        { name: "Adaptability", level: 87 },
      ],
    },
    {
      title: "Frameworks & Concepts",
      items: [
        { name: "MVC", level: 88 },
        { name: "APIs", level: 90 },
        { name: "JSON", level: 92 },
        { name: "AJAX", level: 85 },
      ],
    },
    {
      title: "Testing & Automation",
      items: [
        { name: "Selenium", level: 80 },
        { name: "WebDriverIO", level: 75 },
        { name: "API Testing", level: 85 },
        { name: "Debugging", level: 90 },
      ],
    }
  ],
];

export default function Skills() {

  const stageRef = useRef();
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const handleMouse = (e) => {
      const rect = stage.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    stage.addEventListener("mousemove", handleMouse);

    const circles = Array.from(stage.querySelectorAll(".skill-circle"));
    const rect = stage.getBoundingClientRect();
    const placed = [];

    const isOverlapping = (x, y, size) =>
      placed.some((p) => {
        const dx = p.x - x;
        const dy = p.y - y;
        return Math.sqrt(dx * dx + dy * dy) < p.size / 2 + size / 2 + 40;
      });

    circles.forEach((circle) => {
      const size = circle.offsetWidth;
      let x, y, tries = 0;
      do {
        x = Math.random() * (rect.width - size - 20);
        y = Math.random() * (rect.height - size - 20);
        tries++;
      } while (isOverlapping(x, y, size) && tries < 150);

      placed.push({ x, y, size });
      circle.style.left = `${x}px`;
      circle.style.top = `${y}px`;

      const dx = (Math.random() - 0.5) * 120;
      const dy = (Math.random() - 0.5) * 120;

      circle.animate(
        [{ transform: "translate(0, 0)" }, { transform: `translate(${dx}px, ${dy}px)` }],
        {
          duration: 6000 + Math.random() * 2000,
          direction: "alternate",
          iterations: Infinity,
          easing: "ease-in-out",
        }
      );
    });

    return () => stage.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <section className="skills-container" id="skills">

      {/* Header */}
      <motion.div
  className="skills-header"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  style={{
    maxWidth: "1100px",
    margin: "0 auto",
    textAlign: "center",
    padding: "0 20px"
  }}
>
  <h2 style={{
    fontSize: "2.7rem",
    fontWeight: 600,
    background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
  }}>
    🚀 Technical Expertise
  </h2>

  <div
    style={{
      width: 120,
      height: 2,
      margin: "10px auto 20px",
      background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
      boxShadow: "0 0 10px rgba(0,255,200,0.5)"
    }}
  />

  <p style={{
    color: "#aaa",
    fontSize: "1rem",
    maxWidth: "700px",
    margin: "0 auto",
    lineHeight: 1.6
  }}>
    A strong foundation in full stack development with expertise in building scalable applications,
    API-driven systems, and high-performance web platforms.
  </p>
</motion.div>

      {/* Floating Skills */}
      <motion.div
        className="skills-stage relative mx-auto mb-20"
        ref={stageRef}
        style={{
          width: "100%",
          height: "420px",
          borderRadius: "25px",
          background: "radial-gradient(circle at center, #0a0a0a, #111)",
          overflow: "hidden",
        }}
      >

        {/* Cursor Glow */}
        <motion.div
          animate={{ x: mouse.x - 150, y: mouse.y - 150 }}
          style={{
            position: "absolute",
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,255,255,0.2), transparent)",
            pointerEvents: "none"
          }}
        />

        {SKILLS.map((s, i) => (
          <motion.div
            key={s.name}
            className="skill-circle"
            whileHover={{ scale: 1.4, rotate: 8 }}
            style={{
              width: "110px",
              height: "110px",
              borderRadius: "50%",
              position: "absolute",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              background: "rgba(0,255,255,0.05)",
              border: "1px solid rgba(0,255,255,0.25)",
            }}
          >
            <img src={s.logo} alt={s.name} style={{ width: 50 }} />
            <span>{s.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Skill Boxes */}
<div className="skills-table">
  {ROWS.map((row, rowIndex) => (
    <div key={rowIndex} className="skills-row">
      {row.map((col, colIndex) => (
        <motion.div
          key={col.title}
          onMouseMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            e.currentTarget.style.setProperty("--x", `${x}px`);
            e.currentTarget.style.setProperty("--y", `${y}px`);
          }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.07,
            rotateX: 6,
            rotateY: -6,
          }}
          transition={{
            delay: (rowIndex + colIndex) * 0.08,
            type: "spring",
            stiffness: 120
          }}
          className="skill-box"
          style={{
            position: "relative",
            padding: "20px",
            borderRadius: "16px",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(0,255,255,0.25)",
            boxShadow: "0 0 30px rgba(0,255,200,0.12)",
            overflow: "hidden",
            backdropFilter: "blur(12px)",
            boxShadow: "0 0 25px rgba(0,255,200,0.08)",
            transformStyle: "preserve-3d"
          }}
        >

          {/* 🔥 Mouse Glow Effect */}
          <div
            style={{
              position: "absolute",
              top: "var(--y)",
              left: "var(--x)",
              width: 180,
              height: 180,
              transform: "translate(-50%, -50%)",
              background: "radial-gradient(circle, rgba(0,255,200,0.25), transparent)",
              pointerEvents: "none",
              zIndex: 0
            }}
          />

          {/* 🔥 Gradient Border Glow */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "16px",
              padding: "1px",
              background: "linear-gradient(120deg,#00ffc8,#00b4ff,#8b5cf6)",
              WebkitMask:
                "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
              opacity: 0.4,
              zIndex: 0
            }}
          />

          {/* CONTENT */}
          <div style={{ position: "relative", zIndex: 2 }}>
            <h3
              style={{
                color: "#00eaff",
                marginBottom: "15px",
                textAlign: "center",
                fontWeight: "600",
                fontSize: "1.1rem"
              }}
            >
              {col.title}
            </h3>

            <div>
  {col.items.map((item, i) => (
    <div key={i} style={{ marginBottom: "14px" }}>

      {/* Top Row */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        fontSize: "13px",
        marginBottom: "5px",
        color: "#ccc"
      }}>
        <span>{item.name}</span>
        <span style={{ color: "#8b5cf6" }}>{item.level}%</span>
      </div>

      {/* Progress Background */}
      <div style={{
        width: "100%",
        height: "6px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "10px",
        overflow: "hidden"
      }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${item.level}%` }}
          transition={{ duration: 1 }}
          style={{
            height: "100%",
            borderRadius: "10px",
            background: "linear-gradient(90deg,#00ffc8,#00b4ff,#8b5cf6)",
            boxShadow: "0 0 10px rgba(0,255,200,0.6)"
          }}
        />
      </div>

    </div>
  ))}
</div>
          </div>

        </motion.div>
      ))}
    </div>
  ))}
</div>

    </section>
  );
}