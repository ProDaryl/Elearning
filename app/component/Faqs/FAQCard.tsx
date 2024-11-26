'use client'
import { SetStateAction, useState } from "react";
import PropTypes from "prop-types";

type dataType = {
    question: string,
    answers: string[],
}


function FAQCards({ data }: dataType[]) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index: SetStateAction<null>) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle the clicked question
  };

  return (
    <div className="flex flex-col gap-6">
      {data.map((faq, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded-lg p-4 shadow-md transition-all duration-300 ease-in-out hover:shadow-lg hover:border-orange-300"
        >
          {/* Question */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleAnswer(index)}
          >
            <h2 className="font-bold text-lg md:text-xl text-gray-800">
              {faq.question}
            </h2>
            <button
              type="button"
              className="text-lg md:text-xl bg-orange-300 text-white rounded-full w-8 h-8 flex items-center justify-center"
            >
              {openIndex === index ? "-" : "+"}
            </button>
          </div>

          {/* Answers */}
          <div
            className={`mt-3 text-gray-600 text-sm md:text-base transition-all duration-300 ease-in-out ${
              openIndex === index ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
          >
            <ul className="list-disc pl-6 mt-2 space-y-2">
              {faq.answers.map((answer, answerIndex) => (
                <li key={answerIndex}>{answer}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

FAQCards.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      question: PropTypes.string.isRequired,
      answers: PropTypes.arrayOf(PropTypes.string).isRequired,
    })
  ).isRequired,
};

export default FAQCards;