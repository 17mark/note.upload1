import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
    return (
        <div className='notes-list'>
            {notes.map((note)=> (
                 <Note
                   key={note.id}
                   id={note.id}
                   text={note.text}
                   file={note.file}
                   filename={note.filename}
                   date={note.date}
                   handleDeleteNote={handleDeleteNote}
                   selectedFile={note.selectedFile}
                   />

            ))}
            <AddNote handleAddNote={handleAddNote} />

        </div>
    );
};

export default NotesList;