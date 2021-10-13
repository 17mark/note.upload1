import { MdDelete, MdFileUpload }  from "react-icons/md";

const Note = ({ id, text, file, filename, selectedFile, date, handleDeleteNote }) => {
    return(
        <div className='note'>
           <span>{text}</span>
          { file && <><MdFileUpload /><div>{filename}</div></>}
          {file?<img src={selectedFile}/>:<div>no img</div>}
           <div className='note-footer'>
               <small>{date}</small>
               <MdDelete
                onClick={()=> handleDeleteNote(id)}
                 className='delete-icon'
                  size='1.3em' />
           </div>
        </div>
    );
};

export default Note;