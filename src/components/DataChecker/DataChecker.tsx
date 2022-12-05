import React from "react";

interface Data {
  msg1: String;
  msg2: String;
}

function DataChecker({ msg1, msg2 }: Data) {
  return (
    <div className="border-y border-gray-300 w-[280px] my-4">
      <h5 className="text-sm font-bold pt-3">{msg1}</h5>
      <p className="text-sm text-tertiary font-semibold pt-1 pb-2">{msg2}</p>
    </div>
  );
}

export default DataChecker;
