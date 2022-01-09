<template>
    <div class= "header">
       <a href="#" class= "header__logo">My Catalogue</a>
    
        <ul class= "header__menu">
            <li class= "header__menu__item">
                <router-link :to="{name: 'productos'}" class= "header__menu__item__link">
                Products
                </router-link>
            </li>
            
            
            <li class= "header__menu__item">
                <router-link :to="{name: 'categorias', params:{'category': ' '}}" class="header__menu__item__link">
                Categories
                </router-link>
            </li>
        </ul>
    
    
    </div>
</template>

<script>
    export default {
        name: "MainHeader",
    }
</script>

<style lang="css" scoped>
.header {
    background: #2980b9;
    display: flex;
    justify-content: center;
    align-items: center;
}
.header__logo{
    color: white;
    font-family: "Bebas Neue", cursive;
   font-size: 20px;
    text-decoration: none;

}
.header__menu{
    display: none;
    justify-content: space-between;
    align-items: center;
    list-style: none;
}
.header__menu__item{
    color: white;
    font-family: "Bebas Neue", cursive;
    text-decoration: none;
    align-items: center;
    justify-content: space-between;
}
.header__menu__item__link{
    color: white;
    font-family: "Bebas Neue", cursive;
    text-decoration: none;
    align-items: center;
    justify-content: space-between;
}

@media screen and (min-width: 720px){
    .header {
        justify-content: space-between;
        padding: 1em;
    }
    .header__logo{
        font-size: 30px;
    }
    
    .header__menu{
        display: flex;
        list-style: none;
        padding: 0px;
        margin: 0px;
    }
    .header__menu__item{
        margin: 5px;
        font-size: 20px;
    }
    .header__menu__item__link{
        display: block;
        padding: 5px 10px;
        font-size: 20px;
        font-family: "Nunito", sans-serif;
        font-weight: bold;
        text-decoration: none;
    }
}
</style>