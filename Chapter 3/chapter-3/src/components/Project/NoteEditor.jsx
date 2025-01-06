import React, { useState } from 'react'

function NoteEditor({ onAddNote }) {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [category, setCategory] = useState('');
    const [tags, setTags] = useState('');

    const handleAddNote = () => {
        if (title && content && category) {
            onAddNote({ id: Date.now(), title, content ,category ,tags: tags.split(',').map(tag => tag.trim()), })
            setTitle('')
            setContent('')
            setCategory('');
            setTags('');
        } else {
            alert('Title ,Content and Category Are Required')
        }
    }
    return (
        <div className='note-editor'>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            <textarea placeholder='Content' rows="4" cols="50" value={content} onChange={(e) => setContent(e.target.value)} ></textarea>
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <input type="text" placeholder="Tags (comma-separated)" value={tags} onChange={(e) => setTags(e.target.value)}/>
            <button onClick={handleAddNote}>Add Note</button>

        </div>
    )
}

export default NoteEditor
