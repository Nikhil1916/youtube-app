import React from "react";
import ButtonComponent from "./ButtonComponent";
import { buttonList } from "../Utils/constants";

const ButtonList = () => {
  // const menuState = useSelector(store=>store.app.isMenuOpen);
  return (
    <div className={"flex overflow-scroll mx-4 w-[100vw]"}>
      {buttonList?.map(({ name, id }, i) => {
        return <ButtonComponent name={name} key={i} />;
      })}
    </div>
  );
};

export default ButtonList;
