import { useSelector, useDispatch } from "react-redux";
import carsData from "../data/cars.json";
import CarCard from "../components/CarCard";
import { clearWishlist } from "../features/wishlist/wishlistSlice";

const Wishlist = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist);

  const wishlistedCars = carsData.filter((car) => wishlist.includes(car.id));

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  return (
    <div className="bg-white min-h-screen mx-auto px-4 py-6">
      <h1 className="text-3xl text-center font-libre-baskerville text-midnight font-bold  mb-6">
        Your Wishlist
      </h1>

      {wishlistedCars.length === 0 ? (
        <p className="font-poppins text-center text-gray">
          You have no cars in your wishlist yet.
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlistedCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
          <div className="flex justify-center">
            <button
              className="btn btn-clear hover:bg-red rounded-3xl border-midnight mt-6 font-poppins "
              onClick={handleClearWishlist}
            >
              Clear Wishlist
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
