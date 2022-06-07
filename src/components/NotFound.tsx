import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <>
      <p>Oh no 404..! Page not found.</p>
      <p>
        <Link to="/">Click here to get back to Home Page</Link>
      </p>
    </>
  );
};
