import { Link, Outlet, useSearchParams } from "react-router-dom";

const BookLayout = () => {
  const [searchParams, setSerachParams] = useSearchParams({ n: 3 });
  const number = searchParams.get("n");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number} </Link>
      <br />
      <Link to="/books/3">Book 3</Link>
      <br />
      <Link to="/books/4">Book 4</Link>
      <br />
      <Link to="/books/a">Book a</Link>
      <br />
      <Link to="/books/b">Book b</Link>
      <Outlet context={{ hello: "world" }} />
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setSerachParams({ n: e.target.value })}
      />
    </>
  );
};
export default BookLayout;
