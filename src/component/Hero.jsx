import React from "react";
import img1 from "../asset/img1.jpg";
import img2 from "../asset/img2.jpg";
import img3 from "../asset/img3.jpg";
// Define the Hero function
const Hero = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-0 gap-2 p-40">
      <div className="relative overflow-hidden col-span-1 row-span-2">
        <img
          src={img1}
          className="w-full h-full object-cover block"
          alt="Bestseller Products"
        />
        <div className="absolute bottom-0 bg-blue-500 bg-opacity-50 text-white w-3/5 text-center p-5">
          <h3 className="mb-2">Bestseller Products</h3>
          <button className="bg-transparent border border-white text-white px-4 py-2 cursor-pointer">
            Explore Items
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-1">
        <img
          src={img2}
          alt="Top Product of the Week"
          className="w-full h-full object-cover block"
        />
        <div className="absolute bottom-0 bg-blue-500 bg-opacity-50 text-white w-3/5 text-center p-5">
          <h3 className="mb-2">Top Product Of the Week</h3>
          <button className="bg-transparent border border-white text-white px-4 py-2 cursor-pointer">
            Explore Items
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden col-span-1 row-span-1">
        <img
          src={img3}
          alt="Featured Products"
          className="w-full h-full object-cover block"
        />
        <div className="absolute bottom-0 bg-blue-500 bg-opacity-50 text-white w-3/5 text-center p-5">
          <h3 className="mb-2">Featured Products</h3>
          <button className="bg-transparent border border-white text-white px-4 py-2 cursor-pointer">
            Explore Items
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default App;
