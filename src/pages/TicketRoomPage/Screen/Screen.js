import React from "react";
import "./Screen.css";

export default function Screen({ danhSachGhe }) {
  return (
    <div className="screen bg-gray-800 grid grid-cols-subgrid col-span-3">
      <h3 className="manHinh py-12 text-center text-white text-md font-medium">
        MÀN HÌNH
      </h3>

      <div className="seat_map">
        {danhSachGhe.map((ghe) => {
          let daDat = ghe.daDat === true ? "gheDaDat" : "";
          let loaiGhe = ghe.loaiGhe === "Thuong" ? "gheThuong" : "gheVip";
          return (
            <button
              key={ghe.tenGhe}
              className={"text-white ghe " + loaiGhe + " " + daDat}
              onClick={(e) => {
                e.target.classList.toggle("gheBanChon");
              }}
            >
              {ghe.tenGhe}
            </button>
          );
        })}
      </div>

      <div className="seat_guide py-14">
        <div className="flex justify-around items-center">
          <div className="flex items-center">
            <button className="ghe"></button>
            <span className="text-white ms-1">Ghế thường</span>
          </div>
          <div className="flex items-center">
            <button className="ghe gheVip"></button>
            <span className="text-white ms-1">Ghế VIP</span>
          </div>
          <div className="flex items-center">
            <button className="ghe gheBanChon"></button>
            <span className="text-white ms-1">Ghế bạn chọn</span>
          </div>
          <div className="flex items-center">
            <button className="ghe gheDaDat"></button>
            <span className="text-white ms-1">Ghế đã đặt</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// giaVe
