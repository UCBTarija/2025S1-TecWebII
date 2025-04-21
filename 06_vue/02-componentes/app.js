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
            this.productos = [
                { id: 1, nombre: 'Producto 1' },
                { id: 2, nombre: 'Producto 2' },
                { id: 3, nombre: 'Producto 3' },
                { id: 4, nombre: 'Producto 4' },
            ];
        }
    },
}
