import React, {useEffect, useState} from 'react'
import Image from './Image'
import axios from 'axios'

const Card = ({breed, url, event}) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        try {
            await axios.get(`https://dog.ceo/api/breed/${url}/images`).then(response => response.data.message)
            .then(response => setImages(response.slice(0,3)))

        } catch (err) {
            console.log(err.message)
        }
    }
    useEffect(() => {
        getImages()
      }, [])
  return (
    <div id={breed} className={`${breed} bg-[#111517] my-6 p-5 flex flex-col gap-5 rounded-xl`}>
        <h3 className='text-[#46f8bf] tracking-wider capitalize font-DynaPuff font-bold text-lg md:text-2xl text-left'>{breed}</h3>
        <div className='flex flex-row gap-6 w-full'>
            {
                images.map((image, index) => {
                    return(
                        <Image key={index} url={image} event={event} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Card