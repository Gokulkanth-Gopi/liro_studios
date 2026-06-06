'use client';
import { useState, useRef } from 'react';
import Map, { Marker, Popup, NavigationControl, MapRef } from 'react-map-gl/maplibre';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

import './global-map.scss';

/* ─── City coordinates ──────────────────────────────────────── */
interface City { lat: number; lng: number; name: string; detail: string; img: string; }
const CITIES: City[] = [
    { lat: 36.7783, lng: -119.42, name: 'California, US', detail: 'North American Hub', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=300&h=200&fit=crop&q=80' },
    { lat: 31.9686, lng: -99.9, name: 'Texas, US', detail: 'Operations Center', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop&q=80' },
    { lat: 43.6525, lng: -79.3817, name: 'Canada', detail: 'Northern Data Center', img: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=300&h=200&fit=crop&q=80' },
    { lat: 51.5074, lng: -0.13, name: 'London, UK', detail: 'European Gateway', img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=300&h=200&fit=crop&q=80' },
    { lat: 29.3759, lng: 47.98, name: 'Kuwait', detail: 'Middle East Hub', img: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=300&h=200&fit=crop&q=80' },
    { lat: 28.3949, lng: 84.12, name: 'Nepal', detail: 'Regional Node', img: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=300&h=200&fit=crop&q=80' },
    { lat: 11.6643, lng: 78.1460, name: 'Tamil Nadu', detail: 'Global Headquarters', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=200&fit=crop&q=80' },
    { lat: 1.3521, lng: 103.82, name: 'Singapore', detail: 'Southeast Asia Hub', img: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=300&h=200&fit=crop&q=80' },
    { lat: 4.2105, lng: 101.98, name: 'Malaysia', detail: 'Tech Operations', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=300&h=200&fit=crop&q=80' },
    { lat: 12.8797, lng: 121.77, name: 'Philippines', detail: 'Support & Delivery', img: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=300&h=200&fit=crop&q=80' },
];
const HUB_INDEX = 6;

const GlobalMap = () => {
    const mapRef = useRef<MapRef>(null);
    const [selectedCity, setSelectedCity] = useState<City | null>(null);

    return (
        <section className="world-map-main-con py-16">
            <div className="container mx-auto px-4">
                <div className="generic-title text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400" suppressHydrationWarning={true}>
                        Global Digital Network
                    </h2>
                    <p className="text-lg" style={{ color: '#69c45b', opacity: 1, fontWeight: 500 }} suppressHydrationWarning={true}>
                        Delivering high-performance digital solutions worldwide
                    </p>
                </div>

                <div className="map-container relative mx-auto rounded-xl overflow-hidden shadow-2xl border border-gray-800">
                    <Map
                        ref={mapRef}
                        mapLib={maplibregl}
                        initialViewState={{
                            longitude: CITIES[HUB_INDEX]?.lng ?? 78.96,
                            latitude: CITIES[HUB_INDEX]?.lat ?? 20.59,
                            zoom: 3
                        }}
                        mapStyle="https://tiles.openfreemap.org/styles/liberty"
                        interactiveLayerIds={['clusters']}
                    >
                        <NavigationControl position="bottom-right" />

                        {CITIES.map((city, index) => {
                            const isHub = index === HUB_INDEX;
                            return (
                                <Marker
                                    key={city.name}
                                    longitude={city.lng}
                                    latitude={city.lat}
                                    anchor="bottom"
                                    onClick={e => {
                                        // If we let the click event propagates to the map, it will immediately close the popup
                                        // with `closeOnClick: true`
                                        e.originalEvent.stopPropagation();
                                        setSelectedCity(city);
                                    }}
                                >
                                    <div className={`custom-marker ${isHub ? 'hub-marker' : ''}`}>
                                        <div className="marker-dot"></div>
                                        {isHub && <div className="marker-pulse"></div>}
                                    </div>
                                </Marker>
                            );
                        })}

                        {selectedCity && (
                            <Popup
                                anchor="top"
                                longitude={selectedCity.lng}
                                latitude={selectedCity.lat}
                                onClose={() => setSelectedCity(null)}
                                closeButton={false}
                                className="custom-popup"
                            >
                                <div className="popup-content">
                                    <h4 className="popup-title">{selectedCity.name}</h4>
                                    <div className="popup-image-wrapper">
                                        <img src={selectedCity.img} alt={selectedCity.name} />
                                    </div>
                                    <p className="popup-detail">{selectedCity.detail}</p>
                                </div>
                            </Popup>
                        )}
                    </Map>
                </div>
            </div>
            
            <div className="globe-legend container mx-auto px-4 mt-8">
                {CITIES.map((city, index) => (
                    <button 
                        key={city.name} 
                        type="button"
                        className={`globe-legend-item ${index === HUB_INDEX ? 'hub' : ''}`}
                        onClick={() => {
                            setSelectedCity(city);
                            mapRef.current?.getMap().easeTo({
                                center: [city.lng, city.lat],
                                zoom: 5,
                                duration: 1000
                            });
                        }}
                    >
                        <span className="globe-legend-dot"></span>
                        {city.name}
                    </button>
                ))}
            </div>
        </section>
    );
};

export default GlobalMap;
