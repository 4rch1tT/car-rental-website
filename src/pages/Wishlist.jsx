import React from "react";
import { useSelector } from "react-redux";
import carsData from "../data/cars.json";
import CarCard from "../components/CarCard";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist);

  const wishlistedCars = carsData.filter((car) => wishlist.includes(car.id));

  return (
    <div className="bg-white min-h-screen mx-auto px-4 py-6">
      <h1 className="text-2xl text-center font-libre-baskerville text-midnight font-bold mb-6">
        Your Wishlist
      </h1>

      {wishlistedCars.length === 0 ? (
        <p className="font-poppins text-center text-gray">
          You have no cars in your wishlist yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {wishlistedCars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
