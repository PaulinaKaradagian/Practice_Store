import axios from 'axios'

const apiCategorias = {
    listarCategorias: function() {
        return axios.get('https://servicios.neunapp.com/api/tienda/categorias/lista/')
    }
}

export default apiCategorias