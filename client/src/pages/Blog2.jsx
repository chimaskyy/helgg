import pic8 from "../assets/Images/blog_image_2.jpeg";
import first from "../assets/gallery/firstPos.jpeg";
import second from "../assets/gallery/secondPos.jpeg";
import third from "../assets/gallery/thirdPos.jpeg";
import { MoveLeft, MoveRight } from "lucide-react";
import { Link } from "react-router-dom";
import SocialShare from "../layouts/SocialShare";

function Blog2() {
  return (
    <div className="font-roboto bg-gray-100 min-h-screen">
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <header className="mb-8">
          <span className="inline-block bg-gray-200 text-gray-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
            HELGG BLOG
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            How Helgg Scooters, Interna, and Enactcare won PAADC’s 4.5 Million
            Naira Equity-Free Funding
          </h1>
        </header>
        <div className=" max-w-none">
          <img
            src={pic8}
            width={600}
            height={100}
            className="w-full rounded-lg mb-8 h-100"
            alt="Group of people riding helgg electric scooter"
          />
        </div>
        <p className="mb-6 text-xl text-gray-700">
          The Professor Ayodele Awojobi Design Competition (PAADC), an annual
          innovation and technology competition that provides Nigerian students
          in tertiary institutions the opportunity and platform to validate and
          showcase their ingenious ideas, held the grand finale of its 6th
          edition on the 22nd of October 2022. at the main auditorium of the
          University of Lagos. The competition had many applicants out of which
          5 finalists were selected to compete physically at the grand finale
          for the top 3 positions that came with cash prizes. The PAADC is more
          than a mere competition but a community of Nigerian youth that
          promotes mind-blowing and creative solutions created by students. It
          is a non-profit organization and it was founded in 2017 by students of
          the University of Lagos Engineering Society (U.L.E.S.) to promote
          ingenuity and creativity amongst undergraduates across the country.
          The organization was named after the late and iconic Professor Ayodele
          Awojobi, (renowned for inventing the{" "}
          <a
            target="blank_"
            href="https://en.wikipedia.org/wiki/Autonov_1"
            className="text-customBlue hover:cursor-ponter"
          >
            AUTONOV I
          </a>{" "}
          ) who was a Professor at the University of Lagos and an inventor who
          pushed beyond the boundaries of innovation and technology in Nigeria
          and the world. This year, the competition had some notable mentions at
          the grand finale such as{" "}
          <a
            href="https://www.linkedin.com/in/adiasowho/"
            target="blank_"
            className="text-customBlue hover:cursor-ponter"
          >
            Mrs. Adia Sowho,
          </a>
          the Chief Marketing Officer of MTN Nigeria who was the Keynote Speaker
          of the event. Out of the competing teams, Interna, Helgg scooters, and
          Enactcare emerged in the first, second, and third positions going home
          with 2 million Naira, 1.5 million Naira, and 1 million Naira
          respectively.
        </p>
        <h1 className="text-2xl font-bold my-8">1st place - Interna</h1>
        <figure className="mb-8">
          <img
            src={first}
            width={600}
            height={400}
            className="w-full rounded-lg"
            alt="Co founders of helgg"
          />
          <figcaption className="text-lg text-gray-600 mt-2 text-center">
            Interna Team
          </figcaption>
        </figure>
        <p className="mb-8 text-xl text-gray-700">
          <a target="blank_" href="https://www.getinterna.com/">
            Interna
          </a>
          , emerged as the winner of the competition, taking home a sum of 2
          million Naira. Interna is a platform that aims to bridge the work
          experience gap that causes the unemployment of students and graduates
          in Nigeria by providing access to internship opportunities and
          professional and networking tools to students. The current number of
          students in Nigerian tertiary institutions, according to Statista is
          about 1.8 million people and Interna plans to capture 1% of this
          market in the nearest future. Findings from the surveys conducted by
          the Interna team include the fact that more than half of Nigerian
          students do not feel adequately prepared for internships and even more
          students find it hard to get internship opportunities. The Interna
          platform (still under development), will launch in Q1 2023, and it
          will use a freemium model to offer educative and internship
          opportunities to students. The business plans to generate income from
          ads, premium subscriptions, and sponsorship. Services to be offered on
          the platform include a listing of internship opportunities, a CV
          generator, interview prep questions, mock interviews, specialized
          mentorship programs, and access to exclusive or remote internship
          opportunities. From their pitch, the Interna team plans to use the
          prize money to fund the completion of the platform’s technical
          development, conduct additional research, sales, and marketing, and
          cover operational costs.
        </p>
        <h1 className="text-2xl font-bold my-8">2nd Place — HELGG Scooters</h1>

        <figure className="mb-8">
          <img src={second} width={1200} height={400} alt="Helgg team members" />
          <figcaption className="text-lg text-gray-600 mt-2 text-center">
            Helgg team members
          </figcaption>
        </figure>
        <p className="mb-6 text-xl text-gray-700">
          Helgg Scooters, the ride-sharing platform for electric vehicles,
          emerged as the first runner-up of the PAADC. Helgg scooters solve the
          first and last-mile problems of commuters and the adoption of its
          electric scooters, reduces the amount of co2 emissions in transport.
          Their vehicles are pretty easy to use. Customers simply have to
          download the Helgg mobile app, create an account, and then ‘SCAN, PAY,
          and RIDE’, without having to own a single electric vehicle. Users
          deposit money into their virtual wallets to pay the fee. They charge
          based on the distance traveled and provide our customers with a cost
          breakdown of their journey Helgg Scooters is a fully registered
          company that raised pre-seed investments in 2021 to fund its launch
          and operations. The company serves a target market of residents in
          universities and gated communities like estates. They conducted their
          pilot phase at Covenant University where 100 students paid to
          pre-order rides and they have gotten over 3500 positive responses to
          surveys they carried out in different Nigerian Universities. <br /> In
          our story on Helgg Scooters, earlier this year, we covered how the
          company was founded, its journey so far, and its plans to take on more
          sections of the transport industry.
        </p>
        <h1 className="text-2xl font-bold my-8">3rd — place Enactcare</h1>

        <figure className="mb-8">
          <img
            src={third}
            width={600}
            height={400}
            className="w-full rounded-lg"
            alt="People riding helgg scooter"
          />
          <figcaption className="text-lg text-gray-600 mt-2 text-center">
            Enactcare Team
          </figcaption>
        </figure>
        <p className="mb-6 mb-6 text-xl text-gray-700">
          The Enactcare team is tackling the high rate of infant mortality from
          preterm birth in underserved communities in Nigeria. This problem is
          caused by a number of reasons such as the Insufficient number of
          incubators in hospitals due to their high cost, epileptic power
          supply, substandard medical facilities, and the ignorance of mothers
          on factors that can contribute to preterm birth.
        </p>

        <p />
        <p className="mb-6 mb-6 text-xl text-gray-700">
          <span className="text-bold">Their solution, </span>
          <a
            target="blank_"
            className="text-blue-600 hover:cursor-pointer"
            href="https://www.youtube.com/watch?v=kMB6g2qSegs&t=228s"
          >
            Enactcare infant warmer,
          </a>
          is a portable sleeping bag-like product that is wrapped around a
          preterm infant to keep it warm. The product contains a heat pack made
          from beeswax that provides a warm temperature. It lasts for about 6
          hours and is recharged by being submerged in boiling water for 5
          minutes. The product costs a sum of 20,000 Naira.
        </p>
        <p className="mb-6 mb-6 text-xl text-gray-700">
          According to the team, out of the 42,000 hospitals and healthcare
          centers in Nigeria, they are targeting 10% of the total available
          market and are starting with hospitals and clinics in Ogun state.
          Their go-to-market strategy includes partnerships with federal
          ministries and health stakeholders, field marketing at health
          conferences and events, awareness programs to sensitize pregnant women
          and healthcare workers, and the sharing of their warmth4everybaby
          pamphlets.
        </p>
        <p className="mb-6 mb-6 text-xl text-gray-700">
          The Enactcare team has developed 3 prototypes and these products have
          been approved by medical experts. They have received market validation
          from healthcare workers, won international grants to fund the
          operation of the project, and have secured partnerships with bee
          farmers for a continuous supply of beeswax. The team aims to operate
          the business on a B2B (hospitals and clinics) and B2G model, and will
          also rely on referrals, providing a 7.5% referral-based commission to
          hospitals they work with.
        </p>
        <p className="mb-6 mb-6 text-xl text-gray-700">
          The Enactcare team aims to use the money won to further the
          development and commercialization of their products by obtaining
          NAFDAC and SON verifications, patenting their product, and scaling
          production and marketing.
        </p>

        <h3 className="text-2xl font-bold text-gray-700 py-6">
          Other finalists:{" "}
        </h3>
        <p className="mb-6 mb-6 text-xl text-gray-700">
          <a
            target="blank_"
            rel="noopener noreferrer"
            className="text-blue-600 text-bold hover:cursor-pointer"
            href="https://www.foosionng.com/"
          >
            Foosion
          </a>{" "}
          is an Agric-technology start-up founded to solve the problem of food
          wastage and inefficient food distribution in Nigeria. The startup aims
          to connect farmers with consumers and businesses who need food
          products at an affordable price. It operates via three applications, a
          food material ordering platform for consumers, a logistics app that
          monitors and handles the distribution of the goods, and a platform for
          farmers to send out supply information.
        </p>
        <p className="mb-6 text-xl text-gray-700">
          {" "}
          <span className="text-bold">Protronics</span> is an electronics
          project that aims to enable efficient electricity consumption for
          households through its product: a modified Door lock that switches off
          the electricity supply of a house once the door is locked from the
          outside. The project aims to reduce household electricity bills and
          reduce the risks of electrical fire outbreaks.
        </p>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
          href="https://medium.com/thebaselineblog/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria-4350f7592daa"
        >
          {" "}
          Article By: The Baseline
        </a>

        <div className="mt-6">
          <p className="text-xl font-semibold mb-2">Share on</p>
          <div className="">
            <SocialShare />
          </div>
        </div>
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center space-y-6 sm:space-y-0">
          <div className="mt-8 flex flex-col items-start">
            <Link to="/how-helgg-scooters-interna-and-enactcare-won-paadcs-4-5-million-naira-equity-free-funding/">
              <button
                type="button"
                size="lg"
                className="group relative flex items-center px-6 py-3 text-lg rounded-full shadow-xl transition-all duration-300 hover:bg-gray-800 hover:text-white"
              >
                <MoveLeft className="mr-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
                <span>PREVIOUS ARTICLE</span>
              </button>
            </Link>

            <h2 className="mt-4 text-lg lg:text-xl font-semibold text-gray-800">
              Revolutionalizing the Electric Vehicle Industry
            </h2>
          </div>
          <div className="mt-8 flex flex-col items-end">
            <Link to="/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria/">
              <button
                type="button"
                size="lg"
                className="group relative flex items-center px-6 py-3 text-lg rounded-full shadow-xl transition-all duration-300 hover:bg-gray-800 hover:text-white"
              >
                <span>NEXT ARTICLE</span>
                <MoveRight className="ml-2 h-5 w-5 transition-transform group-hover:-translate-x-1" />
              </button>
            </Link>

            <h2 className="mt-4 text-lg lg:text-xl font-semibold text-gray-800">
              How Helgg Scootersis Enabling Planet-Friendly Transport in Nigeria
            </h2>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Blog2;
