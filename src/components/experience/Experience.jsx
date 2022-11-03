import React from 'react'
import './experience.css'
import ExperienceItems from './ExperienceItems'


const Experience = () => {
  return (
    <section id='experience'>
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-container">
        <div className="experience-frontend">
          <h3>Frontend Development</h3>
          <div className="experience-content">
            <ExperienceItems item={"HTML"} experience={"Experienced"}/>
            <ExperienceItems item={"CSS"} experience={"Experienced"}/>
            <ExperienceItems item={"JavaScript"} experience={"Intermediate"}/>
            <ExperienceItems item={"Bootstrap"} experience={"Experienced"}/>
            <ExperienceItems item={"SCSS"} experience={"Experienced"}/>
            <ExperienceItems item={"React"} experience={"Novice"}/>
          </div>
        </div>
        <div className="experience-backend">
        <h3>Backend Development</h3>
          <div className="experience-content">
            <ExperienceItems item={"PHP"} experience={"Experienced"}/>
            <ExperienceItems item={"Laravel"} experience={"Experienced"}/>
            <ExperienceItems item={"C# / ASP.NET Core"} experience={"Novice"}/>
            <ExperienceItems item={"SQL / MySQL"} experience={"Experienced"}/>
            <ExperienceItems item={"Git"} experience={"Experienced"}/>
            <ExperienceItems item={"AWS"} experience={"Intermediate"}/>
        </div>
      </div>
    </div>
    </section>
  )
}

export default Experience
