import React, { useEffect, useState } from "react";
import axios from "axios";
export default function UseEffectDidMountDemo() {
  const [arrProduct, setArrayProduct] = useState([]);
  const getAPI = async () => {
    try {
      let result = await axios({
        url: "https://shop.cyberlearn.vn/api/product",
        method: "GET",
      });
      setArrayProduct(result.data.content);
      // console.log("result: ", result.data.content);
    } catch (err) {
      console.log(err);
    }
    //call API
  };
  useEffect(() => {
    //Tham số thứ 2 là mảng rỗng => hàm callback thứ 1 chỉ chạy 1 lần sau render (thứ tự tuong ưtự didmount bên class component)
    getAPI();
  }, []);
  // console.log(arrProduct);
  return (
    <div className="container">
      <h3>Shoes Shop</h3>
      <div className="row">
        {arrProduct.map((item, index) => {
          return (
            <div className="col-3" key={index}>
              <div className="card">
                <img src={item.image} alt="" />
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-dark">
                    Add To Cart <i className="fa fa-cart-plus"></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
