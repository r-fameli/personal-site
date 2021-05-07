import React, { Component } from 'react';
import AboutSection from '../homePage/pageSections/about';
import ExperienceSection from '../homePage/pageSections/experience';
import ProjectsSection from '../homePage/pageSections/projects';
import SkillsSection from '../homePage/pageSections/skills';

class SectionTabs extends Component {
    render() {
        let sections = ["About", "Experience", "", "Projects", "Skills"]
        return (
            <div className={"section-tabs"}>
                {/* {sections.map(section =>
                    <span className={"section-tab"}>
                        <text>
                            {section}
                        </text>
                    </span>)} */}


                <span className={"section-tab small-section-tab"}>
                    <text>
                        About
                    </text>
                </span>
                <span className={"section-tab small-section-tab"}>
                    <text>
                        Experience
                    </text>
                </span>
                <span className={"section-tab large-center-tab"}>
                    <text>
                        me
                    </text>
                </span>
                <span className={"section-tab small-section-tab"}>
                    <text>
                        Projects
                    </text>
                </span>
                <span className={"section-tab small-section-tab"}>
                    <text>
                        Skills
                    </text>
                </span>
            </div>
        )
    }
}
export default SectionTabs;