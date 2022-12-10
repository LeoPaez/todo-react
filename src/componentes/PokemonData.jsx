import { useState } from 'react';
import { useQuery } from 'react-query';
import styled from 'styled-components';
import "../types.css"
import Swal from 'sweetalert2'

const Cont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  gap: 20px;
`
const ContSearch = styled.div`
  display: flex;
  width: 300px;
  height: 30px;
`
const Input = styled.input`
  width: 80%;
  padding-left: 10px;
  font-size: 16px;
  outline: none;
  border: none;
  color: #FFF;
  background: darkgrey;
  border-radius: 4px 0px 0px 4px;
`
const Button = styled.button`
  width: 20%;
  font-size: 16px;
  border: none;
  border-radius: 0 4px 4px 0;
  outline: none;
  background: #7b2cbf;
  color: #FFF;
  font-family: "Roboto";
`

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8f9fa;
  height: 400px;
  width: 400px;
  gap: 30px;
  border-radius: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border: 6px solid #dee2e6;
`
const PokeImg = styled.img`
  width: 120px;

`
const PokeName = styled.p`
  color: #3c096c;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 600;
`

const ContInfo = styled.div`
  display: flex;
  width: 90%;
  gap: 20px;
  justify-content: center;
`
const PokeInfo = styled.p`
  color: #000;
  text-transform: capitalize;
  font-size: 16px;
  font-weight: 600;
`
const PokeData = styled.span`
  color: #6247aa;
`

const TypesContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const TypeTag = styled.div`
  text-transform: uppercase;
  padding: 4px 6px;
  font-size: 14px;
  color: #FFF;
  border-radius: 0.5rem;
  margin-bottom: 1rem;
`;


function PokemonData() {
  
  const [pokemonName, setPokemonName] = useState('bulbasaur');

  const getPokemonName = () => pokemonName;

  const { data, isLoading, error, refetch } = useQuery(
    ['pokemon', getPokemonName],
    async () => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
      return response.json();
    }
  );

  if (isLoading) {
    return <p>Cargando pokemon...</p>;
  }

  if (error) {
    return <p>Error al cargar el pokemon.</p>;
  }


  return (
    <Cont>
      <ContSearch>
        <Input value={pokemonName}  onChange={(event) => setPokemonName(event.target.value)} />
        <Button type="submit" onClick={() => refetch()}>Buscar</Button>
      </ContSearch>
      <Card>
        <PokeImg src={data.sprites.other.dream_world.front_default}/>
        <PokeName>{data.name}</PokeName>
        <ContInfo>
          <PokeInfo>Altura: <PokeData>{(data.height) * 10} cm</PokeData></PokeInfo>
          <PokeInfo>Peso: <PokeData>{(data.weight) / 10} kg</PokeData></PokeInfo>
        </ContInfo>
        <ContInfo>
          <PokeInfo>Habilidad: <PokeData>{data.abilities[0].ability.name}</PokeData></PokeInfo>
          <PokeInfo>Hab. Oculta: <PokeData>{data.abilities[1].ability.name}</PokeData></PokeInfo>
        </ContInfo>
        <TypesContainer>
          {data.types.map(type => (
            <TypeTag className={type.type.name} key={type.type.name}>{type.type.name}</TypeTag>
          ))}
        </TypesContainer>
      </Card>
    </Cont>
  )
  }

export default PokemonData