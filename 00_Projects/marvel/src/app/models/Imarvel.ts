export interface Imarvel {
    name?:string,
    id?:number,
    description?:string,
    thumbnail:{
        path:string,
        extension:string,
    },
    images?:{
        path:string,
        extension:string,
    }
    selected:boolean
}
