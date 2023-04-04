import { usePlacesStore } from "@/composables";
import { defineComponent, onMounted, ref, watch } from "vue";
import mapboxgl from 'mapbox-gl';
import { useMapStore } from "@/composables/useMapStore";
 

export default defineComponent({
    name: 'MapView',
    setup() {
        

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore()
        const {setMap} = useMapStore()


        const initMap = async () => {
            if ( !mapElement.value ) throw new Error('Div Element no exits');
            if ( !userLocation.value ) throw new Error('user location no existe');
      
            await Promise.all
      
            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });

            const myLocationPopUp= new mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <p>Rosario</p>
                    <p>${userLocation.value}</p>
                `)
            
            const myLocationMarker = new mapboxgl.Marker()
            .setLngLat(userLocation.value)
            .setPopup(myLocationPopUp)
            .addTo(map)
            
            
            setMap(map);
        } 


        onMounted(() => {
            if(isUserlocationReady.value) 
                return initMap();
            
        });

        watch( isUserlocationReady, (newVal) => {
            if(isUserlocationReady) 
            return initMap();
            })


        return{

            isUserlocationReady,
            mapElement
        }
    },
});