import React, {useEffect, useState} from 'react'
import Image from './Image'
import axios from 'axios'


const Card = ({breed, amount, className}) => {
    const [images, setImages] = useState([])

    const getImages = async () => {
        const list = []
        try {
            await axios.get(`https://dog.ceo/api/breed/${breed.replace(' ', '/')}/images`).then(response => response.data.message)
            .then(response => (amount ? response.slice(0, amount) : response).forEach(result => list.push(result)))
        } catch (err) {
            console.log(err.message)
        }
        setImages(list)
    }

    useEffect(() => {
        getImages()
      },[])
  return (
    <div className={`${breed} bg-[#111517] my-6 p-5 flex flex-col gap-5 rounded-xl sm:max-w-[540px] md:max-w-[600px] lg:max-w-[1050px]`}>
        <h3 className='tracking-wider capitalize font-DynaPuff font-bold text-lg md:text-2xl text-left'>{breed}</h3>
        <div className='flex flex-row flex-wrap gap-6 w-full'>
            {
                images.map((image, index) => {
                    return(
                        <Image key={index} url={image} className={className} />
                    )
                })
            }
        </div>
    </div>
  )
}

export default Card