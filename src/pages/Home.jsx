import { useState, useEffect } from "react";
import carsData from "../data/cars.json";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-white">
      <div
        className="hero min-h-screen flex flex-col justify-start"
        style={{
          backgroundImage: `url("/images/audi-a5.jpeg")`,
        }}
      >
        <div className="max-w-md text-center flex flex-col justify-start items-center">
          <h1 className="mb-2 mt-5 text-4xl text-midnight font-semibold">
            Travel on <span className="text-blue">Your Own Terms !</span>
          </h1>
          <p className="mb-5 text-midnight font-semibold">
            Book your car online in minutes and enjoy the freedom to move
          </p>
          <Link to="/fleet">
            <button className="btn btn-primary rounded-3xl w-64">
              Book a car
            </button>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
        <div className="bg-gray-light shadow-md rounded-lg p-14 h-58 w-auto ">
          <h3 className="text-blue font-bold">Choose Your Car</h3>
          <p className="text-midnight">
            Start by selecting the car that best suits your trip. Simply pick
            the car class and your desired dates.
          </p>
        </div>
        <div className="bg-gray-light shadow-md  rounded-lg p-14 h-58 w-auto">
          <h3 className="text-blue font-bold">Book Online</h3>
          <p className="text-midnight">
            Book your car online in minutes and enjoy the freedom to move. Our
            platform is designed to make your booking experience smooth and
            hassle-free.
          </p>
        </div>
        <div className="bg-gray-light shadow-md  rounded-lg p-14 h-58 w-auto ">
          <h3 className="text-blue font-bold">Travel in Comfort</h3>
          <p className="text-midnight">
            Enjoy the freedom to travel at your own pace. With our wide range of
            vehicles, you can explore your destination in comfort and style.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
