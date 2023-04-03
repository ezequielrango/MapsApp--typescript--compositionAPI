import { usePlacesStore } from "@/composables";
import { defineComponent } from "vue";

export default defineComponent({
    name: 'MapView',
    setup() {
        
        const { userLocation, isUserlocationReady } = usePlacesStore()
        console.log(isUserlocationReady);
        
        return{

            isUserlocationReady
        }
    },
});