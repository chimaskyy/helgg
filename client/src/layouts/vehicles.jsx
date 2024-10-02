import React from "react";
import mockup from "../assets/mockup.png";

const cardClasses =
  "flex flex-col md:flex-row bg-background p-6 rounded-lg shadow-lg";
const titleClasses = "text-2xl font-bold text-primary";
const textClasses = "text-muted-foreground mt-2";
const linkClasses = "mt-4  hover:underline";

const VehicleCard = () => {
  return (
    <div className={cardClasses}>
      <div className="md:w-1/2 flex items-center">
        <VehicleInfo
          title="Electric Bicycle"
          description="Rideshare e-bicycles with an electric motor and rechargeable battery, providing assistance while pedaling, with a range of 35–65 Km."
        />
        <img aria-hidden="true" alt="map" src={mockup} className="h-90 w-80" />
      </div>
      <div className="md:w-1/2 md:pl-6">
        <VehicleInfo
          title="Electric Cars"
          description="Book zero-emission vehicles powered by electricity, with a range of around 100 Km on a single charge."
        />
        <VehicleInfo
          title="Electric Scooters"
          description="Rideshare e-scooters with a rechargeable battery with a range of 30–59 Km on full charge. Offering convenience for urban commutes."
        />
      </div>
    </div>
  );
};

const VehicleInfo = ({ title, description }) => {
  return (
    <>
      <h2 className={titleClasses}>{title}</h2>
      <p className={textClasses}>{description}</p>
      <a href="#" className={linkClasses}>
        Learn more &gt;
      </a>
    </>
  );
};

export default VehicleCard;
