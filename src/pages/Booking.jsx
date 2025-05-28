import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import carsData from "../data/cars.json";

const Booking = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const selectedCar = carsData.find((car) => car.id === parseInt(id));
    setCar(selectedCar);
  }, [id]);

  useEffect(() => {
    if (startDate && endDate && car) {
      const days =
        (new Date(endDate) - new Date(startDate)) / (1000 * 60 * 60 * 24);
      if (days > 0) {
        setTotalPrice(days * car.pricePerDay);
      } else {
        setTotalPrice(0);
      }
    }
  }, [startDate, endDate, car]);

  const handleBooking = () => {
    alert(`Booking confirmed for ${car.name} from ${startDate} to ${endDate}`);
  };

  if (!car) return <div className="p-4">Loading...</div>;

  return (
    <div className="bg-white min-h-screen p-6 ">
      <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-midnight">
        <h1 className="text-2xl text-midnight font-bold mb-4">
          Book {car.name}
        </h1>

        <img
          src={car.image}
          alt={car.name}
          className="w-full h-64 object-cover rounded-md mb-4"
        />

        <p className="text-gray mb-2">{car.description}</p>
        <p className="text-sm text-gray mb-4">{car.features.join(", ")}</p>
        <p
          className={`text-sm font-semibold mb-4 ${
            car.availability ? "text-green" : "text-red"
          }`}
        >
          Status: {car.availability ? "Available" : "Not Available"}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-4">
          <div>
            <label className="label text-midnight">Start Date</label>
            <input
              type="date"
              className="input input-bordered rounded-3xl w-full bg-white text-midnight border-midnight"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div>
            <label className="label text-midnight">End Date</label>
            <input
              type="date"
              className="input input-bordered rounded-3xl w-full bg-white text-midnight border-midnight"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
        </div>

        <p className="text-lg text-midnight font-medium mb-2">
          Total Price: <span className="text-blue">${totalPrice}</span>
        </p>

        <button
          className="btn btn-primary rounded-3xl w-full"
          disabled={
            !startDate || !endDate || !car.availability || totalPrice === 0
          }
          onClick={handleBooking}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
