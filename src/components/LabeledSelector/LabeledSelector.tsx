import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

interface SelectorProps {
  label: string;
  options: string[];
}

function LabeledSelector({ label, options }: SelectorProps) {
  return (
    <div className="flex items-center mt-5">
      <p className="grow">{label}</p>
      <select name="client-select-1" id="client-select-1" className="w-5/12">
        {options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
      <ClockIcon className="w-6 ml-4" />
    </div>
  );
}

export default LabeledSelector;
