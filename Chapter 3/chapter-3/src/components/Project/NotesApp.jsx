import React, { useEffect, useState } from 'react'
import NotesList from './NotesList'
import NoteEditor from './NoteEditor'
import NotesSearch from './NotesSearch'
import './style.css'

function NotesApp() {
  const [notes, setNotes] = useState(()=>JSON.parse(localStorage.getItem('notes'))|| [])
  const [searchQuery, setSearchQuery] = useState('')
  useEffect(() => {
    const storedNotes = JSON.parse(window.localStorage.getItem('notes')) || []
    console.log('Loaded notes:', storedNotes);
    setNotes(storedNotes)
  }, [])

  useEffect(() => {
    console.log('Saving notes:', notes);
    window.localStorage.setItem('notes', JSON.stringify(notes))
  }, [notes])

  const addNote = (newNote) => setNotes([...notes, newNote])
  const editNote = (updatedNote) => {
    setNotes(notes.map((note) => (note.id === updatedNote.id ? updatedNote : note)))
  }

  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id))
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <div className='container'>
        <div className='header'>
          <h1>Notes...!📝</h1>
          <NotesSearch onSearch={setSearchQuery} />
        </div>
        <div className='section'>
          <NoteEditor onAddNote={addNote} />
          <NotesList notes={filteredNotes} onEditNote={editNote} onDeleteNote={deleteNote} />
        </div>
      </div>
    </>
  )
}

export default NotesApp
