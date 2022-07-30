import React from "react";
import Image from "next/image";
export default function ThirdSection() {
  return (
    <div className="py-8 w-screen space-y-8 px-5 sm:px-6  lg:px-28  ">
      <h1 className="text-center font-AvenirHeavy tracking-tighter text-4xl">
        I NOSTRI SERVIZI
      </h1>
      <div className="flex flex-col gap-12 2xl:gap-36 md:grid md:grid-cols-3 ">
        <div className="flex flex-col  text-center space-y-3  pt-12 md:pt-0">
          <div className=" md:min-h-[185px] flex  items-center justify-center ">
            <Image
              src={"/img/img1.png"}
              alt="image1"
              layout="intrinsic"
              width={94}
              height={94}
            />
          </div>

          <h3 className="font-AvenirHeavy tracking-tighter text-3xl md:min-h-[85px] ">
            Sanità Privata
          </h3>
          <p className="font-AvenirLT  text-[15px]">
            Cosa ne pensi del sistema sanitario nazionale? <br/> <br/>
            Nell{"'"}esigenza di una visita o una prestazione immediata ti rechi nel pubblico o nel
            privato?  <br/> <br/>
            Se ci fosse la soluzione adatta, con pochi soldi, per
            mettere in protezione la tua famiglia e permetterti di scegliere
            dove curarti la prenderesti in considerazione?  <br/> <br/>
            Contattaci per saperne di più
          </p>
        </div>

        <div className="flex flex-col  text-center space-y-3  ">
          <div className=" md:min-h-[185px] flex  items-center justify-center ">
            <Image
              src={"/img/img2.png"}
              alt="image1"
              layout="intrinsic"
              width={240}
              height={70}
            />
          </div>

          <h3 className="font-AvenirHeavy tracking-tighter text-3xl  md:min-h-[85px] ">
            Nollegio a lungo termine
          </h3>
          <p className="font-AvenirLT text-[15px] ">
          La nostra expertise al servizio della tua flotta aziendale con soluzioni di noleggio a medio e lungo termine, dotate di strumenti innovativi per soddisfare qualsiasi tua esigenza.

          </p>
        </div>

        <div className="flex flex-col  text-center space-y-3 ">
          <div className=" md:min-h-[185px] flex  items-center justify-center ">
            <Image
              src={"/img/img3.png"}
              alt="image1"
              layout="intrinsic"
              width={170}
              height={71}
            />
          </div>

          <h3 className="font-AvenirHeavy tracking-tighter text-3xl  md:min-h-[85px]">
            Vendita professionale su Amazon
          </h3>
          <p className="font-AvenirLT  text-[15px]">
          Hai un{"'"}azienda e attualmente stai pensando o hai già iniziato a vendere online? <br/>
          Vorresti valutare la possibilità di utilizzare Amazon come canale di vendita? <br/> <br/>
          Iniziare a vendere su questo marketplace da soli non è semplice, rischi solo di perdere tempo e non ottenere risultati.<br/> <br/>
          Noi di BDS abbiamo un gruppo di professionisti che possono aiutare la tua azienda a portare i propri prodotti su Amazon affiancandoti per raggiungere col tempo grandi risultati.
          </p>
        </div>
      </div>
    </div>
  );
}
