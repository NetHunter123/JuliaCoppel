import Image from 'next/image'
import {Montserrat} from 'next/font/google'
import Header from "../components/Header";
import SideMenu from "@/components/SideMenu";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
import ContactUs from "@/components/sections/ContactUs";

const montserrat = Montserrat({subsets: ['cyrillic']})

export default function Home() {
  return (
    <>
      <div className={`bg-bgDark text-primary min-h-screen px-[15px] ${montserrat.className}`}>
        <div className="fixed top-0 left-0 right-0 bg-bgDark z-20">
          <div className="fixed right-[10px] top-[10px] ">
            <SideMenu/>
          </div>
          <Header/>
        </div>
        <div className="h-[130px]"></div>
        <main
          // className={`flex min-h-screen flex-col items-center justify-between p-24 ${montserrat.className}`}
          className={"overflow-hidden"}
        >
          <Hero/>
          <ContactUs/>
          <About/>
          <Services/>
          <p className="remark py-[20px]">*The outcome may vary from case to case</p>
          <Reviews/>

        </main>
        {/*<footer className="text-center py-2 text-[14px]">©Developed by Vittorio</footer>*/}
      </div>
    </>
  )
}
