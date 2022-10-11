import React, { useState } from "react";

export default function UseStateDemo() {
  const [fontSize, setFontSize] = useState(16);
  const [imgSrc, setImgSrc] = useState("https://i.pravatar.cc?u=1");
  const [imgCarSrc, setImgCarSrc] = useState("./img/imgRedcar.jpg");
  const handleChangeColor = (color) => {
    const imgCarSrc = `./img/img${color}car.jpg`
    setImgCarSrc(imgCarSrc);
  };
  return (
    <div className="container">
      <h3>Demo Tăng Giảm FontSize</h3>
      <p style={{ fontSize: fontSize }}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam officiis
        quos facilis quam distinctio laboriosam blanditiis, fugiat iusto in
        nostrum.
      </p>
      <button
        className="btn btn-success mx-2 my-2"
        onClick={() => setFontSize(fontSize + 1)}
      >
        +
      </button>
      <button
        className="btn btn-success mx-2 my-2"
        onClick={() => setFontSize(fontSize - 1)}
      >
        -
      </button>
      <hr />
      <h3>Demo Random</h3>
      <div className="card w-25 my-2">
        <img src={imgSrc} alt="" />
        <div className="card-body">
          <p>name</p>
          <button
            className="btn btn-primary"
            onClick={() => {
              let randomNumber = Math.floor(Math.random() * 100);
              let newImg = "https://i.pravatar.cc?u=" + randomNumber;
              setImgSrc(newImg);
            }}
          >
            Random
          </button>
        </div>
      </div>
      <hr />
      <h3>Demo Chọn Xe</h3>
      <div className="row">
        <div className="col-6">
          <img src={imgCarSrc} alt="" />
        </div>
        <div className="col-6">
          <button
            className="btn btn-danger"
            onClick={() => {
              handleChangeColor("red");
            }}
          >
            RED
          </button>
          <button
            className="btn btn-dark"
            onClick={() => {
              handleChangeColor("black");
            }}
          >
            Black
          </button>
          <button
            className="btn btn-secondary"
            onClick={() => {
              handleChangeColor("silver");
            }}
          >
            Silver
          </button>
        </div>
      </div>
    </div>
  );
}
