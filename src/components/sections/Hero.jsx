import React from 'react';
import Button from "@/components/Button";
import {Image} from "@mantine/core";

const Hero = () => {
  return (<>
      <div className="container">
        <div className={"flex w-full justify-between items-center md:py-[30px] lg:py-[60px]"}>

          <div className="info mr-[30px]">
            <h1 className={"text-primary text-[40px] lg:text-s64 font-[300] mb-[10px]"}>Джулия Коппель</h1>
            <p className={"infoText text-[18px] lg:text-s22 mb-[25px]"}>Родовая ведьма черной магии</p>
            <p className={"infoText text-[16px] lg:text-[18px] whitespace-pre-wrap max-w-[431px]"}>Преодолевать трудности с помощью моих
              нестандартных навыков решения проблем.</p>
            <p className={"infoText text-[16px] lg:text-[18px] font-bold md:mb-[20px] lg:mb-[40px]"}>Запишитесь на консультацию!</p>
            <div className="info__btn flex  gap-[20px] lg:gap-[40px] mb-[60px]">
              <Button className={"p-[60px]"} text={"Связаться со мной"} link={"contacts"} place={"hero"}/>
              <Button text={"Услуги"} link={"Services"} variant={"outline"} place={"hero"}/>
            </div>
          </div>

          <div className="photo">
            <Image height={494} width={384} withPlaceholder src='./firstPhoto.jpg' alt="Main Photo"/>
          </div>

        </div>
      </div>
    </>
  );
};

export default Hero;
