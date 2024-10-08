import React from "react";
import Team3 from "../assets//gallery/community.png";

function Community() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-8 lg:p-16">
        <section className="flex flex-col lg:flex-row justify-between lg:items-center lg:items-start gap-12">
          <div>
            <header>
              <h1 className="sr-only">
                Volunteer for Sustainable Transportation
              </h1>{" "}
            </header>
            <h2 className="text-xl font-extrabold mr-4">Volunteer with Us</h2>
            <h2 className="font-bold pt-8 pb-8 text-4xl text-gray-800 lg:text-5xl">
              Join the Community
            </h2>
            <p className="tracking-wide text-lg text-gray-500">
              Be a part of the change in promoting sustainable transportation
              and reducing carbon footprint.
            </p>
          </div>
          <div className="relative w-full lg:w-3/5 p-6">
            <img
              src={Team3}
              alt="A group of volunteers promoting sustainable transportation"
              width={600}
              height={200}
              className="shadow-3xl rounded-3xl"
            />
          </div>
        </section>

        <section className="font-roboto bg-white shadow-2xl mt-16 p-12 lg:p-24">
          <h2 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Why You Should Join Us
          </h2>
          <article>
            <p className="lg:p-4 text-lg">
              Join us in driving the future of sustainable transportation! We're
              seeking skilled designers and engineers to volunteer and help
              shape the future of electric vehicles. Be a part of the solution
              and make an impact.
            </p>
          </article>
        </section>

        <section className="font-roboto bg-white shadow-2xl mt-16 p-12 lg:p-32">
          <h2 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Apply as a Volunteer
          </h2>
        </section>
      </div>
    </>
  );
}

export default Community;
