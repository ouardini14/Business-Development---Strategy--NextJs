import React from "react";
import Image from "next/image";
export default function Footer() {
  return (
    <div>
      <div className="relative md:grid md:grid-cols-2 flex flex-col items-center justify-center  gap-10  py-8 w-screen  px-4 sm:px-5  lg:px-28 font-AvenirLT">
        <div className="flex items-center justify-center ">
          <div className="relative w-[210px] h-[80px]">
            <Image src={"/img/logo.png"} alt="Logo" layout="fill" />
          </div>
        </div>
        <div>
          <div className="text-center md:text-left">
          <b>Business Development & Strategy Srl</b>  <br/>
           Via F. Simonetta, 25 - 28922 Verbania (VB) Italia <br/>
            C.F e P.iva <b>09729160961</b><br/><br/>
             E-mail <b>info@bdstrategy.it</b> <br/>
             Tel. <b>+39 0323 403468 </b><br/>
             Fax <b>+39 0323 517678</b>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
