import React from 'react'
import Image from 'next/image'
export default function ThirdSection() {
  return (
    <div className="py-8 w-screen space-y-8 px-5 sm:px-6  lg:px-28  ">
        <h1 className='text-center font-AvenirHeavy tracking-tighter text-4xl'>I NOSTRI SERVIZI</h1>
        <div className='flex flex-col items-center justify-center gap-8 md:grid md:grid-cols-3 '>

            <div className='flex flex-col items-center justify-center text-center space-y-3'>
                <Image
                src={"/img/img1.png"}
                alt="image1"
                layout='intrinsic'
                width={94}
                height={94}
                />
                <h3 className='font-AvenirHeavy tracking-tighter text-3xl md:min-h-[80px] '>Sanità Privata</h3>
                <p className='font-AvenirLT  '>Questo è un paragrafo. Fai clic qui per modificarlo e aggiungere il tuo testo</p>
            </div>

            <div className='flex flex-col items-center justify-center text-center space-y-3'>
                <Image
                src={"/img/img2.png"}
                alt="image1"
                layout='intrinsic'
                width={80}
                height={94}
                />
                <h3 className='font-AvenirHeavy tracking-tighter text-3xl md:min-h-[80px] '>Nollegio a lungo termine</h3>
                <p className='font-AvenirLT  '>Questo è un paragrafo. Fai clic qui per modificarlo e aggiungere il tuo testo</p>
            </div>

            <div className='flex flex-col items-center justify-center text-center space-y-3'>
                <Image
                src={"/img/img3.png"}
                alt="image1"
                layout='intrinsic'
                width={130}
                height={94}
                />
                <h3 className='font-AvenirHeavy tracking-tighter text-3xl md:min-h-[80px] '>Vendita professionale su Amazone</h3>
                <p className='font-AvenirLT  '>Questo è un paragrafo. Fai clic qui per modificarlo e aggiungere il tuo testo</p>
            </div>

        </div>

    </div>
  )
}
