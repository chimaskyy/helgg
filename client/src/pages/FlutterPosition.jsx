import React from "react";
import Team3 from "../assets/Images/team3.png";

function FlutterPosition() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:items-start gap-12">
          <div>
            <h2 className="text-xl font-extrabold mr-4">Opened Position</h2>
            <h1 className="font-bold pt-8 pb-8 text-4xl text-gray-800 lg:text-5xl">
              Flutter Developer
            </h1>
            <p className="tracking-wide text-lg text-gray-500">
              Location: Nigeria
            </p>
            <p className="pt-4 tracking-wide text-lg text-gray-500">
              Work type: Part-time
            </p>
          </div>
          <div className="relative w-full lg:w-3/5 p-6">
            <img
              src={Team3}
              alt="Helgg team"
              width={500}
              height={200}
              className="shadow-3xl rounded-3xl"
            />
          </div>
        </div>
        <div className="font-roboto bg-white shadow-2xl mt-16 p-12 lg:p-32">
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Job Description
          </h1>
          <p className="text-left p-8">
            Helgg Scooters is searching for an experienced Flutter developer who
            is strong in Dart. Your primary focus will be creating user
            interface components and implementing them using well-known Flutter
            workflows. You will guarantee that these components and the overall
            application are solid and easy to maintain.
          </p>
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Qualifications
          </h1>
          <ul className="list-disc p-8">
            <li>3+ years experience in mobile app development.</li>
            <li>Good understanding of UI rendering behavior and performance</li>
            <li>
              In-depth understanding of Object Oriented programming languages
              like Java and C++.
            </li>
            <li>
              Familiarity with using version control tools like Git, Subversion,
              etc. IDEs like Android Studio, VS Code, and Websites like Google
              Play Console, etc.
            </li>
            <li>
              Understanding of the Agile Software Development Life Cycle and
              been exposed to Scrum projects.
            </li>
            <li>
              Knowledge of Dart programming language, Rest APIs and integration
              of various APIs from third parties.
            </li>
            <li>
              Comfortable using test cases for debugging code, enhancing
              performance and reliability.
            </li>
          </ul>
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Responsibilities
          </h1>
          <ul className="list-disc p-8">
            <li>
              You will be building and shipping robust apps to Android/ iOS
              devices using a single code base.
            </li>
            <li>
              You will be writing readable and clear code using Dart that will
              be extensively documented for future use and upgrades.
            </li>
            <li>
              You will be sharing feedback and brainstorming ideas with teams to
              improve the development process.
            </li>
            <li>Developing new user-facing features using Flutter</li>
          </ul>
        </div>
        <div className="bg-white shadow-2xl mt-16 p-12 w-full">
          <h1>Application form</h1>
          <p>To apply, please fill out the form below:</p>
        </div>
      </div>
    </>
  );
}

export default FlutterPosition;
