import './styles.css';
import '../../global.css';
import { useEffect, useRef, useState } from 'react';
let autosize = require('autosize');

interface Notes {
  _id: string;
  content: string;
}

interface NotesProps {
  note: Notes
}

const NoteItem: React.FC<NotesProps> = ({ note }) => {

  const textarea = useRef<HTMLTextAreaElement>(null)

  function changeNoteItemEditingMode() {
    setIsEditing(!isEditing);
  }

  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {

    if (isEditing) {
      autosize(textarea.current)
    }

  }, [isEditing])

  return (

    <li key={note._id} className="note-item">
      <div className="note-item-text">

        {
          isEditing ? (
            <textarea ref={textarea}>{note.content}</textarea>
          ) : (
            <div>{note.content}</div>
          )
        }

      </div>
      <div className="edit-note-item">
        <button onClick={changeNoteItemEditingMode}><i className="far fa-edit fa-2x"></i></button>
      </div>
    </li>

  )

}

export default NoteItem