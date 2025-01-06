import React from 'react';

function NotesList({ notes, onEditNote, onDeleteNote }) {
    return (
        <div className='notes-list'>
            <h1>Notes List</h1>
            <div className='gridding'>
                {notes.length > 0 ? (
                    notes.map((note) => (
                        <div key={note.id} className='note'>
                            <h3>Title: {note.title}</h3>
                            <p><strong>Description: </strong> {note.content}</p>
                            <p><strong>Category:</strong> {note.category}</p>
                            <p><strong>Tags:</strong> {note.tags.join(', ')}</p>
                            <button onClick={() => { onEditNote({ ...note, content: prompt('Edit content:', note.content) }) }}>Edit</button>
                            <button onClick={() => onDeleteNote(note.id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No notes found.</p>
                )}
            </div>
        </div>
    );
}

export default NotesList;