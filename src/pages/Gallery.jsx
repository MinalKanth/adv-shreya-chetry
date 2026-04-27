import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import "../CSS/Gallery.css";

const IMAGES = {
  personal: [
    {
      id: 1,
      caption: "🌲 Exploring nature — where clarity meets creativity. These moments help me reset and think better.",
      photos: ["/gallery/matheran.jpg", "/gallery/matheran2.jpg"],
    },
    {
      id: 2,
      caption: "🌄 Stepping away from screens to recharge and gain fresh perspectives for better problem-solving.",
      photos: ["/gallery/lonawala.jpg", "/gallery/lonawala2.jpg"],
    },
  ],
  projects: [
    {
      id: 1,
      caption: "🧠 AI Mental Health Analyzer — leveraging NLP to understand human emotions through text.",
      photos: ["/gallery/m.png", "/gallery/m2.jpeg"],
    },
    {
      id: 2,
      caption: "📊 ProfileX — intelligent data profiling & preprocessing tool for real-world datasets.",
      photos: ["/gallery/profilex.jpeg", "/gallery/profilex2.jpeg","/gallery/profilex3.jpeg", "/gallery/profilex4.jpeg"],
    },
  ],
  achievements: [
    {
      id: 1,
      caption: "🏆 Solved 1000+ problems on LeetCode — consistency and discipline in problem solving.",
      photos: ["/gallery/leet.jpeg"],
    },
    {
      id: 2,
      caption: "🤖 Technical Lead — leading AI initiatives and collaborative innovation.",
      photos: ["/gallery/techlead.png"],
    },
  ],
};

export default function Gallery() {
  const [tab, setTab] = useState("personal");
  const [zoom, setZoom] = useState({ img: null, post: null, index: 0 });

  const openZoom = (post, index) =>
    setZoom({ img: post.photos[index], post, index });

  const closeZoom = () => setZoom({ img: null, post: null, index: 0 });

  const nextImage = () => {
    const nextIndex = (zoom.index + 1) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[nextIndex], index: nextIndex });
  };

  const prevImage = () => {
    const prevIndex =
      (zoom.index - 1 + zoom.post.photos.length) % zoom.post.photos.length;
    setZoom({ ...zoom, img: zoom.post.photos[prevIndex], index: prevIndex });
  };

  return (
    <section
      style={{
        padding: "60px 20px",
        background: "radial-gradient(circle at top, #050505, #000)",
      }}
    >

      {/* HEADER */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          textAlign: "center",
          fontSize: "2.5rem",
          background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
        }}
      >
        📸 My Journey
      </motion.h2>

      <p
        style={{
          textAlign: "center",
          color: "#888",
          maxWidth: 600,
          margin: "10px auto 40px",
        }}
      >
        A visual story of my experiences — from personal moments to projects and achievements that define my journey.
      </p>

      {/* TABS */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: 12,
        marginBottom: 30
      }}>
        {["personal", "projects", "achievements"].map((type) => (
          <motion.button
            key={type}
            onClick={() => setTab(type)}
            whileHover={{ scale: 1.05 }}
            style={{
              padding: "8px 18px",
              borderRadius: 20,
              border: "none",
              cursor: "pointer",
              background: tab === type
                ? "linear-gradient(90deg,#00ffc8,#00b4ff)"
                : "rgba(255,255,255,0.05)",
              color: tab === type ? "#000" : "#ccc",
              fontSize: 14,
            }}
          >
            {type.toUpperCase()}
          </motion.button>
        ))}
      </div>

      {/* GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={tab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          style={{
            display: "grid",
            gap: 20,
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            maxWidth: 1100,
            margin: "auto",
          }}
        >
          {IMAGES[tab].map((post) => (
            <motion.div
              key={post.id}
              whileHover={{ scale: 1.03 }}
              style={{
                background: "rgba(255,255,255,0.04)",
                borderRadius: 14,
                padding: 14,
                border: "1px solid rgba(255,255,255,0.08)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p style={{ fontSize: 13, color: "#aaa", marginBottom: 10 }}>
                {post.caption}
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: post.photos.length > 1 ? "1fr 1fr" : "1fr",
                gap: 6
              }}>
                {post.photos.map((src, i) => (
                  <motion.img
                    key={i}
                    src={src}
                    alt="gallery"
                    whileHover={{ scale: 1.05 }}
                    onClick={() => openZoom(post, i)}
                    style={{
                      width: "100%",
                      height: "180px",
                      objectFit: "cover",
                      borderRadius: 10,
                      cursor: "pointer"
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* ZOOM */}
      <AnimatePresence>
        {zoom.img && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <img
              src={zoom.img}
              alt="zoom"
              style={{
                maxWidth: "90%",
                maxHeight: "80%",
                borderRadius: 10,
              }}
            />

            <button onClick={closeZoom} style={btnStyle("top","right")}>
              <X />
            </button>

            {zoom.post.photos.length > 1 && (
              <>
                <button onClick={prevImage} style={btnStyle("center","left")}>
                  <ChevronLeft />
                </button>
                <button onClick={nextImage} style={btnStyle("center","right")}>
                  <ChevronRight />
                </button>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const btnStyle = (vertical, horizontal) => ({
  position: "absolute",
  [vertical === "center" ? "top" : vertical]: vertical === "center" ? "50%" : "20px",
  [horizontal]: "20px",
  transform: vertical === "center" ? "translateY(-50%)" : "none",
  background: "rgba(255,255,255,0.1)",
  border: "none",
  padding: "8px",
  borderRadius: "50%",
  color: "#fff",
  cursor: "pointer"
});
