import Image from 'next/image'
import {Montserrat} from 'next/font/google'
import Header from "../components/Header";
import SideMenu from "@/components/SideMenu";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

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
        >
          <Hero/>
          <About/>
        </main>
        <div className="h-[100vh]"></div>
        <div className="h-[100vh]"></div>
      </div>
    </>
  )
}
