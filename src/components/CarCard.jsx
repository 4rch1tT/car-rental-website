import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart, HeartOff } from "lucide-react";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const isWishlisted = wishlist.includes(car.id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(car.id));
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
          onClick={handleToggleWishlist}
          className="absolute top-2 right-2 text-xl"
          title="Toggle Wishlist"
        >
          {isWishlisted ? (
            <Heart className="text-red" fill="currentColor" />
          ) : (
            <HeartOff className="text-gray" />
          )}
        </button>
      </figure>

      <div className="card-body">
        <h2 className="card-title font-libre-baskerville text-midnight">
          {car.name}
        </h2>
        <p className="text-sm font-poppins text-gray">
          {car.brand} - {car.category}
        </p>
        <p className="font-poppins font-semibold text-xl text-blue">
          ${car.pricePerDay}
          <span className="text-gray text-sm font-normal">/day</span>
        </p>

        <div className="card-actions justify-end mt-4">
          <Link to={`/booking/${car.id}`}>
            <button className="btn font-poppins btn-primary rounded-3xl">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
