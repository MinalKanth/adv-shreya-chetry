import React from "react";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div style={{
      background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
      color: "#e2e8f0",
      minHeight: "100vh",
      padding: "100px 20px 120px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Subtle Gold Diagonal Accent */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(45deg, transparent 48%, rgba(245,158,11,0.06) 50%, transparent 52%)",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      <div style={{ maxWidth: "920px", margin: "0 auto", lineHeight: "1.85", position: "relative", zIndex: 2 }}>
        
        {/* Header with Scales Icon - Matching Visiting Card */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: "center", marginBottom: "50px" }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            style={{ 
              display: "inline-block", 
              fontSize: "4.2rem", 
              color: "#f59e0b", 
              marginBottom: "16px" 
            }}
          >
            ⚖️
          </motion.div>
          
          <h1 style={{ 
            fontSize: "3.1rem", 
            fontWeight: 800,
            color: "#fff",
            marginBottom: "8px",
            letterSpacing: "-1px",
            textShadow: "0 10px 30px rgba(245,158,11,0.3)"
          }}>
            Privacy Policy
          </h1>
          
          <p style={{ 
            color: "#f59e0b", 
            fontSize: "1.35rem", 
            fontWeight: 600,
            letterSpacing: "3px"
          }}>
            Adv. Shreya Chetry
          </p>
          
          <p style={{ 
            textAlign: "center", 
            color: "#d97706", 
            marginTop: "12px",
            fontSize: "1.1rem"
          }}>
            Last Updated: April 2026
          </p>
        </motion.div>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ 
            color: "#f59e0b", 
            fontSize: "1.85rem", 
            marginBottom: "22px",
            borderBottom: "2px solid rgba(245,158,11,0.3)",
            paddingBottom: "10px"
          }}>
            1. Introduction
          </h2>
          <p>
            Adv. Shreya Chetry ("we", "our", or "us") is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, and safeguard your personal information 
            when you engage our legal services as an enrolled Advocate practicing in Sibsagar, Assam.
          </p>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ 
            color: "#f59e0b", 
            fontSize: "1.85rem", 
            marginBottom: "22px",
            borderBottom: "2px solid rgba(245,158,11,0.3)",
            paddingBottom: "10px"
          }}>
            2. Information We Collect
          </h2>
          <ul style={{ paddingLeft: "24px", lineHeight: "2.1" }}>
            <li>Personal details (Name, Contact Number, Email, Address)</li>
            <li>Case-related information and documents</li>
            <li>Identification proofs and legal documents submitted</li>
            <li>Communication records with our office</li>
          </ul>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ 
            color: "#f59e0b", 
            fontSize: "1.85rem", 
            marginBottom: "22px",
            borderBottom: "2px solid rgba(245,158,11,0.3)",
            paddingBottom: "10px"
          }}>
            3. How We Use Your Information
          </h2>
          <p>We use your information solely to:</p>
          <ul style={{ paddingLeft: "24px", lineHeight: "2.1" }}>
            <li>Provide professional legal representation and consultation</li>
            <li>Prepare and file cases in District Court, High Court, or other forums</li>
            <li>Communicate case updates and important legal notices</li>
            <li>Maintain proper client records as required under Bar Council rules</li>
          </ul>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ 
            color: "#f59e0b", 
            fontSize: "1.85rem", 
            marginBottom: "22px",
            borderBottom: "2px solid rgba(245,158,11,0.3)",
            paddingBottom: "10px"
          }}>
            4. Data Security &amp; Confidentiality
          </h2>
          <p>
            Client confidentiality is paramount. All information and documents are treated with strict 
            professional privilege. We use secure systems and never share your data with third parties 
            except when legally required for court proceedings or with your explicit consent.
          </p>
        </section>

        <section style={{ marginBottom: "60px" }}>
          <h2 style={{ 
            color: "#f59e0b", 
            fontSize: "1.85rem", 
            marginBottom: "22px",
            borderBottom: "2px solid rgba(245,158,11,0.3)",
            paddingBottom: "10px"
          }}>
            5. Your Rights
          </h2>
          <p>
            You have the right to access, update, or request deletion of your personal information. 
            You may also withdraw consent for certain processing activities at any time. 
            To exercise these rights, please contact us directly.
          </p>
        </section>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          style={{
            textAlign: "center",
            marginTop: "80px",
            padding: "40px 30px",
            background: "rgba(245,158,11,0.08)",
            border: "1px solid rgba(245,158,11,0.3)",
            borderRadius: "20px"
          }}
        >
          <p style={{ color: "#f59e0b", fontSize: "1.15rem", fontWeight: 600 }}>
            For any privacy-related queries or concerns, feel free to contact us:
          </p>
          <p style={{ marginTop: "18px", fontSize: "1.3rem" }}>
            📧 <a href="mailto:poppyshreya06@gmail.com" style={{ color: "#fbbf24", textDecoration: "none" }}>
              poppyshreya06@gmail.com
            </a>
          </p>
          <p style={{ marginTop: "8px" }}>
            📍 Rupohi Pathar, Rudrasagar, Sibsagar, Assam
          </p>
          <p style={{ marginTop: "20px", color: "#d97706" }}>
            Adv. Shreya Chetry • Where trust meets legal expertise
          </p>
        </motion.div>
      </div>
    </div>
  );
}