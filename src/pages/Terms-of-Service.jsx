import React from "react";
import { motion } from "framer-motion";

export default function TermsOfService() {
  return (
    <div style={{
      background: "linear-gradient(180deg, #111111 0%, #1a1a1a 100%)",
      color: "#e2e8f0",
      minHeight: "100vh",
      padding: "100px 20px 120px",
      position: "relative",
      overflow: "hidden"
    }}>
      {/* Subtle Gold Diagonal Accent - Matching Visiting Card */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(45deg, transparent 48%, rgba(245,158,11,0.06) 50%, transparent 52%)",
        pointerEvents: "none",
        zIndex: 1,
      }} />

      <div style={{ maxWidth: "920px", margin: "0 auto", lineHeight: "1.85", position: "relative", zIndex: 2 }}>
        
        {/* Header with Scales Icon */}
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
            Terms of Service
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
            1. Agreement to Terms
          </h2>
          <p>
            By engaging Adv. Shreya Chetry for legal services, you agree to be bound by these Terms of Service. 
            These terms govern the professional relationship between you (the Client) and Adv. Shreya Chetry, 
            an enrolled Advocate with the Sibsagar Bar Association.
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
            2. Scope of Services
          </h2>
          <p>We provide professional legal representation and consultation in the following areas:</p>
          <ul style={{ paddingLeft: "24px", lineHeight: "2.1" }}>
            <li>Criminal Law (Bail, FIR, Defense, etc.)</li>
            <li>Family &amp; Matrimonial Disputes</li>
            <li>Civil &amp; Property Law Matters</li>
            <li>Corporate, Commercial &amp; Recovery Cases</li>
            <li>High Court &amp; District Court Practice</li>
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
            3. Client Responsibilities
          </h2>
          <p>You agree to:</p>
          <ul style={{ paddingLeft: "24px", lineHeight: "2.1" }}>
            <li>Provide accurate, complete, and timely information and documents</li>
            <li>Cooperate fully during the legal process</li>
            <li>Pay the agreed professional fees promptly</li>
            <li>Keep all communications with the advocate confidential</li>
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
            4. Fees &amp; Payment
          </h2>
          <p>
            Professional fees are mutually agreed upon before commencement of work. Full or agreed advance payment is required 
            before filing any case or appearing in court. Fees are non-refundable once services have commenced.
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
            5. Confidentiality &amp; Professional Privilege
          </h2>
          <p>
            All information shared with Adv. Shreya Chetry is protected under advocate-client privilege and will be kept strictly confidential, 
            in accordance with the Bar Council of India rules.
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
            6. Limitation of Liability
          </h2>
          <p>
            While we strive for the best possible outcome, we are not liable for any unfavorable court decisions or outcomes beyond our control. 
            Our liability is limited to the professional fees paid for the specific service.
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
            7. Termination
          </h2>
          <p>
            Either party may terminate the engagement by giving written notice. Upon termination, you will be responsible for all fees 
            for services already rendered.
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
            For any questions or clarifications regarding these Terms of Service:
          </p>
          <p style={{ marginTop: "18px", fontSize: "1.3rem" }}>
            📧 <a href="mailto:poppyshreya06@gmail.com" style={{ color: "#fbbf24", textDecoration: "none" }}>
              poppyshreya06@gmail.com
            </a>
          </p>
          <p style={{ marginTop: "8px" }}>
            📍 Rupohi Pathar, Rudrasagar, Sibsagar, Assam
          </p>
          <p style={{ marginTop: "24px", color: "#d97706", fontStyle: "italic" }}>
            Adv. Shreya Chetry • Where trust meets legal expertise
          </p>
        </motion.div>
      </div>
    </div>
  );
}