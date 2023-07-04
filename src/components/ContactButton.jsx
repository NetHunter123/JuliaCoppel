import React from 'react';
import {Image, Button, rem} from "@mantine/core";
import {IconBrandInstagram} from '@tabler/icons-react';
import {Montserrat} from "next/font/google";

const montserrat = Montserrat({subsets: ['cyrillic']})

const ContactButton = ({text, link, icon, mini = false}) => {
  return (<Button
    component="a"
    target="_blank"
    rel="noopener noreferrer"
    href={`${link}`}
    leftIcon={icon}
    styles={(theme) => ({

      root: {
        backgroundColor: `${mini ? '#ffffff !important' : '#C98D4E !important'}`, border: 0, color: "#000",

        height: rem(mini ? 35 : 49),
        width: rem(mini ? 35 : 240),
        padding: `${mini ? "0px" : "0 12px 0 18px"}`,
        borderRadius: `${mini ? "50%" : "4px"}`,
        marginRight: `${mini ? "10px" : "0px"}`,
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
        // fontSize: "30px", marginRight: theme.spacing.xl,
        margin: "0 auto"
      },
    })}
  >
    {mini ? "" : text}    </Button>);
};

export default ContactButton;
