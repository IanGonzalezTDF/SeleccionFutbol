// import * as rs from "readline-sync";

import { Entrenador } from "./Entrenador";
import { Jugador } from "./Jugador";
import { Masajista } from "./Masajista";
import { Seleccion } from "./Seleccion";

let jugadorA: Jugador = new Jugador ('Lionel', 'Messi', 34, 10, false);
let jugadorB: Jugador = new Jugador ('Leandro', 'Paredes', 30, 5, true);
let jugadorC: Jugador = new Jugador ('Diego', 'Maradona', 25, 10, false);
let jugadorD: Jugador = new Jugador ('Roman', 'Riquelme', 30, 8, true);

let listaConvocados: Jugador[] = [];
listaConvocados.push(jugadorA)
listaConvocados.push(jugadorB)
listaConvocados.push(jugadorC)
listaConvocados.push(jugadorD)


let newMasajista:Masajista = new Masajista ('PEPE', 'PEREZ', 40, listaConvocados);
//recuperar jugadorB
newMasajista.hacerMasajes(listaConvocados);

let miDT:Entrenador = new Entrenador ('Lionel', 'Scaloni', 40, listaConvocados);

let SeleccionArgentina: Seleccion = new Seleccion(miDT, listaConvocados, newMasajista);
//El jugadorB al momento de la instancia esta lesionado, y en el siguiente .log se muestra como recuperado.
console.log(SeleccionArgentina.getEquipo());

//El DT tiene la funcionalidad de poder quitar o agregar jugadores.


miDT.pDespedirJugador(jugadorD);
miDT.pContratarJugador(jugadorD);

console.log(SeleccionArgentina)

//Trabajo incompleto //Agregar funcionalidades.






// function eleccionSiNo(pregunta: string): boolean {
//     let opcion: boolean|string = false;

//     do {
//         opcion = rs.keyInYN(pregunta); // y = true ; n = false ; cualquier otra tecla = ""
//         if (typeof(opcion) == "string") { 
//             console.log("*** ingrese una opcion valida ***\n\tPara responder que SI presione la tecla y\n\tPara responder que NO presione la tecla n");
//         }
//     } while (typeof(opcion) == "string");

//     return opcion;
// }


// console.log("INICIO PROGRAMA");
// let indice: number= 0;
// let quiereSalir: boolean = false;
// let juegos: string[] = ['Tragamoneda', "Ruleta", 'Dados', 'Cartas'];

// do {
//     console.log("MENU");
//     indice = rs.keyInSelect(juegos, 'Que opcion desea a elegir?'); // opcion CANCEL = -1
//     console.log(indice);

//     console.log(indice == -1? "Se ha elegido: cancelar" : "Se ha elegido: " + juegos[indice]);

//     quiereSalir = eleccionSiNo("Desea salir del menu?");
   
// } while(!quiereSalir);

// console.log("FIN PROGRAMA");