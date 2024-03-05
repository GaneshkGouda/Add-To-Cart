import React, { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import Product from "../components/Product";

function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setloading] = useState(false);
  async function fetchProducts() {
    try {
      setloading(true);
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      if (data) {
        setProducts(data);
        setloading(false);
      }
    } catch (e) {
      console.log(e);
      setloading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29,29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto P-3">
          {products && products.length > 0
            ? products.map((item) => <Product key={item.id} Product={item} />)
            : null}
        </div>
      )}
    </div>
  );
}

export default Home;
