import React from "react";
import { titleCase } from "../Utils/functions";

const ButtonComponent = ({ name }) => {
  return (
    <div className="bg-gray-200 py-2 px-6  m-4 rounded-lg flex items-center justify-center whitespace-nowrap font-bold cursor-pointer">
      {titleCase(name)}
    </div>
  );
};

export default ButtonComponent;
