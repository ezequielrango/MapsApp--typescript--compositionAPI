import { usePlacesStore } from "@/composables";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'SearchResults',
    setup(){

        const {places, isLoadingPlaces} = usePlacesStore()
        const activePlace= ref('');
        return{
            places,
            isLoadingPlaces,
            activePlace,

            onPlaceClicked: (place : Feature) {
                activePlace.value = place.id
            }
        }
    }
})