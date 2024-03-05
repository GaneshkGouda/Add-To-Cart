import { Route, Routes } from "react-router-dom";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Navebar from "./components/Navebar";

function App() {
  return (
    <>
      <Navebar></Navebar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </>
  );
}

export default App;
