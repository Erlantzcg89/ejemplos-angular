import { Servicio } from "./servicio";

export class Casa{

    nombre : string;
    foto : string;
    precio : number;
    alquiler : boolean;
    habitaciones : number;
    direccion : string;
    servicios : Servicio[];

    constructor(){
        this.nombre = "";
        this.foto = "assets/imgs/casa_default.png";
        this.precio = 0;
        this.alquiler = false;
        this.habitaciones = 0;
        this.direccion = "";
        this.servicios = [];
    }

    fromJson(json:any){
        
        this.nombre = json.nombre;        
        this.foto = json.foto;
        this.precio = json.precio;
        this.alquiler = json.alquiler;
        this.habitaciones = json.habitaciones;
        this.direccion = json.direccion;
        
        let servicio; 
        json.servicios.forEach( el => {
            servicio = new Servicio();
            servicio.nombre = el.nombre;
            servicio.disponible = el.disponible;
            this.servicios.push(servicio);
        });

        return this;
    }

}