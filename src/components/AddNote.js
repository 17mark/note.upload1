import { useState } from 'react';
import UploadFile from './UploadFile';

const AddNote = ({ handleAddNote }) => {
    const [noteText, setNoteText] = useState('');
    const [file, setFile] = useState({ added: false, filename: '' })
    const [selectedFile, setSelectedFile] = useState();
    const [inputKey, setInputKey] = useState(1);

    const characterLimit = 330;

    const handleChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setNoteText(event.target.value);
        }
    };

    const handleSaveClick = () => {
        if (noteText.trim().length > 0) {
            handleAddNote(noteText, file.added, file.filename, selectedFile);
            setNoteText('');
            setFile({ added: false, filename: '' });
            setSelectedFile();
            setInputKey(inputKey + 1);
        }
    };

    return (
        <div className='note new'>
            <textarea
                rows="8"
                cols="10"
                placeholder='Type to add a note...'
                value={noteText}
                onChange={handleChange}
            ></textarea>
            <UploadFile
                handleFile={setFile}
                file={file}
                selectedFile={selectedFile}
                setSelectedFile={setSelectedFile}
                key={inputKey}
            />
            <div className='note-footer'>
                <small>{characterLimit - noteText.length} Remaining </small>
                <button className='save' onClick={handleSaveClick}>Save</button>
            </div>
        </div>

    );
};

export default AddNote;