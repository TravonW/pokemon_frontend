import { styled } from "styled-components";

const Container = styled.div`
background-color: blue;
width: 200px;
margin: 10px;
text-align: center;


`
const Name = styled.h1`
color: red;

`

export default function PokemonCard(props){

    return(

        <Container>
            <Name>{props.pokemon}</Name>
        </Container>
    )
}