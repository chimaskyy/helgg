import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
import pic4 from "../assets/gallery/pic4.jpg";
import pic5 from "../assets/gallery/scanner.jpeg";
import pic6 from "../assets/gallery/payment.png";

const ContentSection = () => {
  const fullDiv =
    "transition-transform transform hover:scale-110 relative rounded-xl shadow-4xl";
  const opaqueDiv = "absolute inset-0 bg-black opacity-50 rounded-xl";
  const iconSpan =
    "text-white block opacity-0 group-hover:opacity-100 transition-opacity duration-300";
  const textDiv =
    "m-6 absolute inset-0 z-10 flex flex-col items-start justify-end text-white sm:pl-8 sm:pb-8  lg:pl-6 lg:pb-6";
  return (
    <section className="p-12 m-2 lg:m-24">
      <h1 className="font-roboto text-4xl text-gray-800 font-bold mb-4 text-center pb-8">
        How to Helgg
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className={`group ${fullDiv}`}>
          {/* Dark overlay */}
          <div className={opaqueDiv}></div>
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={pic5}
            alt="QR Code Scan"
            
          />
          {/* Gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
          <div className={textDiv}>
            <span className={iconSpan}>
              <QrCodeScannerIcon style={{ fontSize: 48 }} />
            </span>
            <h6 className="font-bold text-gray-200 mt-2 text-lg hover:text-xl">
              Scan the QR code on the e-ike, e-scooter or e-car
            </h6>
            <h2 className="text-white text-2xl font-bold mt-2 hover:text-3xl">
              Scan
            </h2>
          </div>
        </div>

        {/* Second Column */}
        <div className={`group ${fullDiv}`}>
          {/* Dark overlay */}
          <div className={opaqueDiv}></div>
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={pic6}
            alt="Young adult using credit card to make payment"
          />
          {/* Gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
          <div className={textDiv}>
            <span className={iconSpan}>
              <AccountBalanceWalletIcon style={{ fontSize: 48 }} />
            </span>
            <h6 className="font-bold text-gray-200 mt-2 text-lg hover:text-xl">
              Use your credit card to make secure payments.
            </h6>
            <h2 className="text-white text-2xl font-bold mt-2 hover:text-3xl">
              Purchase
            </h2>
          </div>

          {/* Link for interactivity */}
          <a href="#" className="absolute inset-0"></a>
        </div>
        {/* Third Column */}
        <div className={`group ${fullDiv}`}>
          {/* Dark overlay */}
          <div className={opaqueDiv}></div>
          <img
            className="w-full h-full object-cover rounded-2xl"
            src={pic4}
            alt="Image of a scooter"
          />
          {/* Gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
          <div className={textDiv}>
            <span className={iconSpan}>
              <ElectricScooterIcon style={{ fontSize: 48 }} />
            </span>
            <h6 className="font-bold text-gray-200 mt-2 text-lg hover:text-xl">
              Enjoy your trip and ride safely.
            </h6>
            <h2 className="text-gray-200 text-2xl font-bold mt-2 hover:text-3xl">
              Ride
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
