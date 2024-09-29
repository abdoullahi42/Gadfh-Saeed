/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-mixed-spaces-and-tabs */

import { useState } from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const questions = [
  {
    id: 3457,
    question: " What type of products do you source?",
    answer:
      "We source a wide range of products, including minerals, electronic vehicles, building materials, electronics, textiles, and much more. If you have a specific product in mind, let us know your needs, and we’ll find exactly what you’re looking for",
  },
  {
    id: 7336,
    question: "How do you ensure the quality of products?",
    answer:
      "We work with trusted suppliers and our expert conduct thorough quality checks to ensure the products meet your standards",
  },
  {
    id: 8832,
    question: "What are your payment terms?",
    answer:
      "Our payment terms are flexible. We can discuss options that best suit your business needs.",
  },
  {
    id: 1297,
    question: "How long does it take to deliver goods",
    answer:
      "Delivery times vary depending on the destination and product type. However, we aim to complete the process within short period of time usually 3 to 4 weeks",
  },
  {
    id: 9103,
    question: "Do you handle customs clearance?",
    answer:
      "Yes, we take care of all customs clearance procedures, ensuring that your goods comply with international trade regulations. This minimizes delays and ensures a smooth import/export process",
  },
];

function Faqs() {
  const [openQuestions, setOpenQuestions] = useState([]);

  const handleClicks = (id) => {
    setOpenQuestions((prevOpenQuestions) =>
      prevOpenQuestions.includes(id)
        ? prevOpenQuestions.filter((questionId) => questionId !== id)
        : [...prevOpenQuestions, id]
    );
  };

  return (
    <div className="bg-[#fdf2e9]" id="FAQ">
      <div>
        <h3 className="mb-16 text-3xl md:text-4xl lg:text-[40px] font-semibold text-center">
          Frequently Asked Questions
        </h3>
      </div>
      <div className=" w-11/12 lg:w-10/12 mx-auto pb-20 ">
        {questions.map((question) => (
          <div key={question.id} className=" ">
            <div className=" bg-white  mb-5">
              <div
                onClick={() => handleClicks(question.id)}
                className={`flex justify-between items-center py-5 px-4 md:px-8 lg:px-9 transition-all duration-300 ease-in ${
                  openQuestions.includes(question.id)
                    ? "bg-[#62350F] text-white "
                    : ""
                }`}
              >
                <h3 className="font-medium text-xl  md:text-2xl  w-10/12">
                  {question.question}
                </h3>
                <p>
                  {openQuestions.includes(question.id) ? (
                    <FaChevronUp size={18} />
                  ) : (
                    <FaChevronDown size={18} />
                  )}
                </p>
              </div>
              <div
                className={`${
                  openQuestions.includes(question.id) ? "py-7 px-6" : ""
                }`}
              >
                <p className="text-[18px] md:text-xl leading-[1.5] ">
                  {openQuestions.includes(question.id) && question.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faqs;
