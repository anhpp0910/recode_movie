import React, { useState, useEffect } from "react";
import { https } from "../../../service/api";
import { Tabs } from "antd";
import List from "./List";

export default function TabMovie() {
  const [dsHeThongRap, setDsHeThongRap] = useState([]);

  useEffect(() => {
    https
      .get("/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=GP01")
      .then((res) => setDsHeThongRap(res.data.content))
      .catch((err) => console.log(err));
  }, []);

  const onChange = (key) => {
    console.log(key);
  };

  const items = dsHeThongRap.map((heThongRap) => {
    return {
      key: heThongRap.tenHeThongRap,
      label: (
        <img
          className="w-16"
          src={heThongRap.logo}
          alt={heThongRap.tenHeThongRap}
        />
      ),
      children: (
        <Tabs
          items={heThongRap.lstCumRap.map((cumRap) => {
            return {
              key: cumRap.tenCumRap,
              label: (
                <div className="text-left">
                  <h1 className="text-purple-700 text-xl font-medium">
                    {cumRap.tenCumRap}
                  </h1>
                  <p>{cumRap.diaChi}</p>
                </div>
              ),
              children: <List dsPhim={cumRap.danhSachPhim} />,
            };
          })}
          onChange={onChange}
          tabPosition="left"
          style={{ height: 600 }}
        />
      ),
    };
  });

  return <Tabs items={items} onChange={onChange} tabPosition="left" />;
}
