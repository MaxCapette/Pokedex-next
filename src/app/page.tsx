import { Pokemon } from '@/@types/pokemon';
import Card from '@/components/Card';

const getData = async () => {
  const resultJson = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/pokemon`);
  const result = await resultJson.json();
  return result as Pokemon[];
};

export default async function Home() {
  const data = await getData();
  // on prend que les 10 premiers pokemons pour les afficher avec slice
  // (sans le zéro qui est le pokemon bug)
  const first10pokemons = data.slice(0, 10);

  return (
    <main className="min-h-screen p-4">
      <h2 className="text-pink-500 hover:text-cyan-500">
        Pokedex
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 p-2">
        {
          first10pokemons.map((pokemon) => (
            <Card pokemon={pokemon} key={pokemon.pokedexId} />
          ))
        }
      </div>
    </main>
  );
}
