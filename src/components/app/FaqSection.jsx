import React, { useState } from "react";
import "./FaqSection.css"; // Enhanced CSS

const faqs = [
  {
    question: "How long do I have to collect my Flame’n Bun order?",
    answer:
      "We recommend arriving at your selected collection time — fresh-off-the-grill burgers don’t like waiting!",
  },
  {
    question: "When will I get my Spin & Win reward?",
    answer:
      "Right after you place your order! Head to the app home screen to spin and claim your prize.",
  },
  {
    question: "There’s a queue at the counter. Can I still order via the app?",
    answer:
      "Absolutely! Beat the line and order ahead through the Flame’n Bun app anytime.",
  },
  {
    question: "My order was cancelled. When will I get my refund?",
    answer:
      "Refunds are processed instantly but may take 3–5 working days to reflect depending on your bank.",
  },
  {
    question: "How do I contact Flame’n Bun about my order?",
    answer:
      "Hop into the app, go to 'Help' and tap 'Contact Us' — we’ve got your back!",
  },
  {
    question: "Can I cancel an order placed through the app?",
    answer:
      "You can cancel if the kitchen hasn’t started cooking. Check your Order History for options.",
  },
  {
    question: "What if I received the wrong burger or sides?",
    answer:
      "Oops! Please reach out to the store or report the issue in-app under your order details.",
  },
  {
    question: "I chose the wrong branch. Can I collect my order somewhere else?",
    answer:
      "Sorry, orders must be picked up from the location you selected at checkout.",
  },
  {
    question: "My fries or sauce were missing! What now?",
    answer:
      "Let us know through the Help section — we’ll make it right on your next visit.",
  },
  {
    question: "Can I edit my order after placing it?",
    answer:
      "We start grilling fast! To make changes, please cancel and place a new order quickly.",
  },
  {
    question: "Can I apply promo codes on the app?",
    answer:
      "Yes! Just enter a valid code at checkout to enjoy sizzling savings.",
  },
  {
    question: "Are all menu items available for collection?",
    answer:
      "Most are! Rarely, some items may be out of stock at your selected store.",
  },
  {
    question: "Do I need an account to order from the app?",
    answer:
      "Yup! It helps us track your orders, rewards, and deliver flame-grilled perfection every time.",
  },
  {
    question: "Can I pre-order for later today?",
    answer:
      "Yes! You can choose a future collection time at checkout. Easy peasy.",
  },
  {
    question: "How will I know when my food is ready?",
    answer:
      "We’ll notify you via app push or SMS the moment your order is hot and ready!",
  },
  {
    question: "I have a food allergy. Where can I find ingredient info?",
    answer:
      "Check out the allergen guide on our website or ask the team in-store before ordering.",
  },
  {
    question: "Can I get a digital receipt?",
    answer:
      "Yes, your receipt is saved in your account under 'Orders'.",
  },
  {
    question: "How does the Flame’n Rewards system work?",
    answer:
      "You earn points with every order! Redeem them for free sides, drinks or burgers — yum!",
  }
];


const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <div className="faq-container">
        <h1 className="faq-header">FAQ’S</h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-item ${openIndex === index ? "active" : ""}`}>
            <div className="faq-question" onClick={() => toggleFAQ(index)}>
              <span>{faq.question}</span>
              <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
            </div>
            <div
              className="faq-answer"
              style={{ maxHeight: openIndex === index ? "200px" : "0px" }}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
