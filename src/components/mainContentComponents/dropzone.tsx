import { useRef, useState, ChangeEvent, DragEvent } from "react";
import Icon from "./svg";

function MyDropzone() {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  console.log(files);
  function handleFileSelect(event: ChangeEvent<HTMLInputElement>) {
    const fileList = event.target.files;
    if (fileList) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(fileList)]);
    }
  }

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    const fileList = event.dataTransfer.files;
    if (fileList) {
      setFiles((prevFiles) => [...prevFiles, ...Array.from(fileList)]);
    }
  }

  function handleClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  }

  return (
    <div
      className="col-span-2 flex flex-col place-content-center place-items-center overflow-hidden border-4 border-green_hues-700 rounded-lg gap-2 p-10"
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
        Faites glisser et déposez des fichiers ici, ou cliquez pour sélectionner
        des fichiers
      </p>
      <ul>
        {files.map((file) => (
          <li key={file.name}>{file.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default MyDropzone;
