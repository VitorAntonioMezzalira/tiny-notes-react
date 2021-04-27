import './styles.css';
import '../../global.css';
import { useState } from 'react';

interface Notes {
  _id: string;
  content: string;
}

interface NotesProps {
  note: Notes
}

const NoteItem: React.FC<NotesProps> = ({ note }) => {

  function changeNoteItemEditingMode() {
    setIsEditing(!isEditing);
  }

  const [isEditing, setIsEditing] = useState(false);

  return (

    <li key={note._id} className="note-item">
      <div className="note-item-text">

        {
          isEditing ? (
            <textarea>{note.content}</textarea>
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