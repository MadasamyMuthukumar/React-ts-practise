type RandomNumber={  //value is common prop so have it global and use it below
    value:number
}
type PositiveNumber= RandomNumber & {
    //includes the value:number and also having isPositive..once we pass isPositive we cant able to pass isNegative and isZero
    isPositive:boolean,
    isNegative?:never
    isZero?:never
}
type NegativeNumber= RandomNumber & {
    //same as above
    isPositive?:never,
    isNegative:boolean
    isZero?:never
}
type ZeroNumber= RandomNumber & {
    //same as above
    isPositive?:never,
    isNegative?:never
    isZero:boolean
}
type RandomPRops= PositiveNumber | NegativeNumber | ZeroNumber

export const RandomNumber=(props:RandomPRops)=>{

    return (
        <div>
        {props.value} ' is '{props.isPositive && 'Positive'} {props.isNegative && 'Negative'} {props.isZero && 'Zero'}
        </div>
    )

}


//in this example if we use
// type RandomPRops={
//     value:number,
//     isPositive?:boolean,
//     isNegative?:boolean,
//     isZero?:boolean
// }
// means in App.tsx we can pass 
// <RandomNumber value={10} isPositive isNEgative isZero></RandomNumber>

// it is not our case. a single number can be either positive or negative or zero not be in three types

// so we need to restrict the props by sending

// if isPositive is set true we cant able to set isNEgative and isZero. we can achieve this using never keyword