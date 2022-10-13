import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
export default function Search(props) {
  const keywordRef = useRef("");

  const [arrProduct, setArrProduct] = useState([]);
  //Hook giúp set lại url của trình duyệt theo người dùng
  let [searchParams, setSearchParams] = useSearchParams();

  console.log("keyword", searchParams.get("keyword"));
  const getAPISearchProduct = (keyword) => {
    const promise = axios({
      url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
      method: "GET",
    });
    promise.then((response) => {
      console.log(response);
      setArrProduct(response.data.content);
    });
    promise.catch((err) => console.log(err));
  };
  useEffect(() => {
    //LLấy ra serchParams trên url
    const keyword = searchParams.get("keyword");
    console.log(keyword);
    if (keyword) {
      //call api
      getAPISearchProduct(keyword);
    }
  }, [keywordRef.current]);
  const handleChange = (e) => {
    const { value } = e.target;
    keywordRef.current = value;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //set lại url của trình duyệt
    setSearchParams({
      keyword: keywordRef.current,
    });
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Search</h3>
      <div className="form-group">
        <p>Nhập từ khoá</p>
        <div className="input-group-prepend">
          <input
            className="form-control"
            id="keywordRef"
            onChange={handleChange}
          />
          <button className="btn bg-dark text-white mt-2">Search</button>
        </div>
      </div>
      <div className="mt-2">
        <p>Kết quả tìm kiếm</p>
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt={"..."} />
                </div>
                <div className="card-body">
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <button className="btn btn-success">View detail</button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
}
