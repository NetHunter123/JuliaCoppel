import React from 'react';
import Link from "next/link";

const Nav = ({row = true, close=()=>{}}) => {

  const links = [
    {title: "Кто я", path: "#about_me"},
    {title: "Услуги", path: "#services"},
    {title: "Отзывы", path: "#reviews"},
    {title: "Контакты", path: "#contacts"},
  ]
  return (
    <nav className={`w-fit ${row ? "" : "flex flex-col"}`}>
      {links.map((link) =>
        <a
          className={`${row ? "" : "text-primary text-[20px]"} inline-block h-[50px] leading-[50px] md:px-[18px] lg:px-[23px] xl:px-[26px]`}
          key={link.path}
          onClick={close}
          href={link.path}>{link.title}</a>)}
    </nav>
  );
};

export default Nav;
