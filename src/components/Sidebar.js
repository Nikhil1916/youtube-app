import React from "react";

const Sidebar = () => {
  return (
    <div className="w-52 p-5 shadow-lg h-screen z-10">
     <ul>
     <li>Home</li>
      <li>Shorts</li>
      <li>Live</li>
     </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className="font-bold pt-5">Watch Later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
