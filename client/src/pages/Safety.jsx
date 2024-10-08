import React from "react";
import { Link } from "react-router-dom";

function Safety() {
  return (
    <div className="font-roboto p-8 bg-gray-100 min-h-screen">
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">
          Safety Guidelines
        </h1>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">
            Safety First, Always
          </h2>
          <p className="leading-loose mb-4">
            At Helgg, safety is our number one priority. Whether you're riding
            our electric bikes, scooters, or any other vehicle in our fleet, we
            want to ensure that you have a safe and enjoyable experience. Please
            read and follow our safety guidelines carefully before using our
            services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">Wear a Helmet</h2>
          <p className="leading-loose mb-4">
            Always wear a helmet while riding. Helmets can reduce the risk of
            head injuries significantly in case of accidents. Make sure your
            helmet fits properly and is securely fastened.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">
            Follow Traffic Rules
          </h2>
          <p className="leading-loose mb-4">
            Obey all local traffic laws and signals. Ride on the correct side of
            the road, yield to pedestrians, and never use your phone while
            riding.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">
            Check Your Vehicle
          </h2>
          <p className="leading-loose mb-4">
            Before each ride, inspect the vehicle. Check the brakes, tires, and
            lights to ensure everything is in good working condition. Report any
            malfunctions through our app before you ride.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">Stay Alert</h2>
          <p className="leading-loose mb-4">
            Be aware of your surroundings at all times. Avoid riding in
            inclement weather or on roads with heavy traffic. Stay focused and
            use both hands while riding.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">
            Ride in Designated Areas
          </h2>
          <p className="leading-loose mb-4">
            Only ride in areas where riding is permitted. Avoid sidewalks,
            pedestrian paths, and other areas not meant for vehicles. Riding in
            designated areas ensures the safety of both riders and pedestrians.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">
            Riding Under the Influence
          </h2>
          <p className="leading-loose mb-4">
            Never ride under the influence of alcohol or drugs. Riding while
            impaired increases the risk of accidents and endangers both the
            rider and others.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">
            Report Unsafe Conditions
          </h2>
          <p className="leading-loose mb-4">
            If you encounter any unsafe conditions during your ride, report them
            immediately through our customer care service. Your report helps us maintain a safe
            environment for all users.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">
            In Case of Emergency
          </h2>
          <p className="leading-loose mb-4">
            If you are involved in an accident or an emergency situation, please
            contact local authorities immediately. You can also reach out to our
            support team through the app for assistance.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-left font-bold text-lg mb-4">Respect Others</h2>
          <p className="leading-loose mb-4">
            Be courteous to other riders, drivers, and pedestrians. A safe
            riding experience depends on everyone following the rules and
            respecting each other's space.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Safety;
