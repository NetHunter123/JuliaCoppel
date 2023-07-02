import React from 'react';
import AccordionServices from "@/components/AccordionServices";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const Services = () => {
  return (
    <div className={"container"}>
      <a id={"reviews"} className="anchor"/>
      <div className="z-10 py-[40px]">
        <div className="reviews-title_wrapper z-10">
          <h3 className="title relative z-10">Reviews</h3>
          <p className="sub-title relative z-20">The website also has reviews from her many happy customers that are
            available for
            reading.
            Julia has helped many people, already more than 300 positive reviews about her work. You will see some of
            them below.
            Finding a good fortuneteller is now completely simple, go to the "contacts" and you will see all the contact
            information.</p>
          <div className="max-w-[760px] mx-auto">
          </div>
        </div>
        <div className="reviews_carousel max-w-[800px] mx-auto relative z-10">
          <ReviewsCarousel/>
        </div>
      </div>
    </div>
  );
};

export default Services;
