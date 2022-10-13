import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import useRoute from "../../hooks/useRoute/useRoute";
import useGetApi from "../../hooks/useGetApi/useGetApi";
export default function Home() {
  const [arrProduct, setArrayProduct] = useState([]);
  const { navigate, params } = useRoute();
  const data = useGetApi("https://shop.cyberlearn.vn/api/Product");
  console.log(data);
  const getAPI = () => {
    const promise = axios({
      url: "https://shop.cyberlearn.vn/api/Product",
      method: "GET",
    });
    promise.then((res) => {
      setArrayProduct(res.data.content);
    });
    promise.catch((err) => {
      console.log(err);
    });
  };
  useEffect(() => {
    getAPI();
  }, []);
  return (
    <div className="container">
      <h3>Product List</h3>
      <div className="row">
        {arrProduct.map((product, index) => {
          return (
            <div className="col-3 mt-2" key={index}>
              <div className="card">
                <img src={product.image} alt="..." />
                <div className="card-body">
                  <p>{product.name}</p>
                  <p>{product.price}</p>
                  <NavLink
                    to={`/detail/${product.id}`}
                    className="btn btn-dark"
                  >
                    Add to cart <i className="fa fa-cart-plus"></i>
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
