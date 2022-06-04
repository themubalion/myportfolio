import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 40, text: 'Completed Projects' },
  { number: 15, text: 'Big Projects', },
  { number: 190, text: 'Work Stars', },
  { number: 100, text: 'Reviews', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Accomplishments</SectionTitle>
    <Boxes>
      { data.map((card, index) => (
        <Box key={ index }>
          <BoxNum>{ card.number }+</BoxNum>
          <BoxText>{ card.text }</BoxText>
        </Box>
      )) }
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
