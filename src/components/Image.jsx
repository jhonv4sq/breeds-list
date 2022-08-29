import React from 'react'


const Image = ({url, className}) => {
  return (
    <div className={`h-[6.31rem] w-[6.31rem] md:h-[10rem] md:w-[10rem] lg:h-[20rem] lg:w-[20rem] overflow-hidden rounded ${className}`}>
        <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${url.replace(' ', '%20')})` }}></div>
    </div>
  )
}

export default Image