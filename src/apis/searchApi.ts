import axios from 'axios';


const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params:{
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiZXplcmFuZ29kZXYiLCJhIjoiY2xnMWFuNDdpMGFkMzNncnE0MHZpd3U5OCJ9.TWvmzLh4u9qTaIlhRO6uWw'
    }
})

export default searchApi;