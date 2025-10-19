import {theme} from "./Theme.styled.tsx";

type FontPropsType = {
    family? : string
    weight? : number
    color? : string
    lineHeight? : number
    Fmin?: number
    Fmax?: number
}

export const fonts = ({family, weight, color, lineHeight, Fmin, Fmax}:FontPropsType )=>`
   font-family: ${family || "Poppins"};
   font-weight: ${weight || 700};
   color: ${color || theme.colors.font};
   line-height: ${lineHeight || 1.2};
   font-size: calc( (100vw- 360px)/(1440-360) * ( ${Fmax} - ${Fmax}) + ${Fmin}px );
   
`
