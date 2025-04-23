import { ref } from 'vue';

const Productos = {
    data() {
        const productos = ref([]);
        return {
            productos
        }
    },
    template: /*html */`
        <div>
            <button @click="cargarProductos">Cargar Productos</button>
            <h3>{{ titulo }}</h3>
            <table border="1">
                <tr v-for="producto in productos">
                    <td>{{ producto.id }}</td>
                    <td>{{ producto.nombre }}</td>
                </tr>
            </table>
        </div>
    `,
    methods: {
        cargarProductos() {
            fetch('http://127.0.0.1:5000/articulos-api')
                .then(response => response.json())
                .then(data => {
                    this.productos = data.map(item => ({
                        id: item.id,
                        nombre: item.nombre
                    }));
                })
                .catch(error => console.error('Error:', error));
        }
    },
    props: {
        titulo: {
            type: String,
            default: 'Productos'
        }
    },
}

export {
    Productos
}