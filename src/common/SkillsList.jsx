import React from 'react'

function SkillsList({ src, p }) {
  return (
    <span className='flex items-center space-x-3 p-2 rounded-md'>
      <img 
        className='w-6 h-6' 
        src={src} 
        alt="Checkmark icon" 
      />
      
      {/* *** CHANGE IS HERE *** Default color is text-gray-800 (for light mode).
        In dark mode, it switches to dark:text-gray-200 (or dark:text-white).
      */}
      <p className='text-gray-800 dark:text-gray-200 font-semibold text-sm'>
        {p}
      </p>
    </span>
  )
}

export default SkillsList
