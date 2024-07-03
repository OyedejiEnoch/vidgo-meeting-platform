import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk"
import { useEffect, useState } from "react"

export const useGetCallById = (id:string | string[])=>{
    // what we are doing here is trying to find or get the call or a call with the id
    const [call, setCall]= useState<Call>()
    const [isCallLoading, setisCallLoading]= useState(true)

    const client = useStreamVideoClient()

    useEffect(()=>{
        if(!client) return

        const loadCall =async ()=>{
            const {calls} =await client.queryCalls({
                filter_conditions:{
                    id
                }
            })

            if(calls.length > 0) setCall(calls[0])
            
            setisCallLoading(false)
        }


        loadCall();
    },[client, id])

    return {call, isCallLoading}
}