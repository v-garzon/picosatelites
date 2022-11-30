import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from '@react-google-maps/api'

function Map() {
    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: 'AIzaSyD8Gc-gVw6sOlFiAPhr-ui018axsm7KnUI'
    })

    const center = useMemo(() => ({lat: 41.30346532750961, lng: 1.9935433113916226}), [])

    if (!isLoaded) return <div>Loading...</div>
    return (
        <GoogleMap zoom={16} center={center} mapContainerClassName='map-container'>
            <MarkerF position={center}/>
        </GoogleMap>
    )
}

export default Map


