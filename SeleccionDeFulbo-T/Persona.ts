export class Persona {
    
    protected nombre: string;
    protected apellido: string;
    protected edad: number;


    constructor(pNombre:string, pApellido:string, pEdad:number){
        this.nombre = pNombre;
        this.apellido = pApellido;
        this.edad = pEdad;
    }

    public setNombre(pNombre:string):void {
        this.nombre = pNombre;
    }

    public getNombre():string {
        return this.nombre;
    }

    public setApellido(pApellido:string):void {
        this.apellido = pApellido;
    }

    public getApellido():string {
        return this.apellido;
    }

    public setEdad(pEdad:number) {
        this.edad = pEdad;
    }

    public getEdad():number {
        return this.edad;
    }

}