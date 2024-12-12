import { useState } from "react";

function FAQ() {
  const faqs = [
    {
      question: "What is Unify?",
      answer:
        "Unify is a comprehensive platform designed to streamline and centralize admissions processes for higher education institutions.",
    },
    {
      question: "How does Unify improve the admissions process?",
      answer:
        "Unify automates application processing, centralizes inquiries, and provides customizable post-application workflows to make admissions seamless.",
    },
    {
      question: "Is Unify suitable for all types of educational institutions?",
      answer:
        "Yes, Unify is flexible and can be tailored to the specific needs of universities, colleges, and other higher education organizations.",
    },
    {
      question: "Can Unify integrate with existing systems?",
      answer:
        "Absolutely! Unify supports integration with various existing systems to ensure a smooth transition and workflow.",
    },
    {
      question: "What kind of support does Unify offer?",
      answer:
        "We offer 24/7 customer support, onboarding assistance, and detailed documentation to help you get the most out of Unify.",
    },
    {
      question: "Is training provided for using Unify?",
      answer:
        "Yes, we provide comprehensive training sessions to ensure your team is comfortable and efficient with the platform.",
    },
    {
      question: "Does Unify offer analytics features?",
      answer:
        "Yes, Unify provides in-depth analytics to track admissions metrics, monitor progress, and make data-driven decisions.",
    },
    {
      question: "How do I get started with Unify?",
      answer:
        "Getting started is simple. Schedule a demo with us, and we’ll guide you through the onboarding process step by step.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index:any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="w-full mx-auto px-16 py-6 bg-blue-50 ">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-5xl mx-auto ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md shadow-sm mb-5 bg-gray-50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left text-gray-800 font-medium focus:outline-none"
            >
              <span>{faq.question}</span>
              <svg
                className={`w-5 h-5 transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                } transition-transform`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
