"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("");

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        "service_udkuera", // Your Service ID
        "template_w4an9si", // Your Template ID
        form,
        "j6AdRJxoXuSP0zcfD" // Your Public Key
      );

      setStatus("Message sent successfully!");
      (form as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" ref={ref} className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl font-bold mb-8 text-center text-purple-300"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-purple-200"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="from_name"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-purple-200"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="from_email"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-purple-200"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
