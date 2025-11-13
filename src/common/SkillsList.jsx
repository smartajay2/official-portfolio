import React from 'react'

function SkillsList({ src, p }) {
  return (
    <span className='flex items-center space-x-3 p-2 rounded-md'>
      <img 
        className='w-6 h-6' 
        src={src} 
        alt="Checkmark icon" 
      />
      <p className='text-gray-800 font-semibold text-sm'>
        {p}
      </p>
    </span>
  )
}

export default SkillsList
