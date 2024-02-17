import React from "react";
import qr from "./assets/images/ws_qr_code.png";
import Image from "next/image";

export const QRImage = () => {
  return (
    <div className="flex items-center justify-center p-6">
      <Image src={qr} alt="qr" width="260" height="260" />
    </div>
  );
};
