import getData from "../APi/getData";
import {useState, useEffect} from "react";

export default function useGetData(){
    const [AllPokemon, setAllPokemon] = useState([])

    useEffect(() => {
        async function fetchData(){
            try{
                const data = await getData()
                setAllPokemon (data.data.data)
            } catch(e){
                /// Might be a error in code //
                console.log(`error in getting pokemon ${e}`)

            }
        }
        fetchData()
    }, [])

    return {
        AllPokemon
    }



}