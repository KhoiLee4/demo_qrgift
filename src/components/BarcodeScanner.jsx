import React, { useEffect, useRef, useState } from "react";
import {
  BrowserMultiFormatReader,
  BarcodeFormat,
  DecodeHintType,
} from "@zxing/library";

export default function BarcodeScanner() {
  const videoRef = useRef(null);
  const [result, setResult] = useState("");

  useEffect(() => {
    const codeReader = new BrowserMultiFormatReader();
    const hints = new Map();
    hints.set(DecodeHintType.POSSIBLE_FORMATS, [
      BarcodeFormat.QR_CODE,
      BarcodeFormat.CODE_128,
      BarcodeFormat.CODE_39,
      BarcodeFormat.EAN_13,
      BarcodeFormat.EAN_8,
      BarcodeFormat.UPC_A,
      BarcodeFormat.UPC_E,
    ]);
    codeReader.hints = hints;

    // Dùng facingMode để ưu tiên camera sau
    codeReader.decodeFromConstraints(
      { video: { facingMode: "environment" } },
      videoRef.current,
      (res, err) => {
        if (res) {
          setResult(res.getText());
        }
      }
    );

    return () => codeReader.reset();
  }, []);

  return (
    <div>
      <h3>📷 Barcode / QR Scanner</h3>
      <video ref={videoRef} style={{ width: "100%" }} playsInline />
      <p>Kết quả: {result || "Chưa quét được"}</p>
    </div>
  );
}
