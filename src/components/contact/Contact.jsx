import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const contactDetails = [
  {
    title: "Store Queries",
    content: "Contact the store directly via the 'Our Stores' tab.",
  },
  {
    title: "Gift Card Support",
    content: (
      <>
        <p>Email: <a href="mailto:orders@pepesgiftcard.co.uk" className="underline">orders@pepesgiftcard.co.uk</a></p>
        <p>Phone: <a href="tel:01738444376">01738 444376</a></p>
      </>
    ),
  },
  {
    title: "App Queries",
    content: (
      <p>Email: <a href="mailto:customerservices@pepes.co.uk" className="underline">customerservices@pepes.co.uk</a></p>
    ),
  },
  {
    title: "Franchising",
    content: (
      <>
        <p>Email: <a href="mailto:franchising@pepes.co.uk" className="underline">franchising@pepes.co.uk</a></p>
        <p>Phone: <a href="tel:+441923711854">+44 1923 711 854</a></p>
      </>
    ),
  },
  {
    title: "Head Office",
    content: (
      <>
        <p><MapPin className="inline-block w-4 h-4 mr-1 text-white" /> Unit 3, Olds Close, Watford, WD18 9RU</p>
        <p><Phone className="inline-block w-4 h-4 mr-1 text-white" /> <a href="tel:+441923711854">+44 1923 711 854</a></p>
        <p><Mail className="inline-block w-4 h-4 mr-1 text-white" /> <a href="mailto:customerservices@pepes.co.uk">customerservices@pepes.co.uk</a></p>
      </>
    ),
  },
];

const ContactSection = () => {
  return (
    <section className="bg-red-700 text-white py-20 px-6 pt-36">
      <h2 className="text-center text-4xl font-bold uppercase text-yellow-400 mb-12">
        Contact Us
      </h2>

      <div className="space-y-6 max-w-3xl mx-auto">
        {contactDetails.map((item, i) => (
          <motion.div
            key={i}
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-2xl font-semibold text-yellow-500 mb-2 text-center">
              {item.title}
            </h3>
            <div className="text-lg  leading-relaxed space-y-1 text-center">
              {item.content}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
