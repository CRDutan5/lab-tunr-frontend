import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Playlist from "./Playlist";

const SongDetails = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const { id } = useParams();
  const [song, setSong] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/songs/${id}`).then((res) =>
      res.json().then((data) => setSong(data))
    );
  }, [id]);

  function handleDelete() {
    const options = {
      method: "DELETE",
    };
    fetch(`${API}/songs/${id}`, options).then(() => {
      navigate("/songs");
    });
  }

  const { name, artist, album, time } = song;

  return (
    <div>
      <div className="flex items-center justify-center h-screen bg-white">
        <div className="bg-gradient-to-r from-lime-300 to-emerald-300 w-1/2 h-fit rounded-xl">
          <div className="flex justify-center font-semi text-xl">
            <div className="grid auto-rows-auto">
              <p className="py-5 flex justify-center">{artist}</p>
              <p className="py-5 flex justify-center">{album}</p>
              <p className="py-5 flex justify-center">{time}</p>
              <p className="py-5 flex justify-center">{name}</p>
            </div>
          </div>
          <div className=" flex justify-center p-6">
            <Link to="/songs">
              <button className="min-w-16 bg-gradient-to-r from-lime-300 to-emerald-300 mx-5 text-xl border-white border-4 p-2 rounded-xl hover:bg-white">
                Back
              </button>
            </Link>
            <Link to={`/songs/${id}/edit`}>
              <button className=" min-w-16 bg-gradient-to-r from-lime-300 to-emerald-300 mx-5 text-xl border-white border-4 p-2 rounded-xl hover:bg-white ">
                Edit
              </button>
            </Link>
            <button
              onClick={handleDelete}
              className="min-w-16 bg-gradient-to-r from-lime-300 to-emerald-300 mx-5 text-xl border-white border-4 p-2 rounded-xl hover:bg-white "
            >
              Delete
            </button>
          </div>
          <div className="flex justify-center p-5 text-xl">
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongDetails;
