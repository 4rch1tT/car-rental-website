import { useState, useEffect } from "react";
import CarCard from "../components/CarCard";
import carsData from "../data/cars.json";

const categories = [...new Set(carsData.map((car) => car.category))];

const Fleet = () => {
  const [cars, setCars] = useState(carsData);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [maxPrice, setMaxPrice] = useState("");
  const [sortBy, setSortBy] = useState("popularity");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filtered = carsData;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((car) => car.category === selectedCategory);
    }

    if (maxPrice !== "") {
      filtered = filtered.filter((car) => car.pricePerDay <= Number(maxPrice));
    }

    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (sortBy === "popularity") {
      filtered = filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "price") {
      filtered = filtered.sort((a, b) => a.pricePerDay - b.pricePerDay);
    }

    setCars(filtered);
  }, [selectedCategory, maxPrice, sortBy, searchTerm]);

  return (
    <div className="bg-white">
      <div
        className="hero min-h-screen flex flex-col justify-between"
        style={{
          backgroundImage: `url("/images/view-through.jpg")`,
        }}
      >
        <div className="max-w-md text-center items-center">
          <h1 className="mb-2 mt-5 font-libre-baskerville text-4xl text-white font-bold">
            Car Fleets
          </h1>
        </div>
        <label className="input bg-white h-16 rounded-4xl border-midnight input input-bordered text-midnight mb-25 w-[300px] max-w-300 sm:w-full">
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
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="p-6 bg-white shadow-md">
        <div className="flex flex-wrap gap-4 mb-6">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select select-bordered max-w-xs bg-white text-midnight rounded-3xl border-midnight"
          >
            <option value="All" className="font-poppins">
              All Categories
            </option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <input
            type="number"
            placeholder="Max Price per Day"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="input input-bordered max-w-xs bg-white text-midnight rounded-3xl border-midnight"
            min="0"
          />

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered max-w-xs bg-white text-midnight rounded-3xl border-midnight"
          >
            <option value="popularity" className="font-poppins">
              Sort by Popularity
            </option>
            <option value="price" className="font-poppins">
              Sort by Price
            </option>
          </select>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-10">
          {cars.length > 0 ? (
            cars.map((car) => <CarCard key={car.id} car={car} />)
          ) : (
            <p className="font-poppins">No cars found matching the criteria.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Fleet;
