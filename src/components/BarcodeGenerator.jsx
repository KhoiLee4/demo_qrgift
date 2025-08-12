import React, { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

export default function BarcodeGenerator({ text }) {
  const svgRef = useRef(null);

  useEffect(() => {
    if (svgRef.current) {
      JsBarcode(svgRef.current, text, {
        format: "CODE128",
        lineColor: "#000",
        width: 1.96, // vừa 15 ký tự trong 360px
        height: 80, // chiều cao
        margin: 4,
        displayValue: true,
      });

      // Fit đúng khung 360x80
      svgRef.current.setAttribute("width", "360");
      svgRef.current.setAttribute("height", "80");
    }
  }, [text]);

  return (
    <div style={{ width: "360px" }}>
      <h3>🎯 Barcode Generator</h3>
      <svg ref={svgRef}></svg>
    </div>
  );
}
