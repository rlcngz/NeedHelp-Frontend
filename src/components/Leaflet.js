import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { selectMapItems } from "../store/categories/selectors";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function Leaflet() {
  const position = [52.377956, 4.89707];
  const items = useSelector(selectMapItems);
  const history = useHistory();

  const onPopupClick = (id) => {
    history.push(`/spaces/${id}`);
  };

  // console.log("title", items);

  return (
    <div
      style={{
        height: "150px",
        width: 100,
      }}
    >
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={true}
        style={{
          border: "2px solid",
          borderRadius: "10px",
          height: "40vw",
          width: "50vw",
          maxWidth: "600px",
          maxHeight: "500px",
          margin: "0px 18%",
        }}
      >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {items.map((item) => (
          <Marker key={item.id} position={[item.lat, item.lng]}>
            <Popup key={item.id}>
              <img
                key={item.id}
                src={item.logoUrl}
                alt={item.title}
                style={{ width: "100px", borderRadius: "0.5em" }}
              />
              <p>
                <b>{item.title}</b>
              </p>
              <button onClick={() => onPopupClick(item.id)}>More</button>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Leaflet;
