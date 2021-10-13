import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
  const [notes, setNotes] = useState([
    {
      id: nanoid(),
      text: "Write a note!",
      file: false,
      date: "29/08/2021",
    },
    {
      id: nanoid(),
      text: "Write a note!",
      file: false,
      date: "01/09/2021",
    },
    {
      id: nanoid(),
      text: "Write a note!",
      file: false,
      date: "03/09/2021",
    },
    {
      id: nanoid(),
      text: "Write a new note!",
      file: true,
      filename: "testfile.png",
      date: "03/09/2021",
    }

  ]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem(
      'react-notes-app-data')
    );

    if (savedNotes) {
      setNotes(savedNotes)
    }

  }, [])

  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);

  const addNote = (text, isFileAdded, filename, selectedFile) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      file: isFileAdded,
      filename: filename,
      date: date.toLocaleDateString(),
      selectedFile: selectedFile
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>

    </div>

  );
};

export default App;
