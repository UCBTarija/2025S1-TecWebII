import { ref } from 'vue';

const Productos = {
    data() {
        const productos = ref([]);

        return {
            productos
        }
    },
    template: /*html*/`
        <div>
            <button @click="cargarProductos">Cargar Productos</button>
            <h2>{{ titulo }}</h2>
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
                    this.$emit('oncargar');
                })
                .catch(error => console.error('Error:', error));
        }
    },
    props: {
        "titulo": {
            type: String,
            required: false,
            default: "Productos"
        }
    },
    emits: ['oncargar'],
    mounted() {
        this.cargarProductos();
    },
}


export {
    Productos
}