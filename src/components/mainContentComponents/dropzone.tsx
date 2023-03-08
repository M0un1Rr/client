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
    if (selectedFiles.length > 0 && selectedFiles.length < 3) {
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
    if (droppedFiles.length > 0 && droppedFiles.length < 3) {
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
    <div className="col-span-2 flex flex-col place-content-center place-items-center overflow-hidden border-4 border-black rounded-lg gap-2 p-10 relative">
      <div
        className="col-span-2 flex flex-col place-content-center place-items-center overflow-hidden border-4 border-green_hues-700 rounded-lg gap-2 p-10 relative"
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
          accept=".pdf"
        />
        <p className="p-3 text-center">
          Faites glisser et déposez des fichiers ici, ou cliquez pour
          sélectionner des fichiers
        </p>
      </div>
      {files.map((file) => (
        <li className={"list-none"} key={file.name}>
          {file.name}{" "}
          <span
            className="text-red-600 font-bold cursor-pointer"
            onClick={() => handleRemove(file)}
          >
            X
          </span>
        </li>
      ))}
    </div>
  );
}

export default MyDropzone;
