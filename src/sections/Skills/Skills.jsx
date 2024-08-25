import React from 'react'
import Checkmarklight from '../../assets/checkmark-light.svg'
import Checkmarkblack from '../../assets/checkmark-dark.svg'
import SkillsList from '../../common/SkillsList'
import { useTheme } from '../../common/TemeContext'


function Skills() {

  const { theme } = useTheme();
  const Checkmark = theme === 'light' ? Checkmarklight : Checkmarkblack;

  return (
    <section id="skills" className="flex flex-col text-center mt-20 mx-auto " style={{ rowGap: '20px', maxWidth: '26ch' }}>
    <h1 className="text-3xl font-bold">Skills</h1>
  
    <div className="flex flex-col lg:flex-row justify-center gap-6 lg:gap-1 w-full lg:p-2 lg:ml-2 lg:mr-2 lg:w-auto">     
       <div className="text-xs p-2">
        <SkillsList src={Checkmark} alt="Checkmark icon" p="HTML" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="CSS" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="JavaScript" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="Node.js" />
      </div>
      <hr className="w-40 bg-white m-auto" />
      
      <div className="text-xs">
        <SkillsList src={Checkmark} alt="Checkmark icon" p="React" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="Tailwind CSS" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="MongoDB" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="Express.js" />
      </div>
      <hr className="w-40 bg-white m-auto" />
      
      <div className="text-xs">
        <SkillsList src={Checkmark} alt="Checkmark icon" p="Redux" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="Webpack" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="Git" />
        <SkillsList src={Checkmark} alt="Checkmark icon" p="VS Code" />

      </div>
    </div>
  </section>
  
  
  )
}

export default Skills
