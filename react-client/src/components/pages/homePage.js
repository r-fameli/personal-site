import React, { useState } from 'react';
import AboutSection from '../homePage/pageSections/about';
import ExperienceSection from '../homePage/pageSections/experience';
import ProjectsSection from '../homePage/pageSections/projects';
import SkillsSection from '../homePage/pageSections/skills';
import SectionContainer from '../homePage/sectionContainer';
import SectionTabs from '../homePage/sectionTabs';

function HomePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <SectionTabs/>
      <SectionContainer/>
    </div>
  );
}

export default HomePage;
