import React from 'react';
import Link from "next/link";

const Nav = ({row = true,}) => {

  const links = [
    {title: "Про меня", path: "#about_me"},
    {title: "Услуги", path: "#services"},
    {title: "Отзывы", path: "#reviews"},
    {title: "Контакты", path: "#contacts"},
  ]
  return (
    // <div className={"absolute left-0 right-0"}>
    //   <nav className={"mx-auto w-fit"}>
      <nav className={"w-fit "}>
        {links.map((link) =>
          <a className={"inline-block h-[50px] leading-[50px] px-[26px]"} key={link.path}
             href={link.path}>{link.title}</a>)}
      </nav>
  );
};

export default Nav;
