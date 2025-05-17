import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Search, Clock } from "lucide-react";
import L from "leaflet";

// Store data
const stores = [
  {
    name: "Flame'n Bun",
    address: "14 Lambton Rd, Raynes Park, London SW20 0LR, United Kingdom",
    opensAt: "11:00",
    lat: 51.4215,
    lng: -0.2101,
  },
];

// Helper component to change map view when center changes
function ChangeView({ center, zoom }) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const StoreLocatorMap = () => {
  const [search, setSearch] = useState("");
  const [showOpenOnly, setShowOpenOnly] = useState(false);

  // Map center and zoom state
  const [mapCenter, setMapCenter] = useState([51.4221, -0.2104]);
  const [mapZoom, setMapZoom] = useState(15);

  const isStoreOpen = (store) => {
    const currentTime = new Date();
    const [hours, minutes] = store.opensAt.split(":").map(Number);
    const storeOpeningTime = new Date();
    storeOpeningTime.setHours(hours, minutes, 0, 0);
    return currentTime >= storeOpeningTime;
  };

  const filteredStores = stores.filter((store) => {
    const isSearchMatch =
      store.name.toLowerCase().includes(search.toLowerCase()) ||
      store.address.toLowerCase().includes(search.toLowerCase());
    const isOpenMatch = !showOpenOnly || isStoreOpen(store);
    return isSearchMatch && isOpenMatch;
  });

  const markerIcon = new L.Icon({
    iconUrl: "/path-to-your-icon.png",
    iconSize: [25, 25],
    iconAnchor: [12, 24],
    popupAnchor: [0, -24],
  });

  // When a store is clicked in sidebar, update map center and zoom
  const handleStoreClick = (store) => {
    setMapCenter([store.lat, store.lng]);
    setMapZoom(17); // Zoom in closer to location
  };

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
            onClick={() => handleStoreClick(store)}  // Add click handler here
            className="border p-4 rounded-md shadow-sm mb-4 flex justify-between items-start cursor-pointer hover:bg-gray-100"
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
          center={mapCenter}
          zoom={mapZoom}
          className="h-full w-full z-0"
          scrollWheelZoom={false}
        >
          <ChangeView center={mapCenter} zoom={mapZoom} />
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
