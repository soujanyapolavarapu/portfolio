import React from 'react';
import { DiCss3, DiFirebase, DiHtml5, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range a technologies in the web development world.
        From backend to design.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size='3rem' />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size='3rem' />
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node and Database(MySQL)
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiZend size='3rem' />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>
              Experience with <br/>
              tools like Figma
            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
      <SectionDivider/>
  </Section>
);

export default Technologies;
