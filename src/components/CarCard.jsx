import { Link } from "react-router-dom";
import { useState } from "react";
import { Heart, HeartOff } from "lucide-react";

const CarCard = ({ car }) => {
  const [wishlisted, setWishlisted] = useState(false);

  const toggleWishlist = () => {
    setWishlisted((prev) => !prev);
  };

  return (
    <div className="card w-auto bg-white text-midnight shadow-md relative hover:shadow-xl transition-shadow duration-300">
      <figure className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <button
          onClick={toggleWishlist}
          className="absolute top-2 right-2 text-xl"
          title="Toggle Wishlist"
        >
          {wishlisted ? (
            <Heart className="text-red-500" fill="currentColor" />
          ) : (
            <HeartOff className="text-gray-500" />
          )}
        </button>
      </figure>

      <div className="card-body">
        <h2 className="card-title">{car.name}</h2>
        <p className="text-sm text-gray-500">
          {car.brand} - {car.category}
        </p>
        <p className="font-semibold text-blue-600">${car.pricePerDay}/day</p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/booking/${car.id}`}>
            <button className="btn btn-primary rounded-3xl">Book Now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
