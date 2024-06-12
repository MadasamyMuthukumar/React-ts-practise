// type ListProps={
//     list:string[],
//     printItem:(value:string)=>void
// }
//Consider a situation if the list may vary it can be a numebr array or array. in this case we are using generics

type ListProps<T>={  //T stands for type
    list:T[],  //means list of typen T
    printItem:(value:T)=>void //value of type T
}

export const List=<T extends string | number>({list,printItem}:ListProps<T>)=>{
    //we are mentioning what is T. T extends empty obejct means it was a least restriction and allow any type
 return(
    <div>
        <h1>List of Items</h1>
        {
            list.map((item,index)=>{
                return(
                    <div key={index} onClick={()=>printItem(item)}>{item}</div>
                )
            })
        }
    </div>
 )


}

//we can also restric the generic <T extends string | number>