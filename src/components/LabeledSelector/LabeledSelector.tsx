import React from "react";

interface SelectorProps {
  label: string;
  options: string[];
}

function LabeledSelector({ label, options }: SelectorProps) {
  return (
    <div className="flex items-center mt-4">
      <p className="grow">{label}</p>
      <select name="client-select-1" id="client-select-1" className="w-6/12">
        {options.map((option) => {
          return <option>{option}</option>;
        })}
      </select>
    </div>
  );
}

export default LabeledSelector;
