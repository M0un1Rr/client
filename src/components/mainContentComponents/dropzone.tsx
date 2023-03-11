import { useRef, useState, ChangeEvent, DragEvent, useEffect } from "react";
import Icon from "./svg";

function MyDropzone(props: any) {
  const state = props.state;
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const addFiles = props.addFiles;
  const removeFile = props.removeFile;

  function handleRemove(file: File) {
    setFiles((prevFiles) => prevFiles.filter((f) => f !== file));
    removeFile(file);
  }

  function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
    if (files.length == 2) return;
    const selectedFiles = Array.from(event.target.files as FileList);
    let filesExceedMaxSize = false; // initialize flag to false
    selectedFiles.forEach((file) => {
      if (file.size > 1000000) {
        alert("La taille maximale du fichier doit être inférieure à 1 Mo");
        filesExceedMaxSize = true; // set flag to true if any file exceeds max size
      }
    });
    if (
      !filesExceedMaxSize &&
      selectedFiles.length > 0 &&
      selectedFiles.length < 3
    ) {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...selectedFiles.slice(0, 2 - prevFiles.length),
      ]);
      addFiles(selectedFiles);
    }
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    if (files.length == 2) return;
    event.preventDefault();
    const droppedFiles = Array.from(event.dataTransfer.files);
    let filesExceedMaxSize = false; // initialize flag to false
    droppedFiles.forEach((file) => {
      if (file.size > 1000000) {
        alert("La taille maximale du fichier doit être inférieure à 1 Mo");
        filesExceedMaxSize = true; // set flag to true if any file exceeds max size
      }
    });
    if (
      !filesExceedMaxSize &&
      droppedFiles.length > 0 &&
      droppedFiles.length < 3
    ) {
      setFiles((prevFiles) => [
        ...prevFiles,
        ...droppedFiles.slice(0, 2 - prevFiles.length),
      ]);
      addFiles(droppedFiles);
    }
  }

  function handleClick() {
    if (files.length == 2) return;
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  useEffect(() => {
    setFiles(state);
  }, []);

  return (
    <div className="col-span-2 flex flex-col place-content-center place-items-center overflow-hidden border-4 border-black rounded-lg gap-2 p-5 relative">
      {files.length >= 0 && files.length < 2 && (
        <div
          className="col-span-2 flex flex-col place-content-center place-items-center overflow-hidden border-4 border-green_hues-700 rounded-lg gap-2 p-4 relative"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={handleClick}
        >
          <div className="w-[50px] h-[50px]">
            <Icon />
          </div>
          <input
            name="files"
            type="file"
            className="p-3"
            multiple
            hidden
            onChange={handleFileSelect}
            ref={fileInputRef}
            accept=".pdf,.doc,.docx,.jpeg,.jpg,.png"
          />
          <p className="p-3 text-center">
            Faites glisser et déposez des fichiers ici, ou cliquez pour
            sélectionner des fichiers
          </p>
        </div>
      )}
      <ul className="flex flex-col w-full overflow-hidden break-words">
        {files.map((file) => (
          <li className={"list-none text-sm"} key={file.name}>
            {file.name}{" "}
            <span
              className="text-red-600 font-bold cursor-pointer"
              onClick={() => handleRemove(file)}
            >
              X
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyDropzone;
