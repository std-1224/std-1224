// Map.tsx
import {
    GoogleMap,
    useJsApiLoader,
    Marker
} from '@react-google-maps/api';
import cx from 'classnames';
import { useEffect } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../config/env';
import { useMapStore } from '../store/mapStore'; // Import the store

interface Props {
    className?: string;
    width?: string;
    height?: string;
    googleMapsApiKey?: string;
}

const Map: React.FC<Props> = ({
    className,
    width = '100%',
    height = '300px',
    googleMapsApiKey = GOOGLE_MAPS_API_KEY
}) => {
    // Use the store instead of useState
    const {
        userLocation,
        isLoading,
        defaultLocation,
        setUserLocation,
        setIsLoading
    } = useMapStore();

    // Use the useJsApiLoader hook to check if Google Maps API is already loaded
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey,
        libraries: ['geometry']
    });

    // Container style with explicit dimensions
    const mapContainerStyle = {
        width: width,
        height: height,
        borderRadius: '8px',
    };

    // Get user's location on component mount
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    setIsLoading(false);
                },
                () => {
                    // Fall back to default location if geolocation fails
                    console.warn('Geolocation permission denied or unavailable');
                    setIsLoading(false);
                }
            );
        } else {
            console.warn('Geolocation is not supported by this browser');
            setIsLoading(false);
        }
    }, []); // Only run on mount

    // Center map on user location if available, otherwise use default
    const center = userLocation || defaultLocation;

    return (
        <div
            className={cx('map-container', className)}
            style={{
                width: width,
                height: height,
                position: 'relative'
            }}
        >
            {/* Show loading state when map is loading or when getting user location */}
            {(isLoading || !isLoaded) && (
                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: '#f8f9fa',
                        zIndex: 10,
                        borderRadius: '8px',
                    }}
                >
                    Loading map...
                </div>
            )}

            {/* Render map only when Google Maps script is loaded */}
            {isLoaded && (
                <GoogleMap
                    mapContainerStyle={mapContainerStyle}
                    center={center}
                    zoom={14}
                    options={{
                        mapTypeControl: false,
                        streetViewControl: false,
                        fullscreenControl: true
                    }}
                >
                    {userLocation && (
                        <Marker
                            position={userLocation}
                            title="Your Location"
                        />
                    )}
                </GoogleMap>
            )}
        </div>
    );
};

export default Map;