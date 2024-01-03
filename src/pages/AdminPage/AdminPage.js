import React, { useEffect, useState } from "react";
import { https } from "../../service/api";
import { message, Table, Tag } from "antd";
import "./AdminPage.css";

export default function AdminPage() {
  const [listUser, setListUser] = useState([]);

  const fetchListUser = async () => {
    try {
      let res = await https.get(
        "/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP00"
      );
      setListUser(res.data.content);
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      let res = await https.delete(
        `/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`
      );
      message.success(res.data.content);
      fetchListUser();
    } catch (err) {
      message.error(err.response.data.content);
    }
  };

  useEffect(() => {
    fetchListUser();
  }, []);

  const columns = [
    {
      title: "Loại người dùng",
      dataIndex: "maLoaiNguoiDung",
      key: "maLoaiNguoiDung",
      render: (text) => (
        <Tag color={text == "QuanTri" ? "red" : "blue"} key={text}>
          {text}
        </Tag>
      ),
    },
    {
      title: "Tài khoản",
      dataIndex: "taiKhoan",
      key: "taiKhoan",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Mật khẩu",
      dataIndex: "matKhau",
      key: "matKhau",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Họ tên",
      dataIndex: "hoTen",
      key: "hoTen",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Số điện thoại",
      dataIndex: "soDT",
      key: "soDT",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <button className="mx-2 rounded-lg px-3 py-2 bg-blue-500 text-blue-100 hover:bg-blue-600 duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
              />
            </svg>
          </button>
          <button
            onClick={() => {
              handleDelete(record.taiKhoan);
            }}
            className="rounded-lg px-3 py-2 bg-red-600 text-red-100 hover:bg-red-700 duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
        </>
      ),
    },
  ];

  const data = listUser.map((user) => {
    return {
      key: user.taikhoan,
      maLoaiNguoiDung: user.maLoaiNguoiDung,
      taiKhoan: user.taiKhoan,
      matKhau: user.matKhau,
      hoTen: user.hoTen,
      soDT: user.soDT,
      email: user.email,
    };
  });

  return <Table columns={columns} dataSource={data} />;
}
