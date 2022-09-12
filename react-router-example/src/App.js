import { Routes, Route, Link, NavLink, useLocation } from "react-router-dom";

import Home from "./components/Home";
import NotFound from "./components/NotFound";
import BookRoutes from "./components/BookRoutes";
import "./style.css";

function App() {
  const location = useLocation();
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
          <li>
            <NavLink to="/books/new">NewBook</NavLink>
          </li>
          <li>
            <Link to="/" state="Hi">
              Home
            </Link>
          </li>
        </ul>
      </nav>
      {location.state}
      <Routes>
        <Route path="/" element={<Home />} />
        {/*Booklayout rape over books  */}
        <Route path="/books/*" element={<BookRoutes />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
