import React from 'react'

const HighLight = (props) => {
  return (
      <span className='unsel border-x-2 px-1 bg-[#7c4ada50] font-medium border-purp'>{props.text}</span>
  )
}

export default HighLight