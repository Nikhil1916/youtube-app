import { faHouse, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Sidebar = () => {
  return (
    <>
    <div className="w-52 p-5 shadow-lg z-10 mt-[3.7rem] flex flex-col gap-3 pl-8" id="sidebar">
     <ul className="flex flex-col gap-2  justify-center">
      <li><FontAwesomeIcon icon={faHouse} className="mr-2" />Home</li>
      <li><FontAwesomeIcon icon={faPlay} className="mr-2" />Shorts</li>
     </ul>
      <h1 className="font-bold pt-2">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-2">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
    <div className="backdrop"></div>
    </>
  );
};

export default Sidebar;
