import React from "react";
import "./App.scss";
//custom components
import NavBar from "components/NavBar/NavBar";
import BoardBar from "components/BoardBar/BoardBar";
import BoardContent from "components/BoardContent/BoardContent";

function App() {
  return (
    <div className="fellox-master">
      <NavBar />
      <BoardBar />
      <BoardContent />
    </div>
  );
}

export default App;
