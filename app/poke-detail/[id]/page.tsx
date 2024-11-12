//Crear una pagina que reciba el id del pokemon por parametro y muestre su informacion.

import Image from "next/image";
interface Pokemon {
  abilities: { ability: { name: string } }[];
  height: number;
  id: number;
  name: string;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  weight: number;
}

export default async function PokeDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = (await pokemon.json()) as Pokemon;

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl">{data.name}</h1>
      <Image
        src={data.sprites.front_default}
        alt={data.name}
        width={200}
        height={200}
      />
      <p>Height: {data.height}</p>
      <p>Weight: {data.weight}</p>
      <p>Abilities:</p>
      <ul>
        {data.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <p>Types:</p>
      <ul>
        {data.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
    </div>
  );
}
