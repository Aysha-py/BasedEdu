import { useState } from "react";

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      answer:
        "This website is designed to provide users with information about our services and how to utilize them effectively.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      answer:
        "You can contact support via our contact form or by sending an email to support@example.com.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor?",
      answer:
        "We offer a variety of services including web development, SEO optimization, and digital marketing solutions.",
    },
    {
      question:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      answer:
        "For more information, you can visit our About Us page or check our blog for updates and articles.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h3 className="text-center text-4xl font-semibold">FAQs</h3>
      <p className="text-base text-center font-normal mb-4 py-4">
        Common questions we answer
      </p>

      <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] pb-8">
        <div
          className=" space-x-12 mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
          data-aos="zoom-y-out"
          data-aos-delay={450}
        >
          <a
            className="btn w-full text-[#0244F1] bg-[#FFFF]shadow hover:bg-gray-50 sm:ml-4 sm:w-auto border border-[#0244F1] text-sm "
            href="#0"
          >
            Contact Us
          </a>
        </div>
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full py-4 text-left"
            >
              <span className="text-base font-normal">{faq.question}</span>
              <span
                className={`transform transition-transform duration-200 ${
                  activeIndex === index ? "rotate-90" : ""
                }`}
              >
                &gt;
              </span>
            </button>
            {activeIndex === index && (
              <div className="py-2 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
