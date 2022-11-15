import { Jugador } from "./Jugador";
import { Persona } from "./Persona"

//Funcion del "Masajista": 

export class Masajista extends Persona {
    protected equipo: Jugador[];

    constructor (pNombre:string, pApellido:string, pEdad:number, paramEquipo:Jugador[]){
        super (pNombre, pApellido, pEdad)
        this.equipo = paramEquipo;
    }

    public hacerMasajes(equipo:Jugador[]):void{
        for(let i:number=0; i < this.equipo.length; i++) {
            if (this.equipo[i].getLesion() === true){
                this.equipo[i].setLesion(false);
                console.log(`El jugador ${this.equipo[i].getNombre()} ${this.equipo[i].getApellido()} ya esta disponible para jugar.`)
            }
            else {
                console.log(`El jugador ${this.equipo[i].getNombre()} ${this.equipo[i].getApellido()} no necesita tratamiento.`)
            }
        }
    }

}