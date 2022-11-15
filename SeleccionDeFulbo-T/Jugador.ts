import { Persona } from "./Persona";

export class Jugador extends Persona {
    protected numeroCamiseta: number;
    protected estaLesionado: boolean;

    constructor(pNombre:string, pApellido:string, pEdad:number,pNumeroCamiseta:number, pLesion:boolean) {
        super(pNombre,pApellido,pEdad)
        this.numeroCamiseta = pNumeroCamiseta;
        this.estaLesionado = pLesion;
    }

    public setNumCamiseta(pNumero:number):void {
        this.numeroCamiseta = pNumero;
    }

    public getNumCamiseta():number {
        return this.numeroCamiseta;
    }

    public setLesion(pLesion:boolean):void{
        this.estaLesionado = pLesion;
    }

    public getLesion():boolean {
        return this.estaLesionado;
    }
   
}