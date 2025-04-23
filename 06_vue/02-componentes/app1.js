import { ref } from 'vue';
import { Productos } from './productos.js';

export default {
    data () {
        const contador = ref( 0 );

        return {
            message: 'Vue desde modulo! ',
            contador,
        }
    },
    template: /*html */`
        <div>
            <h1>{{ contador }}</h1>
            hola desde template
            {{ message }} {{contador}}

            <button @click="saludar">Saludar {{ contador }} </button>
            <button @click="incrementar">Incrementar</button>
            <button @click="contador++">Incrementar Directo</button>
            <input type="text" v-model="contador" />
            <hr>

            <productos titulo="Productos encontrados"></productos>
            <productos titulo="Articulos"></productos>
            <productos></productos>
            <productos></productos>
        </div>
    `,
    methods: {
        saludar () {
            alert( 'Hola desde el metodo' )
        },
        incrementar () {
            this.contador++;
        },
    },
    components: {
        "productos": Productos
    }

}
