import React from "react";
import "./Contact.css";
import contact from "../../assets/footer.jpg";
import { easeOut, motion } from "framer-motion";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6c18ccd4-5b86-41de-b5a5-1def94f56b6d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Form submitted successfully");
      console.log("Success", res);
    }
  };

  return (
    <>
      <div className="contact" id="contact">
        <motion.div
          className="contact-title"
          initial={{ x: -50, y: -50, opacity: 0 }}
          whileInView={{ x: 0, y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: easeOut }}
          viewport={{ once: false, amount: 0.8 }}
        >
          <h1>Get in touch </h1>
          <p>Your Next Dev is One Click Away 🚀</p>
        </motion.div>

        <div className="contact-section">
          <motion.div
            className="contact-left"
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: false, amount: 0.5 }}
          >
          
            <div className="secondContactBox">
              <h2>Quick Contacts</h2>
                <p>
              Your Next Project is One Click Away <span>Let's Connect </span> 🚀 
            </p>
               <a href="mailto:anki95081@gmail.com" target="_blank"> <i class="fas fa-envelope"></i> Email</a>
             <a href="https://github.com/Ankit-Mishra2025" target="_blank" > <i class="fab fa-github"></i> Github</a>
               <a href="https://www.linkedin.com/in/ankit-mishra-7b3393310/" target="_blank"> <i class="fab fa-linkedin"></i> Linkedin</a>
              
            </div>
          </motion.div>

          {/* <div className="contact-deatils">
    <div className="contact-detail">


    </div>

    <div className="contact-detail">
        
    </div>

    <div className="contact-detail">
        
    </div>
</div> */}

          <motion.form
            className="contact-right"
            onSubmit={onSubmit}
            initial={{ x: 80, y: -50, opacity: 0 }}
            whileInView={{ x: 0, y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: easeOut }}
            viewport={{ once: false, amount: 0.5 }}
          >
           <h2>Send a Message</h2>
            <input type="text" placeholder=" Your Name" name="name"  required/>
           
            <input type="email" placeholder="Email Address" name="email" required />

            <textarea
              name="message"
              placeholder=" Your Message" required=""
            ></textarea>

            <button type="submit" className="contact-submit">
            <i class="fas fa-paper-plane"></i> Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Contact;
