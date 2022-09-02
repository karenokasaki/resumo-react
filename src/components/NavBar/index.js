import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      Turma 85WD
      {/* <a href="/about">tag a</a> */}
      <Link to="/about" >tag Link</Link>
    </nav>
  );
}

export default NavBar;
