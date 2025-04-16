import { ref } from 'vue';

export default {
    data () {
        const contador = ref(0);
        return {
            message: 'Vue desde modulo! ',
            contador,
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
        </div>
    `,
    methods: {
        saludar () {
            alert('Hola desde el metodo')
        },
        incrementar () {
            this.contador++;
        },
    },
}
