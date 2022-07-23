import React from "react";
import Image from 'next/image'
export default function SecondSection() {
  return (
    <div className="py-8 w-screen  px-5 sm:px-6  lg:px-28  ">
      <div className=" space-y-7 md:space-y-0 md:grid md:grid-cols-3 items-center justify-center gap-10">
        <div className=" md:col-start-1 md:col-end-3">
          <h2 className="font-AvenirHeavy text-slate-800 text-4xl md:text-6xl">Chi siamo?</h2>
          <br/>
          <p className="font-AvenirLT text-gray-600 text-xl md:text-2xl md:tracking-wider md:leading-9">
            BDS è una società creata da professionisti di diversi settori che
            hanno deciso offrire una nuova soluzione dal punto di vista
            sanitario, spinti dalla direzione che stava prendendo il sistema
            pubblico, inoltre col tempo si sono presentate altre opportunità da
            inserire come il noleggio a lungo termine, oltre ad essere diventati
            venditori professionisti di Amazon negli ultimi 2 anni.
          </p>
        </div>
           <div className="flex items-center justify-center">
            <div className="relative w-[180px] h-[80px] md:w-[500px]  md:h-[180px]">
            <Image
            src={'/img/MainImage2.png'}
            alt="logo"
            layout="fill"
            />
            </div>
            
            </div>     
      </div>
    </div>
  );
}
