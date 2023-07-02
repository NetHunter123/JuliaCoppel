import {useRef} from "react";
import Autoplay from 'embla-carousel-autoplay';
import {Carousel} from '@mantine/carousel';
import {rem} from "@mantine/core";

export default function ReviewsCarousel() {
  const autoplay = useRef(Autoplay({delay: 20}));

  const data = [
    {text: 1},
    {text: 2},
    {text: 3},
    {text: 4},
    {text: 5},
  ]
  return (
    <Carousel
      withIndicators={true}
      slideSize="70%"
      height={200}
      slideGap="md"
      controlsOffset="xs"
      controlSize={28}
      loop
      // breakpoints={[
      //   { maxWidth: 'md', slideSize: '50%' },
      //   { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      // ]}
      // nextControlIcon={<IconArrowRight size={16} />}
      // previousControlIcon={<IconArrowLeft size={16} />}
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      styles={{
        root: {},

        indicators: {
          bottom: "-20px"
          // color: "white",
          // backgroundColor: "white",
        },
        indicator: {
          color: "white",
          backgroundColor: "#C98D4E !important",

          width: rem(12),
          height: rem(4),
          transition: 'width 250ms ease',

          '&[data-active]': {
            width: rem(40),
          },

        },
        controls: {
          left:"-50px",
          right:"-50px",
        },
        control: {
          backgroundColor: "#C98D4E !important",
          border: "0",
          '&[data-inactive]': {
            opacity: 0,
            cursor: 'default',
          },
        }

      }}
    >
      {data.map((item) => <>
          <Carousel.Slide>
            <div className="bg-[#220] w-full h-[200px]">
              {item.text}
            </div>
          </Carousel.Slide>

        </>
      )}
    </Carousel>
  );
}
