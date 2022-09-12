import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const Naviagte = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      Naviagte(-1);
    }, 1000);
  }, [Naviagte]);

  return (
    <>
      <h1>NotFound</h1>
    </>
  );
}

export default NotFound;
