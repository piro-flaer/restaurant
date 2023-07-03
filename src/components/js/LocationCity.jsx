import React, { useEffect, useState } from "react";
import "../css/LocationStateOpened.css";

const LocationCity = ({ cityValue, cityName }) => {
  const [selected, setselected] = useState(false);

  useEffect(() => {
    document.querySelector(".selected")
      ? cityName(document.querySelector(".selected").innerHTML)
      : cityName("");
  }, [selected]);

  return (
    <div
      className={selected ? "locationcity selected" : "locationcity"}
      onClick={() => {
        !selected &&
          (() => {
            document.querySelector(".selected") &&
              document.querySelector(".selected").classList.remove("selected");
          })();

        setselected(!selected);
      }}
    >
      {cityValue}
    </div>
  );
};

export default LocationCity;
