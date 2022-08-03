import React from "react";
import Image from "next/image";
export default function SecondSection2() {
  return (
    <div className="py-14  w-screen  px-5 sm:px-6  sm:py-32 lg:px-28  ">
      <div className=" space-y-7 md:space-y-0 md:grid md:grid-cols-3 items-center justify-center gap-10">
        <div className=" md:col-start-1 md:col-end-3">
          <h2 className="font-lulo  tracking-tighter md:text-3xl text-lg text-center md:text-left  ">
            IL NOSTRO OBIETTIVO? <br/> COSTRUIRE VALORE PER IL TUO BENESSERE
          </h2>
          <br />
          <p className="font-AvenirLT text-gray-600 text-xl md:text-[20px] ">
        
         <br/><br/>
         Per sopravvivere, le aziende, ma anche le famiglie, devono essere pronte a rispondere ai continui cambiamenti ed ostacoli e sapersi adattare a contesti nuovi trovando soluzioni innovative alle sfide del progresso.
         <br/><br/>
         Noi di <b>Business Development & Strategy</b> offriamo l{"'"}opportunità di rimanere al passo di un sistema in continua evoluzione, velocemente e <b>“senza pensieri”</b>.   
         <br/><br/>
         <b>Senza salute tutto è niente!</b><br/>
         La Salute è un benessere collettivo per Aziende e Famiglie che hanno bisogno di proposte di valore ed accessibili a tutti!
         <br/><br/>
         <b>L{"'"}Auto è un{"'"}esigenza di lavoro ma anche una soddisfazione emozionale!</b> <br/>
        Cambiare frequentemente auto per soddisfare i propri bisogni non è sempre alla portata di tutti. Ma se fosse possibile ed accessibile soddisfare l{"'"}esigenza, il desiderio o necessità dell{"'"}azienda e del privato?
        <br/><br/>
        <b>Tutto, o quasi tutto, oggi gira su Internet!</b> <br/>
        I maggiori bisogni di consumo prodotti e servizi, oggi, sono soddisfatti on-
        line. Tu Azienda, cosa fai? La nostra è una proposta di valore ma anche
        una promessa di valore che potrai applicare per migliorare e sviluppare i
        tuoi canali di vendita.
          </p>
        </div>
        <div className="flex items-center justify-center pt-14">
          <div className="relative w-[450px] h-[220px] md:w-[509px]  md:h-[296px]">
            <Image src={"/img/img5.png"} alt="logo" layout="fill" />
          </div>
        </div>
      </div>
    </div>  
  );
}
