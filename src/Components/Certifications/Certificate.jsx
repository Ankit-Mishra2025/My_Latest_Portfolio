import React from "react";
import certificate from "../../assets/Certificate";
import "./Certificate.css";
import { easeInOut, motion } from "framer-motion";
const Certificate = () => {
  return (
    <div className="certificates-container" id="certificates">
      <motion.div
        className="title"
        initial={{ x: 50, y: -50, opacity: 0 }}
        whileInView={{ y: 0, x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: easeInOut }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1>Certifications</h1>
      </motion.div>

      <div className="allCertficate">
        {certificate.map((cert, index) => {
          return (
            <div key={index} className="certificates">
              <img src={cert.s_img} />
              <h2>{cert.s_name}</h2>
              <h3>{cert.s_des}</h3>
              <div className="verifyLink">
                <button>
                  <a href={cert.s_link} target="_blank">
                    {" "}
                    <i class="fas fa-external-link-alt"></i> Verify
                  </a>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;
