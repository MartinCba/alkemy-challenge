import { Link } from "react-router-dom";

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
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
