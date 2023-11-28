import React, { useEffect, useState } from 'react'

const Button = ({children, onClick}) => {

  return (
    <div onClick={onClick} 
         className={`py-1 px-2 rounded-lg cursor-pointer hover:bg-lightgray transition-all duration-200`}>
        <p className='text-text font-medium'>{children}</p>
      {/* <label><input type='radio' className='hidden button'/>{children}</label> */}
    </div>
  )
}

export default Button
