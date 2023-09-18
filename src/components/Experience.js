import React, { useState } from 'react';
import styled from 'styled-components';
import "./css/Experiences.css"

const ExperiencesContainer = styled.div`
  text-align: center;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  
  letter-spacing: 2px;
`;

const DescriptionContainer = styled.div`
  max-height: ${(props) => (props.showFullDescription ? 'none' : '3.6em')}; /* Show two lines of text (1.8em per line) */
  overflow: hidden;
  position: relative;
`;

const Description = styled.p`
  font-size: 18px;
  line-height: 1.4; /* Adjust line-height to show two lines of text */
  margin-bottom: 20px;
  color: #555;
  cursor: pointer;
  position: relative;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Ellipsis = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), #fff 50%);
  padding: 0 10px;
  cursor: pointer;
`;

function Experience() {
  const [showFullDescription, setShowFullDescription] = useState({});

  const toggleDescription = (section) => {
    setShowFullDescription({
      ...showFullDescription,
      [section]: !showFullDescription[section],
    });
  };

  return (
    <ExperiencesContainer>
      <Title>Experiences</Title>
      <DescriptionContainer showFullDescription={showFullDescription['overview']} className='descriptionContainer'>
        <Description onClick={() => toggleDescription('overview')}>
          Throughout my journey as a developer, I've had the opportunity to gain hands-on experience and contribute to various exciting projects.
          {showFullDescription['overview'] || <Ellipsis onClick={() => toggleDescription('overview')}>...</Ellipsis>}
        </Description>
      </DescriptionContainer>

      <h3>Hackathons</h3>
      <ul>
        <li>
          <DescriptionContainer showFullDescription={showFullDescription['hackathons']} className='descriptionContainer'>
            <Description onClick={() => toggleDescription('hackathons')}>
              Participated in hackathons at KU, KCA, and MKU, where I collaborated with talented teams to solve real-world challenges within a limited timeframe.
              {showFullDescription['hackathons'] || <Ellipsis onClick={() => toggleDescription('hackathons')}>...</Ellipsis>}
            </Description>
          </DescriptionContainer>
        </li>
      </ul>

      <h3>Internship at TalentCompass, Nrb</h3>
      <ul>
        <li>
          <DescriptionContainer showFullDescription={showFullDescription['internship']} className='descriptionContainer'>
            <Description onClick={() => toggleDescription('internship')}>
              During my internship at the TalentCompass, I had the privilege of working on projects that have a positive impact on the industry. I gained valuable insights into the field and contributed to cutting-edge initiatives.
              {showFullDescription['internship'] || <Ellipsis onClick={() => toggleDescription('internship')}>...</Ellipsis>}
            </Description>
          </DescriptionContainer>
        </li>
          </ul>
          <h3>Supervised Projects</h3>
<ul>
  <li>
    <DescriptionContainer showFullDescription={showFullDescription['supervisedProjects']} className='descriptionContainer'>
      <Description onClick={() => toggleDescription('supervisedProjects')} >
        I've had the honor of being supervised on various projects, where I received mentorship and guidance from experienced professionals, further enhancing my skills and knowledge.
        {showFullDescription['supervisedProjects'] || <Ellipsis onClick={() => toggleDescription('supervisedProjects')}>...</Ellipsis>}
      </Description>
    </DescriptionContainer>
  </li>
</ul>

<h3>Freelance Work</h3>
<ul>
  <li>
    <DescriptionContainer showFullDescription={showFullDescription['freelanceWork']} className='descriptionContainer'>
      <Description onClick={() => toggleDescription('freelanceWork')}>
        As a freelance developer, I've taken on diverse projects for clients, delivering tailored solutions that meet their specific needs. This experience has allowed me to work independently, manage projects, and build strong client relationships.
        {showFullDescription['freelanceWork'] || <Ellipsis onClick={() => toggleDescription('freelanceWork')}>...</Ellipsis>}
      </Description>
    </DescriptionContainer>
  </li>
</ul>

<h3>Personal and Fun Projects</h3>
<ul>
  <li>
    <DescriptionContainer showFullDescription={showFullDescription['funProjects']}>
      <Description onClick={() => toggleDescription('funProjects')}>
        Beyond my professional work, I'm passionate about coding, and I've undertaken personal and fun projects. These include creating web applications, mobile apps, and various creative endeavors that showcase my love for technology and innovation.
        {showFullDescription['funProjects'] || <Ellipsis onClick={() => toggleDescription('funProjects')}>...</Ellipsis>}
      </Description>
    </DescriptionContainer>
  </li>
</ul>
    </ExperiencesContainer>
  );
}

export default Experience;
