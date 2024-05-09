// ReactQuery.tsx
import React, { useState } from "react";
import { apiData } from "./api";
import { useQuery } from "@tanstack/react-query";

const ReactQuery: React.FC = () => {
const [like,setLike] = useState<number>(0)
const {data,isLoading,isError} = useQuery({queryKey:['post',setLike],queryFn:apiData})

return(
    <div>
        {
            !isLoading && !isError && <p>the data is {JSON.stringify(data)}</p>
        }
        <p>no of likes {like}</p>
        <button onClick={()=>setLike(like+1)}>like</button>
    </div>
)


   
};

export default ReactQuery;
