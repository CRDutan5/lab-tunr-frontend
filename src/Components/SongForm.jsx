import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SongForm = () => {
  const API = import.meta.env.VITE_BASE_URL;

  const navigate = useNavigate();
  const { id } = useParams();

  const [userInput, setUserInput] = useState({
    name: "",
    artist: "",
    album: "",
    time: "",
    is_favorite: false,
    playlists_id: "",
  });

  useEffect(() => {
    if (!id) {
      setUserInput({
        name: "",
        artist: "",
        album: "",
        time: "",
        is_favorite: false,
        playlist_id: "",
      });
    } else {
      fetch(`${API}/songs/${id}`)
        .then((response) => response.json())
        .then((data) => setUserInput(data));
    }
  }, [id]);

  function handleChange(e) {
    setUserInput({ ...userInput, [e.target.id]: e.target.value });
  }

  function handleCheck(e) {
    setUserInput({ ...userInput, is_favorite: e.target.value === "true" });
  }

  function addSong() {
    const options = {
      method: "POST",
      body: JSON.stringify(userInput),
      headers: { "Content-Type": "application/json" },
    };
    fetch(`${API}/songs`, options).then(() => {
      navigate("/songs");
    });
  }

  function editSong() {
    const options = {
      method: "PUT",
      body: JSON.stringify(userInput),
      headers: { "Content-Type": "application/json" },
    };

    fetch(`${API}/songs/${id}`, options).then(() => navigate("/songs"));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (id) editSong();
    else addSong();
  }

  function handlePlayListChange(e) {
    const playlistIds = {
      "Carlitos Playlist": 1,
      "Gym Workout": 2,
      "Hip-Hop Playlist": 3,
    };

    setUserInput({ ...userInput, playlists_id: playlistIds[e.target.value] });
  }

  return (
    <div className="flex justify-center items-center h-screen font-bold text-xl ">
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-r from-lime-300 to-emerald-300 p-14"
      >
        <h1 className="flex justify-center pb-5 text-4xl font-bold">
          {id ? "Edit Song" : "Create a Song!"}
        </h1>
        <div className="grid auto-rows-auto ">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={userInput.name}
            onChange={handleChange}
            className="border-2 border-black min-w-60 p-1"
          />
        </div>
        <div className="grid auto-rows-auto">
          <label htmlFor="artist">Artist:</label>
          <input
            type="text"
            id="artist"
            value={userInput.artist}
            onChange={handleChange}
            className="border-2 border-black p-1"
          />
        </div>
        <div className="grid auto-rows-auto">
          <label htmlFor="album">Album:</label>
          <input
            type="text"
            id="album"
            value={userInput.album}
            onChange={handleChange}
            className="border-2 border-black p-1"
          />
        </div>

        <div className="grid auto-rows-auto mb-5">
          <label htmlFor="time">Time:</label>
          <input
            type="text"
            id="time"
            value={userInput.time}
            onChange={handleChange}
            className="border-2 border-black p-1"
          />
        </div>

        <fieldset className="border-2 border-black bg-white">
          <legend>Favorite?</legend>
          <div>
            <input
              type="radio"
              id="is_favorite_true"
              name="is_favorite"
              value="true"
              checked={userInput.is_favorite === true}
              onChange={handleCheck}
            />
            <label htmlFor="is_favorite_true">True</label>
          </div>
          <div>
            <input
              type="radio"
              id="is_favorite_false"
              name="is_favorite"
              value="false"
              checked={userInput.is_favorite === false}
              onChange={handleCheck}
            />
            <label htmlFor="is_favorite_false">False</label>
          </div>
        </fieldset>
        <div className="pt-5">
          <label htmlFor="playlist-select">Choose a playlist:</label>
          <select
            name="playlist-select"
            id="playlist-select"
            value={userInput.playlist}
            onChange={handlePlayListChange}
          >
            <option value="">--Please choose an option--</option>
            <option value="Carlitos Playlist">Carlitos Playlist</option>
            <option value="Gym Workout">Gym Workout</option>
            <option value="Hip-Hop Playlist">Hip-Hop Playlist</option>
          </select>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="border-white border-4 m-5 p-2 rounded-xl hover:bg-white"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default SongForm;
