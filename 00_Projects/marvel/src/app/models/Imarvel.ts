export interface Imarvel {
    name?:string,
    id?:number,
    description?:string,
    selected?:boolean,
    thumbnail:{
        path:string,
        extension:string,
    },
    images?:{
        path:string,
        extension:string,
    }

}
