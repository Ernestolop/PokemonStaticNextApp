import FavoriteCard from "./FavoriteCard"

const Favorites = ({ favorites }) => {
    return (
        <div className="flex flex-col sm:grid grid-cols-4 gap-5 justify-center items-center">
            {
                favorites.map(favorite => (
                    <FavoriteCard key={favorite.id} favorite={favorite} />
                ))
            }
        </div>
    )
}

export default Favorites