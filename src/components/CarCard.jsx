import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Heart} from "lucide-react";
import { toggleWishlist } from "../features/wishlist/wishlistSlice";

const CarCard = ({ car }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);
  const theme = useSelector((state) => state.theme.mode);
  const isWishlisted = wishlist.includes(car.id);

  const handleToggleWishlist = () => {
    dispatch(toggleWishlist(car.id));
  };

  return (
    <div
      className={`card w-auto shadow-md relative hover:shadow-xl transition-shadow duration-300 ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-midnight"
      }`}
    >
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
            <Heart
              className={theme === "dark" ? "text-gray-400" : "text-gray"}
            />
          )}
        </button>
      </figure>

      <div className="card-body">
        <h2
          className={`card-title font-libre-baskerville ${
            theme === "dark" ? "text-midnight" : "text-midnight"
          }`}
        >
          {car.name}
        </h2>
        <p
          className={`text-sm font-poppins ${
            theme === "dark" ? "text-midnight" : "text-gray"
          }`}
        >
          {car.brand} - {car.category}
        </p>
        <p className="font-poppins font-semibold text-xl text-blue">
          ${car.pricePerDay}
          <span
            className={`text-sm font-normal ${
              theme === "dark" ? "text-midnight" : "text-gray"
            }`}
          >
            /day
          </span>
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
