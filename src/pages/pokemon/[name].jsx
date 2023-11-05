import { Layout } from "../../components/layouts";
import { pokeApi } from "../../api";
import { Pokemon } from "../../components/pokemons";

const pokemon = ({ pokemon }) => {
    const { id, name } = pokemon;
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
    const { name } = params;
    try { //ISG 2
        const { data } = await pokeApi.get(`/pokemon/${name}`);
        const pokemon = {
            id: data.id,
            name: data.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`,
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
            },
            revalidate: 86400//ISR
        }
    } catch (error) {
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
}

export const getStaticPaths = async () => {
    const { data } = await pokeApi.get("/pokemon?limit=151");
    const paths = data.results.map(({ name }) => ({
        params: {
            name
        }
    }));
    return {
        paths,
        fallback: 'blocking'//ISG 1
    }
}

export default pokemon

// ISG: mas paginas
// ISR: contenido de la pagina