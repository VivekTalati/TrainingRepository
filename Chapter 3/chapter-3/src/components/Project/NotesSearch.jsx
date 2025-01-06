import React from 'react'

function NotesSearch  ({onSearch}){
  return (
    <div>
      <input className='search-bar' type="text"
      placeholder='Search notes...' 
      onChange={(e)=>onSearch(e.target.value)}/>
    </div>
  )
}

export default NotesSearch
