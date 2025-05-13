import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Search, Clock } from "lucide-react";
import L from "leaflet";

// Store data
const stores = [
  {
    name: "Pepe's",
    address: "100-104 Lothian Road, Edinburgh, EH3 9BE",
    opensAt: "11:00",
    lat: 55.946962,
    lng: -3.205546,
  },
  {
    name: "Pepe's",
    address: "13a Drum Street, Edinburgh, EH17 8QQ",
    opensAt: "11:00",
    lat: 55.912151,
    lng: -3.134189,
  },
  {
    name: "Pepe's",
    address: "24 Union Street, Aldershot, GU11 1DA",
    opensAt: "12:00",
    lat: 51.248333,
    lng: -0.763889,
  },
];

const StoreLocatorMap = () => {
  const [search, setSearch] = useState("");
  const [showOpenOnly, setShowOpenOnly] = useState(false);

  // Function to check if the store is open
  const isStoreOpen = (store) => {
    const currentTime = new Date();
    const [hours, minutes] = store.opensAt.split(":").map(Number);
    const storeOpeningTime = new Date();
    storeOpeningTime.setHours(hours, minutes, 0, 0);
    return currentTime >= storeOpeningTime;
  };

  // Filter stores based on search and open status
  const filteredStores = stores.filter((store) => {
    const isSearchMatch =
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase());
    const isOpenMatch = !showOpenOnly || isStoreOpen(store);
    return isSearchMatch && isOpenMatch;
  });

  // Set custom icon for markers (fixes issue with Leaflet default icon)
  const markerIcon = new L.Icon({
    iconUrl: "/path-to-your-icon.png", // Set the path to your custom marker image
    iconSize: [25, 25], // Size of the marker
    iconAnchor: [12, 24], // Anchor point of the icon
    popupAnchor: [0, -24], // Position of the popup
  });

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 overflow-y-auto">
        <div className="flex mb-4 items-center space-x-2">
          <input
            type="text"
            placeholder="Search locations"
            className="w-full px-4 py-2 border rounded-full"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="bg-red-600 text-white px-4 py-2 rounded-full">
            <Search size={16} />
          </button>
        </div>
        <label className="flex items-center space-x-2 mb-4">
          <input
            type="checkbox"
            checked={showOpenOnly}
            onChange={() => setShowOpenOnly(!showOpenOnly)}
          />
          <span>Only open locations</span>
        </label>
        {filteredStores.map((store, index) => (
          <div
            key={index}
            className="border p-4 rounded-md shadow-sm mb-4 flex justify-between items-start"
          >
            <div>
              <h2 className="font-bold">{store.name}</h2>
              <p className="text-sm">{store.address}</p>
              <p className="flex items-center text-xs text-gray-500 mt-1">
                <Clock className="w-4 h-4 mr-1" /> Closed now - Opens at {store.opensAt}
              </p>
            </div>
            <img
              src="/assets/images/home/logo.png" 
              alt="Logo"
              className="w-10 h-10"
            />
          </div>
        ))}
      </div>

      {/* Map */}
      <div className="flex-1 relative z-0">
        <MapContainer
          center={[55.946962, -3.205546]}
          zoom={6}
          className="h-full w-full z-0"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {filteredStores.map((store, idx) => (
            <Marker position={[store.lat, store.lng]} key={idx} icon={markerIcon}>
              <Popup>
                <strong>{store.name}</strong>
                <br />
                {store.address}
                <br />
                Opens at {store.opensAt}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default StoreLocatorMap;
