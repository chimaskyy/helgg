import { useState, useEffect } from "react";
import { MessageCircleMore } from "lucide-react";
import Hand from "../assets/hand.png";
import Domi from "../assets/Domi.jpeg";

const Testimonial = () => {
  const testimonials = [
    {
      avatar: Domi,
      name: "Dominon Ikpeawujor",
      title: "Student",
      quote:
        "It was a triving experience! The breeze while riding and how quiet the scooters are make the ride wholesome for m. You might need to strengthen your balance on the first go, but in general, it is an enjoyable experienc!",
    },
    {
      avatar: Domi,
      name: "Joy Eromonsele",
      title: "Student",
      quote:
        "It was very easy to learn, balanced, easy to navigate and portable. It was so much fun. Easily on of my best esperience.",
    },
    {
      avatar: Domi,
      name: "Adeolu Adegboye",
      title: "Student",
      quote:
        "It was really fun and convinient to commute using Helgg scooters. Through Hell I'm able to estimate the amount of time it helps me to cover last mile distances so I can plan how to get to my destinationsin time.",
    },
    {
      avatar: Domi,
      name: "Daniel Jesusegun",
      title: "Student",
      quote:
        "My experience riding Helgg has been amazing. The flexibility of the scooter and the speed is also great. It's easy to if you are familiar with riding a bicycle and even if you are not familiar it can be taught easily.",
    },
    {
      avatar: Domi,
      name: "Dean Obi",
      title: "Student",
      quote:
        "Using one of Helgg scooters was my first experience with an electric scooter. I was scared a bit but the scooter was so easy to understand and adapt to I had a seamless ride while on it. No fault anywhere and no malfunction. It's an experience that I want everyone to enjoy.",
    },

    {
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

  return (
    <section className="py-14">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        {/* Flex container for text and testimonials */}
        <div className="m-8 flex flex-col lg:flex-row lg:justify-between lg:items-center">
          {/* Text Content */}
          <div className="lg:w-2/5">
            <div className="text-gray-600 m-4 flex items-center">
              <p className="bg-green-400 rounded-full inline-flex p-3">
                <MessageCircleMore className="text-white" />
              </p>
              {/* Apply margin-left here */}
              <p className="ml-4 text-xl">— 97.6% Rider Satisfaction</p>
            </div>
            <h1 className="text-4xl font-bold m-12 ml-4">
              Hear from{" "}
              <span className="bg-gradient-to-l from-green-500 to-green-300 bg-clip-text text-transparent">
                happy
              </span>{" "}
              Helgg Users.
            </h1>
          </div>

          {/* Testimonial Content */}
          <div className="lg:w-3/5 mt-38">
            <img src={Hand} alt="" width={80} className="animate-bounce" />
            <div className="max-w-2xl mx-auto text-center m-6">
              <ul>
                {testimonials.map((item, idx) =>
                  currentTestimonial === idx ? (
                    <li key={idx}>
                      <figure className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 rounded-lg p-8">
                        {/* Star Rating */}
                        <span className="text-green-500 mb-4 font-bold">
                          ★★★★★
                        </span>

                        <blockquote>
                          <p className="text-gray-800 font-semibold sm:text-2xl">
                            “{item.quote}“
                          </p>
                        </blockquote>

                        {/* Testimonial Avatar and Info */}
                        <div className="mt-6">
                          <img
                            src={item.avatar}
                            className="w-16 h-16 mx-auto rounded-full"
                          />
                          <div className="mt-3">
                            <span className="block text-gray-800 font-semibold">
                              {item.name}
                            </span>
                            <span className="block text-gray-600 text-sm mt-0.5">
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
                                      ? "bg-green-400"
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
