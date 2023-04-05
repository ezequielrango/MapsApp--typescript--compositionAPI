import { StateInterface } from "@/store"
import { computed, onMounted } from "vue";
import { useStore } from "vuex"

export const usePlacesStore = () => {

    const store = useStore<StateInterface>();

    onMounted( () => {
        if ( !store.getters['places/isUserlocationReady'] ) {
            store.dispatch('places/getInitialLocation');
        }
    });
    return {
        //state
        isLoading: computed(() => store.state.places.isLoading),
        userLocation: computed( () => store.state.places.userLocation ),
        places: computed(() => store.state.places.places),
        isLoadingPlaces: computed(() => store.state.places.isLoadingPlaces),

        //getters
        isUserlocationReady: computed<boolean>(() => store.getters['places/isUserlocationReady']),
    
        searchPlacesByTerm: ( query: '') => store.dispatch('places/searchPlacesByTerm',query)
    
    }
}