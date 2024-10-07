import React from "react";
import Team3 from "../assets//gallery/techinalWritter.png";

function TechWriter() {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen m-8">
        <div className="flex flex-col lg:flex-row justify-between lg:items-center lg:items-start gap-12">
          <div>
            <h2 className="text-xl font-extrabold mr-4">Opened Position</h2>
            <h1 className="font-bold pt-8 pb-8 text-4xl text-gray-800 lg:text-5xl">
              Technical Writter
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
        <div className="font-roboto bg-white shadow-2xl mt-16 p-4 md:p-16 lg:p-32">
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Job Description
          </h1>
          <p className="text-left p-8">
            Experienced technical writer needed to develop comprehensive and
            accurate technical documentation for all Helgg electric vehicles
            (EV) , including user manuals for the EVs, instructional guides, and
            technical specifications, while collaborating with cross-functional
            teams and staying up-to-date with industry trends and best
            practices.
          </p>
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Qualifications
          </h1>
          <ul className="list-disc p-8">
            <li>
              Bachelor's degree in technical writing, engineering, or a related
              field.
            </li>
            <li>
              Minimum of 2 years of experience in technical writing, with a
              focus on electric vehicles or related technology.
            </li>
            <li>
              Strong knowledge of electric vehicle systems and components.
            </li>
            <li>Excellent written and verbal communication skills.</li>
            <li>
              Proficient in using documentation tools such as Microsoft Word,
              Adobe Acrobat, and Vision.
            </li>
            <li>
              Knowledge of Dart programming language, Rest APIs and integration
              of various APIs from third parties.
            </li>
            <li>
              Experience working with cross-functional teams in a fast-paced
              environment.
            </li>
            <li>
              Strong attention to detail and ability to deliver high-quality
              documentation on time.
            </li>
          </ul>
          <h1 className="text-center text-2xl text-gray-800 font-bold p-8 lg:text-left">
            Responsibilities
          </h1>
          <ul className="list-disc p-8">
            <li>
              Develop technical documentation for electric vehicles, including
              owner's manuals, service manuals, and instructional guides.
            </li>
            <li>
              Collaborate with engineering and design teams to ensure technical
              accuracy and completeness of documentation.
            </li>
            <li>
              Create and maintain style guide and documentation templates to
              ensure consistency across all documents.
            </li>
            <li>
              Research and stay up-to-date on industry trends, technologies, and
              best practices related to electric vehicles.
            </li>
            <li>
              Provide training and support to internal teams on the use of
              documentation tools and processes.
            </li>
            <li>
              Ensure compliance with industry standards and regulations related
              to electric vehicle documentation.
            </li>
            <li>
              Continuously review and improve existing documentation to ensure
              it is current, accurate, and user-friendly.
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

export default TechWriter;
