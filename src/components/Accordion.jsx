import React from 'react';
import { Accordion, rem } from '@mantine/core';

const Accordion = () => {
  return (
    <Accordion
      styles={{
        item: {
          // styles added to all items
          backgroundColor: '#fff',
          border: `${rem(1)} solid #ededed`,

          // styles added to expanded item
          '&[data-active]': {
            backgroundColor: '#ccc',
          },
        },

        chevron: {
          // styles added to chevron when it should rotate
          '&[data-rotate]': {
            transform: 'rotate(-90deg)',
          },
        },
      }}
    >
      <Accordion.Item value="customization">
        <Accordion.Control>Customization</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="flexibility">
        <Accordion.Control>Flexibility</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="focus-ring">
        <Accordion.Control>No annoying focus ring</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
  );
}
export default Accordion;
