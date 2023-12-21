import React, { useState } from "react";

const Accord = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  // Data containing questions and answers
  const faqs = [
    {
      question: "Accordion without arrow rotation",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
    {
      question: "Accordion without arrow rotation",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
    {
      question: "Accordion without arrow rotation",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
    {
      question: "Accordion without arrow rotation",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
    {
      question: "Accordion without arrow rotation",
      answer:
        "The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center space-y-3 py-24 px-16">
      <div className="mb-8">
        <h1 className="text-center text-7xl">Frequently Asked Questions</h1>
      </div>
      {faqs.map((faq, index) => (
        <div
          key={index}
          id={`accordion-arrow-icon-${index}`}
          data-accordion="open"
          className="w-3/5"
        >
          <h2 id={`accordion-arrow-icon-heading-${index}`} className="">
            <button
              type="button"
              className="flex items-center justify-between w-full p-5 font-medium rounded-xl rtl:text-right border border-gray-700 text-gray-400 hover:bg-gray-800 gap-3"
              data-accordion-target={`#accordion-arrow-icon-body-${index}`}
              aria-expanded={activeAccordion === index ? "true" : "false"}
              aria-controls={`accordion-arrow-icon-body-${index}`}
              onClick={() => toggleAccordion(index)}
            >
              <span className="text-lg">{faq.question}</span>
              <svg
                data-accordion-icon
                className={`w-3 h-3 shrink-0 transform ${
                  activeAccordion === index ? "rotate-180" : ""
                }`}
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1l4 4 4-4"
                />
              </svg>
            </button>
          </h2>
          <div
            id={`accordion-arrow-icon-body-${index}`}
            aria-labelledby={`accordion-arrow-icon-heading-${index}`}
            className={`transition-max-height transition-all ease-in-out duration-300 rounded-xl overflow-hidden bg-gray-900 ${
              activeAccordion === index ? "block" : "hidden"
            }`}
            style={{ maxHeight: activeAccordion === index ? "1000px" : "0" }}
          >
            <div className="p-5 bg-gray-200 text-gray-950">
              <p className="mb-2 text-lg">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accord;
