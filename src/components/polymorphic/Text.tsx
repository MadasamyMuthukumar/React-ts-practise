import { PassThrough } from "stream"

type TextOwnProps<E extends React.ElementType>={
    size?:'sm' | 'lg'
    color?:'primary' | 'secondary'
    children:React.ReactNode
    as?:E  //type of as will be Element type (can be any element in react like p,h1,div)
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>,keyof TextOwnProps<E>>
// assigning Textownprops to textprops by omiting collisions
export const Text=<E extends React.ElementType>({size,color,children,as}:TextProps<E>)=>{
const Component = as || 'div'  //specify default component as div
return(
    <Component className={`class-${size}-${color}`}>
        {children}
    </Component>
) 

}


// in App.tsx we can Pass
// <Text as='h1' color='sg'>Heading<Text/>
// <Text as='p' color='sg'>Description<Text/>
// <Text as='label' htmlFor="" color='sg'>Label<Text/>


// by using above code we can pass any element safely and the properites available for ceratian elemnts (like label has htmlFor) has been only assignable to corresponding elemtns only otherwise typescript throws error