import { ref } from 'vue';
import { Productos } from './productos.js';

export default {
    data () {
        const contador = ref( 0 );
        const clase_color = ref( 'background-color:red;' );
        return {
            message: 'Vue desde modulo! ',
            contador,
            clase_color
        }
    },
    template: /*html */`
        <div>
            <h1>{{ contador }}</h1>
            hola desde template
            {{ message }} {{contador}}

            <button @click="saludar" v-bind:class="clase_color">Saludar {{ contador }} </button>
            <button @click="incrementar">Incrementar</button>
            <button @click="contador++">Incrementar Directo</button>
            <input type="text" v-model="contador" />
            <hr>

            <productos titulo="Productos encontrados"></productos>
            <productos titulo="Articulos"></productos>
            <productos  ></productos>
            <productos @error="handleError"></productos>
        </div>
    `,
    methods: {
        saludar () {
            alert( 'Hola desde el metodo' )
        },
        incrementar () {
            this.contador++;
        },
        handleError(errorMessage) {
            alert(errorMessage);
        }
    },
    components: {
        "productos": Productos
    }

}
