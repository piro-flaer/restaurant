import React, { useState } from "react";
import ChefList from "./ChefList";
import ChefDetails from "./ChefDetails";

const ChefApp = () => {
  const [chefName, setChefName] = useState();
  return (
    <>
      <ChefList setChef={setChefName} />
      <ChefDetails chefNameSelected={chefName} />
    </>
  );
};

export default ChefApp;
