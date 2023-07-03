import React from 'react';
import {Image, Button, rem} from "@mantine/core";
import {IconBrandInstagram, IconBrandTelegram, IconBrandWhatsapp, IconBrandFacebook} from '@tabler/icons-react';
import ContactButton from "@/components/ContactButton";


const ContactUs = () => {
  const cantacts = [{
    text: "Instagram", link: "#",
    icon: <IconBrandInstagram strokeWidth={1.7} size={rem(40)}/>
  },
    {
      text: "Facebook", link: "#",
      icon: <IconBrandFacebook strokeWidth={1.7} size={rem(40)}/>
    },
    {
      text: "Whatsapp", link: "#",
      icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)}/>
    },
    {
      text: "Telegram", link: "#",
      icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)}/>
    }
  ]
  return (
    <>
      <div className="container relative">
        <a id={"contacts"} className="anchor"/>
        <div className={"flex w-full relative justify-between items-center py-[60px] z-10"}>
          <div className="photo">
            <Image height={500} width={360} withPlaceholder src='./contactUs.png' alt="Main Photo"/>
          </div>

          <div className="info max-w-[450px]">
            <div className="text-left mb-[35px]">
              <h3 className="title relative z-10 text-left">Contacts</h3>
              <p className="sub-title relative z-20 text-left mb-0">Tired of looking for a way out of the vicious
                circle?
              </p>
              <p className={"infoText font-bold"}>Пишите Юлии, она поможет!</p>
            </div>
            <div className="btns ">
              {cantacts.map((btn) => {
                return <div className={"inline-block mb-[30px]"}  key={btn.text}>
                  <ContactButton text={btn.text} link={btn.link} icon={btn.icon}/>
                  </div>
              })}

            </div>
          </div>

        </div>
      </div>
    </>
  )
    ;
};

export default ContactUs;
