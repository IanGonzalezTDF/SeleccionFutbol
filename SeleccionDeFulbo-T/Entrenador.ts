import { Persona } from "./Persona";
import { Jugador } from "./Jugador";

export class Entrenador extends Persona {
    public convocados: Jugador[];
    

    constructor(pNombre:string, pApellido:string, pEdad:number, convocados:Jugador[]){
        super(pNombre, pApellido, pEdad);
        this.convocados = convocados;
    }

    public pContratarJugador(paramJugador:Jugador): void {
        this.convocados.push(paramJugador);
        console.log(`El jugador ${paramJugador.getApellido()}, fue convocado al equipo.`)
    }

    public pDespedirJugador(paramJugador:Jugador): void {
        for(let i: number=0; i<this.convocados.length; i++){
            if(paramJugador === this.convocados[i]){
                this.convocados.splice(i,1);
                console.log(`El jugador ${paramJugador.getApellido()}, fue removido del equipo.`);
            }
        }
    }

}