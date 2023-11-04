import Head from 'next/head'
import { Layout } from '../components/layouts/index.js'
import { pokeApi } from '../api'
import { PokemonList } from '../components/pokemons'

export default function Home({ pokemons }) {
  return (
    <>
      <Layout
        title="Pokémon App"
        description="Listado de los primeros 151 pokémones"
        keywords="listado de pokémones, pokémones, pokémon"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
          <PokemonList pokemons={pokemons} />
        </div>
      </Layout>
    </>
  )
}


export const getStaticProps = async (context) => {
  const { data } = await pokeApi.get('/pokemon?limit=151');
  const pokemons = data.results.map((pokemon, index) => {
    const id = index + 1;
    const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`
    return { ...pokemon, id, image }
  })
  return {
    props: {
      pokemons
    }
  }
}