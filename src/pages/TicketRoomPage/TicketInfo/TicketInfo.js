import React from "react";
import moment from "moment";

import "./TicketInfo.css";

export default function TicketInfo({ thongTinPhim }) {
  console.log(thongTinPhim);
  let ngayChieuGioChieu = `${thongTinPhim.ngayChieu} ${thongTinPhim.gioChieu}`;

  return (
    <div className="ticketInfo grid grid-cols-subgrid col-span-2 mx-5 p-5 text-md font-medium">
      <h3 className="text-3xl text-center font-medium text-purple-700">
        {thongTinPhim.tenPhim}
      </h3>
      <div>
        <div className="ticketInfo_item flex justify-between items-center">
          <h5>Cụm rạp: </h5>
          <h5 className="text-purple-700">{thongTinPhim.tenCumRap}</h5>
        </div>
        <div className="ticketInfo_item flex justify-between items-center">
          <h5>Địa chỉ: </h5>
          <h5 className="text-purple-700">{thongTinPhim.diaChi}</h5>
        </div>
        <div className="ticketInfo_item flex justify-between items-center">
          <h5>Rạp: </h5>
          <h5 className="text-purple-700">{thongTinPhim.tenRap}</h5>
        </div>
        <div className="ticketInfo_item flex justify-between items-center">
          <h5>Ngày giờ chiếu: </h5>
          <h5 className="text-purple-700">
            {moment(ngayChieuGioChieu).format("DD/MM/YYYY - hh:mm")}
          </h5>
        </div>
        <div className="ticketInfo_item flex justify-between items-center">
          <h5>Ghế bạn chọn: </h5>
          <h5 className="text-purple-700"></h5>
        </div>
      </div>
      <div className="grid grid-row-2">
        <div className="flex justify-between items-center text-3xl">
          <h5>TỔNG TIỀN: </h5>
          <h5 className="text-purple-700">100.000đ</h5>
        </div>
        <div className="m-auto">
          <button className=" text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-xl px-48 py-3">
            ĐẶT VÉ
          </button>
        </div>
      </div>
    </div>
  );
}
