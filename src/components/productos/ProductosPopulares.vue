<template>
    <div class="cell grid-x grid-margin-x">
        <div class= "cell small-6 medium-4 large-3"
          v-for= "producto in productos" :key="producto.id">
           <v-card-product
            :image= "producto.main_image"
            :name= "producto.name" 
            :price= "parseFloat(producto.price)"   
            /> 
        </div>

    </div>
</template>

<script>
    import vCardProduct from "@/components/base/vCardProduct.vue"
    import apiProductos from "@/api/productos.js"
    export default {
        name: "ProductosPopulares",
        components: {
            vCardProduct,
        },
        data(){
            return {
                productos: [],
            }
        },
        
        methods: {
            cargarProductos: function(){
                apiProductos.productosPopulares().then(response => {
                    this.productos = response.data.results
                })
        },
    },
        mounted: function(){
            this.cargarProductos()
        },
}
</script>

<style lang="css" scoped>

</style>