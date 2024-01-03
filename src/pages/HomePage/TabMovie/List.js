import React from "react";
import { Tabs } from "antd";
import moment from "moment";

export default function List({ dsPhim }) {
  console.log(dsPhim);
  return (
    <div className="space-y-5 overflow-y-scroll" style={{ height: 600 }}>
      {dsPhim.map((phim) => {
        return (
          <div className="py-5 space-y-4">
            <img
              className="w-40 h-48 object-cover"
              src={phim.hinhAnh}
              alt={phim.tenPhim}
            />
            <h1 className="text-purple-700 text-xl font-medium">
              {phim.tenPhim}
            </h1>
            <div className="grid grid-cols-3 gap-5">
              {phim.lstLichChieuTheoPhim.map((item) => {
                return (
                  <button className="px-0 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                    {moment(item.ngayChieuGioChieu).format("DD/mm/yyyy hh:mm")}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
