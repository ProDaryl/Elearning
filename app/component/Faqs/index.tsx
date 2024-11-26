import PropTypes from 'prop-types';
import FAQCards from './FAQCard';

type cardType = {
    email: string,
}


const data = [
  {
    question: "Can I enroll in more than one course?",
    answers: [
      "Yes, you can enroll in multiple courses simultaneously.",
      "Enjoy flexibility by registering for multiple courses at once.",
    ],
  },
  {
    question: "How do I access my course materials?",
    answers: [
      "Course materials are available in your dashboard after registration.",
      "Log into your account and navigate to the 'My Courses' section.",
    ],
  },
  {
    question: "What payment methods do you accept?",
    answers: [
      "We accept credit cards, debit cards, and PayPal.",
      "For regional payments, mobile money options are also available.",
    ],
  },
  {
    question: "Are there any prerequisites for enrolling?",
    answers: [
      "Most courses are beginner-friendly and require no prior knowledge.",
      "Some advanced courses may have prerequisites listed in their details.",
    ],
  },
];


function Faqs({ email }: cardType) {
  return (
    <div className="flex flex-col md:flex-row gap-6 w-[90%] border border-[#f7f7f8] rounded-md bg-[#f7f7f8] mx-auto py-20 md:py-32 justify-between items-center">
      {/* Left Section */}
      <div className="flex flex-col p-6 md:p-8 w-full md:w-[48%]">
        <h1 className="font-bold text-2xl md:text-4xl py-4">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600">
          Still have any questions? Contact our team via{" "}
          <span className="text-blue-500 cursor-pointer">{email}</span>
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="border border-gray-300 bg-white text-gray-800 rounded-lg px-4 py-2 shadow hover:bg-gray-100 transition"
          >
            See our FAQs →
          </button>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex w-full md:w-[48%]">
        <FAQCards data={data} />
      </div>
    </div>
  );
}

Faqs.propTypes = {
  email: PropTypes.string,
};

export default Faqs;