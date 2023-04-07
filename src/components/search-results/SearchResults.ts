import { usePlacesStore } from "@/composables";
import { useMapStore } from "@/composables/useMapStore";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name: 'SearchResults',
    setup(){
        const {map,setPlaceMarkers} = useMapStore()
        const {places, isLoadingPlaces} = usePlacesStore()
        const activePlace= ref('');

        watch(places, (newPlaces)=> {
            setPlaceMarkers(newPlaces);
        });
        return{
            places,
            isLoadingPlaces,
            activePlace,

            onPlaceClicked: (place : Feature) => {
                activePlace.value = place.id;
                const [lng, lat] = place.center;
                map.value?.flyTo({
                    center: [lng, lat],
                    zoom: 14
                })
            }
        }
    }
})