import { styled} from "styled-components";
import Header from "../components/Header"
import useGetData from "../hooks/useGetData";

import PokemonCard from "../components/PokemonCard";

const Container = styled.div`
display: flex;
flex: 1;
flex-direction: wrap;
flex-wrap: wrap;
margin-left: 20px;
`

export default function AllPokemon(){
    // object destruction
    const{ AllPokemon} = useGetData()
    return(
        <div>
            <Header/>
            <Container>
            {AllPokemon.map((pokemon,i) => (
                <PokemonCard
                pokemon={pokemon.name}
                
                />


                    

            ))}
            </Container>
        </div>
    )
}