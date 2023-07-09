import getPicture from "../APi/getPicture";
import { useState } from "react";

export default function useGetData(){
    const [name, setName] = useState()
    const [picture, setPicture] = useState()

    const passName = async (name) => {
        try{
            const response = await getPicture(name)
            setPicture(response.data.payload)

        }catch(e){
            console.log(`error in passName ${e}`)

        }
    }

    return{
        name,
        setName,

        picture,

        passName,
    }
}