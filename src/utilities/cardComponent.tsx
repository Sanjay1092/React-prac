import { Card } from "@/components/ui/card"

interface Props{
   src: string,
   alt?: string,
   name: string,
   count: number,
   handleChange?:any,
   checked?: any,
   value?: string ,
   bgColor: string
}
const  CardComponent:React.FC <Props>= (props)=>{
    return(
        
<Card className="w-[260px] border-none bg-[#fff] rounded-2xl shadow-[4px 4px 8px 0px rgba(0, 0, 0, 0.03)]" style={{backgroundColor:props.bgColor}}>
  <div className="p-[20px] relative">
        <img src={props.src} alt={props.alt} />
        <input type="radio" className="w-6 h-6 border border-solid border-[#C6C6C6] absolute top-4 right-4" onChange={props.handleChange} checked={props.checked} value={props.value}/>
   
    <div className="pt-[16px]">
        <p className="cardNameTypography">{props.name}</p>
        <p className="cardCountTypography">{props.count}</p>
    </div>
</div>  
    
</Card>
      
    )
}
export default CardComponent