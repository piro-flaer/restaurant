import React, { useEffect, useState } from "react";
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import "../css/MapAPI.css";
import { motion } from "framer-motion";
import AddressDetails from "./AddressDetails";
import ShowDirection from "./ShowDirection";

const MapAPI = ({ latValue, longValue, keyValue }) => {
  const [mapZoom, setMapZoom] = useState(12.5);
  const [address, setAddress] = useState();
  const [showDir, setShowDir] = useState(false);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
  });

  useEffect(() => {
    if (isLoaded) {
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode(
        { location: { lat: latValue, lng: longValue } },
        (results, status) => {
          if (status === "OK") {
            setAddress(results[0].formatted_address);
          } else {
            setAddress("Address not found");
          }
        }
      );
    }
  }, [isLoaded, latValue, longValue]);

  return (
    <>
      {isLoaded ? (
        <div>
          <motion.div
            onClick={() => {
              setShowDir(!showDir);
            }}
            style={{
              boxShadow: "2px 5px 15px black",
              position: "relative",
              zIndex: 2,
            }}
            whileHover={{
              scaleX: 1.25,
              scaleY: 1.5,
            }}
            whileTap={{
              scaleX: 1,
              scaleY: 1.25,
            }}
            onHoverStart={() => {
              setMapZoom(15);
              document.querySelectorAll(".addressdetails")[
                keyValue
              ].style.height = "2.75rem";
              document
                .querySelectorAll(".mapdataholder")
                .forEach((divItem, index) => {
                  if (index !== keyValue) divItem.classList.add("outofview");
                });
            }}
            onHoverEnd={() => {
              setMapZoom(12.5);
              document.querySelectorAll(".addressdetails")[
                keyValue
              ].style.height = "0";
              document
                .querySelectorAll(".mapdataholder")
                .forEach((divItem, index) => {
                  if (index !== keyValue) divItem.classList.remove("outofview");
                });
            }}
          >
            <GoogleMap
              zoom={mapZoom}
              center={{ lat: latValue, lng: longValue }}
              clickableIcons={false}
              mapContainerClassName="mapholder"
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
              <MarkerF
                position={{
                  lat: latValue,
                  lng: longValue,
                }}
                animation={window.google.maps.Animation.DROP}
                icon={{
                  url: "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/geocode-71.png",
                  scaledSize: { width: 50, height: 50 },
                }}
              />
            </GoogleMap>
            <AddressDetails addressValue={address} />
          </motion.div>
          <ShowDirection
            showDirection={showDir}
            setShowDirection={setShowDir}
            keyValue={keyValue}
            latitude={latValue}
            longitude={longValue}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default MapAPI;
