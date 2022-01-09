<template>
    <div class="grid-container">
        <div class= "grid-x grid-margin-x">
            <h1 class= "cell title">Products</h1>
        
             <productos-populares/>
        
        </div>

    </div>
</template>

<script>
import ProductosPopulares from "@/components/productos/ProductosPopulares.vue"
    export default {
        name: "ProductosPage",
        components: {
            ProductosPopulares,
        },
    }
</script>

<style lang="css" scoped>
.title{
    font-family: "Bebas Neue", cursive;
    text-align: center;
    

}
</style>