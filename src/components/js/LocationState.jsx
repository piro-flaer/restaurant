import React, { useState } from "react";
import "../css/LocationStateClosed.css";
import LocationCity from "./LocationCity";

const LocationState = ({ stateCityValue, setCityName }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div
        className={open ? "locationstate open" : "locationstate"}
        onClick={() => {
          setOpen(!open);
        }}
      >
        {stateCityValue.state}
      </div>
      {open && (
        <div>
          {stateCityValue.cities.map((item) => {
            return (
              <LocationCity
                cityValue={item}
                key={item}
                cityName={setCityName}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default LocationState;
