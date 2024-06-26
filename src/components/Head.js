import React, { useEffect, useRef, useState } from 'react'
import { YOUTUBE_SEARCH_SUGGESTION_API, menu_icon, user_icon, youtube_logo } from '../Utils/constants'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'
import { cacheResults, searchedMovies } from '../Utils/searchSlice'
import { getMovieSuggestions } from '../Utils/functions'
import { Link } from 'react-router-dom'

const Head = () => {
  const dispath = useDispatch();
  const handleMenu = () => {
    dispath(toggleMenu());
  }
  const [searchInput, setSearchInput] = useState('');
  const [suggestion, setSuggestions] = useState([]);
  const [showSuggestion , setShowSuggestions] = useState(false);
  const searchRef = useRef();
  const searchCache = useSelector(store=>store.search.suggestionSearch);
  useEffect(()=>{  
    if(!searchInput) return;
    const getSuggestions = async() => {
      if(searchCache[searchInput]) {
        setSuggestions(searchCache[searchInput]);
        return;
      }
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchInput);
      const json = await data?.json();
      setSuggestions(json[1]);
      dispath(cacheResults({
        key:searchInput,
        value:json[1]
      }))
      return json;
    }
    const searchTimeout = setTimeout(()=>{
      getSuggestions();
    },200);
    return ()=>{
      clearTimeout(searchTimeout);
    }
  },[searchInput]);

  const handleSearch = (e) => {
    if(e) {
      setSearchInput(e.target.value)
    } else {
      setSearchInput(searchRef.current.value);
    }
  }

  const handleSuggestionClick = async(e) => {
    setShowSuggestions(false)
    setSearchInput(e.target.innerText);
    const movies = await getMovieSuggestions(e.target.innerText);
    dispath(searchedMovies(movies?.items))
  }

  return (
   <div className='grid grid-flow-col px-5 py-2 mb-2 shadow-lg bg-white' id="header">
        <div className='flex items-center col-span-1'> 
            <img src={menu_icon} className='h-8 cursor-pointer' alt="menu" onClick={handleMenu} />
            <Link to="/">
            <img src={youtube_logo} className='h-10 mx-2 cursor-pointer' alt="youtube_logo" />
            </Link>
        </div>
        <div className='col-span-10' onMouseLeave={()=>setShowSuggestions(false)}>
          <div className="flex items-center">
              <input type='text' className='h-10 p-2 rounded w-[80%] border border-gray-200 rounded-l-full focus:border-yellow-600' placeholder='Search' value={searchInput} onChange={(e)=>{handleSearch(e)}} onFocus={()=>setShowSuggestions(true)} ref={searchRef} />
              <div className='bg-gray-200 p-4 h-10 flex items-center justify-center rounded-r-full' onClick={()=>handleSearch()}>
              <FontAwesomeIcon className='w-9 h-7 font-light search-icon cursor-pointer' icon={faMagnifyingGlass} />
              </div>
          </div>
        {
          showSuggestion && suggestion?.length > 0 &&  <div className="fixed bg-white py-2 w-[60%] rounded-lg shadow-lg border border-gray-100">
              <ul>
              {
                suggestion?.map((suggestion)=><li className='py-2 px-3 shadow-sm hover:bg-gray-100' key={suggestion} onClick={handleSuggestionClick}> <FontAwesomeIcon className='w-4 h-4 mr-2 font-light search-icon cursor-pointer' icon={faMagnifyingGlass} />{suggestion}</li>)
              }
              </ul>
            </div>

        }
        </div>
        <div className='col-span-1 flex items-center cursor-pointer'>
        <img src={user_icon} className='h-10' alt="user_icon" />
        </div>
   </div>
  )
}

export default Head