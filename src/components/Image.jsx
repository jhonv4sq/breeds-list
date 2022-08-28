import React from 'react'


const Image = ({url, className}) => {
  return (
    <div className={`h-[4.98rem] w-[4.98rem] md:h-[10rem] md:w-[10rem] lg:h-[20rem] lg:w-[20rem] overflow-hidden rounded ${className}`}>
        <div className='w-full h-full bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${url.replace(' ', '%20')})` }}></div>
    </div>
  )
}

export default Image