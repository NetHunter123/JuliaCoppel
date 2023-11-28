import React from "react";
import AccordionMediums from "@/components/AccordionMediums";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Image, Button, rem } from "@mantine/core";

const Services = () => {
  const mediums = [
    {
      value: "lina",
      name: "Лина Джебисашвили",
      avatar: "./Lina_Gebisashvili.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/astachowa_anna",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "Лина Джебисашвили - потомвстенный экстрасенс с грузинскими корнями который родился в Крыму, специалстка по любовной магии, любовным приворотам и ритуалам. Если вы чустуете что вам нужно любой совет или помошь в отношениях то лучшее решение обратится к ней.",
    },
    {
      value: "sheps",
      name: "Олег Шепс",
      avatar: "./Oleh_Sheps.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/astachowa_anna",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "Олег Шепс - младший брат Александра Шеспа. Екстрасенс который является специалистом по самым темным вопросам поможет так же и в белой магии. Владеет даром готорить с мертвыми которые помагают решить любой вопрос.",
    },
    {
      value: "grezati",
      name: "Константин Гецати",
      avatar: "./Konstantin_Grezati.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/astachowa_anna",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "Константин Гецати - потомок аланского мага. использует для своих ритуалов редние травы, молитвы. Владеет как черной так и белой магией. Поможет убрать или поставить самую сильную магию. Если вы чуствуете что-то неладное он с помощю мира духов решит вопрос.",
    },
    {
      value: "raidos",
      name: "Виктория Райдос",
      avatar: "./Vika_Raidos.jpg",
      chats: [
        {
          text: "WhatsApp",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandWhatsapp strokeWidth={1.7} size={rem(40)} />,
        },
        {
          text: "Telegram",
          link: "https://t.me/astachowa_anna",
          icon: <IconBrandTelegram strokeWidth={1.7} size={rem(40)} />,
        },
      ],
      desc: "Виктория Райдос - экстрасенс из Ленинграда, которая является специалистом по решению нестандартрых вопросов и проблем, у нее нету ритуала который бы не решил вашу проблему.",
    },
  ];
  return (
    <div className={"container"}>
      <a id={"mediums"} className="anchor" />
      <div className="z-10 py-[40px]">
        <h3 className="title">Выбери своего Медиума</h3>
        {/* <p className="sub-title">Здесь можно ознакомиться с предоставляемыми услугами <span
          className={"whitespace-nowrap"}>от Анны Астаховой:</span></p> */}
        <div className="max-w-[760px] mx-auto">
          <AccordionMediums mediums={mediums} />
        </div>
      </div>
    </div>
  );
};

export default Services;
