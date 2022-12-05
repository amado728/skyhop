import React, { useRef } from "react";
import RadioSelector from "../RadioSelector/RadioSelector";

interface Props {
  handleChange: Function;
  defaultValue: string;
}

function ClientSelector({ handleChange, defaultValue }: Props) {
  const clients = useRef({});

  const handleRadioSelection = (propertyName: string, value: string) => {
    handleChange(propertyName, value);
  };

  return (
    <RadioSelector
      propertyName={"client"}
      label={"Client:"}
      options={["Single", "Multiple"]}
      handleRadioSelection={handleRadioSelection}
      defaultValue={defaultValue}
    />
  );
}

export default ClientSelector;
