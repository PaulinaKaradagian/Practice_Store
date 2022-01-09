<template>
    <div class= "cell grid-x grid-margin-x">
        <div class= "cell small-6 medium-4 large-3"
             v-for= "producto in productos" :key="producto.id">
                 <v-card-product
                    :image= "producto.main_image"
                    :name= "producto.name" 
                    :price= "producto.price"   
                /> 
        </div>

    </div>
</template>

<script>
    import vCardProduct from '@/components/base/vCardProduct.vue'
    import apiProductos from "@/api/productos"
    export default {
        name:"ProductosPorCategoria",
        components:{
            vCardProduct,
        },
        data(){
            return{
                productos:[]
            }
        },
        watch: {
            '$route.params.category': function(){
                this.filtrarProductos()
            }
        },
        
        methods: {
            filtrarProductos: function(){
                let filtros = "category="+this.$route.params.category
                apiProductos.filtrarProductos(filtros).then(response => {
                    this.productos = response.data.results
                })
            }
         },
         beforeMount: function(){
             this.filtrarProductos()
         }
}    
</script>

<style lang="css" scoped>

</style>