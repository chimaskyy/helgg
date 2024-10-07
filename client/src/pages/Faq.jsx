import { useRef, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import MinimizeIcon from "@mui/icons-material/Minimize";

const FaqCard = ({ faqItem, idx }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="space-y-3 mt-5 overflow-hidden border-b"
      key={idx}
      onClick={handleOpenAnswer}
    >
      <h4
        className={`cursor-pointer pb-5 flex items-center justify-between text-lg font-medium ${
          isOpen ? "text-customBlue" : "text-gray-700"
        }`}
        onClick={handleOpenAnswer}
      >
        {faqItem.q}
        {isOpen ? (
          <MinimizeIcon className="text-gray-500 ml-2" />
        ) : (
          <AddIcon className="text-gray-500 ml-2" />
        )}
      </h4>
      <div
        className={`transition-max-height duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <p className="text-gray-500 p-2">{faqItem.a}</p>
      </div>
    </div>
  );
};

const Faq = () => {
  const faqsList = [
    {
      q: "What should I do if I have a problem with the elctric car, scooter or bicycle during my ride?",
      a: "You can contact our customer support team through our website or mobile app for assistance.",
    },
    {
      q: "How do I end my ride?",
      a: "You can end your ride through or mobile app using the “End Ride Button”",
    },
    {
      q: "Can I extend my ride?",
      a: "Yes, as long as the vehicle is not booked by another customer.",
    },
    {
      q: "Can I bring my pet on the ride?",
      a: "No, it is not allowed to bring pets on the ride.",
    },
    {
      q: "Can I smoke or consume alcohol during the ride?",
      a: "No, it is not allowed to smoke or consume alcohol during the ride.",
    },
    {
      q: "Can I reserve electric car, scooter, or bicycle in advance?",
      a: "Yes, you can reserve a vehicle in advance through our website or mobile app.",
    },
    {
      q: "What is the maximum weight limit for the electric scooter and bicycle?",
      a: "The maximum weight limit varies depending on the vehicle type.",
    },
    {
      q: "What is the maximum speed of the electric scooter and bicycle?",
      a: "The maximum speed for electric scooters and bicycles varies depending on the vehicle type and local laws.",
    },
    {
      q: "Are the electric cars, scooters, and bicycles equipped with GPS?",
      a: "Yes, all our vehicles are equipped with GPS for tracking and security purposes.",
    },
    {
      q: "Are the electric cars, scooters, and bicycles equipped with insurance?",
      a: "Yes, all our vehicles are insured",
    },
    {
      q: "Can I use an electric car, scooter, or bicycle outside of yor service area?",
      a: "No, you can only use the vehicle within the designated service area.",
    },
    {
      q: "How much does a ride cost?",
      a: " Pricing varies depending on factors such as distance, duration of the ride and vehicle type. You can check pricing on our website or mobile app",
    },
    {
      q: "Are elctric cars, scooters, and bicycles safe?",
      a: "Yes, all our vehicles are regularly maintained and inspected to ensure safety.",
    },
    {
      q: "Do you offer discount promotions",
      a: "We offer various promotions and discounts, please check our website or mobile app for more information.",
    },
    {
      q: "Can I bring a friend or family member on the ride with me?",
      a: "Yes, as long as the vehicle is able to accommodate additional passengers.",
    },
    {
      q: "Are helmets provided for elecric scooters and bicycles?",
      a: "Yes, helmets are provided for electric scooters and bicycles.",
    },
    {
      q: "What is the maximum distance I can travel on a single ride?",
      a: "The maximum distance you can travel depends on the vehicle type and the battery capacity",
    },
  ];

  return (
    <section className="font-roboto max-w-screen-xl mt-12 mx-auto px-4 md:px-8">
      <div className="font-roboto space-y-3 text-center">
        <h1 className="text-3xl text-gray-800 font-semibold">
          Frequently Asked Questions
        </h1>
        <p className="text-gray-600 max-w-lg mx-auto text-lg">
          Answered all frequently asked questions, Still confused? feel free to
          contact us.
        </p>
      </div>
      <div className="mt-14 max-w-2xl mx-auto">
        {faqsList.map((item, idx) => (
          <FaqCard key={idx} faqItem={item} />
        ))}
      </div>
    </section>
  );
};

export default Faq;
