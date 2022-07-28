import React from "react";
import Image from "next/image";
export default function SecondSection() {
  return (
    <div className="py-8 w-screen  px-5 sm:px-6  lg:px-28  ">
      <div className=" space-y-7 md:space-y-0 md:grid md:grid-cols-3 items-center justify-center gap-10">
        <div className=" md:col-start-1 md:col-end-3">
          <h2 className="font-AvenirHeavy text-slate-800 text-4xl md:text-6xl">
            CHI SIAMO ?
          </h2>
          <br />
          <p className="font-AvenirLT text-gray-600 text-xl md:text-xl md:tracking-wider md:leading-9">
            La BDS è una società creata da professionisti di diversi settori,
            nata dall{"'"}esigenza di trovare soluzioni per i propri clienti. <br/><br/>
             Prima di tutte, vista la direzione in cui andava il sistema sanitario, si
            è deciso di dare la possibilità ad ogni famiglia di avvicinarsi alla
            sanità privata. <br/><br/>
             Data la veloce crescita che sta avendo il mercato
            delle vendite online, supportiamo le aziende che vogliono iniziare a
            vendere prodotti su Amazon in maniera professionale. <br/><br/>
             Un altro ramo di BDS si occupa di noleggio a medio e lungo termine per privati ed
            aziende. <br/><br/>
             Noi di Business Development & Strategy offriamo l{"'"}opportunità di rimanere al passo di un sistema in continua
            evoluzione.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-[180px] h-[80px] md:w-[500px]  md:h-[180px]">
            <Image src={"/img/MainImage2.png"} alt="logo" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
}
