import React, { useState } from "react";
import { nanoid } from "nanoid";
import BarcodeGenerator from "../components/BarcodeGenerator";
import QRCodeGenerator from "../components/QRCodeGenerator";
import { Link } from "react-router-dom";

export default function CreatePage() {
  const [input, setInput] = useState("Hello World");

  const generateRandom = () => {
    setInput(nanoid(12));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>🔳 Tạo QR Code & Barcode</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", width: "300px", marginRight: "10px" }}
        />
        <button onClick={generateRandom} style={{ padding: "8px 12px" }}>
          🔄 Sinh ngẫu nhiên (20 ký tự)
        </button>
      </div>

      <BarcodeGenerator text={input} />
      <QRCodeGenerator text={input} />

      <div style={{ marginTop: "20px" }}>
        <Link to="/scan">📷 Chuyển sang trang quét mã</Link>
      </div>
    </div>
  );
}
