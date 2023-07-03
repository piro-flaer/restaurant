import React, { useEffect, useState } from "react";
import "../css/CityShow.css";
import "../css/CityBody.css";
import UserCityHead from "./UserCityHead";
import UserCityBody from "./UserCityBody";
import CityHead from "./CityHead";
import UserLocationFunctionCity from "./UserLocationFunction";

const CityShow = ({ selectedCityName }) => {
  const [isInView, setIsInView] = useState(false);
  const userCity = UserLocationFunctionCity();
  useEffect(() => {
    userCity && setIsInView(true);
  }, [userCity]);

  useEffect(() => {
    selectedCityName && setIsInView(false);
  }, [selectedCityName]);

  const class01 = userCity || selectedCityName ? "show " : "";
  const class02 = isInView ? "cityheader inview" : "cityheader";

  return (
    <>
      <div className="cityshow">
        <div
          className={
            userCity || selectedCityName
              ? "cityheadercontainer cityheadershow"
              : "cityheadercontainer"
          }
        >
          {userCity && (
            <div
              style={{ cursor: "pointer" }}
              onClick={() => {
                setIsInView(!isInView);
              }}
            >
              <UserCityHead
                classValue={
                  isInView ? "cityheader show" : "cityheader inview show"
                }
                userCityValue={userCity}
              />
            </div>
          )}
          <div
            style={{ cursor: "pointer" }}
            onClick={() => {
              setIsInView(!isInView);
            }}
          >
            <CityHead
              classValue={class01 + class02}
              cityName={selectedCityName ? selectedCityName : ""}
            />
          </div>
        </div>
        <div className="citybodycontainer">
          {userCity && isInView && <UserCityBody userCityValue={userCity} />}
          {!isInView && <UserCityBody userCityValue={selectedCityName} />}
        </div>
      </div>
    </>
  );
};

export default CityShow;
