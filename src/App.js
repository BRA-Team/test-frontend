import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Home from "./Home";
import AboutPage from "./pages/AboutPage";
import RoomsPage from "./pages/RoomsPage";
import Competitions from "./pages/CompetitionsPage";
import CreateRoom from "./pages/CreateRoomPage";
import JoinRoom from "./pages/JoinRoomPage";
import Room from "./pages/RoomPage";
import RoomView from "./pages/RoomView";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/rooms" element={<RoomsPage />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/createroom" element={<CreateRoom />} />
        <Route path="/joinroom" element={<JoinRoom />} />
        <Route path="/room" element={<Room />} />
        <Route path="/roomview" element={<RoomView />} />
      </Routes>
    </Router>
  );
}

export default App;
