import Head from "next/head";
import Image from "next/image";
import PageImage from "../components/PageImage";
import FirstSection from "../components/FirstSection";
import SecondSection from "../components/SecondSection";
import ThirdSection from "../components/ThirdSection";
import FourthSection from "../components/FourthSection";
import SecondSection2 from "../components/SecondSection2";
import Cookies from "../components/Cookies";

export default function Home() {
  return (
    <div className="min-h-screen  md:pt-[100px]">
      <Cookies/>
      <div id="Home">
        {" "}
        <PageImage
          imageUrl="/img/MainImage.png"
          image="MainImage"
          style={" text-[25px] lg:text-[56px]  font-extrabold "}
          bgHeight={"lg:h-screen md:h-[550px] h-[600px] "}
        />
      </div>

      <FirstSection />
      <div id="Siamo">
        {" "}
        <SecondSection />
      </div>

      <SecondSection2 />


      <div id="Servizi" >
        {" "}
        <ThirdSection/>
      </div>
      <div id="Contatti" >
        {" "}
        <FourthSection/>
      </div>
    </div>
  );
}
