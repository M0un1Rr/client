import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import Icon from "./svg";

function MyDropzone() {
  const onDrop = useCallback((acceptedFiles: any) => {
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        // Do whatever you want with the file contents
        console.log(reader);
        const binaryStr = reader.result;
        console.log(binaryStr);
      };
      reader.readAsArrayBuffer(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div
      className="col-span-2 h-[200px] flex flex-col place-content-center place-items-center overflow-hidden border-4 border-green_hues-700 rounded-lg gap-2"
      {...getRootProps()}
    >
      <div className="w-[100px] h-[100px]">
        <Icon />
      </div>
      <input className="p-3" {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
}

export default MyDropzone;
