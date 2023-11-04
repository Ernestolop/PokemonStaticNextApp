import {useState, useEffect} from "react";
import { Layout } from "../../components/layouts";
import { NoFavorites } from "../../components/ui";
import { Favorites } from "../../components/pokemons";
import { getFavorites } from "@/utilities";

const FavoritePage = () => {

    const [favorites, setFavorites] = useState([])
    useEffect(() => {
        setFavorites(getFavorites())
    }
    , [])


    return (
        <Layout
            title="Pokémon App - Favoritos"
            description="Pokémons favoritos"
            keywords="listado de pokémones, pokémones, pokémon, favoritos"
        >
            {
                favorites.length === 0
                ? <NoFavorites />
                : <Favorites favorites={favorites}/>
            }
        </Layout>
    )
}

export default FavoritePage