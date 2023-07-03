import React, { useEffect, useState } from "react";
import RotateDiscAngle from "./RotateDiscAngle";
import RotatingPlate from "./RotatingPlate";
import MenuDetails from "./MenuDetails";
import { menuItemKeyString } from "./RotatingItems";

const MenuApp = () => {
  const radius = 16;
  const angle = 360 / 6;
  const [menuType, setMenuType] = useState("Burger");
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    setMenuType(menuItemKeyString);
  }, [menuItemKeyString]);

  return (
    <>
      <RotateDiscAngle setRotationAngle={setRotationAngle} />
      <RotatingPlate
        radius={radius}
        angle={angle}
        rotationAngle={rotationAngle}
      />
      <MenuDetails menuTypeId={menuType} />
    </>
  );
};

export default MenuApp;
