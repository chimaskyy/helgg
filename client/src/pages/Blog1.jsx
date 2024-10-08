import React from "react";
import pic8 from "../assets/gallery/pic8.jpg";
import team from "../assets/Images/team5.jpeg";
import team2 from "../assets/Images/team.png";
import pic3 from "../assets/gallery/pic3.jpg";
import SocialShare from "../layouts/SocialShare";

function Blog1() {
  return (
    <div className="font-roboto p-8 bg-gray-100 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <span className="bg-gray-200 text-gray-500 tracking-wide p-1 rounded-xl">
          HELGG BLOG
        </span>
        <h1>
          How Helgg Scooters is Enabling Planet-Friendly Transport in Nigeria
        </h1>
        <img src={pic8} alt="Group of people riding helgg electric scooter" />
        <p>
          Helgg scooters is a Nigerian micro-mobility start-up that provides
          commuters with a great way to move around while saving the planet and
          their wallets simultaneously. The company is driven by a vision to
          support the race for cleaner energy consumption and zero carbon
          emission during Human Transit. “Helgg scooters provide the last-mile
          solution to customers. The Last-mile solution is for individuals that
          desire to cover distances that are too far to walk but too close to
          drive. We aim to bridge the gap and simultaneously reduce the
          environmental carbon footprint caused by non-electric automobiles”
          said Johnson Jaiyeola, CEO of Helgg Scooters. Helgg was founded in
          2019 after its 3 co-founders went on a trip to California and noticed
          the ease with which residents of the area commuted around their city
          with electric scooters. Beyond the comfort enjoyed, they were
          impressed by the efficiency and environmental friendliness of the
          transportation system. This inspired them to replicate the system back
          home in Nigeria, where environmentally friendly vehicles and last-mile
          transit systems are scarce.
        </p>
        <figure>
          <img src={team} alt="Co founders of helgg" />
          <figcaption>
            Helgg Cofounders from left to right — Oreoluwa Oluwafemi, Paul
            Jaiyeola, and Johnson Jaiyeola
          </figcaption>
        </figure>
        <p>
          On getting back to Nigeria, the cofounders who were students at the
          time started learning as much as they could about last-mile travel,
          electric scooters, and how they could establish this electric
          micro-mobility system here in Nigeria. While in school, they set up a
          team, created a business model, and secured investments to launch the
          business. These steps enabled them to import their first batch of
          electric scooters in 2022 and test out the system on their University
          campus- Covenant University. Ore Oluwafemi one of the co-founders,
          said, “We have carried out feasibility studies to test the market’s
          interest in our micro-mobility service and the feedback has been very
          positive. People are willing to try something new, cool, and fun.”
        </p>
        <figure>
          <img src={team2} alt="Helgg team members" />
          <figcaption>Helgg team members</figcaption>
        </figure>
        <p>
          Helgg’s target market consists of people living in estates and on
          university campuses, as these environments are safe and often have
          smooth roads for vehicles like scooters. This market is also
          attractive to Helgg as they do not need to operate under the
          jurisdiction of the government and they have a lesser chance of being
          taxed exorbitantly. Currently, they are looking to expand to
          universities and estates where they have surveyed and gotten good
          feedback to set up. To operate in such a community their model
          involves them paying a percentage of each transaction to the community
          management. Due to the fact that most Nigerian roads don’t accommodate
          micro-mobility vehicles, Helgg covers the cost of painting the lanes
          of roads and setting up informative and regulatory signs. The costs
          customers incur are the cost of the rides and their personal gear like
          helmets if they want to get customized ones. In Ore’s words “There are
          existing companies which have proven that this model is feasible such
          as Lime, and Bird, billion-dollar micro-mobility companies in Europe.
          It would be nice to penetrate this market here in Africa finally. The
          reaction and excitement people get when they see us riding is also a
          form of validation that this business would thrive here.” He also
          noted that they’re not the first in this carbon-neutral micro-mobility
          industry in Nigeria. Helgg has recognized and is learning from earlier
          market entrants and taking notes of the challenges these other
          companies are facing.
        </p>
        <figure>
          <img src={pic3} alt="People riding helgg scooter" />
          <figcaption>Customers on a ride</figcaption>
        </figure>
        <p>
          The Helgg scooter works via an app, where customers can order and pay
          to use it at any time. To start a ride, you scan the QR code at the
          top of the scooter and it prompts you to pay a 10 Naira fee to unlock
          the scooter for a ride at a rate of 10kobo per meter. Although the
          company currently focuses on electric scooters, they have a much
          bigger picture in mind. Their end goal is to scale to electric
          bicycles and then focus on replicating the uber model for electric
          cars in Nigeria. They aim to one day disrupt the public transport
          sector with enough eco-friendly vehicles to replace gas-fueled ones.
        </p>
        <div>
          <a
            target="_blank"
            href="https://medium.com/thebaselineblog/how-helgg-scooters-is-enabling-planet-friendly-transport-in-nigeria-4350f7592daa"
          >
            {" "}
            Article By: The Baseline
          </a>
        </div>
        <div>
          <p>Share on</p>
          <SocialShare />
        </div>
      </div>
    </div>
  );
}

export default Blog1;
