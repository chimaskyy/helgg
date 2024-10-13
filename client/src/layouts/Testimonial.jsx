import { useState, useEffect } from "react";
import { MessageCircleMore } from "lucide-react";
import Hand from "../assets/hand.png";
import Domi from "../assets/Domi.jpeg";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

const Testimonial = () => {
  const testimonials = [
    {
      rating: 5,
      avatar: Domi,
      name: "Dominon Ikpeawujor",
      title: "Student",
      quote:
        "It was a triving experience! The breeze while riding and how quiet the scooters are make the ride wholesome for m. You might need to strengthen your balance on the first go, but in general, it is an enjoyable experienc!",
    },
    {
      rating: 4,
      avatar: Domi,
      name: "Joy Eromonsele",
      title: "Student",
      quote:
        "It was very easy to learn, balanced, easy to navigate and portable. It was so much fun. Easily on of my best esperience.",
    },
    {
      rating: 5,
      avatar: Domi,
      name: "Adeolu Adegboye",
      title: "Student",
      quote:
        "It was really fun and convinient to commute using Helgg scooters. Through Hell I'm able to estimate the amount of time it helps me to cover last mile distances so I can plan how to get to my destinationsin time.",
    },
    {
      rating: 4,
      avatar: Domi,
      name: "Daniel Jesusegun",
      title: "Student",
      quote:
        "My experience riding Helgg has been amazing. The flexibility of the scooter and the speed is also great. It's easy to if you are familiar with riding a bicycle and even if you are not familiar it can be taught easily.",
    },
    {
      rating: 4,
      avatar: Domi,
      name: "Dean Obi",
      title: "Student",
      quote:
        "Using one of Helgg scooters was my first experience with an electric scooter. I was scared a bit but the scooter was so easy to understand and adapt to I had a seamless ride while on it. No fault anywhere and no malfunction. It's an experience that I want everyone to enjoy.",
    },

    {
      rating: 5,
      avatar: Domi,
      name: "Faji Olaotan",
      title: "Student",
      quote:
        "My time riding on Helgg's Scooters can be described simply as blissfull. It's a proper relief to be on those machines. However when you crant the speeds up a notch, it becomes a wild, mild terrifying thril, that is nothing short of superlative. If the Helgg Scooters are the future, then I cant wait to grow older.",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Autoplay effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial(
        (prevIndex) => (prevIndex + 1) % testimonials.length
      );
    }, 5000); // Change testimonial every 5 seconds

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [testimonials.length]);

  const previousTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section className="md:py-14 bg-slate-100 mb-24">
      <div className="my-12 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:justify-between ">
          <div className="lg:w-2/5">
            <div className="m-4 flex items-center">
              <p className="bg-green-400 rounded-full p-3">
                <MessageCircleMore className="text-white" />
              </p>

              <p className="text-customGray ml-2 text-lg sm:text-xl">
                — 97.6% Rider Satisfaction
              </p>
            </div>
            <h1 className="text-4xl font-bold ml-4 mt-12 sm:text-4xl md:text-4xl md:ml-12">
              Hear from{" "}
              <span className="bg-gradient-to-l from-green-500 to-green-300 bg-clip-text text-transparent">
                happy
              </span>{" "}
              Helgg Users.
            </h1>
          </div>
          <div className="lg:w-3/5  relative">
            <img
              src={Hand}
              alt="A clapping hand icon"
              width={80}
              className="animate-bounce "
            />
            <div className="max-w-7xl mx-auto text-center m-2">
              <ul>
                {testimonials.map((item, idx) =>
                  currentTestimonial === idx ? (
                    <li key={idx}>
                      <figure className="relative bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg p-8 min-h-[350px] h-auto">
                        {/* Star Rating */}
                        <div className="mb-4">
                          {[...Array(5)].map((_, starIdx) => (
                            <svg
                              key={starIdx}
                              xmlns="http://www.w3.org/2000/svg"
                              className={`w-6 h-6 ${
                                starIdx < item.rating
                                  ? "text-green-900"
                                  : "text-gray-300"
                              } fill-current inline`}
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M10 2l2.5 6.5H18l-5 3.5 2 7-5-4-5 4 2-7-5-3.5h5.5L10 2z"
                                clipRule="evenodd"
                              />
                            </svg>
                          ))}
                        </div>

                        <blockquote>
                          <p className="font-roboto text-lg text-black">
                            “{item.quote}“
                          </p>
                        </blockquote>

                        {/* User Info */}
                        <div className="mt-6">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            width={64}
                            height={64}
                            className="mx-auto rounded-full"
                          />
                          <div className="mt-3">
                            <span className="block text-black font-semibold">
                              {item.name}
                            </span>
                            <span className="hidden lg:block text-gray-600 text-sm mt-0.5">
                              {item.title}
                            </span>
                          </div>
                        </div>

                        {/* Dots for navigation */}
                        <div className="mt-6">
                          <ul className="flex gap-x-3 justify-center">
                            {testimonials.map((_, btnIdx) => (
                              <li key={btnIdx}>
                                <button
                                  className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${
                                    currentTestimonial === btnIdx
                                      ? "bg-green-900"
                                      : "bg-gray-300"
                                  }`}
                                  onClick={() => setCurrentTestimonial(btnIdx)}
                                ></button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </figure>
                    </li>
                  ) : null
                )}
              </ul>
            </div>

            {/* Navigation Buttons */}
            <div className="hidden lg:block">
              <button
                onClick={previousTestimonial}
                role="button"
                aria-label="Previous Testimonial"
                className="hidden -ml-6 mt-12 absolute top-1/2 w-16 h-16 left-0 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-green-900 md:block lg:block"
              >
                <ChevronLeftIcon className="text-customGreen hover:text-white" />
              </button>
              <button
                onClick={nextTestimonial}
                role="button"
                aria-label="Next Testimonial"
                className="hidden -mr-6 mt-12 absolute top-1/2 w-16 h-16 right-0 transform -translate-y-1/2  bg-white rounded-full p-2 shadow-lg hover:bg-green-900 md:block lg:block"
              >
                <ChevronRightIcon className="text-customGreen hover:text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
