import React, { useEffect, useState } from "react";
import { itemTypes } from "./ItemType";

let menuItemKeyString;

const RotatingItems = ({ radius, angle, rotationAngle }) => {
  const [menuItemKey, setMenuItemKey] = useState("Burger");

  const updatedItemTypes = itemTypes.map((item) => {
    let itemAngle = item.id * angle;
    let x = radius * Math.cos((itemAngle + rotationAngle) * (Math.PI / 180));
    let y = radius * Math.sin((itemAngle + rotationAngle) * (Math.PI / 180));

    return (
      <i
        key={item.key}
        className={item.className}
        style={{
          position: "absolute",
          top: `${y}rem`,
          left: `${x}rem`,
          fontSize: x > 15.8 && x < 16.2 ? "7.5rem" : "5rem",
          animation: x > 15.8 && x < 16.2 ? "vibrate 0.5s ease-out" : "",
        }}
      ></i>
    );
  });

  let menuType = updatedItemTypes
    .filter((item) => item.props.style.fontSize === "7.5rem")
    .find((item) => true)
    ? updatedItemTypes
        .filter((item) => item.props.style.fontSize === "7.5rem")
        .find((item) => true).key
    : menuItemKey;

  useEffect(() => {
    setMenuItemKey(menuType);
  }, [menuType]);
  menuItemKeyString = menuItemKey;

  return <div className="itemholder">{updatedItemTypes}</div>;
};

export { menuItemKeyString };
export default RotatingItems;
