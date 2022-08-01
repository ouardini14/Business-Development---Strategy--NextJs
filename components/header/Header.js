import React, { useRef, useEffect,useCallback, Fragment, useState } from "react";
import Image from "next/image";
import {
  MoonIcon,
  SearchIcon,
  ShoppingCartIcon,
  SunIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/react/solid";
import { gsap } from "gsap";
import Link from "next/link";
import HeaderItem from "./HeaderItem";
import { useRouter } from "next/router";
import { ScrollToPlugin } from "gsap/dist/ScrollToPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function Header({ categories }) {
  const [open, setOpen] = useState(false);
  const isInitialMount = useRef(true);
  const router = useRouter();
  const Sections=["Home","Contatti","Servizi","Siamo"]
  const [curSection,SetCurrSection]=useState("Home")

  const Menu = useRef(null);
  const headerRef =useRef(null)
  const wrap = useRef(null);
  const HeaderMenu = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin,ScrollTrigger);
    setOpen(false);
    CloseMenu();

  }, [router]);
  // Sections.forEach((el,i)=>{
  //   gsap.to(el, {
  //      scrollTrigger: {
  //        trigger: '#'+el,
  //        start:'bottom top',
  //        onEnter: () => {
  //          SetCurrSection(el)
  //          console.log(curSection)
  //         },
  //        onEnterBack: () => {
  //          SetCurrSection(el)
  //        },
  //      },
  //    });
  //    })




  function OpenMenu() {
    gsap
      .timeline()
      .set(HeaderMenu.current, {
        display: "inline",
      })
      .to(wrap.current, {
        scale: 1.3,
        duration: 0.5,
        ease: "Expo.InOut",
      })
      .set(Menu.current.children, {
        opacity: 0,
      })
      .fromTo(
        Menu.current.children,
        {
          opacity: 0,
          yPercent: -75,
        },
        {
          opacity: 1,
          yPercent: 0,
          stagger: 0.4,
          ease: "sine.in",
        }
      );
  }

  function CloseMenu() {
    gsap
      .timeline()
      .fromTo(
        Menu.current.children,
        {
          opacity: 1,
          yPercent: 0,
        },
        {
          opacity: 0,
          yPercent: -50,
          stagger: 0.2,
          ease: "Expo.InOut",
        }
      )
      .to(wrap.current, {
        scale: 0,
        duration: 0.5,
        ease: "Expo.InOut",
      })
      .set(HeaderMenu.current, {
        display: "none",
      });
  }

  const Goto = (link, mobile) => {
    if (typeof window !== "undefined") {
      if (mobile) {
        CloseMenu();
        setOpen(false);
      }
    }
    gsap.to(window, {
      ease: 'expo.inOut"',
      duration: 1.3,
      scrollTo: { y: "#" + link, offsetY: 100 },
    });
  };

  return (
    <header ref={headerRef} className="absolute top-0 left-0 right-0 w-screen z-[100] font-AvenirLT md:bg-white">
      <div
        className={`relative flex justify-between items-center   py-8 w-screen  px-4 sm:px-5  lg:px-28`}
      >
        <Image
          src="/img/logo.png"
          height={55}
          width={146}
          alt="Logo"
          className="z-[100]"
        />

        <div className=" items-center space-x-7    hidden md:flex   ">
          <HeaderItem title="Home" Goto={Goto} section="Home" />
          <HeaderItem title="Contatti" Goto={Goto} section="Contatti" />
          <HeaderItem title="Servizi" Goto={Goto} section="Servizi" />
          <HeaderItem title="Chi Siamo" Goto={Goto} section="Siamo" />
        </div>

        <button
          onClick={() => {
            if (
              !(
                gsap.isTweening(HeaderMenu.current) ||
                gsap.isTweening(wrap.current) ||
                gsap.isTweening(Menu.current.children)
              )
            ) {
              setOpen(!open);
              open ? CloseMenu() : OpenMenu();
            }
          }}
          className="z-[100] MenuButton cursor-pointer  flex flex-col items-center justify-center space-y-1 outline-0	md:hidden"
        >
          <span
            className={`w-8 h-1 rounded-full transform transition origin-[5px_3px] duration-500 ease-in-out ${
              open && `rotate-45 bg-black`
            }
            ${open ? "bg-black" : "bg-white"}

            `}
          ></span>
          <span
            className={`w-8 h-1 bg-white rounded-full transform transition origin-[5px_2px] duration-500 ease-in-out ${
              open && `-translate-x-1`
            } ${open && `opacity-0`}`}
          ></span>
          <span
            className={`w-8 h-1  rounded-full transform transition origin-[5px_3px] duration-500 ease-in-out ${
              open && `-rotate-45`
            }
            ${open ? "bg-black" : "bg-white"}
            `}
          ></span>
        </button>
      </div>

      {/* Menu Dropdown */}
      <div
        className="fixed overflow-hidden h-screen  w-screen top-0 left-0 hidden  z-[95]"
        ref={HeaderMenu}
      >
        <div
          ref={wrap}
          className={`rounded-bl-full h-screen bg-white w-screen tranform origin-top-right scale-0`}
        ></div>
        <div
          className={`flex flex-col items-center justify-center  h-screen w-screen bg-white `}
        >
          <div
            className="fixed top-0  h-screen w-screen flex flex-col items-center justify-center  text-lg space-y-10 text-center"
            ref={Menu}
          >
            <HeaderItem title="Home" Goto={Goto} section="Home" />
            <HeaderItem title="Contatti" Goto={Goto} section="Contatti" />
            <HeaderItem title="Servizi" Goto={Goto} section="Servizi" />
            <HeaderItem title="Chi Siamo" Goto={Goto} section="Siamo" />
          </div>
        </div>
      </div>
    </header>
  );
}
