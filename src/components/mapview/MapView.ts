import { usePlacesStore } from "@/composables";
import { defineComponent, onMounted, ref } from "vue";
import mapboxgl from 'mapbox-gl';
 

export default defineComponent({
    name: 'MapView',
    setup() {
        

        const mapElement = ref<HTMLDivElement>();
        const { userLocation, isUserlocationReady } = usePlacesStore()
       
        const initMap = () => {
            if(!mapElement.value) throw new Error('Div Element no exist');
            if(!userLocation.value) throw new Error('user lcocation no exist');

            const map = new mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/streets-v12', // style URL
                center: userLocation.value, // starting position [lng, lat]
                zoom: 15, // starting zoom
                });
        }

        onMounted(() => {
            if(isUserlocationReady) 
                return initMap();
            
        })
        return{

            isUserlocationReady,
            mapElement
        }
    },
});