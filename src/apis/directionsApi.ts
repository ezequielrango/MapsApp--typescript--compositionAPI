import axios from 'axios';


const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving   ',
    params:{
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: 'false',
        access_token: 'pk.eyJ1IjoiZXplcmFuZ29kZXYiLCJhIjoiY2xnMWFuNDdpMGFkMzNncnE0MHZpd3U5OCJ9.TWvmzLh4u9qTaIlhRO6uWw'
    }
})

export default directionsApi;