const toggleFavorite = (id, name) => {
    let favorites = getFavorites();
    if (existInFavorites(id)) {
        favorites = favorites.filter(fav => fav.id !== id);
    } else {
        favorites.push({ id, name });
    }
    if (typeof window !== 'undefined') {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }

}

const existInFavorites = id => {
    return getFavorites().some(fav => fav.id === id);
}

const getFavorites = () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem('favorites')) || [];
    }
    return [];
}

export default toggleFavorite;
export { existInFavorites, getFavorites };