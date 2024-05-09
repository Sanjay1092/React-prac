import { Card } from "@/components/ui/card"
import React from "react"
import arrow from '../assets/images/Style=Filled.svg'
interface Props{
    src: string,
    alt?: string,
    name: string,
    count: number | string
}
const CardComponentHome:React.FC <Props> = (props)=>{
return (
<Card className="md:w-[380px] h-[96px] bg-[#fff] rounded-2xl shadow-[4px 4px 8px 0px rgba(0, 0, 0, 0.03)] border-none ">
    <div className="p-[20px] flex justify-between">
<div className="flex">
<img src={props.src} alt={props.alt}/>
<div className="flex flex-col pl-[20px]  ">
<p className="cardNameTypography">{props.name}</p>
<p className="cardCountTypography">{props.count}</p>
</div>

</div>
<button className="bg-[transparent] border-none">
<img src={arrow} alt="arrow-icon"/>
</button>

</div>
</Card>
   
)
}
export default CardComponentHome