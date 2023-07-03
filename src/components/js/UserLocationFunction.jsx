import { useEffect, useState } from "react";
import axios from "axios";

const UserLocationFunctionCity = () => {
  const [currLocationCity, setCurrLocationCity] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const permissionStatus = await navigator.permissions.query({
      name: "geolocation",
    });
    permissionStatus.state === "granted" &&
      (async () => {
        const locationCity = await axios.get("https://ipapi.co/city/");
        setCurrLocationCity(locationCity.data.toUpperCase());
      })();
    };

  return currLocationCity;
};

export default UserLocationFunctionCity;

const UserLocationFunctionCoords = () => {
  const [currLocationCoords, setCurrLocationCoords] = useState();

  useEffect(() => {
    getLocation();
  }, []);

  const getLocation = async () => {
    const permissionStatus = await navigator.permissions.query({
      name: "geolocation",
    });
    permissionStatus.state === "granted" &&
      (async () => {
        const locationCoords = await axios.get("https://ipapi.co/latlong/");
        setCurrLocationCoords(locationCoords.data);
      })();
    };

  return currLocationCoords;
};

export { UserLocationFunctionCoords };
