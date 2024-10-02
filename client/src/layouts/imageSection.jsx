import QrCodeScannerIcon from "@mui/icons-material/QrCodeScanner";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ElectricScooterIcon from "@mui/icons-material/ElectricScooter";
const ContentSection = () => {
  const fullDiv =
    "transition-transform transform hover:scale-110 relative rounded-lg shadow-4xl";
  const opaqueDiv = "absolute inset-0 bg-black opacity-50 rounded-lg";
  const iconSpan =
    "text-white block opacity-0 group-hover:opacity-100 transition-opacity duration-300";
  const textDiv =
    "m-6 absolute inset-0 z-10 flex flex-col items-start justify-end text-white sm:pl-8 sm:pb-8  lg:pl-6 lg:pb-6";
  return (
    <section className="p-12 m-2">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Column */}
        <div className={`group ${fullDiv}`}>
          {/* Dark overlay */}
          <div className={opaqueDiv}></div>
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://helgg.com/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-08-at-11.06.07-PM.jpeg"
            alt="QR Code Scan"
          />
          {/* Gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
          <div className={textDiv}>
            <span className={iconSpan}>
              <QrCodeScannerIcon style={{ fontSize: 48 }} />
            </span>
            <h6 className="font-bold text-gray-200 mt-2">
              Scan the QR code on the e-ike, e-scooter or e-car
            </h6>
            <h2 className="text-white text-2xl font-bold mt-2">Scan</h2>
          </div>
        </div>

        {/* Second Column */}
        <div className={`group ${fullDiv}`}>
          {/* Dark overlay */}
          <div className={opaqueDiv}></div>
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://helgg.com/wp-content/uploads/2023/01/young-adult-using-credit-card-make-purchase-smartphone-modern-woman-holding-mobile-phone-buy-clothes-online-shopping-from-retail-store-person-doing-payment-transaction-1.png"
            alt="Pay with Credit Card"
          />
          {/* Gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
          <div className={textDiv}>
            <span className={iconSpan}>
              <AccountBalanceWalletIcon style={{ fontSize: 48 }} />
            </span>
            <h6 className="font-bold text-gray-200 mt-2">
              Use your credit card to make secure payments.
            </h6>
            <h2 className="text-white text-2xl font-bold mt-2">Purchase</h2>
          </div>

          {/* Link for interactivity */}
          <a href="#" className="absolute inset-0"></a>
        </div>
        {/* Third Column */}
        <div className={`group ${fullDiv}`}>
          {/* Dark overlay */}
          <div className={opaqueDiv}></div>
          <img
            className="w-full h-full object-cover rounded-xl"
            src="https://helgg.com/wp-content/uploads/2023/01/young-adult-using-credit-card-make-purchase-smartphone-modern-woman-holding-mobile-phone-buy-clothes-online-shopping-from-retail-store-person-doing-payment-transaction-1.png"
            alt="Pay with Credit Card"
          />
          {/* Gradient effect on hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-lg"></div>
          <div className={textDiv}>
            <span className={iconSpan}>
              <ElectricScooterIcon style={{ fontSize: 48 }} />
            </span>
            <h6 className="font-bold text-gray-200 mt-2">
              Enjoy your trip and ride safely.
            </h6>
            <h2 className="text-white text-2xl font-bold mt-2">Ride</h2>
          </div>

          {/* Link for interactivity */}
          <a href="#" className="absolute inset-0"></a>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
