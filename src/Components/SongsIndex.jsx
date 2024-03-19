import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const SongsIndex = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch(`${API}/songs`).then((res) =>
      res.json().then((data) => setSongs(data))
    );
  }, []);
  return (
    <div className="bg-gradient-to-r from-lime-300 to-emerald-300 h-fit">
      <div className="flex justify-center text-3xl pb-5 mb-5 bg-white">
        <h1 className="font-bold">Songs</h1>
      </div>
      <div className="grid auto-rows-auto text-xl">
        {songs.map((song) => (
          <Link to={`/songs/${song.id}`} key={song.id}>
            <div className="flex justify-center p-5 bg-white m-5 rounded-lg hover:bg-slate-200">
              <p className="px-1">{song.name}: </p>
              <p className="">{song.artist}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SongsIndex;
