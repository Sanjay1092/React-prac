import { Card } from "@/components/ui/card"
import { useState } from "react"

interface Props{
    name: string,
    handleChangeDate?:()=>any,
    isActive: boolean,
}

const Button:React.FC <Props> =(props)=>{
    return(
        <button  className={`whitespace-nowrap px-3 py-1.5 focus:outline-none border-none ${props.isActive ? 'bg-[#DEDEFA] text-[#5C59E8]':'bg-[#fff] text-[#667085]' }`} onClick={props.handleChangeDate}>{props.name}</button>
    )
}

const DaysTab:React.FC=()=>{
    const [isClicked,setIsClicked] = useState<boolean>(false)
    return(
        <Card className="w-[222px] bg-[#fff] rounded-[8px] border-solid border border-[#E0E2E7] p-1">
<div className="flex">
    <Button name="This Month"  handleChangeDate={()=> setIsClicked(!isClicked)} isActive={isClicked} />
    <Button name="Last 7 Days" handleChangeDate={()=> setIsClicked(!isClicked)} isActive={!isClicked}/>
</div>
        </Card>
    )
}
export default DaysTab