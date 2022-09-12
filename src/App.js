import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DetailPage from "./pages/DetailsPage";
function App() {
  const [array, setArray] = useState([
    { id: 3221649847, name: "karen" },
    { id: 987971987, name: "fabio" },
  ]);
  const [nome, setNome] = useState("karen");

  return (
    <div className="App">
      <NavBar />

      <h1>oi do jino</h1>
      <Routes>
        <Route
          path="/"
          element={<HomePage array={array} nome={nome} setNome={setNome} />}
        />

        <Route path="/names/:idName" element={<DetailPage array={array} />} />
      </Routes>

      <h2> Oi da Karen</h2>
    </div>
  );
}

export default App;
