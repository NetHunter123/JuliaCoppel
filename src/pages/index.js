import Image from 'next/image'
import {Montserrat} from 'next/font/google'
import Header from "../components/Header";
import SideMenu from "@/components/SideMenu";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import ContactUs from "@/components/sections/ContactUs";
import {IconBrandFacebook, IconBrandInstagram, IconBrandTelegram, IconBrandWhatsapp} from "@tabler/icons-react";
import {rem} from "@mantine/core";
import Hotjar from '@hotjar/browser';
import Script from 'next/script'

import {useEffect, useState} from "react";
import {gtag} from "ga-gtag";
import Head from "next/head";
// import { gtag } from 'gtag/react';


const siteId = 3802078;
const hotjarVersion = 6;

const montserrat = Montserrat({subsets: ['cyrillic']})

export default function Home() {
  Hotjar.init(siteId, hotjarVersion);

  // const [conversionHappened, setConversionHappened] = useState(false);
  //
  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  //   function gtag(){dataLayer.push(arguments);}
  //   gtag('js', new Date());
  //   gtag('config', 'AW-11451210787');
  // }, [])
  //
  // function handleClick() {
  //   setConversionHappened(true);
  //   window.location = '/thank-you';
  // }
  //
  // useEffect(() => {
  //   if(conversionHappened) {
  //     gtag_report_conversion('/thank-you');
  //   }
  // }, [conversionHappened]);

  function gtag_report_conversion(url) {
    // let callback = function () {
    //   if (typeof (url) != 'undefined') {
    //     window.location = url;
    //   }
    // };
    // // if (typeof window.gtag !== 'undefined') {
    //   gtag('event', 'conversion', {
    //     'send_to': 'AW-11451210787/awfyCLaHtIEZEKO4rtQq',
    //     'event_callback': callback
    //   });
    // // }
    // return false;
  }


  const contacts = [{
    text: "Instagram",
    link: "https://www.instagram.com/anna_astahova1shsjdbsndn?igshid=YzVkODRmOTdmMw%3D%3D&utm_source=qr",
    icon: <IconBrandInstagram strokeWidth={1.7} size={rem(40)}/>,
    miniIcon: <IconBrandInstagram strokeWidth={1.7} size={rem(30)}/>
  },
    // {
    //   text: "Facebook", link: "https://m.me/Astachowa.Anna",
    //   icon: <IconBrandFacebook strokeWidth={1.7} size={rem(40)}/>,
    //   miniIcon: <IconBrandFacebook strokeWidth={1.7} size={rem(30)}/>
    // },
    {
      text: "Whatsapp", link: "https://wa.me/77758316104",
      icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)}/>,
      miniIcon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(30)}/>
    },
    {
      text: "Telegram", link: "https://t.me/your_medium",
      icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)}/>,
      miniIcon: <IconBrandTelegram strokeWidth={1.7} size={rem(30)}/>
    }

  ]
  // useEffect(() => {
  //   window.dataLayer = window.dataLayer || [];
  // })
  return (
    <>
      <Script async src="https://www.googletagmanager.com/gtag/js?id=AW-11451210787"></Script>
      <Script id="google-analytics">{`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());
        gtag('config', 'AW-11451210787');`}
      </Script>

      <div className={`bg-bgDark text-primary min-h-screen  ${montserrat.className}`}>
        <div className="fixed top-0 left-0 right-0 bg-bgDark z-20">
          <div className="fixed right-[10px]  top-[10px] md:hidden ">
            <SideMenu contacts={contacts}/>
          </div>
          <div className="hidden md:block">
            <Header/>
          </div>
        </div>
        <div className="h-[60px] md:h-[130px] "></div>
        <main
          // className={`flex min-h-screen flex-col items-center justify-between p-24 ${montserrat.className}`}
          className={"overflow-hidden"}
        >
          <Hero pixel={gtag_report_conversion}/>
          <About/>
          <Services/>
          {/*<p className="remark py-[20px]">*Результат может варьироваться от случая к случаю</p>*/}
          <Reviews/>
          <ContactUs contacts={contacts}/>

        </main>
        {/*<div className="h-[100vh]"></div>*/}
        {/*<footer className="text-center py-2 text-[14px]">©Developed by Vittorio</footer>*/}
      </div>
    </>
  )
}
