import { styled} from "styled-components";
import {Link} from "react-router-dom"

const Container = styled.div`

background-color: black;
display: flex;
flex 1;
justify-content: center;


`
const Title = styled.h1`
color: white;
text-align: center;

`
const ButtonContainer = styled.div`
display: flex;
flex: 1;
justify-content: center;
`


export default function Header(){

    return(
        <div>
        <Container>
            <Title> Pokedex</Title>
        

        </Container>
        <ButtonContainer>
                <Link style={{margin: 10}} to='/'> Home</Link>
                <Link style={{margin: 10}} to= '/pokemon'> pokemon</Link>
                
            </ButtonContainer>
        </div>
    )
}