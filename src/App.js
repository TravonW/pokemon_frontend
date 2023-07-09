import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AllPokemon from "./pages/ALLPokemon";
import PokemonImage from "./pages/PokemonImage";

function App() {
  return (
    <div>
    
      <BrowserRouter>
      <Routes>
        {/*  The path below leads to index, * stands for wildcard, navigate pulls back to home because inside the quotations there is nothing just like there is no / for the index*/}
        <Route path="/*" element={<Navigate to='' />} />
        <Route index element={<AllPokemon/>} />
        <Route path="/pokemon" element={<PokemonImage />} />
      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
