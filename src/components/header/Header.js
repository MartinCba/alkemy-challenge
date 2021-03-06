import { Link } from "react-router-dom";
import Search from "../search/Search";

function Header() {
  return (
    <header className="">
      <nav>
        <ul className="flex flex-row">
          <li className="pl-3 pt-3 pb5">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-3 pt-3 pb5">
            <Link to="/list">List</Link>
          </li>
          <li className="pl-3 pt-3 pb5">
            <Link to="/favoritos">Favorites</Link>
          </li>
          <li className="pl-3 pt-3 pb5 fixed right-4">
            <Search />
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
