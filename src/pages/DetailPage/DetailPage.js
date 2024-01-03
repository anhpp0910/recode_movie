import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { https } from "../../service/api";
import { Rate } from "antd";
import Spinner from "../../components/Spinner/Spinner";

export default function DetailPage() {
  const [detail, setDetail] = useState({});
  let { maPhim } = useParams();

  useEffect(() => {
    https
      .get(`/api/QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`)
      .then((res) => setDetail(res.data.content))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container flex space-x-16">
      <img className="w-1/3 ml-0" src={detail.hinhAnh} alt={detail.tenPhim} />
      <div className="space-y-5">
        <h1 className="text-4xl text-center font-bold text-purple-900">
          {detail.tenPhim?.toUpperCase()}
        </h1>
        <p>{detail.moTa}</p>
        <Rate
          disabled
          allowHalf
          value={detail.danhGia / 2}
          style={{ color: "greenyellow" }}
        />
      </div>
    </div>
  );
}
