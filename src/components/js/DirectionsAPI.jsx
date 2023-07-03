import React, { useState, useEffect, useRef } from "react";
import { UserLocationFunctionCoords } from "./UserLocationFunction";
import {
  GoogleMap,
  DirectionsRenderer,
  useLoadScript,
} from "@react-google-maps/api";

const DirectionsAPI = ({ destLatValue, destLongValue }) => {
  const userCoords = UserLocationFunctionCoords();
  const srcLatValue = parseFloat(userCoords?.split(",")[0]);
  const srcLongValue = parseFloat(userCoords?.split(",")[1]);

  const [path, setPath] = useState(null);
  const mapRef = useRef(null);
  const srcLocation = { lat: srcLatValue, lng: srcLongValue };
  const destLocation = { lat: destLatValue, lng: destLongValue };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  useEffect(() => {
    const directionsService = new window.google.maps.DirectionsService();
    srcLatValue &&
      srcLongValue &&
      directionsService.route(
        {
          origin: { lat: srcLatValue, lng: srcLongValue },
          destination: { lat: destLatValue, lng: destLongValue },
          travelMode: "DRIVING",
        },
        (response, status) => {
          if (status === "OK") {
            setPath(response);
          } else {
            console.log("Directions request failed");
            setPath(null);
          }
        }
      );
  }, [srcLatValue, srcLongValue, destLatValue, destLongValue]);

  return (
    <div>
      {isLoaded && (
        <GoogleMap
          onLoad={(map) => {
            mapRef.current = map;
          }}
          center={{ lat: srcLatValue, lng: srcLongValue }}
          zoom={15}
          mapContainerStyle={{ width: "52rem", height: "22.5rem" }}
          clickableIcons={false}
          options={{
            mapId: "c8bfd48d2fc6f3e0",
            fullscreenControl: false,
            mapTypeControl: false,
            streetViewControl: false,
            zoomControl: false,
            disableDoubleClickZoom: false,
            scrollwheel: true,
          }}
        >
          {path && <DirectionsRenderer directions={path} />}
          <button
            className="mapbutton src"
            onClick={() => {
              mapRef.current.panTo(srcLocation);
            }}
            // style={{
            //   height: "35px",
            //   width: "35px",
            //   borderRadius: "50%",
            //   position: "absolute",
            //   right: "0px",
            //   bottom: "50px",
            //   background: "transparent",
            //   cursor: "pointer",
            //   margin: "0.5rem",
            //   zIndex: 2,
            // }}
          >
            <i className="fa-solid fa-location-crosshairs"></i>
          </button>
          <button
            className="mapbutton dest"
            onClick={() => {
              mapRef.current.panTo(destLocation);
            }}
            // style={{
            //   height: "35px",
            //   width: "35px",
            //   borderRadius: "50%",
            //   position: "absolute",
            //   right: "0px",
            //   bottom: "0px",
            //   background: "transparent",
            //   cursor: "pointer",
            //   margin: "0.5rem",
            //   zIndex: 2,
            // }}
          >
            <i className="fa-solid fa-location-dot"></i>
          </button>
        </GoogleMap>
      )}
    </div>
  );
};

export default DirectionsAPI;
