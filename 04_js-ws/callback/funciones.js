// const getUsuario = (id) =>{
//     // hace que se detenga 2 segundos
//     const startPoint = new Date().getTime();
//     while (new Date().getTime() - startPoint <= 2000) {
//         // Haciendo algo... (db)
//     }



//     let usuario = {
//         id: id,
//         nombre: "Pepe " +  id,
//     }
//     return usuario;
// }
// console.log("iniciando...");
// console.time("inicio");

// let usuario1 = getUsuario(1);
// console.log(usuario1);

// let usuario2 = getUsuario(2);
// console.log(usuario2);

// console.log("finalizado")
// console.timeEnd("inicio");

const getUsuarioAsync = ( id, callback ) => {
    let usuario = {
        id: id,
        nombre: "Pepe " + id,
    }

    setTimeout( () => {
        callback( usuario )
    }, 2000 );
}

console.log( "iniciando..." );
console.time( "inicio" );

getUsuarioAsync( 1, ( user ) => {    
    console.log( "hola " + user.nombre );
} );

getUsuarioAsync( 2, ( user ) => {
    console.log( "hola " + user.nombre );
    console.timeEnd( "inicio" );
} );

console.log( "finalizado" );
