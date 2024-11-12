import Image from "next/image";
import Link from "next/link";

interface FirstGet {
  count: number;
  next: string | null;
  previous: string | null;
  results: { name: string; url: string }[];
}

interface SecondGet {
  abilities: { ability: { name: string } }[];
  height: number;
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  weight: number;
}

export default async function Home() {
  //traer los primeros 20 pokemones
  const pokemones = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");

  const data: FirstGet = await pokemones.json();

  const loadPokemonsData = async (url: string) => {
    const pokemon = await fetch(url);
    const data: SecondGet = await pokemon.json();
    return data;
  };

  //traer la informacion de cada pokemon
  const pokemonsData = await Promise.all(
    data.results.map((pokemon) => loadPokemonsData(pokemon.url))
  );

  if (!data) {
    return <div>Loading...</div>;
  }

  //Devolver una lista con los 20 pokemons con su nombre, imagen, tipo y tamaño.

  return (
    <div className="w-screen h-screen flex flex-wrap justify-center items-center">
      {pokemonsData.map((pokemon) => (
        <Link key={pokemon.name} href={`/poke-detail/${pokemon.id}`}>
          <div className="flex flex-col justify-center items-center hover:scale-105 transition-transform duration-300 ease-in-out">
            <h1 className="text-2xl">{pokemon.name}</h1>
            <Image
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              width={200}
              height={200}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
