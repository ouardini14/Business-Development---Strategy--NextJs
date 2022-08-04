import React,{useEffect, useState} from 'react'

export default function Cookies() {
const [cookiesWarn,setCookiesWarn]=useState(true)
    useEffect(()=>{
        localStorage.getItem('Cookies') ? setCookiesWarn(false):setCookiesWarn(true)
        
    })
    const enableCookies =()=>{ 
        setCookiesWarn(false)
        localStorage.setItem('Cookies','true')
    }
  return ( 
    <div className={`origin-bottom fixed bottom-0   space-y-4  font-AvenirLT  w-screen     bg-slate-800 py-5 px-9 z-20 ${cookiesWarn?'inline':'hidden'}`}>
          <p className='text-white '>
          I cookie ci aiutano a fornire un servizio migliore, `Business Sviluppo & Strategia `utilizza i cookie per eseguire analisi e fornire contenuti e annunci su misura per i tuoi interessi. Visitando il nostro sito Web accetti il nostro utilizzo dei cookie.
           </p>
        <div>
        <button className='  rounded-md bg-white px-3 py-1' onClick={()=>{enableCookies()}}> 
        sono d{"'"}accordo
        </button>
         <br/><br/>

        </div>

    </div>
  )  
}
