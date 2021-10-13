
const UploadFile = ({ file, handleFile, selectedFile, setSelectedFile, ref }) => {

	const changeHandler = (event) => {
		setSelectedFile(URL.createObjectURL(event.target.files[0]));
		handleFile({ added: true, filename: event.target.files[0].name });
	};

	return (
		<div>
			<input type="file" name="file" onChange={changeHandler} ref={ref} />
		</div>
	)
}


export default UploadFile;
