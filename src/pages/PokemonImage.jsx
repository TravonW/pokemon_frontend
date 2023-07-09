import { styled } from "styled-components";
import Header from "../components/Header";
import useGetPicture from "../hooks/useGetPicture";
const Form = styled.form`
display: flex;
justify-content: center;
flex: 1;
marign-top: 50px;
color: pink;
background-color: pink;

`

const ImageContainer = styled.form`
display: flex;
background-color: pink;
justify-content: center;
margin-top: 100px;

`
const Img = styled.img`

width: 350px;

`




export default function PokemonImage(){

    const {name, setName, picture, passName, } = useGetPicture()

    const handleSubmit = event =>{
        event.preventDefault()
        passName(name)

    }
    


    return(
        <div>
            <Header></Header>
            <Form onSubmit={handleSubmit}>
                <input
                required
                type="text"
                placeholder="Enter Pokemon name"
                onChange={event => setName(event.target.value)}
                />
                <button type="submit" >submit🙈🤪</button>
            </Form>
            <ImageContainer>
            <Img src={picture} />
            </ImageContainer>
        </div>
    )
}