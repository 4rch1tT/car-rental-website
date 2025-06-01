import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: "url(/images/dashboard.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-libre-baskerville font-bold">
              Welcome to <span className="text-blue text-6xl">Rentr</span>
            </h1>
            <p className="mb-5 text-2xl font-poppins">
              your trusted partner for seamless and smart car rentals.
            </p>
          </div>
        </div>
      </div>
      <div className="text-midnight p-8 max-w-5xl mx-auto">
        <h1 className="text-4xl font-libre-baskerville font-semibold">
          About Us
        </h1>
        <p className="mt-4 font-poppins text-lg text-gray">
          At Rentr, we're redefining how people rent vehicles by combining
          convenience, reliability, and user-focused technology. Whether you're
          heading out on a weekend getaway, a business trip, or just need a
          temporary ride, we make it effortless to find and book the perfect
          vehicle.
        </p>
        <br />
        <h1 className="text-4xl font-libre-baskerville font-semibold">
          Why Choose Us?
        </h1>
        <ul className="mt-4 font-poppins text-lg text-gray list-disc">
          <li>
            <span className="text-midnight font-semibold">Wide Selection:</span>{" "}
            From fuel-efficient sedans to luxury SUVs and electric vehicles — we
            offer a diverse fleet to suit every need and budget.
          </li>
          <li>
            <span className="text-midnight font-semibold">
              Transparent Pricing:
            </span>
            No hidden charges. What you see is what you pay.
          </li>
          <li>
            <span className="text-midnight font-semibold">
              Flexible Booking:
            </span>
            Select your preferred location, rental duration, and vehicle — all
            in a few clicks.
          </li>
          <li>
            <span className="text-midnight font-semibold">Smart Features:</span>{" "}
            Enjoy features like real-time filtering, wishlist management, and
            light/dark mode for a personalized experience.
          </li>
        </ul>
        <br />
        <h1 className="text-4xl font-libre-baskerville font-semibold">
          {" "}
          Our Mission
        </h1>
        <p className="mt-4 font-poppins text-lg text-gray">
          To simplify car rentals through technology, offering customers a
          platform that is fast, flexible, and enjoyable to use.
        </p>
        <br />
        <h1 className="text-4xl font-libre-baskerville font-semibold">
          Built For You
        </h1>
        <p className="mt-4 font-poppins text-lg text-gray">
          Designed with modern drivers in mind, our platform combines intuitive
          design with powerful features — giving you control, clarity, and
          comfort from browsing to booking.
        </p>
        <br />
        <p className="mt-4 font-poppins text-lg text-gray">
          Thank you for choosing Rentr. Let us hit the road — together.
        </p>
      </div>
    </div>
  );
};

export default About;
