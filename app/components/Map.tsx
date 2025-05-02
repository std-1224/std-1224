import {
    GoogleMap,
    LoadScript,
    Marker
} from '@react-google-maps/api';
import cx from 'classnames';
import { useEffect, useState } from 'react';
import { GOOGLE_MAPS_API_KEY } from '../config/env';

interface Props {
    className?: string;
    width?: string;
    height?: string;
}

const Map: React.FC<Props> = ({
    className,
    width = '100%',
    height = '300px'
}) => {
    const [userLocation, setUserLocation] = useState<{ lat: number; lng: number } | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Default location (San Francisco)
    const defaultLocation = { lat: 37.7749, lng: -122.4194 };

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
    }, []);

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
            {isLoading && (
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

            <LoadScript
                googleMapsApiKey={GOOGLE_MAPS_API_KEY}
                libraries={['geometry']}
            >
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
            </LoadScript>
        </div>
    );
};

export default Map;