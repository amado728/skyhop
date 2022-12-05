import React from "react";
import DragDropUploader from "../DragDropUploader/DragDropUploader";

interface Props {
  handleChange: Function;
}

function ManifestImporter({ handleChange }: Props) {
  const options = ["Select Import Name", "Option 1", "Option 2", "Option 3"];

  function handleChanges(propertyName: string, value: any) {
    handleChange(propertyName, value);
  }

  return (
    <div>
      <select
        name="select"
        id="select"
        className="font-bold text-sm"
        onChange={(e) => handleChanges("importName", e.target.value)}
      >
        {options.map((option) => (
          <option
            className="hover:bg-primary active:bg-primary first-of-type:rounded-t-md rounded-t-lg"
            value={option}
            key={option}
          >
            {option}
          </option>
        ))}
      </select>
      <h6 className="text-sm font-bold border-t border-gray-300 inline-block py-4 mt-5">
        Select a manifest that you'd like to import
      </h6>
      <DragDropUploader
        name="Manifest"
        handleFileUpload={(f: File) => handleChanges("manifest", f)}
        allowedFormats={[".csv", ".xls", ".xlsx"]}
      />
    </div>
  );
}

export default ManifestImporter;
