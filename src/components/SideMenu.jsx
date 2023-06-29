import React from 'react';
import {Drawer, Button, createStyles, Burger} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";
import {theme} from "../../tailwind.config";

const SideMenu = () => {
  const [opened, {open, close}] = useDisclosure(false);
  // const useStyles = createStyles((theme) => ({
  //   wrapper: {
  //     display: 'flex',
  //   },
  //   aside:{
  //     backgroundColor:"#222222"
  //   }
  //
  // }))
  // const { classes, cx } = useStyles();
  const [burgerOpen, {toggle}] = useDisclosure(false);
  const label = burgerOpen ? 'Close navigation' : 'Open navigation';

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        position={"right"}
        size={"300px"}
        overlayProps={{opacity: 0.5, blur: 1.5}}
        padding={"10px"}
        styles={{
          header: {
            color: "white",
            backgroundColor: "#222222"
          },
          close: {
            color: "#C98D4E",
            height: "35px",
            width: "35px !important",
            '& svg': {width: 30, height: 30},
            '&:hover': {backgroundColor: "#111"}
          },
          content: {
            backgroundColor: "#222222"
          },
        }}
      >

      </Drawer>


      <Button onClick={open}
              component={'div'}
              styles={(theme) => ({
                root: {
                  "&": {
                    backgroundColor: "#0A0A0B !important",
                    borderRadius: "100px",
                    padding: "8px",
                    height: "auto"
                  },
                  '&:hover': {
                    backgroundColor: "#111 !important",
                  },
                },
                leftIcon: {
                  marginRight: 15,
                },
              })}
      >
        <Burger opened={opened} onClick={toggle} aria-label={label} color="#C98D4E"/>

      </Button>
    </>

  );
};

export default SideMenu;
