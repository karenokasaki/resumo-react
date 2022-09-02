import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import DetailPage from "./pages/DetailsPage";
function App() {
  // www.ironhack.com/
  // www.ironhack.com/alunos   path="/alunos"
  // www.ironhack.com/professores path="/professores"
  // www.ironhack.com/evento/4053498534   path="/evento/idDoEvento"

  const [array, setArray] = useState([
    { id: 3221649847, name: "karen" },
    { id: 987971987, name: "fabio" },
  ]);
  const [nome, setNome] = useState("karen");
  // localhost:3000/names/

  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route
          path="/"
          element={<HomePage array={array} nome={nome} setNome={setNome} />}
        />

        <Route path="/names/:idName" element={<DetailPage array={array}/>} />
      </Routes>
    </div>
  );
}

export default App;
