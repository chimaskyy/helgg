import React from "react";
import Carr from "../assets/gallery/carr.png";
import whitelogo2 from "../assets/gallery/WhiteLogo.jpg";

function Career() {
  return (
    <>
      <main className="mt-4 p-6 lg:p-24">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-12">
          <div className="">
            <h2 className="text-xl font-extrabold mr-4">Career</h2>
            {/* <hr className="border-t-2 border-gray-400 w-24" /> */}
            <h1 className="font-bold pt-8 pb-8 text-4xl text-gray-800 lg:text-5xl">
              Open Positions
            </h1>
            <p className="tracking-wide text-lg text-gray-500">
              Come join the team!
            </p>
          </div>
          <div className="relative w-full lg:w-3/5 p-6 ">
            <img
              src={Carr}
              alt="Helgg team"
              width={500}
              height={200}
              className="shadow-3xl rounded-3xl"
            />
            {/* <img src={whitelogo2} alt="Helgg white logo" className="absolute"/> */}
          </div>
        </div>
        <div className="mb-4 mt-24 mb-24 font-roboto bg-white shadow-2xl rounded-xl flex flex-col items-center p-16 gap-6 w-full lg:flex-row">
          <div className="m-6 lg:w-3/4">
            <h1 className="font-bold text-center lg:text-left text-2xl  m-6">
              Flutter Developer (Nigeria)
            </h1>
            <p className="text-center lg:text-left lg:m-6">
              We're looking for an experienced Flutter developer who is strong
              in Dart. Your primary focus will be creating user interface
              components and implementing them using well-known Flutter
              workflows.
            </p>
            <h3 className="mt-6 font-bold text-center lg:text-left lg:m-6">
              Part-time <span>.</span> Lagos Nigeria
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <button className="bg-customGreen p-2 w-40 h-30 text-lg rounded-full">
              Apply Now
            </button>
            <p className="text-customBlue font-bold pl-4">Status: undergoing</p>
          </div>
        </div>
        <div className="mb-4 mt-24 mb-24 font-roboto bg-white shadow-2xl rounded-xl flex flex-col items-center p-16 gap-6 w-full lg:flex-row">
          <div className="m-6 lg:w-3/4">
            <h1 className="font-bold text-center lg:text-left text-2xl  m-6">
              Technical Writer (Nigeria)
            </h1>
            <p className="text-center lg:text-left lg:m-6">
              We're looking for a technical writer to develop comprehensive and
              accurate technical documentation for all Helgg electric vehicles
              (EV) , including user manuals for the EVs, instructional guides,
              and technical specifications, while collaborating with
              cross-functional teams and staying up-to-date with industry trends
              and best practices.
            </p>
            <h3 className="mt-6 font-bold text-center lg:text-left lg:m-6">
              Part-time <span>.</span> Lagos Nigeria
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <button className="bg-customGreen p-2 w-40 h-30 text-lg rounded-full">
              Apply Now
            </button>
            <p className="text-customBlue font-bold pl-4">Status: undergoing</p>
          </div>
        </div>
        <div className="mb-4 mt-24 mb-24 font-roboto bg-white shadow-2xl rounded-xl flex flex-col items-center p-16 gap-6 w-full lg:flex-row">
          <div className="m-6 lg:w-3/4">
            <h1 className="font-bold text-center lg:text-left text-2xl  m-6">
              IoT Engineer (Nigeria)
            </h1>
            <p className="text-center lg:text-left lg:m-6">
              We are seeking an experienced IoT Engineer with expertise in
              TCP/IP and MQTT protocols to design, develop, implement and
              maintain our company's IoT solutions and devices.
            </p>
            <h3 className="mt-6 font-bold text-center lg:text-left lg:m-6">
              Part-time <span>.</span> Lagos Nigeria
            </h3>
          </div>
          <div className="flex flex-col gap-6">
            <button className="bg-customGreen font-roboto p-2 w-40 h-30 text-lg rounded-full">
              Apply Now
            </button>
            <p className="text-customBlue font-bold pl-4">Status: undergoing</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default Career;
