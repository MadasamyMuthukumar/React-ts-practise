

// Toase can be
// left-top | left-center | left-bottom | center | center-top | center-bottom | right-top | right-center | right_bottom

// to achieve this combination we can use template literals


type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

// type ToastProps={
//     position:`${HorizontalPosition}-${VerticalPosition}`
// }
// if you hover over position it will be 
// position: "left-center" | "left-top" | "left-bottom" | "center-center" | "center-top" | "center-bottom" | "right-center" | "right-top" | "right-bottom"

// but here we have center-center..we need just center. we need to exclude it. and include just center.. we can achiev ethis by Exclude

type ToastProps={
    position:Exclude<`${HorizontalPosition}-${VerticalPosition}`,'center-center'> | 'center'
}
//exclude has two arguments first one template literal and second one will be excluding thing..and we just adding center with OR operator


export const Toast=({position}:ToastProps)=>{
return(
    <div>{position}</div>
)
}