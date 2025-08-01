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
            <img src={contact} />
            <h1>
              Your Next Dev is One Click Away
              <br />
              Let's Connect🚀
            </h1>
            <p>
              I'm currently available to take on new projects, so feel free to
              connect and send me a message about anything..
            </p>
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
            <label htmlFor="">Your Name: </label>
            <input type="text" placeholder="Enter Your name" name="name"  required/>

            <label htmlFor="">Your Email:</label>
            <input type="email" placeholder="Enter your email" name="email" required />

            <label htmlFor="">Your Message:</label>
            <textarea
              name="message"
              placeholder="Enter your message" required
            ></textarea>

            <button type="submit" className="contact-submit">
            <i class="fas fa-paper-plane"></i>  Submit Now
            </button>
          </motion.form>
        </div>
      </div>
    </>
  );
};

export default Contact;
