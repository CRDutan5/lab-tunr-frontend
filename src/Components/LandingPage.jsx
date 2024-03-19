import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-white ">
      <div className="border-4 border-black p-32 rounded-xl ">
        <p className="text-6xl">Welcome to Tunr!</p>
        <p className="text-xl py-5 flex justify-center">
          We're more than just a music app!
        </p>
        <Link to="/songs">
          <div className="flex justify-center">
            <button className="text-xl border-4 border-white p-2 rounded-xl bg-gradient-to-r from-lime-300 to-emerald-300 ">
              Click here to get started!
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
