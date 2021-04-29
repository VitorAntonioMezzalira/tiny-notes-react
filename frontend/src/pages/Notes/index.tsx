import NoteItem from "../../components/NoteItem"

import './styles.css'

export function Notes() {

  const notes = [
    {
      _id: '1',
      content: 'Apenas mais uma nota aqui nessa lista de notas com várias notas'
    },
    {
      _id: '2',
      content: 'Apenas mais uma nota aqui nessa lista de notas com várias notas'
    },
    {
      _id: '3',
      content: 'Apenas mais uma nota aqui nessa lista de notas com várias notas'
    },
  ]

  return (
    <>
      <ul className="notes-collection">
        <li className="add-new-note">Criar nova nota<i className="fas fa-plus"></i></li>
        {
          notes.map(note => {
            return (

              <NoteItem note={note} />

            )
          })
        }
      </ul>
    </>
  )

}