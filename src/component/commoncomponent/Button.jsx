import React from 'react'

const Button = ({btnContent,btnDesign}) => {
  return (
    <button className={btnDesign} btn>
      {btnContent}
    </button>
  )
}

export default Button
