import React from "react";

export default function FirstSection() {
  return (
    <div className="py-6 w-screen  px-5 sm:px-6  lg:px-28  ">
      <h1 className="text-lg font-lulo text-center tracking-tighter md:text-4xl uppercase pt-8 	" >
      la capacità di cambiare idea e di “ripensare”<br/>soluzioni nuove e funzionali
      </h1>
      <div className="flex flex-col py-5 px-5 sm:px-0 sm:py-16  space-y-3 sm:space-y-0 sm:grid sm:grid-cols-3 gap-10">
        <div className="text-left space-y-2 sm:text-center sm:border-b-4  border-slate-900 py-8">
          <span className="text-8xl text-orange-600 font-AvenirHeavy">6</span>{" "}
          <br />
          <span className=" text-xl text-gray-700 font-AvenirHeavy">
            Anni di esperienza
          </span>
        </div>
        <div className="text-right space-y-2 sm:text-center sm:border-b-4  border-slate-900  py-8">
          <span className="text-8xl text-orange-600 font-AvenirHeavy">+400</span>{" "}
          <br />
          <span className=" text-xl text-gray-700 font-AvenirHeavy">
            Clienti soddisfatti
          </span>
        </div>
        <div className="text-left space-y-2 sm:text-center sm:border-b-4  border-slate-900  py-8">
          <span className="text-8xl text-orange-600 font-AvenirHeavy">+9</span>{" "}
          <br />
          <span className=" text-xl text-gray-700 font-AvenirHeavy">
            Persone che lavorano ogni giorno per garatire la qualità del
            servizio
          </span>
        </div>
      </div>
    </div>
  );
}
