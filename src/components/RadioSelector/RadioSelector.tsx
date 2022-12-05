import React, { useRef } from "react";

interface radioProps {
  propertyName: string;
  defaultValue: string;
  label: string;
  options: string[];
  handleRadioSelection: Function;
}

function RadioSelector({
  propertyName,
  defaultValue,
  label,
  options,
  handleRadioSelection,
}: radioProps) {
  let lastOption = useRef("");

  const handleSelection = (value: string) => {
    if (value !== lastOption.current) handleRadioSelection(propertyName, value);
    lastOption.current = value;
  };

  return (
    <div>
      <h5 className="text-sm font-bold">{label}</h5>
      <div className="flex">
        {options.map((option, i) => {
          return (
            <div className="mt-2 mr-4" key={label + option + i + "div"}>
              <input
                id={label}
                type="radio"
                name={label}
                className="cursor-pointer mr-1"
                key={label + option + i + "radio"}
                onClick={() => {
                  handleSelection(option);
                }}
                defaultChecked={option === defaultValue}
              />
              <label htmlFor={option + i} key={label + option + i + "label"}>
                {option}
              </label>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RadioSelector;
