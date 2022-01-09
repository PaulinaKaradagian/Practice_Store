import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductosPage from "@/views/productos/ProductosPage.vue"
import CategoriesPage from "@/views/categorias/CategoriesPage.vue"
import ProductosPorCategoriaPage from "@/views/productos/ProductosPorCategoriaPage.vue"

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/products',
        name: 'productos',
        component: ProductosPage
    },
    {
        path: '/categorias',
        component: CategoriesPage,

        children: [{
            path: '/:category',
            name: 'categorias',
            component: ProductosPorCategoriaPage,
        }]
    },


]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router