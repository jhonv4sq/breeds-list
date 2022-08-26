import React, {useEffect, useState} from 'react'
import Load from '../components/Load'
import Card from '../components/Card'
import Pagination from '../components/Pagination'



const Home = ({listBreeds, event}) => {
  const [page, setPage] = useState(1)
  const [splitPage, setSplitPage] = useState(6)

  const max = Math.round(listBreeds.length / splitPage);

  const next = () => {
      if(page < max){
          setPage(page + 1)
          window.scrollTo({top: 0})
      }
    }
  
  const previous = () => {
      if(page > 1){
          setPage(page - 1)
      }
  }

  useEffect(() => {
    setPage(1)
  }, [listBreeds])
  return (
    <section className='pt-32 px-6  '>
        <div className='w-full flex flex-col items-center gap-4'> 

          <h1 className='text-white font-DynaPuff uppercase font-bold text-4xl lg:text-5xl'> dog breed list </h1>

          <div className='flex flex-col'>
            {
              !listBreeds.length ? <Load /> :
              listBreeds.slice((page - 1) * splitPage,(page - 1) * splitPage + splitPage)
              .map(breed =>{
                return(
                  <div key={breed}>
                    {<Card key={breed}  breed={breed} url={breed.replace(' ', '/')} event={event} /> }
                  </div>
                )
              })
            }
          </div>
          {listBreeds.length ? <Pagination page={page} max={max} setPage={setPage} next={next} previous={previous} />: ''}
        </div>
    </section>
  )
}

export default Home

