import React from 'react';
import Nav from "@/components/Nav";
import Button from "@/components/Button";

const Header = () => {
  return (
    <header className={"flex flex-row justify-center flex-1 py-[40px]"}>
      {/*<div className="basis-[70%] flex pr-[20px]">*/}
      {/*  <Nav/>*/}
      {/*</div>*/}
      {/*<div className="basis-[30%]">*/}
      {/*  <Button text={"Get in touch"} link={"touch"}/>*/}
      {/*</div>*/}
      {/*<div className="relative w-full">*/}
      {/*  <div className=" inline-block relative w-fit right-0 left-0 z-1">*/}
      {/*    <Nav/>*/}
      {/*  </div>*/}
      {/*  <div className=" inline-block relative z-1 w-fit mx-auto right-0 left-0">*/}
      {/*    <Button text={"Get in touch"} link={"touch"}/>*/}
      {/*  </div>*/}
      {/*</div>*/}

        <div className="relative w-fit flex">
          <Nav/>
          <div className=" lg:absolute right-[-200px] xl:right-[-235px] ">
            <Button text={"Get in touch"} link={"touch"}/>
          </div>
        </div>
    </header>
  );
};

export default Header;
