import React, { useRef } from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "email_service",  // Replace with your EmailJS Service ID
        "template_rfwr7kg", // Replace with your EmailJS Template ID
        form.current,
        "kXPbstDGZbtolnSHj"   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          form.current.reset(); // Clear the form after submission
        },
        (error) => {
          console.log("Failed to send email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1"
          >
            <div>
              <h4 className="text-xl uppercase text-accent">
                Please feel free to connect
              </h4>
              <h4 className="text-[45px] lg:text-[20px] leading-none mb-12">
                <br />
                Your Friendly Neighborhood Web Developer—Swinging Between Bugs
                and Features!
              </h4>
            </div>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="text"
              placeholder="Your name"
              name="user_name"
              required
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all"
              type="email"
              placeholder="Your email"
              name="user_email"
              required
            />
            <textarea
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12"
              placeholder="Your message"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-lg">
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
