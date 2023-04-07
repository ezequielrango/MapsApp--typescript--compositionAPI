<script lang="ts" src="./SearchResults.ts"></script>
<template>

    <div v-if="isLoadingPlaces"
        class="alert alert-primary text-center">
    <h5>Cargando...</h5>
    <span>Espere por favor...</span>
    </div>
    
    <ul v-else-if="places.length > 0" 
        class="list-group mt-3">
                <li v-for="place in places"
                :key="place.id"
                @click="onPlaceClicked(place)"
                class="list-group-item list-group-item-action"
                :class="{'active': place.id === activePlace}"
                >{{place.text}}
                    
                <h3>{{ place.place_name}}</h3>
                    <div>
                        <button 
                            class="btn btn-outline-primary btn-sm"
                            :class="(place.id === activePlace) ? 'btn btn-outline-light' : 'btn btn-outline-primary'"
                            @click.self="getRouteDirections(place)"
                            >
                            Direcciones
                        </button>
                    </div>
                </li>  
            </ul>
            
    
</template>

<style scoped>
li{
    cursor: pointer;
}
h5,h3{
    font-size: 15px !important;
}
p{
    font-size: 10px !important;
}
</style>

