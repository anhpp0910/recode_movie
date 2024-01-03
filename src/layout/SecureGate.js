import React from "react";

export default function SecureGate({ children }) {
  // kiểm tra user đã đăng nhập hay chưa
  let user = JSON.parse(localStorage.getItem("USER_INFO"));

  if (!user || user.maLoaiNguoiDung != "QuanTri") {
    window.location.href = "/login";
  }
  return children;
}
