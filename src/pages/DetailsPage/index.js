import { useParams } from "react-router-dom";

function DetailPage({ array }) {
  //instanciar o usePArams
  const { idName } = useParams();

  //filtrar minha array com todos os nomes.
  const user = array.filter((element) => {
    console.log(element.id == idName);
    return element.id == idName;
  });

  console.log(user); // =>> É UMA ARRAY

  return (
    <div>
      COMO QUUE EU SEI QUAL É O ID DA URL?
      <p>Nome: {user[0].name}</p>
      <p>Id: {user[0].id}</p>
    </div>
  );
}

export default DetailPage;
