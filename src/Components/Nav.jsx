import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-5 bg-gradient-to-r from-lime-300 to-emerald-300 mb-10">
        <div>
          <Link to="/">
            <h1 className="text-6xl">Tunr</h1>
          </Link>
        </div>
        <div className="flex items-center justify-end">
          <Link to="/songs">
            <button className="text-xl border-white border-4 p-2 rounded-xl hover:bg-white">
              View Songs
            </button>
          </Link>
          <Link to="/songs/create">
            <button className="text-xl border-white border-4 mx-5 p-2 rounded-xl hover:bg-white">
              Create Song
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
