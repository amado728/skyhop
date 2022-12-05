import React, { useRef, useState } from "react";
import { DocumentTextIcon, PhotoIcon } from "@heroicons/react/20/solid";

interface Props {
  name?: string;
  handleFileUpload: Function;
  allowedFormats: string[];
}

function DragDropUploader({ name, handleFileUpload, allowedFormats }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const uploadRef = useRef<HTMLDivElement>(null);
  const browse = useRef<HTMLInputElement>(null);
  let [uploadProgress, setUploadProgress] = useState(0);
  const [uploadClicked, setUploadClicked] = useState(false);

  function handleDragOver(event: any) {
    event.preventDefault();
  }

  function isFileFormatValid(file: File) {
    let fileExtension = file.name.match(/\.[0-9a-z]+$/i);
    if (fileExtension) {
      if (allowedFormats.includes(fileExtension[0])) return true;
    }
    alert(
      `Invalid file format. Please use one of the following accepted formats: ${allowedFormats
        .toString()
        .replaceAll(",", ", ")}`
    );
    return false;
  }

  function resetUploadRef() {
    if (uploadRef.current) {
      setUploadProgress(0);
      setElementWidthByUploadProgress(uploadRef.current, 0);
      setUploadClicked(false);
    }
  }

  function handleDrop(event: any) {
    const _file = event.dataTransfer.files[0];
    event.preventDefault();
    validateAndSetFile(_file);
  }

  function handleBrowse(event: any) {
    const _file = event.target.files[0];
    validateAndSetFile(_file);
  }

  function validateAndSetFile(_file: File) {
    if (isFileFormatValid(_file)) {
      setFile(_file);
      resetUploadRef();
    }
  }

  function uploadFile() {
    if (file && !uploadClicked) {
      let progress = 0;
      let uploadInterval = setInterval(() => {
        if (progress >= 100) {
          clearInterval(uploadInterval);
        } else {
          progress += 25;
          if (uploadRef.current) {
            setElementWidthByUploadProgress(uploadRef.current, progress);
          }
        }
      }, 1000);
      setUploadClicked(true);
      handleFileUpload(file);
    }
  }

  function setElementWidthByUploadProgress(ref: HTMLElement, progress: number) {
    let parentWidth = (ref.parentNode as HTMLElement).clientWidth;
    ref.style.width = `${parentWidth * (progress / 100)}px`;
    setUploadProgress(progress);
  }

  return (
    <div>
      <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4">
        <input ref={browse} type="file" hidden onChange={handleBrowse} />
        <div
          className="w-full flex flex-col bg-dashed-img bg-no-repeat rounded-xl items-center p-8 cursor-pointer"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => {
            if (browse.current != null) browse.current.click();
          }}
        >
          <DocumentTextIcon className="w-7 text-secondary" />
          <h5 className=" text-md pt-3">
            {file
              ? file.name
              : (() => (
                  <div>
                    Drag & Drop Here Or{" "}
                    <span className="font-bold">Browse</span>
                  </div>
                ))()}
          </h5>
        </div>
        <button
          type="button"
          className="bg-primary px-14 py-2 font-semibold mt-4 text-sm"
          onClick={() => {
            if (!uploadClicked && file) uploadFile();
          }}
        >
          Upload {name}
        </button>
      </div>
      <div className="flex border-y mt-4">
        <PhotoIcon className="text-secondary w-9 m-3 scale-x-75" />
        <div className="flex flex-col w-full pr-5 py-4">
          <div className="flex grow justify-between items-center p-1">
            <p className="text-gray-400 text-sm">
              {file ? file.name : "No File Uploaded."}
              <span className="ml-2" hidden={!uploadClicked}>{`(${
                uploadProgress >= 100 ? "Completed " : "In Progress"
              } - ${uploadProgress}%)`}</span>
            </p>
            <p className="text-gray-900 text-[10px]">
              {file ? (file.size / 1000000).toFixed(2) : "0.0"}MB
            </p>
          </div>
          <div>
            <div
              ref={uploadRef}
              className={`h-1 bg-secondary rounded-sm absolute z-5 w-0`}
            ></div>
            <div className="h-1 bg-gray-200 rounded-sm w-[525px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DragDropUploader;
