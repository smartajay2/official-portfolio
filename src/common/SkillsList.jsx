import React from 'react'

function SkillsList({ src, p }) {
  return (
    <span className='center inline-flex items-baseline text-center ' >
      <img className='w-5 h-5' src={src} alt="Checkmark icon" />
      <p className='pr-6 mt-6 align-text-top no-underline'>{p}</p>
    </span>
  )
}

export default SkillsList