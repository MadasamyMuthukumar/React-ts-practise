type InputType=React.ComponentProps<'input'>
//assinging the type as html input component 
export const Inputss=(props:InputType)=>{
    return(
        <input type="text" {...props}/>
        //destrucing all props 
    )
}


// lets consider a sitaution i need a type of Greet component here..but i cant able to import that type...then we can do like below

// (props:React.ComponentProps<typeof Greet>)

// then we can use the type of Greet 
// make sure to import Greet