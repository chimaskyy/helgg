import React from "react";
import Team3 from "../assets/gallery/Iot.png";

function IoTEngineer() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:items-start gap-12">
          <div>
            <h2 className="text-xl font-extrabold mr-4">Opened Position</h2>
            <h1 className="font-bold pt-8 pb-8 text-4xl text-gray-800 lg:text-5xl">
              Iot Engineer
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
            EHelgg is seeking an experienced IoT Engineer with expertise in
            TCP/IP and MQTT protocols to design, develop, implement and maintain
            our company's IoT solutions and devices, troubleshoot and optimize
            them, research and stay up-to-date with industry trends,
            technologies and best practices, develop and implement security
            measures to protect against cyber threats, collaborate with
            cross-functional teams, continuously improve and develop IoT skills
            and knowledge, and ensure all IoT implementation is compliant with
            industry standards and regulations.
          </p>
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Qualifications
          </h1>
          <ul className="list-disc p-8">
            <li>
              Bachelor's degree in Computer Science, Electrical Engineering or
              related field
            </li>
            <li>
              Minimum of 2 years of experience in Iot Engineering or related
              field.
            </li>
            <li>
              Strong understanding of IoT protocols and standards such as MQTT,
              CoAP, Zigbee, Z-Wave, Bluetooth, and Wi-Fi.
            </li>
            <li>
              Experience with IoT platforms such as AWS IoT, Azure IoT, or
              Google IoT.
            </li>
            <li>
              Strong knowledge of programming languages such as C, C++, Python,
              or Java.
            </li>
            <li>Experience with IoT security and encryption.</li>
            <li>
              Strong problem-solving, analytical and troubleshooting skills.
            </li>
            <li>
              Strong communication skills and ability to work in a team
              environment.
            </li>
          </ul>
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Responsibilities
          </h1>
          <ul className="list-disc p-8">
            <li>Design, develop, and implement IoT solutions and protocols.</li>
            <li>Configure, troubleshoot, and optimize IoT devices.</li>
            <li>
              Research and stay up-to-date on industry trends, technologies, and
              best practices related to IoT.
            </li>
            <li>
              Monitor the performance of IoT devices, identify and resolve
              issues.
            </li>
            <li>
              Develop and implement security measures to protect against cyber
              threats.
            </li>
            <li>
              Collaborate with cross-functional teams, including software
              development, design, and product development.
            </li>
            <li>Continuously improve and develop IoT skills and knowledge.</li>
            <li>
              Ensure all IoT implementation is compliant with industry standards
              and regulations
            </li>
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

export default IoTEngineer;
