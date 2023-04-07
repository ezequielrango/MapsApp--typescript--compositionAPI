<template>
    <div v-if="distance"
        class="trip-container column">
        <div class="col">Distancia:  <strong>{{distance}} kms</strong></div>
        <div class="col">Duración:  <strong>{{duration}} minutos</strong></div>

    </div>
</template>
<script lang="ts">

import { useMapStore } from "@/composables/useMapStore";
import { defineComponent } from "vue";



export default defineComponent({
    name: 'TripDetails',
    setup(){

       const {duration, distance} = useMapStore()

        return{
            duration,
            distance
        }
    }
})
</script>

<style scoped>
.trip-container{
    padding: 10px;
    position: fixed;
    bottom: 100px;
    right: 20px;
    border-radius: 10px;
    background-color: rgb(210, 221, 115);
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
    font-size: 20px;
    width: 350px;
}
strong{
    color: #42b983;
}
</style>