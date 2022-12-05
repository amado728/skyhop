import React from "react";
import { ClockIcon } from "@heroicons/react/24/outline";

function ToleranceSelector() {
  return (
    <div>
      <h5 className="text-sm font-bold">Tolerance Window:</h5>
      <div className="flex pt-2">
        <label className="inline-flex relative items-center cursor-pointer">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
          <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">
            Toggle ON
          </span>
        </label>
        <label className="inline-flex relative items-center cursor-pointer pl-3 border-l border-primary ml-3">
          <ClockIcon className="w-6" />
          <span className="ml-2 text-sm text-gray-900 dark:text-gray-300">
            Select Tolerance Level
          </span>
        </label>
      </div>
    </div>
  );
}

export default ToleranceSelector;
