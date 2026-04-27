import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'

const PROJECTS = [
  {
    title: '🛒 Greenery Foods Website',
    desc: 'Designed and developed a complete tea business website with branding, product showcasing, and SEO-focused performance optimization.',
    ss: '/banners/greeneryfoods_image.jpeg', 
    tech: ['Wix', 'Custom PHP', 'SEO'],
    live: 'https://greeneryfoodssite.wixsite.com/live',
    
  },
  {
    title: '💪 Fitness Nexa Blog',
    desc: 'Content-driven fitness platform with SEO optimization, performance tuning, and structured blogging strategy.',
    ss: '/banners/fitnessnexa_image.jpeg',
    tech: ['WordPress', 'SEO', 'Content'],
    live: 'https://fitnessnexa.com/',
    
  },
  {
    title: '🏗️ AP Engineering Website',
    desc: 'Professional business website with modern UI, responsive layout, and structured service presentation.',
    ss: '/banners/ap_engineering_image.jpeg',
    tech: ['Wix', 'Custom PHP', 'UI/UX'],
    live: 'https://apengineeringsite.wixsite.com/site2',
    
  },
  {
    title: '🌐 OG Analysis Platform',
    desc: 'Advanced SEO tool for Open Graph preview generation and website analysis with optimized API architecture.',
    ss: '/banners/og_analysis_image.jpeg',
    tech: ['Laravel', 'PHP', 'API', 'MySQL'],
    live: 'https://www.oganalysis.com',
    
  },
  {
    title: '🏫 Renaissance High School Website',
    desc: 'Designed and developed a clean, modern school website showcasing academics, student activities, and institutional values with a responsive and user-friendly interface.',
    ss: '/banners/reaissance_image.png',
    tech: ['Wix', 'Custom PHP', 'Responsive Design'],
    live: 'https://www.oganalysis.com',
    
  },
  {
    title: '🔐 SSL Certificate System',
    desc: 'Dynamic SSL ordering system with API integration, currency logic, and automated workflows.',
    ss: '/banners/ssl_cert_image.jpeg',
    tech: ['Laravel', 'Razorpay', 'MySQL'],
    live: '#',
    
  },
  {
    title: '🎥 Beastierated Platform',
    desc: 'AI-driven video review platform with subscription system, affiliate integration, and region-based content visibility.',
    ss: '/banners/beastierated_image.jpeg',
    tech: ['Laravel', 'React.js', 'API', 'MySQL'],
    live: 'https://fstg.beastierated.com',
    
  },
  {
    title: '📄 Elmo Publishing System',
    desc: 'Multi-role publishing platform with review workflows, payment integration, and WordPress auto-publishing.',
    ss: '/banners/liberia_medical_image.jpeg',
    tech: ['Laravel', 'WordPress', 'API', 'MySQL'],
    live: 'https://lmdaliberia.org',
    
  },
  {
    title: '🌿 Herbio E-commerce',
    desc: 'Custom herbal eCommerce platform with dynamic product combinations, shipping logic, and order tracking.',
    ss: '/banners/herbio_image.jpeg',
    tech: ['WordPress', 'WooCommerce', 'MySQL'],
    live: 'https://her-bio.com',
    
  },
  {
    title: '🌐 Viprak Corporate Websites',
    desc: 'Built responsive corporate websites with WordPress, custom themes, and structured content management.',
    ss: '/banners/viprak_image.jpeg',
    tech: ['WordPress', 'UI/UX'],
    live: 'https://www.viprak.com',
    
  },
  {
    title: '🚗 Logiride System',
    desc: 'Ride and delivery management platform with structured backend logic and booking system.',
    ss: '/banners/logiride_image.jpeg',
    tech: ['Laravel', 'API', 'MySQL'],
    live: 'https://www.logiride.com/',
    
  },
  {
    title: '🏢 Enterprise Systems (Multiple Clients)',
    desc: 'Developed eCommerce, inventory, and shipment tracking systems with payment integrations and admin dashboards.',
    ss: '/banners/insoftsolutions_image.jpeg',
    tech: ['Laravel', 'API', 'Payment Gateways', 'MySQL'],
    live: 'https://www.insoftsolution.com/',
    
  },
  {
    title: '🚚 LIVRE UR Platform',
    desc: 'Service marketplace with role-based access, subscriptions, and automated workflows.',
    ss: '/banners/livre-d-un_image.jpeg',
    tech: ['WordPress', 'Automation'],
    live: 'https://livre-d-un-clic.com/',
    
  },
]

const PROJECT_TYPES = [
  { title: "Bakery Website", img: "/banners/banner_bakery.jpeg" },
  { title: "CA & Finance Website", img: "/banners/banner_ca.jpeg" },
  { title: "Clinic Website", img: "/banners/banner_clinic.jpeg" },
  { title: "Coaching Institute Website", img: "/banners/banner_coaching_center.jpeg" },
  { title: "E-commerce Website", img: "/banners/banner_ecommerce_website.jpeg" },
  { title: "Gym & Fitness Website", img: "/banners/banner_gym.jpeg" },
  { title: "Hotel & Resort Website", img: "/banners/banner_hotel.jpeg" },
  { title: "Law Firm Website", img: "/banners/banner_law.jpeg" },
  { title: "Logistics Website", img: "/banners/banner_logistics.jpeg" },
  { title: "Personal Portfolio", img: "/banners/banner_personal_portfolio.jpeg" },
  { title: "Real Estate Website", img: "/banners/banner_real_estate.jpeg" },
  { title: "Restaurant Website", img: "/banners/banner_restaurant.jpeg" },
  { title: "Salon & Spa Website", img: "/banners/banner_salon.jpeg" },
  { title: "School Website", img: "/banners/banner_school.jpeg" },
  { title: "Retail Shop Website", img: "/banners/banner_shop.jpeg" },
  { title: "Service Business Website", img: "/banners/banner_service_business.jpeg" },
];

export default function Projects() {

  const [hovered, setHovered] = useState(null)

  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div style={{ padding: 30 }}>
        
        {/* Header */}
        <motion.h2
          style={{
            fontSize: "2.5rem",
            fontWeight: 600,
            background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
            WebkitBackgroundClip: "text",
            color: "transparent"
          }}
        >
          💼 Featured Projects
        </motion.h2>

        <p style={{ color: "#888", marginBottom: 30, maxWidth: 600 }}>
          Real-world applications built with performance, scalability, and user experience in mind.
        </p>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gap: 24,
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))'
        }}>
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                e.currentTarget.style.setProperty("--x", `${x}px`);
                e.currentTarget.style.setProperty("--y", `${y}px`);
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.06, rotateX: 6, rotateY: 6 }}
              transition={{ delay: idx * 0.08, type: "spring" }}
              style={{
                borderRadius: 18,
                overflow: "hidden",
                position: "relative",
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: hovered === idx 
                  ? "0 0 40px rgba(0,255,200,0.3)" 
                  : "0 0 20px rgba(0,255,200,0.08)"
              }}
            >

              {/* IMAGE + OVERLAY */}
              <div style={{ position: "relative" }}>
                <motion.img
                  src={p.ss}
                  alt={p.title}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover"
                  }}
                  onError={(e)=> e.target.style.display="none"}
                />

                {/* Hover Overlay */}
                <motion.div
                  animate={{ opacity: hovered === idx ? 1 : 0 }}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "rgba(0,0,0,0.6)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 15
                  }}
                >
                  <motion.a
                    href={p.live}
                    target="_blank"
                    whileHover={{ scale: 1.3 }}
                    style={{ color: "#fff" }}
                  >
                    <ExternalLink size={26} />
                  </motion.a>
                </motion.div>
              </div>

              {/* CONTENT */}
              <div style={{ padding: 16 }}>
                <h3 style={{ color: "#00ffc8", fontSize: 18 }}>
                  {p.title}
                </h3>

                <p style={{
                  fontSize: 14,
                  color: "#aaa",
                  marginTop: 6,
                  lineHeight: 1.5
                }}>
                  {p.desc}
                </p>

                {/* TECH TAGS */}
                <div style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 6,
                  marginTop: 10
                }}>
                  {p.tech.map((t) => (
                    <motion.span
                      key={t}
                      whileHover={{ scale: 1.2 }}
                      style={{
                        padding: "4px 10px",
                        fontSize: 11,
                        borderRadius: 20,
                        background: "rgba(0,255,200,0.08)",
                        border: "1px solid rgba(0,255,200,0.2)",
                        color: "#00ffc8"
                      }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

{/* HEADER */}
<motion.h3
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  style={{
    fontSize: "2rem",
    marginBottom: 10,
    background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
    WebkitBackgroundClip: "text",
    color: "transparent",
    textAlign: "center"
  }}
>
  🚀 What I Specialize In
</motion.h3>

{/* 🔥 Underline Glow */}
<div style={{
  width: 80,
  height: 3,
  margin: "0 auto 20px",
  background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
  borderRadius: 10,
  boxShadow: "0 0 15px rgba(0,255,200,0.6)"
}} />

<motion.p
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.2 }}
  style={{
    color: "#aaa",
    marginBottom: 30,
    maxWidth: 600,
    textAlign: "center",
    marginLeft: "auto",
    marginRight: "auto"
  }}
>
  I design and develop high-converting websites tailored for different industries,
  helping businesses grow online and generate real results.
</motion.p>

{/* GRID */}
<div style={{
  display: "grid",
  gap: 22,
  gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))"
}}>
  {PROJECT_TYPES.map((item, idx) => (
    <motion.div
      key={idx}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        e.currentTarget.style.setProperty("--x", `${x}px`);
        e.currentTarget.style.setProperty("--y", `${y}px`);
      }}
      whileHover={{ scale: 1.06 }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.05 }}
      style={{
        borderRadius: 18,
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 0 30px rgba(0,255,200,0.08)",
        transformStyle: "preserve-3d"
      }}
    >

      {/* 🔥 Mouse Glow */}
      <div style={{
        position: "absolute",
        top: "var(--y)",
        left: "var(--x)",
        width: 200,
        height: 200,
        transform: "translate(-50%, -50%)",
        background: "radial-gradient(circle, rgba(0,255,200,0.25), transparent)",
        pointerEvents: "none",
        zIndex: 1
      }} />

      {/* IMAGE */}
      <div style={{ overflow: "hidden" }}>
        <motion.img
          src={item.img}
          alt={item.title}
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.4 }}
          style={{
            width: "100%",
            aspectRatio: "16/9",
            objectFit: "contain",
            background: "#000"
          }}
          onError={(e)=> e.target.style.display="none"}
        />
      </div>

      {/* 🔥 Hover Overlay CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0,0,0,0.6)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 2
        }}
      >
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{
            padding: "8px 18px",
            borderRadius: 20,
            border: "none",
            background: "linear-gradient(90deg,#00ffc8,#00b4ff)",
            color: "#000",
            fontWeight: 600,
            cursor: "pointer"
          }}
        >
          Explore
        </motion.button>
      </motion.div>

      {/* CONTENT */}
      <div style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: "14px",
        background: "linear-gradient(transparent, rgba(0,0,0,0.95))"
      }}>
        <h4 style={{
          margin: 0,
          color: "#fff",
          transition: "0.3s"
        }}>
          {item.title}
        </h4>
      </div>

    </motion.div>
  ))}
</div>

      </div>
    </motion.section>
  )
}