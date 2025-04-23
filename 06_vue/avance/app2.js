import { Productos } from "./productos.js";

export default {
    data() {
        return {
        }
    },
    template: /*html*/`
        <div>
            <h1>Lista de Productos</h1>
            <productos titulo="Artículos" ></productos>
        </div>
    `,
    methods: {
    },
    components: {
        "productos": Productos,
    }
}
