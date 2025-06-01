import { useState, useEffect } from "react";
import carsData from "../data/cars.json";
import { Link } from "react-router-dom";
import { MapPinned, Mail, Phone } from "lucide-react";

const Home = () => {
  const [cars, setCars] = useState(carsData);
  useEffect(() => {
    let popular = cars.filter((car) => car.popularity > 80);
    setCars(popular);
  });
  return (
    <div className="bg-white">
      <div
        className="hero min-h-screen flex flex-col justify-start"
        style={{
          backgroundImage: `url("/images/audi-a5.jpeg")`,
        }}
      >
        <div className="max-w-md text-center flex flex-col justify-start items-center">
          <h1 className="mb-2 mt-10 text-3xl text-midnight font-semibold font-libre-baskerville">
            Travel on <span className="text-blue">Your Own Terms !</span>
          </h1>
          <p className="mb-5 text-midnight font-semibold font-poppins">
            Book your car online in minutes and enjoy the freedom to move
          </p>
          <Link to="/fleet">
            <button className="btn btn-primary rounded-3xl w-64 font-poppins">
              Book a car
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6  p-10">
        <div className="bg-gray-light shadow-md rounded-lg  p-10 md:p-3 h-58 w-auto ">
          <h3 className="text-blue text-2xl font-bold font-libre-baskerville mb-2">
            Choose Your Car
          </h3>
          <p className="text-midnight font-poppins">
            Start by selecting the car that best suits your trip. Simply pick
            the car class and your desired dates.
          </p>
        </div>
        <div className="bg-gray-light shadow-md  rounded-lg p-10 md:p-3 h-58 w-auto">
          <h3 className="text-blue text-2xl font-bold font-libre-baskerville mb-2">
            Book Online
          </h3>
          <p className="text-midnight font-poppins">
            Book your car online in minutes and enjoy the freedom to move. Our
            platform is designed to make your booking experience smooth and
            hassle-free.
          </p>
        </div>
        <div className="bg-gray-light shadow-md  rounded-lg p-10 md:p-3 h-58 w-auto ">
          <h3 className="text-blue text-2xl font-bold font-libre-baskerville mb-2">
            Travel in Comfort
          </h3>
          <p className="text-midnight font-poppins">
            Enjoy the freedom to travel at your own pace. With our wide range of
            vehicles, you can explore your destination in comfort and style.
          </p>
        </div>
      </div>
      <h3 className="text-midnight text-3xl font-libre-baskerville font-semibold ml-8">
        Most Popular Cars
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6 p-10">
        {cars.map((car) => (
          <div
            key={car.id}
            className="card w-auto bg-white text-midnight shadow-md relative hover:shadow-xl transition-shadow duration-300"
          >
            <figure className="relative">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title font-libre-baskerville text-midnight">
                {car.name}
              </h2>
              <p className="text-sm font-poppins text-gray">
                {car.brand} - {car.category}
              </p>
              <p className="font-semibold font-poppins text-xl text-blue">
                ${car.pricePerDay}
                <span className="text-gray text-sm font-normal">/day</span>
              </p>
              <div className="card-actions justify-end mt-4">
                <Link to={`/booking/${car.id}`}>
                  <button className="btn btn-primary rounded-3xl">
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url('/images/view-through.jpg')`,
        }}
      >
        <div className="hero-overlay"></div>
        <div className="flex flex-col md:flex-col lg:flex-row xl:flex-row gap-10">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl text-blue font-libre-baskerville font-bold">
              Contact Us
            </h1>
            <p className="mb-5 font-poppins">
              Have questions or need assistance? Reach out to us in any
              convenient way - our team is ready to help you anytime. We value
              every enquiry and will do our best to make your experience as
              smooth as possible.
            </p>
            <div className="flex items-center gap-3 mb-8">
              <MapPinned />
              <span className="font-poppins">
                Rentr 1234 Grand Avenue Suite 205, Midtown New York, NY 10001
                United States
              </span>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Mail />
              <span className="font-poppins">support@rentr.com</span>
            </div>
            <div className="flex items-center gap-3 mb-8">
              <Phone />
              <span className="font-poppins">+1 (123) 456-7890</span>
            </div>
          </div>
          <div className="flex justify-start items-center">
            <label className="input validator bg-white text-midnight rounded-3xl border-midnight input-bordered w-250 max-w-xs flex items-center gap-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input type="email" placeholder="mail@site.com" required />
            </label>
            <div className="validator-hint hidden">
              Enter valid email address
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
