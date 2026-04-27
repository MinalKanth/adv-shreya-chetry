import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import "./blog.css";

export default function Blog() {
  const defaultPosts = [
    {
      id: 1,
      title: "Building Scalable SaaS Platforms with Laravel",
      category: "Backend",
      text: "Working on platforms like SSL Certificate Management and OG Analysis has strengthened my expertise in building scalable Laravel applications. I focus on performance, API efficiency, and production-ready systems.",
    },
    {
      id: 2,
      title: "From Idea to Product — Real-World Web Solutions",
      category: "Full Stack",
      text: "Projects like LIVRE UR and Logiride taught me how to transform business requirements into complete systems — including dashboards, APIs, payment integrations, and automation workflows.",
    },
    {
      id: 3,
      title: "Performance, SEO & Optimization",
      category: "Optimization",
      text: "While working on OG Analysis and Fitness Nexa, I improved SEO, database performance, and page speed. Optimization is often the hidden factor behind product success.",
    },
    {
      id: 4,
      title: "Clean Architecture & Maintainable Code",
      category: "Architecture",
      text: "Clean code is about scalability. Using MVC, structured APIs, and modular design ensures long-term maintainability and team collaboration.",
    },
    {
      id: 5,
      title: "Full Stack Development with Real Impact",
      category: "Development",
      text: "With experience in Laravel, React, and WordPress, I build systems that are fast, scalable, and user-focused — from eCommerce to SaaS platforms.",
    },
    {
      id: 6,
      title: "Automation & Testing for Reliability",
      category: "Testing",
      text: "Using automation testing frameworks like WebDriverIO, I ensure system stability and reduce production issues through early bug detection.",
    },
  ];

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedVotes = JSON.parse(localStorage.getItem("kd_blog_votes") || "{}");
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    const withVotes = defaultPosts.map((p) => ({
      ...p,
      agree: savedVotes[p.id]?.agree || 0,
      disagree: savedVotes[p.id]?.disagree || 0,
      userVote: votedByUser[p.id] || null,
    }));
    setPosts(withVotes);
  }, []);

  function vote(id, type) {
    const votedByUser = JSON.parse(localStorage.getItem("kd_blog_voted") || "{}");
    if (votedByUser[id]) return;

    const next = posts.map((p) =>
      p.id === id ? { ...p, [type]: p[type] + 1, userVote: type } : p
    );
    setPosts(next);

    const votes = Object.fromEntries(
      next.map((p) => [p.id, { agree: p.agree, disagree: p.disagree }])
    );
    localStorage.setItem("kd_blog_votes", JSON.stringify(votes));
    localStorage.setItem(
      "kd_blog_voted",
      JSON.stringify({ ...votedByUser, [id]: type })
    );
  }

  return (
    <motion.section
      className="blog-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >

      {/* HEADER */}
      <motion.h2
        initial={{ y: -15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        style={{
          fontSize: "2.5rem",
          fontWeight: 600,
          background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textAlign: "center"
        }}
      >
        🧠 Insights & Work
      </motion.h2>

      <p style={{
        textAlign: "center",
        color: "#888",
        maxWidth: 600,
        margin: "10px auto 40px"
      }}>
        Real-world engineering insights, project learnings, and development strategies from my experience.
      </p>

      {/* GRID */}
      <div className="blog-grid">
        {posts.map((p, idx) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 30px rgba(0,255,200,0.2)"
            }}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 16,
              padding: 18,
              backdropFilter: "blur(10px)"
            }}
          >

            {/* CATEGORY TAG */}
            <span style={{
              fontSize: 11,
              padding: "4px 10px",
              borderRadius: 20,
              background: "rgba(0,255,200,0.1)",
              color: "#00ffc8"
            }}>
              {p.category}
            </span>

            <h3 style={{
              fontSize: 17,
              marginTop: 10,
              color: "#00b4ff"
            }}>
              {p.title}
            </h3>

            <p style={{
              fontSize: 14,
              color: "#bbb",
              marginTop: 8,
              lineHeight: 1.6
            }}>
              {p.text}
            </p>

            {/* VOTING */}
            <div style={{
              display: "flex",
              justifyContent: "flex-end",
              gap: 12,
              marginTop: 12
            }}>
              <motion.button
                onClick={() => vote(p.id, "agree")}
                disabled={!!p.userVote}
                whileHover={{ scale: 1.2 }}
                style={{
                  background: "rgba(0,255,200,0.1)",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 10px",
                  color: "#00ffc8"
                }}
              >
                <ThumbsUp size={16} /> {p.agree}
              </motion.button>

              <motion.button
                onClick={() => vote(p.id, "disagree")}
                disabled={!!p.userVote}
                whileHover={{ scale: 1.2 }}
                style={{
                  background: "rgba(255,0,100,0.1)",
                  border: "none",
                  borderRadius: 8,
                  padding: "6px 10px",
                  color: "#ff4d6d"
                }}
              >
                <ThumbsDown size={16} /> {p.disagree}
              </motion.button>
            </div>

          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
