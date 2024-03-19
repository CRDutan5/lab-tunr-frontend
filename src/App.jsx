import React, { useEffect, useState } from "react";
import Nav from "./Components/Nav";
import { Route, Routes } from "react-router-dom";
import SongsIndex from "./Components/SongsIndex";
import LandingPage from "./Components/LandingPage";
import SongDetails from "./Components/SongDetails";
import SongForm from "./Components/SongForm";

const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/songs" element={<SongsIndex />} />
        <Route path="/songs/create" element={<SongForm />} />
        <Route path="/songs/:id" element={<SongDetails />} />
        <Route path="/songs/:id/edit" element={<SongForm />} />
      </Routes>
    </div>
  );
};

export default App;
