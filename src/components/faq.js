import React, { useState } from "react";
import '../App.css';


const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);
  
    const toggleAnswer = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
  
    const faqData = [
        {
          question: "What services do you offer?",
          answer: "We offer a comprehensive range of professional car detailing services tailored to meet your vehicle's unique needs. Our services include thorough exterior washes, high-quality waxing to protect the paint, deep cleaning of the interior upholstery and carpets, stain and odor removal, leather conditioning, and more. We also offer specialized treatments like paint correction, ceramic coating, and engine bay cleaning to keep your vehicle looking and performing its best. Whether you're looking for a quick refresh or a full-service detail, our team is equipped to deliver outstanding results."
        },
        {
          question: "How long does a detailing service take?",
          answer: "The duration of a detailing service depends on the level of detail and the condition of your vehicle. For a basic exterior and interior cleaning, you can expect it to take between 1 to 2 hours. However, if you choose a full detailing package that includes paint correction, waxing, and deep interior cleaning, the process typically takes 2 to 3 hours. For advanced services like ceramic coating or extensive stain removal, it may take even longer. We’re committed to delivering quality, and we’ll give you a time estimate when you book, so you’ll know what to expect."
        },
        {
          question: "Do I need to book an appointment in advance?",
          answer: "Yes, we recommend scheduling an appointment in advance to ensure we can accommodate your preferred time, especially during peak seasons. Our goal is to provide each customer with the highest quality service, which requires careful scheduling. Walk-ins are welcome, but booking ahead allows us to give your car the full attention it deserves without any delays. You can book easily through our website or by giving us a call, and we’ll confirm your appointment with a reminder as well."
        },
        {
          question: "Is your detailing service eco-friendly?",
          answer: "Yes, we prioritize environmentally friendly practices in all aspects of our detailing services. We use eco-friendly, biodegradable cleaning products that are safe for both your car and the planet. Additionally, our water-saving techniques reduce water usage, and our waste disposal practices comply with environmental regulations to minimize impact. We believe in providing exceptional service without compromising the environment, so you can feel good about giving your car the best care in a sustainable way."
        }
      ];
      
  
    return (
      <div className="faq">
        <h3>Faq</h3>
        <h2>Frequently Asked Questions</h2>
        <div className="faq-list">
          {faqData.map((faq, index) => (
            <div key={index} className="faq-item">
              <div className="faq-question" onClick={() => toggleAnswer(index)}>
                <h3>{faq.question}</h3>
                <span>{openIndex === index ? "▲" : "▼"}</span>
              </div>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default FAQ;