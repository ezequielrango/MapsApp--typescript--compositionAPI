import { MutationTree } from 'vuex';
import { PlacesState } from './state';


const mutation: MutationTree<PlacesState> = {
    setLngLat( state: PlacesState, coords ) {
        // a line to prevent linter errors
        state.userLocation = coords;
        state.isLoading = false;
    }
}


export default mutation;