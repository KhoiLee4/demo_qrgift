import React, { useEffect, useRef } from "react";
import QRCode from "qrcode";

export default function QRCodeGenerator({ text }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      QRCode.toCanvas(canvasRef.current, text, {
        width: 200,
        margin: 2,
      });
    }
  }, [text]);

  return (
    <div>
      <h3>🔳 QR Code Generator</h3>
      <canvas ref={canvasRef}></canvas>
    </div>
  );
}
