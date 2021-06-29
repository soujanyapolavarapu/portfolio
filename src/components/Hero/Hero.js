import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am Soujanya <br/>
        I`m a Full-Stack Web Developer

      </SectionTitle>
      <SectionText>
      Motivated Computer Science graduate with passion towards web technologies.
      Open-minded and always thriving to learn new technologies. I am a strong team player and experienced working with people across multiple geographies.
      Have excellent interpersonal, communication skills, work ethics shown in academic projects. Seeking to use proven skills in frontend technologies and to meet business plans.
      </SectionText>
      <Button onClick={()=> window.location = 'https://www.linkedin.com/in/soujanya-polavarapu-816785110/'}>More about me </Button>
    </LeftSection>

  </Section>
);

export default Hero;