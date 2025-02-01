import React from 'react'

const Button = ({btnContent,btnDesign}) => {
  return (
    <button className={btnDesign}>
      {btnContent}
    </button>
  )
}

export default Button
