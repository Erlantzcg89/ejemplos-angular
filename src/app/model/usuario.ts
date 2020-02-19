export class Usuario{

    //atributos
    id : number;
    nombre : string;
    apellido : string;
    email : string;
    avatar : string;
    sexo : Sexo;

    constructor( nombre:string = 'Anonimo' ){

        this.id = -1;
        this.nombre = nombre;
        this.apellido = '';
        this.email = '';
        this.avatar = 'http://www.noworrynotension.com/SignIn/assets/images/user-icon-png-pnglogocom.png';
        this.sexo = Sexo.INDETERMINDADO;

    }

}

export enum Sexo {
    MASCULINO = "Masculino",
    FEMENINO = "Femenino",
    INDETERMINDADO = "Indeterminado"
}