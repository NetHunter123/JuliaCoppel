import React from 'react';
import AccordionServices from "@/components/AccordionServices";

const Services = () => {
  return (
    <div className={"container"}>
      <a id={"services"} className="anchor"/>
      <div className="z-10 py-[40px]">
        <h3 className="title">Services</h3>
        <p className="sub-title">The official website of Julia Koppel invites you to familiarize yourself with the
          services provided:</p>
        <div className="max-w-[760px] mx-auto">
          <AccordionServices/>
        </div>
      </div>
    </div>
  );
};

export default Services;
