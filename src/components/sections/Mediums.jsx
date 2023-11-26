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
      value: "jully",
      name: "Julia Copel",
      avatar: "./firstPhoto.jpg",
      chats: [
        {
          text: "Instagram",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandInstagram strokeWidth={1.7} size={rem(40)} />,
        },
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
      desc: "",
    },
    {
      value: "anna",
      name: "Anna Astahowa",
      avatar: "./firstPhoto.jpg",
      chats: [
        {
          text: "Instagram",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandInstagram strokeWidth={1.7} size={rem(40)} />,
        },
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
      desc: "",
    },
    {
      value: "tania",
      name: "Tatiana Volkova",
      avatar: "./firstPhoto.jpg",
      chats: [
        {
          text: "Instagram",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandInstagram strokeWidth={1.7} size={rem(40)} />,
        },
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
      desc: "",
    },
    {
      value: "olia",
      name: "Elena Vasilieva",
      avatar: "./firstPhoto.jpg",
      chats: [
        {
          text: "Instagram",
          link: "https://www.instagram.com/anna_astachowa/",
          icon: <IconBrandInstagram strokeWidth={1.7} size={rem(40)} />,
        },
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
      desc: "",
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
