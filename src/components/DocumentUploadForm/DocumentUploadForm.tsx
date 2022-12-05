import React, { useRef, FormEvent } from "react";
import ManifestImporter from "../ManifestImporter/ManifestImporter";
import DataChecker from "../DataChecker/DataChecker";
import ToleranceSelector from "../ToleranceSelector/ToleranceSelector";
import RadioSelector from "../RadioSelector/RadioSelector";
import ClientSelector from "../ClientSelector/ClientSelector";
import { XMarkIcon } from "@heroicons/react/24/solid";

function DocumentUploadForm() {
  let validated = false;
  const formData: Record<string, any> = useRef({
    importName: "",
    manifest: undefined,
    toleranceON: false,
    toleranceLevel: 0,
    splitSchedule: "Yes",
    client: "Single",
    clients: [],
  });

  function submitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    validateFields();
    if (validated) {
      console.log(formData.current); // send data to server
    }
  }

  function handleChange(propertyName: string, value: string) {
    let data = formData.current;
    data[propertyName] = value;
    formData.current = data;
    console.log(data);
  }

  function validateFields() {
    const form = formData.current;
    if (form.importName === "Select Import Name" || "") return false;
    if (form.manifest === undefined) return false;
    if (form.client === "single") {
      if (form.clients[0] === "") {
        validated = false;
      }
    }
    if (form.client === "multiple") {
      for (let i in form.clients) {
        if (form.clients[i] === "") {
          validated = false;
        }
      }
    }
    validated = true;
  }

  return (
    <div className="flex h-screen justify-center items-center text-primary-dark select-none">
      <form
        className="p-10 rounded-3xl w-8/12 bg-white shadow-lg"
        onSubmit={submitForm}
      >
        <div className="w-full">
          <XMarkIcon className="w-8 bg-primary text-white rounded-md cursor-pointer" />
          <h1 className="font-main text-3xl pb-3 border-b border-gray-300 mx-auto w-fit">
            Document Upload
          </h1>
        </div>
        <div className="flex px-14 py-12 gap-14">
          <div className="flex flex-col  w-7/12">
            <ManifestImporter handleChange={handleChange} />
            <DataChecker
              msg1={"Elapse Data Checking:"}
              msg2={"No Elapsed Dates!"}
            />
            <ToleranceSelector />
          </div>
          <div className="flex flex-col w-5/12">
            <RadioSelector
              propertyName={"splitSchedule"}
              label={"Split schedule using social distancing?"}
              options={["Yes", "No"]}
              defaultValue={formData.current.splitSchedule}
              handleRadioSelection={handleChange}
            />
            <DataChecker msg1={"Location Checking:"} msg2={"All Available!"} />
            <ClientSelector
              handleChange={handleChange}
              defaultValue={formData.current.client}
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">
            {validated
              ? "Data in the import file is correct. Please press Continue to import."
              : "Data in the import file is incorrect or missing. Please check all fields and imports."}
          </h3>
          <div className="flex gap-6 mb-6">
            <button
              type="submit"
              className="bg-primary w-60 py-3 font-semibold mt-4 text-sm"
            >
              Continue Import
            </button>
            <button
              type="button"
              className="text-secondary w-60 py-3 font-semibold mt-4 text-sm border-2 border-secondary box-border"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default DocumentUploadForm;
