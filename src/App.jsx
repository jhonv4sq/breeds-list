import React, {useEffect, useState} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './css/App.css';

import Home from './views/Home'
import Show from './views/Show'
import Picture from './views/Picture'
import Error from './views/Error'

import Search from './components/Search'
import Button from './components/Button'
import { NavLink } from './components/NavLink'


import swal from 'sweetalert';
import axios from 'axios'


function App() {
  const [breeds, setBreeds] = useState([])
  const [listBreeds, setListBreeds] = useState([])

  const getAllBreeds = async () => {

    const list = []

    try{
      await axios.get('https://dog.ceo/api/breeds/list/all').then(response => response.data.message)
      .then((response) => {Object.keys(response).forEach(result => {
        !response[result].length ? list.push(result) :
        response[result].filter((element) => list.push(result +' '+element))
      })})

      setBreeds(list)
      setListBreeds(list)

    }catch(err){
      console.log(err.message)
    }
  }


  const searchBreed = (breed) => {

    if(!breed){
      swal({
        text: 'the field is empty',
        icon: 'warning',
      })
    }
    if(breed){
      const search = breeds.filter((element) => element.toString().toLowerCase().includes(breed) && element)
      setListBreeds(search)
      
    }
  }


  const organizeBreeds = () => {
    const organize = listBreeds.map(breed => {return breed})
    setListBreeds(organize.reverse())
    swal({
      text: 'breeds dog reorganized successfully',
      icon: 'success',
    })
  }


  useEffect(() => {
    getAllBreeds()
  }, [])
  return (
    <div className='bg-[#1b2a2f] min-h-screen w-full'>
      <Router>
        <header className='w-full flex justify-center bg-[#111517] border-b border-[#46f8bf] fixed top-0 z-20'>
          <nav className='w-full px-[15px] mx-auto sm:max-w-[540px] md:max-w-[600px] lg:max-w-[1066px] flex justify-between font-DynaPuff p-4 '>

            <ul className='transition ease-in duration-200 flex justify-center items-center text-[20px] lg:text-4xl'>
              <li>
               <NavLink className='hover:text-[#34ba90]' to='/breeds-list/' onClick={(e) => setListBreeds(breeds)}>
                Home
               </NavLink>
              </li>
            </ul>

            <div className='flex gap-3 flex-row'>
              <Search event={searchBreed} />
              <Button event={organizeBreeds} className={`hover:bg-[#34ba90] bg-[#44f2bb] w-28 lg:w-64`}>
                reorder alphabetically
              </Button>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path='/breeds-list/' element={<Home listBreeds={listBreeds} />} />
          <Route path='/breeds-list/:breed' element={<Show />} >
            <Route path=':picture' element={<Picture />}/>
          </Route>
          <Route path='*' element={<Error />} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
