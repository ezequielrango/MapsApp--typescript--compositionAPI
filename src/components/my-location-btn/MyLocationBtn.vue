<template>
    <button v-if="isBtnReady"
            class="btn btn-primary"
            @click="onMyLocationClicked"
            >Mi Ubi</button>
</template>

<script lang="ts">
import { usePlacesStore } from "@/composables";
import { useMapStore } from "@/composables/useMapStore";
import { defineComponent,computed } from "vue";



export default defineComponent({
    name: 'MyLocationBtn',
    setup() {

        const {userLocation,isUserlocationReady} = usePlacesStore();
        const {map,isMapReady} = useMapStore();

        return {

            isBtnReady: computed<boolean>(()=> isUserlocationReady.value && isMapReady.value),

            onMyLocationClicked: () => {
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14
                })
            }
        }
    }
})
</script>

<style scoped>
button {
    position: fixed;
    top: 30px;
    right: 30px;
}
</style>