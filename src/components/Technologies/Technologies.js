import React from 'react';
import { DiReact, DiPhotoshop } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <br/>
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>I have worked with various technologies in the web designing world. From figma to design.</SectionText>
    <List>
      <ListItem>
        <DiReact size = "3rem"/>
        <ListContainer>
          <ListTitle>
            Front-End
          </ListTitle>
          <ListParagraph>
            Experienced with <br/> React / NEXT
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiPhotoshop size = "3rem"/>
        <ListContainer>
          <ListTitle>
            Graphic Designing
          </ListTitle>
          <ListParagraph>
            Experienced with <br/> Photoshop
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <FiFigma size = "2.8rem"/>
        <ListContainer>
          <ListTitle>
            UI/UX
          </ListTitle>
          <ListParagraph>
            Experienced with <br/> Figma
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
