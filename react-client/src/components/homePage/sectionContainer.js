import React, { Component } from 'react';
import AboutSection from '../homePage/pageSections/about';
import ExperienceSection from '../homePage/pageSections/experience';
import ProjectsSection from '../homePage/pageSections/projects';
import SkillsSection from '../homePage/pageSections/skills';

class SectionContainer extends Component {
    render() {
        return (
            <div className={"section-container"}>
                <AboutSection />
                <ProjectsSection />
                <ExperienceSection />
                <SkillsSection />
            </div>
        )
    }
}
export default SectionContainer;