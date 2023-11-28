import React from "react";
import { Image, rem } from "@mantine/core";
import {
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
  IconBrandFacebook,
} from "@tabler/icons-react";
import ContactButton from "@/components/ContactButton";
import useMediaQueries from "@/utils/useMediaQueries";
import Button from "@/components/Button";

const Payment = ({}) => {
  const md = useMediaQueries("md");
  const lg = useMediaQueries("lg");

  return (
    <>
      <div className="container relative">
        <a id={"payment"} className="anchor" />
        <div
          className={
            "flex w-full relative justify-center max-md:flex-col md:justify-between items-center py-[60px]  z-10"
          }
        >
          {/* <div className="photo mr-[30px] max-md:mr-0 max-md:order-1">
            <Image
              width={lg ? 360 : md ? 314 : 300}
              withPlaceholder
              src="./contactUs.png"
              alt="Main Photo"
            />
          </div> */}

          <div
            className={`info max-w-[450px] max-w-[500px] max-md:flex max-md:flex-col max-md:items-center mx-auto max-md:mb-[25px]`}
          >
            <div className="text-left max-md:text-center max-lg:mb-[15px] mb-[35px]">
              <h3 className="title relative z-10 text-left max-md:mb-[20px] text-center font-[400]">
                Как оплатить наши услуги
              </h3>
              <p className="sub-title relative z-20 text-left mb-0 text-center mb-[10px]">
                Оплатить наши услуги можно любым удобным для вас способом, для
                етого нажмите на кнопку оплаты ниже
              </p>
              {/* <p className={"infoText font-bold text-center"}>
                Чтобы связаться с нами, отправьте нам сообщение любым удобным
                для Вас способом.
              </p> */}
              {/*<p className={"infoText font-bold text-center"}>Контакты для связи со мной:</p>*/}
            </div>
            <div className="btns flex flex-wrap gap-[10px] justify-center">
              {/* <Button text={"Оплата"} link={"payment"} place={"hero"} /> */}
              <a
                className={`block text-center  bg-primary text-textBlack h-btn text-[22px] min-w-[260px] w-[100%]  px-[10px] rounded-md leading-btn font-medium`}
                href={`#`}
              >
                {"Оплата"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;