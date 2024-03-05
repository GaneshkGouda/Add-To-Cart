import { Link } from "react-router-dom";

function Navebar() {
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto">
        <Link to={"/"}>
          <div className="ml-5">
            <h1 className="font-bold text-xl text-red-400 tracking-wide sm:text-2xsl md:text-3xl cursor-pointer">
              Shopping Cart
            </h1>
          </div>
        </Link>

        <div>
          <ul className="flex list-none items-center space-x-6 text-gray-800 font-semibold">
            <Link to={"/"}>
              <li className="cursor-pointer list-none">Home</li>{" "}
            </Link>
            <Link to={"/cart"}>
              {" "}
              <li className="cursor-pointer list-none">Cart</li>{" "}
            </Link>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navebar;
