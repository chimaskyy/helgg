import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import pic4 from "../assets/gallery/pic4.jpg";
import pic5 from "../assets/gallery/scanner.jpeg";
import pic6 from "../assets/gallery/payment.png";

const ContentSection = () => {
  const steps = [
    {
      title: "Scan",
      description: "Scan the QR code on the e-bike, e-scooter or e-car",
      icon: QrCodeScannerIcon,
      image: pic5,
      alt: "QR Code Scan",
      gradientColor: "from-transparent to-blue-600",
    },
    {
      title: "Purchase",
      description: "Use your credit card to make secure payments.",
      icon: AccountBalanceWalletIcon,
      image: pic6,
      alt: "Young adult using credit card to make payment",
      gradientColor: "from-transparent to-green-600",
    },
    {
      title: "Ride",
      description: "Enjoy your trip and ride safely.",
      icon: ElectricScooterIcon,
      image: pic4,
      alt: "Image of a scooter",
      gradientColor: "from-transparent to-gray-600",
    },
  ];
  return (
    <section className="py-12 px-8 sm:px-6 bg-gray-50 lg:px-28 ">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-roboto text-4xl text-gray-800 font-bold text-center  mb-8 sm:mb-12">
          How to Helgg
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
            >
              <div className="absolute inset-0 bg-black opacity-50 rounded-xl"></div>
              <img
                src={step.image}
                alt={step.alt}
                width={300}
                height={400}
                className="w-full h-full object-cover rounded-xl"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-b from-transparent ${step.gradientColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`}
              ></div>
              <div className="absolute inset-0 p-6 flex flex-col items-start justify-end text-white">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <step.icon style={{ fontSize: 68 }} />
                </span>
                <h6 className="font-bold text-gray-200 mt-2 text-lg group-hover:text-xl transition-all duration-300">
                  {step.description}
                </h6>
                <h2 className="text-white text-2xl font-bold mt-2 group-hover:text-3xl transition-all duration-300">
                  {step.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
