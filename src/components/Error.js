import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  return (
    <div className="m-2">
      <h1 className="text-4xl font-bold text-red-600 ml-2 mt-2">
        No Page Found, 404{" "}
        <span className="text-3xl">
          <FontAwesomeIcon icon={faCircleExclamation} />
        </span>
      </h1>
      <h3 className="text-2xl font-bold text-red-600 ml-2 mt-2">
        {error.error.message}
      </h3>
    </div>
  );
};

export default Error;
