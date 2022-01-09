<template>
<div class= "grid-container">
    <div class= "cell small-12 medium-10 large-9">
       <div class= "producto">
        <img :src="image" class="producto__img">
        <a href="#"
           class= "producto__name">
            {{ name }}
        </a>
        <p class= "producto__price">
            $ {{ price }}
        </p>
        </div>
    </div>
</div>
</template>

<script>
    export default {
        name:"vCardProduct",
        props:{
            image: String,
            name: String,
            price: Number,
        },
    }
</script>

<style lang="css" scoped>
.producto {
    margin: 5px;
    background: #bdc3c7;
    border: 1px solid;
    text-align: center;
}
.producto__img {
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
}

.producto__name{
    font-family: "Nunito", sans-serif;
    display: block;
    text-decoration: none;
    color: #2c3e50;
    padding-left: 10px;
    margin-bottom: 10px;
    text-transform: capitalize;
}
.producto__price{
    display: block;
    text-decoration: none;
    font-family: "Nunito", sans-serif;
    font-size: 20px;
    font-weight: bold;
    padding-left: 10px;
    margin-bottom: 10px;
    color: #2c3e50;

}

</style>