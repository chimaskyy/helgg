import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function NotFound() {
    const navigate = useNavigate();

    const goBack = () => {
        if(window.history.length > 1) {
            window.history.back();
        }else {
            navigate("/");
        }
    }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-9xl font-extrabold text-gray-800">404</h1>
          <h2 className="text-4xl font-bold text-gray-700">Page Not Found</h2>
          <p className="text-xl text-gray-600">
            Oops! The page you&apos;re looking for doesn&apos;t exist or has
            been moved.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
          <Link to="/" passHref>
            <button className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center justify-center">
              <Home className="mr-2 h-5 w-5" />
              Go to Homepage
            </button>
          </Link>
          <button
            className="w-full sm:w-auto px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition duration-300 ease-in-out flex items-center justify-center"
            onClick={goBack}
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Go Back
          </button>
        </div>
        <p className="text-sm text-gray-500">
          If you think this is a mistake, please{" "}
          <Link href="/contact" className="text-blue-600 hover:underline">
            contact support
          </Link>
          .
        </p>
      </div>
    </div>
  );
}

export default NotFound;
