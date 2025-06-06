import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import carsData from "../data/cars.json";

function getBookings() {
  return JSON.parse(localStorage.getItem("carBookings") || "[]");
}
function saveBookings(bookings) {
  localStorage.setItem("carBookings", JSON.stringify(bookings));
}
function isOverlapping(start1, end1, start2, end2) {
  return !(
    new Date(end1) < new Date(start2) || new Date(start1) > new Date(end2)
  );
}

function removeSpecificBooking(carId, startDate, endDate) {
  const bookings = getBookings();
  const updatedBookings = bookings.filter(
    (b) =>
      !(b.carId === carId && b.startDate === startDate && b.endDate === endDate)
  );
  saveBookings(updatedBookings);
}

const Booking = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);
  const [isAvailable, setIsAvailable] = useState(true);

  useEffect(() => {
    const selectedCar = carsData.find((car) => car.id === parseInt(id));
    setCar(selectedCar);
  }, [id]);

  useEffect(() => {
    if (startDate && endDate && car) {
      // Check for overlapping bookings in localStorage
      const bookings = getBookings();
      const carBookings = bookings.filter((b) => b.carId === car.id);
      const overlap = carBookings.some((b) =>
        isOverlapping(startDate, endDate, b.startDate, b.endDate)
      );
      setIsAvailable(!overlap);

      // Calculate price as before
      const days =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      setTotalPrice(days > 0 ? days * car.pricePerDay : 0);
    }
  }, [startDate, endDate, car]);

  const handleBooking = () => {
    const bookings = getBookings();
    bookings.push({
      carId: car.id,
      startDate,
      endDate,
    });
    saveBookings(bookings);
    alert(`Booking confirmed for ${car.name} from ${startDate} to ${endDate}`);
    setIsAvailable(false);
  };

  const handleCancelBooking = () => {
    removeSpecificBooking(car.id, startDate, endDate);
    alert(`Booking cancelled for ${car.name} from ${startDate} to ${endDate}`);
    setIsAvailable(true);
    setTotalPrice(0);
  };

  if (!car) return <div className="p-4">Loading...</div>;

  return (
    <div className="bg-white min-h-screen p-6 ">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-xl rounded-lg">
        <h1 className="text-2xl font-libre-baskerville text-midnight font-bold mb-4">
          {car.name}
        </h1>

        <img
          src={car.image}
          alt={car.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <p className="font-poppins text-gray mb-2">{car.description}</p>
        <p className="font-poppins text-sm text-gray mb-4">
          {car.features.join(", ")}
        </p>
        <p
          className={`font-poppins text-sm font-semibold mb-4 ${
            isAvailable ? "text-green" : "text-red"
          }`}
        >
          Status: {isAvailable ? "Available" : "Not Available"}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div>
            <label className="label font-poppins text-midnight">
              Start Date
            </label>
            <input
              type="date"
              className="input input-bordered rounded-3xl w-full bg-white text-midnight border-midnight"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="label font-poppins text-midnight">End Date</label>
            <input
              type="date"
              className="input input-bordered rounded-3xl w-full bg-white text-midnight border-midnight"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <p className="font-poppins text-lg text-midnight font-medium mb-2">
          Total Price: <span className="text-blue">${totalPrice}</span>
        </p>

        <button
          className="btn btn-primary font-poppins rounded-3xl w-full"
          disabled={!startDate || !endDate || !isAvailable || totalPrice === 0}
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
        <button
          className="btn btn-outline btn-error font-poppins rounded-3xl w-full mt-2"
          disabled={!startDate || !endDate || isAvailable}
          onClick={handleCancelBooking}
        >
          Cancel Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
