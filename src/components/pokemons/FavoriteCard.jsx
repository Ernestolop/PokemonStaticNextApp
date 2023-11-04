import { useRouter } from "next/router"
import Image from "next/image"

const FavoriteCard = ({ favorite }) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/pokemon/${favorite.name}`)
    }

    return (
        <div onClick={handleClick} className="cursor-pointer">
            <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${favorite.id}.svg`}
                alt={`Pokemon ${favorite.name}`}
                width={150}
                height={150}
            />
        </div>
    )
}

export default FavoriteCard