import React, { useState } from "react";
import LocationList from "./LocationList";
import CityShow from "./CityShow";

const LocationApp = () => {
  const [selectedCityNameKey, setSelectedCityNameKey] = useState();

  return (
    <>
      <div className="menuholder">
        <img className="menu_bg" src="images/menu_bg.png" alt=""></img>
        <img className="inner_bg" src="images/inner-bg.png" alt=""></img>
        <img className="background_img" src="images/b1.jfif" alt=""></img>
      </div>
      <LocationList setSelectedCityName={setSelectedCityNameKey} />
      <CityShow selectedCityName={selectedCityNameKey} />
    </>
  );
};

export default LocationApp;
