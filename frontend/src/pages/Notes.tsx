import NoteItem from "../components/NoteItem"

export function Notes() {

  const note = {
    _id: 'aaa',
    content: 'putzaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaawwwwwwwwwwwwwwwwwwwwwwwwwwwwadasdsadasdawwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwaaaaaaaaaaaaa'
  }

  return (

    <ul>

      <NoteItem note={note} />
      <NoteItem note={note} />

    </ul>

  )

}