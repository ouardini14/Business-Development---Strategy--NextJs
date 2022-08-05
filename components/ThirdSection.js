import React from "react";
import Image from "next/image";
export default function ThirdSection() {
  return (
    <div className="py-8 w-screen space-y-8 px-5 sm:px-6  lg:px-28  ">
      <h1 className="text-center font-AvenirHeavy tracking-tighter text-4xl">
        I NOSTRI SERVIZI
      </h1>
      <div className="flex flex-col gap-12 2xl:gap-36 md:grid md:grid-cols-3 ">
        <div className="flex flex-col  space-y-3  pt-12 md:pt-0">
          <div className=" md:min-h-[185px] flex  items-center justify-center ">
            <Image
              src={"/img/img1.png"}
              alt="image1"
              layout="intrinsic"
              width={225}
              height={115}
            />
          </div>

          <h3 className="font-AvenirHeavy tracking-tighter text-3xl md:min-h-[85px] text-center ">
            Sanità Privata
          </h3>
          <p className="font-AvenirLT  text-[15px]">
         <b className="text-[18px]">PUBBLICO O PRIVATO: QUAL È IL SISTEMA MIGLIORE?</b>  <br/> <br/> 
            <ul className="list-disc pl-5">
              <li>
              I sistemi della sanità privata escludono una parte della popolazione (punto di debolezza), ma la quota restante è servita bene (punto di forza).
              </li>
              <li> 
              I sistemi SSN assistono tutti (punto di forza), ma talvolta in maniera poco efficace (punto di debolezza).
             </li> 
            </ul>
            <br/> 
            Nell{"'"}esigenza di una visita o una prestazione immediata ti rechi nel pubblico o nel privato?  <br/> <br/>
            Se ci fosse la soluzione adatta, con pochi soldi e senza limiti di età, per mettere in protezione la tua famiglia e permetterti di scegliere dove curarti la prenderesti in considerazione?
            dove curarti la prenderesti in considerazione?  <br/> <br/>
            
          </p>
          <p className="text-[12px]  italic">“Il nostro è un metodo esclusivo e personalizzabile“</p>
        </div>

        <div className="flex flex-col   space-y-3  ">
          <div className=" md:min-h-[185px] flex  items-center justify-center ">
            <Image
              src={"/img/img2.png"}
              alt="image1"
              layout="intrinsic"
              width={240}
              height={70}
            />
          </div>

          <h3 className="font-AvenirHeavy tracking-tighter text-3xl  md:min-h-[85px] text-center">
          Noleggio a medio e lungo termine per Aziende e Privati
          </h3>
          <p className="font-AvenirLT text-[15px] ">
          Vuoi dire addio a tutte le difficoltà derivanti dall{"'"}acquisto di un{"'"}auto? <br/><br/>
          Non dovrai più dedicare tempo e risorse per la gestione delle pratiche amministrative.<br/><br/>
          Con il noleggio tutti i rischi legati all{"'"}autoveicolo vengono trasferiti alla società locatrice. Grazie ai programmi di manutenzione previsti all{"'"}interno del canone di noleggio, le autovetture rimarranno sempre perfettamente efficienti. Inoltre, in caso di sinistri o guasti meccanici, non sarai più costretto a ricorrere ai tuoi capitali.<br/><br/>
          L{"'"}Expertise di BDS è al tuo servizio con soluzioni di noleggio a medio e lungo termine, dotate di strumenti innovativi per soddisfare qualsiasi tua esigenza<br/><br/>
          </p>
          <p className="text-[12px]  italic">“Noleggiami Adesso” è un marchio registrato</p>

        </div>

        <div className="flex flex-col  space-y-3 ">
          <div className=" md:min-h-[185px] flex  items-center justify-center ">
            <Image
              src={"/img/img3.png"}
              alt="image1"
              layout="intrinsic"
              width={170}
              height={71}
            />
          </div>

          <h3 className="font-AvenirHeavy tracking-tighter text-3xl  md:min-h-[85px] text-center ">
            Vendita professionale su Amazon
          </h3>  
          <p className="font-AvenirLT  text-[15px]">
          Stai pensando o hai già iniziato a vendere online? <br/><br/>
          Sei al corrente che Amazon è oggi nel mondo il primo canale di vendita? <br/> <br/>
          Iniziare a vendere su questo marketplace da soli non è semplice, rischi solo di perdere tempo e non ottenere risultati.<br/> <br/>
          Noi di BDS abbiamo un gruppo di professionisti che possono aiutare la tua azienda a portare i propri prodotti su Amazon affiancandoti per raggiungere col tempo grandi risultati.
          </p>
          <p className="text-[12px]  italic">“Il nostro è un metodo esclusivo e personalizzabile”</p>

        </div>
      </div>
    </div>
  );
}
