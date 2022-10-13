import React from "react";
import axios from "axios";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
export default function Detail() {
  const [productDetail, setProductDetail] = useState({});
  const params = useParams();
  //useParams dùng để lấy tham số trên thanh url
  const getProductDetailAPI = () => {
    const promise = axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.id}`,
      method: "GET",
    });
    promise.then((res) => setProductDetail(res.data.content));
    promise.catch((err) => {
      console.log(err);
    });
  };
  useEffect(() => {
    getProductDetailAPI();
  }, [params.id]);
  return (
    <div className="container">
      <h3>Product detail</h3>
      <hr />
      <div className="row">
        <div className="col-4">
          <img src={productDetail.image} className="w-100" alt="..." />
        </div>
        <div className="col-6">
          <h3>{productDetail.name}</h3>
          <p>{productDetail.description}</p>
        </div>
      </div>
      <div className="mt-2">
        <div className="row">
          {productDetail.relatedProducts?.map((item, index) => {
            return <div className="col-4" key={index}>
                <div className="card">
                    <img src={item.image} alt="" />
                    <div className="card-body">
                        <p>{item.price}</p>
                        <h5>{item.description}</h5>
                        <NavLink to={`/detail/${item.id}`} className="btn btn-dark">View Detail</NavLink>
                    </div>
                </div>
            </div>;
          })}
        </div>
      </div>
    </div>
  );
}
