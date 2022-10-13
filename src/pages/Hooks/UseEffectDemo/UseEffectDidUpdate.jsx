import React, { useEffect, useState } from "react";

const arrProvince = [
  { id: "HCM", name: "Tp. Hồ Chí Minh" },
  { id: "HN", name: "Hà Nội" },
];

const districts = [
  { id: "Q1", name: "Quận 1", provinceId: "HCM" },
  { id: "Q3", name: "Quận 3", provinceId: "HCM" },
  { id: "Q7", name: "Quận 7", provinceId: "HCM" },
  { id: "BD", name: "Ba Đình", provinceId: "HN" },
  { id: "TL", name: "Từ Liêm", provinceId: "HN" },
  { id: "TH", name: "Đống Đa", provinceId: "HN" },
];

export default function UseEffectDidUpdate() {
  const [provinceId, setProvinceId] = useState("");
  const [arrDistrict, setArrDistrict] = useState([]);
  const { districtId, setDistrictId } = useState(districts[0].id);

  const handleChange = (e) => {
    let { value } = e.target;
    // setProvinceId((state) => {
    //     console.log('state cũ',state);
    //     return value
    // });
    setProvinceId(value);
  };

  useEffect(() => {
    //Chạy lần đầu tiên và chạy mỗi khi dependency  thay đổi
    if (provinceId !== "") {
      setArrDistrict(
        districts.filter((item) => item.provinceId === provinceId)
      );
    }
  }, [provinceId]); //shawlow compare (so sánh đối vs state là dữ liệu cơ sở - đối vs reference value thay đổi thì khi setState {...} [...])

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <h3>Profile</h3>
      <div className="form-group">
        <p>userName</p>
        <input className="form-control" id="userName" />
      </div>
      <div className="form-group">
        <p>Province </p>
        <select
          className="form-control"
          id="provinceId"
          value={provinceId}
          onChange={handleChange}
        >
          <option value={""}>- Select province</option>
          {arrProvince.map((item, index) => {
            return (
              <option value={item.id} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className="form-group">
        <p>District</p>
        <select className="form-control" id="provinceId" value={districtId}>
          {provinceId === "" ? (
            <option value={""}>- Select district</option>
          ) : (
            arrDistrict.map((item, index) => {
              return (
                <option value={item.id} key={index}>
                  {item.name}
                </option>
              );
            })
          )}
        </select>
      </div>
      <button className="btn btn-success" type="submit">Submit</button>
    </form>
  );
}
