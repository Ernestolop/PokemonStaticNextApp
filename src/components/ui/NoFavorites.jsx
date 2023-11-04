import Image from "next/image"

const NoFavorites = () => {
    return (
        <div className="flex gap-5 flex-col justify-center items-center">
            <p className="text-2xl font-bold">No hay Favoritos</p>
            <div className="opacity-10">
                <Image
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/132.svg"
                    alt="No hay Favoritos"
                    width={150}
                    height={150}
                />
            </div>
        </div>
    )
}

export default NoFavorites;