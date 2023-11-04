import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from "../../components/pokemons";

const pokemon = ({ pokemon }) => {
    const { id, name} = pokemon;
    return (
        <Layout
            title={`Pokémon App - ${name}`}
            description={`Pokémon ${name} - ${id}`}
            keywords={`${name}, pokemon número ${id}, pokemon, sprites, imagen de pokemon`}
        >
            <Pokemon pokemon={pokemon} />
        </Layout>
    )
}

export const getStaticProps = async ({ params }) => {
    const { id } = params;
    const { data } = await pokeApi.get(`/pokemon/${id}`);
    const pokemon = {
        id: data.id,
        name: data.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
        sprites: {
            frontDefault: data.sprites.front_default,
            backDefault: data.sprites.back_default,
            frontShiny: data.sprites.front_shiny,
            backShiny: data.sprites.back_shiny
        }
    }
    return {
        props: {
            pokemon
        }
    }
}

export const getStaticPaths = async () => {
    const paths = Array.from({ length: 151 }, (_, index) => {
        return { params: { id: `${index + 1}` } }
    })
    return {
        paths,
        fallback: false
    }
}

export default pokemon