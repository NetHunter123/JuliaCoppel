import React from 'react';
import Button from "@/components/Button";
import {Image} from "@mantine/core";
import useMediaQueries from "@/utils/useMediaQueries";

const About = () => {
  const md = useMediaQueries("md")
  const lg = useMediaQueries("lg")
  return (
    <>
      <div className="container relative ">
        <a id={"about_me"} className="anchor"/>
        <div className={"flex w-full relative max-md:flex-col justify-between items-center py-[60px] max-md:py-[30px] z-10"}>
          <div className="photo mr-[20px] max-md:mr-0 max-md:mb-[20px]">
            <Image width={lg?360:md?300:300} withPlaceholder src='./aboutPhoto.png' alt="Main Photo"/>
          </div>

          <div className="info max-w-[450px] max-md:text-center">

            <p className={"infoText whitespace-pre-wrap max-w-[431px]"}></p>
            <p className={"text-s18 font-[400] mb-[27px]"}>Юлия Коппель - настоящая потомственная ведьма и самый сильный
              маг нашего времени. Юлия Коппель принадлежит к
              древнейшему жанру "Atsinganos", что означает "маги или предсказатели", она начала заниматься магией, когда
              была еще маленькой девочкой.</p>
            <p className={"text-s18 font-[400] mb-[27px]"}>Все свои магические ритуалы, заклинания и колдовство Юлия
              выполняет по всем правилам жанра, что бывает крайне
              редко.</p>
            <p className={"text-s18 font-[400] "}>У вас будет возможность увидеть ритуал и принять в нем участие. Если
              Юлия взялась за дело, она обязательно
              доведет его до конца, несмотря на усилия, которые ей придется приложить.</p>
          </div>


        </div>
        <div className="absolute max-md:-right-[400px] -right-[500px] bottom-[10px] animate-[spin_40s_linear_infinite] z-[0]">
          <Image height={660} width={660} withPlaceholder src='./animateCircle.png' alt="animation"/>
        </div>
      </div>
    </>
  );
};

export default About;
