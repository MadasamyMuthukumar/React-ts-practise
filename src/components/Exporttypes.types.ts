export type FullName = {
    names :{
    first: string
    last: string
    }
}
export type logged = {
    names :{
    first: string
    last: string
    }
    favcolor:string
}



type username = {
    first:string,
    last:string
}
type color = {
    favcolor:string
}
export type GreetTypes = {
    name:'vimal' | 'Sathya' | 'Vishal' 
    // name: string
    age?: number //it means the age is optional one.. it not must to be passed 
    isLoggedIn: boolean
    personName: name  //equals to name above name object
    numArr: number[]
    ObjArray:name[]    //arraay of type name(obejct)   
    children:[string,React.ReactNode] 
  
  }
  export type name={
    first: string,
    last: string 
}