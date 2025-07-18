// src/App.js
import React from "react";
import PlayersList from "./components/playersList";

function App() {
  return (
    <div className="App" style={{ padding: "2rem" , backgroundColor: "beige" }}>
      <h1 style={{ textAlign: "center", margin: "1rem 0" }}>FIFA Player Cards</h1>
      <PlayersList />
    </div>
  );
}

export default App;
