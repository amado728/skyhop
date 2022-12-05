import React, { useRef, useState } from "react";
import RadioSelector from "../RadioSelector/RadioSelector";
import LabeledSelector from "../LabeledSelector/LabeledSelector";

interface Props {
  handleChange: Function;
  defaultValue: string;
}

function ClientSelector({ handleChange, defaultValue }: Props) {
  const [client, setClient] = useState(defaultValue);
  const clients: string[] = [
    "Select Client",
    "Client 1",
    "Client 2",
    "Client 3",
  ];
  const labels: string[] = [
    "Testing Center 1",
    "Testing Center 2",
    "Testing Center 3",
    "Testing Center 4",
  ];

  const handleRadioSelection = (propertyName: string, value: string) => {
    setClient(value);
    handleChange(propertyName, value);
  };

  return (
    <div>
      <RadioSelector
        propertyName={"client"}
        label={"Client:"}
        options={["Single", "Multiple"]}
        handleRadioSelection={handleRadioSelection}
        defaultValue={defaultValue}
      />
      {(() => {
        if (client === "Single") {
          return <LabeledSelector label={labels[0]} options={clients} />;
        } else if (client === "Multiple") {
          return (
            <div>
              {labels.map((label) => {
                return <LabeledSelector label={label} options={clients} />;
              })}
            </div>
          );
        }
      })()}
    </div>
  );
}

export default ClientSelector;
