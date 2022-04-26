import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br /> I am Syed Adeeb.
      </SectionTitle>
      <SectionText>
        I will design your dreams by creating awesome websites for your requirements at economial conditions.
      </SectionText>
      <Button onClick={ () => window.location = 'https://github.com/SyedAdeebWebDesigning/SyedAdeebWebDesigning/blob/main/README.md' }>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;