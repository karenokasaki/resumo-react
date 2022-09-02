import { useState } from "react";
import { Link } from "react-router-dom";

function HomePage({ array, nome, setNome }) {
  //AQUI EXISTIA O STATE NOME

  function changeNome() {
    setNome("professora");
  }

  console.log(array);

  return (
    <>
      <h1>{nome}</h1>
      <button onClick={() => setNome("professora")}>Mudar nome</button>

      <ul>
        {array.map((element) => {
          return (
            <>
              <p>id: {element.id}</p>
              <Link to={`/names/${element.id}`}>Pagina de Detalhes</Link>
            </>
          );
        })}
      </ul>
    </>
  );
}

export default HomePage;
