import React from 'react'

const Heading = ({className,firstText,secondText}) => {
  return (
    <div>
      <h2 className={className}>{firstText}<span className='textUnderline ml-2.5 cursor-pointer'>{secondText}</span></h2>
    </div>
  )
}

export default Heading
