import React from "react";
import BarcodeScanner from "../components/BarcodeScanner";
import { Link } from "react-router-dom";

export default function ScanPage() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📷 Quét mã QR / Barcode</h1>
      <BarcodeScanner />
      <div style={{ marginTop: "20px" }}>
        <Link to="/">⬅ Quay lại trang tạo mã</Link>
      </div>
    </div>
  );
}
