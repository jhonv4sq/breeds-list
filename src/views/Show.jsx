import React from 'react'
import { useParams, Outlet } from 'react-router-dom';


const Show = () => {
  const {breed} = useParams()
  return (
    <div className='min-h-screen w-full flex justify-center items-center pt-32 px-6 text-[#46f8bf]'>
      <Outlet />
      {breed}
    </div>

  )
}

export default Show