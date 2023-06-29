import React from 'react';
import Button from "@/components/Button";
import {Image} from "@mantine/core";

const About = () => {
  return (
    <>
      <div className="container relative ">
        <div id={"about_me"} className={"flex w-full relative justify-between items-center py-[60px] z-10"}>
          <div className="photo">
            <Image height={534} width={360} withPlaceholder src='./aboutPhoto.png' alt="Main Photo"/>
          </div>

          <div className="info max-w-[450px]">

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
        <div className="absolute -right-[500px] top-[40px] animate-[spin_40s_linear_infinite] -z-1">
          <Image height={660} width={660} withPlaceholder src='./animateCircle.png' alt="animation"/>
        </div>
      </div>
    </>
  );
};

export default About;
