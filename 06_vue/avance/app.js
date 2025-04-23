import { ref } from 'vue';

export default {
    data() {
        const contador = ref(0);
        const productos = ref([]);

        return {
            message: 'Vue desde modulo! ',
            contador,
            productos
        }
    },
    template: `
        <div>
        <h1>{{ contador }}</h1>
            hola desde template 
            {{ message }} {{contador}}

            <button @click="saludar">Saludar {{ contador }} </button>
            <button @click="incrementar">Incrementar</button>            
            <button @click="contador++">Incrementar Directo</button>  
            <input type="text" v-model="contador" />          

            <button @click="cargarProductos">Cargar Productos</button>
            <ul>
                <li v-for="producto in productos">
                    {{ producto.nombre }} - {{ producto.id }}
                </li>
            </ul>

            <table border="1">
                <tr v-for="producto in productos">
                    <td>{{ producto.nombre }}</td>
                    <td>{{ producto.id }}</td>
                </tr>
            </table>
        </div>
    `,
    methods: {
        saludar() {
            alert('Hola desde el metodo')
        },
        incrementar() {
            this.contador++;
        },
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
}
