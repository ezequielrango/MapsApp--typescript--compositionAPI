import { usePlacesStore } from "@/composables";
import { useMapStore } from "@/composables/useMapStore";
import { Feature } from "@/interfaces/places";
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
    name: 'SearchResults',
    setup(){
        const {map,setPlaceMarkers, getRouteBetweenPoints} = useMapStore()
        const {places, isLoadingPlaces,userLocation} = usePlacesStore()
        const activePlace= ref('');

        watch(places, (newPlaces)=> {
            setPlaceMarkers(newPlaces);
        });
        return{
            places,
            isLoadingPlaces,
            activePlace,

            onPlaceClicked: ( place: Feature ) => {
        
                activePlace.value = place.id;
        
                const [ lng, lat ] = place.center;
        
                map.value?.flyTo({
                  center: [ lng, lat ],
                  zoom: 14
                });
        
              },
        
              getRouteDirections: (place: Feature) => {
                if ( !userLocation.value ) return;
                
                const [ lng, lat ] = place.center;
                
                const [startLng, startLat ] = userLocation.value;
        
                const start: [number, number] = [startLng, startLat];
                const end  : [number, number] = [lng, lat];
        
                getRouteBetweenPoints( start, end );
              }
            }
          }
        });