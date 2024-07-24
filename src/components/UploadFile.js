"use client";

import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";

export default function UploadFile({ onFileUpload, progress }) {
  const [selectedFile, setSelectedFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    setSelectedFile(acceptedFiles[0]);
  }, []);

  const handleFileUpload = () => {
    if (selectedFile) {
      onFileUpload(selectedFile);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div
        {...getRootProps()}
        className="w-64 p-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer text-center mb-4"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag n drop some files here, or click to select files</p>
        )}
      </div>
      {selectedFile && (
        <div className="mb-4">
          <p>Selected File: {selectedFile.name}</p>
        </div>
      )}
      <button
        onClick={handleFileUpload}
        className="bg-blue-500 text-white p-2 rounded mb-4"
      >
        Count
      </button>
      {progress > 0 && (
        <div className="w-full bg-gray-200 rounded-full h-4 mt-4">
          <div
            className="bg-blue-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
