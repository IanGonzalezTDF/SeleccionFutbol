import { Entrenador } from "./Entrenador";
import { Jugador } from "./Jugador";
import { Masajista } from "./Masajista"

export class Seleccion {
    protected entrenador: Entrenador;
    protected masajista: Masajista;
    public convocados: Jugador[]; 
    
    constructor (pEntrenador:Entrenador, pEquipo:Jugador[], pMasajista:Masajista){
        this.entrenador = pEntrenador;
        this.convocados = pEquipo;
        this.masajista = pMasajista;
    }

    public setEntrenador(pEntrenador:Entrenador):void{
        this.entrenador = pEntrenador;
    }

    public getEntrenador():Entrenador{
        return this.entrenador;
    }

    public setEquipo(pEquipo:Jugador[]):void {
        this.convocados = pEquipo;
    }

    public getEquipo():Jugador[]{
        return this.convocados;
    }

    public setMasajista(paramMasajista:Masajista):void {
        this.masajista = paramMasajista;
    }

    public getMasajista():Masajista {
        return this.masajista;
    }
}