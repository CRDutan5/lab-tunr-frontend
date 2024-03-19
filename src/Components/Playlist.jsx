import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Playlist = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const [playlist, setPlaylist] = useState({});

  const { id } = useParams();

  useEffect(() => {
    fetch(`${API}/songs/${id}/playlists`)
      .then((res) => res.json())
      .then((data) => setPlaylist(data[0]));
  }, [id]);

  return (
    <div className="border-8 border-white p-2 rounded-xl">
      {playlist.name && (
        <h1>This song can also be found in your playlist: {playlist.name}</h1>
      )}{" "}
    </div>
  );
};

export default Playlist;
