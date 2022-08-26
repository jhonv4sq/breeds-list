import React from 'react'

const Image = ({url, event}) => {
  return (
    <button onClick={(e) => {event && event(url) }} className='h-[5.8rem] w-[5.8rem] md:h-[10rem] md:w-[10rem] lg:h-[20rem] lg:w-[20rem] overflow-hidden rounded image cursor-pointer'>
        <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${url})` }}></div>
    </button>
  )
}

export default Image