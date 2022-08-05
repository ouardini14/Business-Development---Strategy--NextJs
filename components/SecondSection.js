import React from "react";
import Image from "next/image";
export default function SecondSection() {
  return (
    <div className="py-14  w-screen  px-5 sm:px-6  sm:py-8 lg:px-28  ">
      <div className=" space-y-7 md:space-y-0 md:grid md:grid-cols-3 items-center justify-center gap-10">
        <div className=" md:col-start-1 md:col-end-3">
          <h2 className="font-AvenirHeavy text-slate-800 text-4xl md:text-6xl">
            CHI SIAMO ?
          </h2>
          <br />
          <p className="font-AvenirLT text-gray-600 text-xl md:text-2xl md:tracking-wider md:leading-9">
          BDS nasce dall{"'"}unione di professionisti ed imprenditori di diversi settori che collaborano da anni per trovare le soluzioni più adatte alle esigenze dei clienti. <br/><br/>
          Offriamo una serie di servizi distinti, ma interconnessi al tuo benessere, che ti faranno vivere “senza pensieri”.<br/><br/>
          I nostri clienti sono Aziende esistenti, Startup e Professionisti di ogni settore ma anche Privati e Famiglie.  
          </p>
        </div>
        <div className="flex items-center justify-center pt-14 rounded-full overflow-hidden">
          <div className="relative w-[350px] h-[120px] md:w-[500px]  md:h-[180px] rounded-full overflow-hidden">
            <Image src={"/img/MainImage2.png"} alt="logo" layout="fill" className="rounded-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}
