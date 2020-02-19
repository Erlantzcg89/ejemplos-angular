export class Coche{

    id : number;
    marca : string;
    modelo : string;
    version : string;
    foto : string;
    puertas : number;
    caballos: number;
    consumo: number;
    
    constructor( marca:string , modelo:string, puertas:number, foto?:string, version?:string ){
        this.id = -1;
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        if ( foto ){
            this.foto = foto;
        }else{
            this.foto = 'assets/imgs/coche_default.jpg';
        }    
        this.puertas = puertas;
        this.caballos = 0;
        this.consumo = 0;

    }

}