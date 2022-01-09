<template>
    <div class = "banner">
      <img
      class= "banner__img" 
      src ="../../assets/store.jpg" alt="Store" />
    
       <h1 class= "banner__title"> Welcome to my Practice Store </h1>
        <div class= "banner__copy">
    
           <p class= "banner__copy__text">

             Small app with a catalogue products for practicing Vue.js, Router, API fetching, load data and life cycle methods. 
           </p>


    
        </div>
    </div>
</template>

<script>
    export default {
        name: "Banner",
        
    }
</script>

<style lang="css" scoped>

.banner{
    text-align: center;
}

.banner__img{
    width: 100%;
    height: 200px;
    
}
.banner__title{
    font-size: 2em;
    font-weight: bold;
    font-family: "Bebas Neue", cursive;
    color: #2980b9;
}
.banner__copy{
    padding: 1em;
    background: #7f8c8d;
    
}
.banner__copy__text{
    font-size: 1.2em;
    font-family: "Nunito", sans-serif;
    color: white;
}
@media screen and (min-width: 720px){
    .banner__img{
        height: 500px;
        }
    .banner__copy{
        margin-right: 8em;
        margin-left: 8em;
        height: 150px;
       
        }
    .banner__copy__text{
        margin-top: 40px;
        }
}
</style>