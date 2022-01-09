<template>
    <div class= "cell">
        <ul class= "lista">
            <li v-for= "categoria in listaCategorias" :key= "categoria.id" class= "lista__item">
                <router-link class= "lista__item__link" :to="{name: 'categorias', params: {'category': categoria.name_unique}}">
                {{categoria.name}}
                </router-link>
            </li>
        </ul>

    </div>
</template>

<script>
    import apiCategorias from "@/api/categorias.js"
    export default {
        name:"TheListaCategorias",
        data(){
            return{
                listaCategorias:[]
            }
        },
        methods: {
            cargarCategorias: function(){
                apiCategorias.listarCategorias().then(response => {
                    this.listaCategorias = response.data
                })

            }
        },
        beforeMount: function(){
            this.cargarCategorias()
        }
    }
</script>

<style scoped>
    .lista{
        list-style: none;
        padding: 0px;
        margin: 0px;
        
    }
    .lista__item{
        display: block;
    }
    .lista__item__link{
       display: block;
       padding: 10px;
       text-decoration: none;
       color:#2c3e50;
       font-family: "Nunito", sans-serif;
       
    }
    .lista__item__link:hover{
              background: #bdc3c7;
       }
    

</style>