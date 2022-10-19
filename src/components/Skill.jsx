import React from 'react'

//Array of array's
//const skill = [["HTML", 5], ["CSS", 5], ["JavaScript", 3], ["React", 0]]
const Skills = ({skill:[tech,level]}) => {
    return(
        <li>
        {tech}
        {level}
    </li>
    )
}
const Skill = (skills) => {
    const skillList = skills.map((skill) => <Skills skill={skill} />)
  return (
    <>
    <ul>{skillList}</ul>
    </>
  )
}


export default Skill