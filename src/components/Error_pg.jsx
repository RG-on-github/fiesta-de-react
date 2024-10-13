import { Link } from "react-router-dom";

const Error_pg = () => {
  return (
    <Link to='/'>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="text-5xl font-afacad font-bold">404 Error Page Not Found</h1>
        <p className="text-2xl">Click anywhere on the page to get redirected to Home Page</p>
      </div>
    </Link>
  );
};

export default Error_pg;
