import React from 'react';
import {Image, Button, rem} from "@mantine/core";
import {IconBrandInstagram} from '@tabler/icons-react';
import {Montserrat} from "next/font/google";
const montserrat = Montserrat({subsets: ['cyrillic']})

const ContactButton = ({text, link, icon}) => {
  return (<Button
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    href={`${link}`}
    leftIcon={icon}
    styles={(theme) => ({

      root: {
        backgroundColor: '#C98D4E !important', border: 0, color: "#000",

        height: rem(49), width: rem(240),

        // paddingLeft: rem(20),
        // paddingRight: rem(20),
        '&:not([data-disabled])': theme.fn.hover({
          backgroundColor: theme.fn.darken('#C98D4E', 0.05),
        }),
      }, inner: {
        fontSize: "20px", fontWeight: "400", textTransform: "uppercase", fontFamily: {montserrat},
        justifyContent: "start"
      },

      leftIcon: {
        fontSize: "30px", marginRight: theme.spacing.xl,
      },
    })}
  >
    {text}    </Button>);
};

export default ContactButton;
