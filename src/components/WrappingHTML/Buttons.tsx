// type ButtonProps={
//     variant:'primary' | 'secondary'
//     children:string
// }
type ButtonProps={
    variant:'primary' | 'secondary'
    children:string
} & Omit<React.ComponentProps<'button'>,'children'>   
//adding html button prop as well which includes normal props of button element(children,onlick like that)

export const Buttons=({variant,children,...rest}:ButtonProps)=>{
    //rest referes to other all props
    return <button className={`class-${variant}` } {...rest}>{children}</button>
}



{/* <Buttons variant="primary">
gjhgjg
</Buttons>

we are using this in App.tsx , but we cant pass onlick . for this we need to include html button prop */}

// Omit<React.ComponentProps<'button'>,'children'>   means Omiting the type of children from html button prop