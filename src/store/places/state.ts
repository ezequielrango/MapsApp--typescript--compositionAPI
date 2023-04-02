export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number]; //latitud y longitud
}

function state(): PlacesState {
    return {
        isLoading: true,
        userLocation: undefined
    }
}

export default state;