import React, { useEffect, useState } from "react";
import { https } from "../../service/api";
import { Card, Tooltip } from "antd";
import { NavLink } from "react-router-dom";
const { Meta } = Card;

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01")
      .then((res) => setMovieArr(res.data.content))
      .catch((err) => console.log(err));
  }, []);

  const renderMovie = () => {
    return movieArr.map((movie) => {
      return (
        <Tooltip title={movie.tenPhim.toUpperCase()}>
          <Card
            key={movie.maPhim}
            hoverable
            style={{
              width: "100%",
            }}
            cover={
              <img
                className="h-72 object-cover"
                alt={movie.tenPhim.toUpperCase()}
                src={movie.hinhAnh}
              />
            }
          >
            <Meta title={movie.tenPhim.toUpperCase()} />
            <NavLink
              to={`/detail/${movie.maPhim}`}
              className="flex justify-center mt-4"
            >
              <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                Xem chi tiết
              </button>
            </NavLink>
          </Card>
        </Tooltip>
      );
    });
  };

  return <div className="grid grid-cols-5 gap-10">{renderMovie()}</div>;
}
