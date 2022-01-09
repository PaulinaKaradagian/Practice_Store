<template>
    <div class= "cell">
        <ul class= "lista">
            <li v-for= "colores in listaColores" :key= "colores.id" class= "lista__item">
                <a class= "lista__item__link" href= "#"
                :style="{background: colores.value}">
                </a>
            </li>
        </ul>

    </div>
</template>

<script>
    import apiColores from "@/api/colores.js"
    export default {
        name:"TheListaColores",
        data(){
            return{
                listaColores:[]
            }
        },
        methods: {
            cargarColores: function(){
                apiColores.listarColores().then(response => {
                    this.listaColores = response.data
                })

            }
        },
        beforeMount: function(){
            this.cargarColores()
        }
    }
</script>

<style scoped>
    .lista{
        display: flex;
        list-style: none;
        justify-content: center;
        align-items: center;
        margin: 10px;
        padding: 0px;
        
        
    }
    .lista__item{
        display: block;
        margin-right: 3px;
    }
    .lista__item__link{
       display: block;
       padding: 10px;
       text-decoration: none;
       border: 1px solid #2c3e50;
       width: 30px;
       height: 30px;
       
    }
    .lista__item__link:hover{
              background: #bdc3c7;
       }
    

</style>