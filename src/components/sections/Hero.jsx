import React from 'react';
import Button from "@/components/Button";
import {Image} from "@mantine/core";
import {useMediaQuery} from "@mantine/hooks";
import useMediaQueries from "@/utils/useMediaQueries";
import Zoom from 'react-medium-image-zoom'

const Hero = () => {
  const md = useMediaQueries("md")
  const lg = useMediaQueries("lg")
  console.log("md:", md)
  return (<>
      <div className="container ">
        <div className={"flex w-full justify-center md:justify-between items-center md:py-[30px] lg:py-[60px]"}>

          <div className="info max-[768px]:flex max-[768px]:flex-col max-[768px]:items-center mr-0 md:mr-[30px]">
            <h1 className={"text-primary text-[40px] lg:text-s64 font-[300] mb-[10px] max-sm:text-[38px]"}>Анна
              Астахова</h1>
            {/*<p className={"infoText text-[18px] lg:text-s22 mb-[25px]"}>Родовая ведьма черной магии</p>*/}
            <p className={"infoText text-[18px] lg:text-s22 mb-[25px] max-md:text-center"}>Здравствуйте это твое приложение которое поможет тебе найти решение или помощь в твоей ситуации</p>
            <div className="photo mb-[20px] md:hidden">
              <Image width={lg ? 384 : md ? 314 : 300} fit={"contain"} withPlaceholder src='./firstPhoto.jpg'
                     alt="Main Photo"/>
            </div>
            <p className={"infoText max-[768px]:text-center text-[16px] lg:text-[18px] whitespace-pre-wrap w-full"}>Для обсуждения проблемы свяжитесь с одним из Медиумом</p>
            <p
              className={"infoText max-[768px]:mb-5 text-[16px] lg:text-[18px] font-bold md:mb-[20px] lg:mb-[40px]"}>Запишитесь
              на консультацию!</p>
            <div className="info__btn flex  gap-[20px] lg:gap-[40px] max-md:mb-0 mb-[60px]">
              <Button text={"Медиумы"} link={"services"} place={"hero"} variant={"outline"}/>
              <Button text={"Связаться со мной"} link={"contacts"}  place={"hero"}/>
            </div>
          </div>

          <div className="photo hidden md:block">
            <Image width={lg ? 384 : md ? 314 : 300} fit={"contain"} withPlaceholder src='./firstPhoto.jpg'
                   alt="Main Photo"/>

          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
