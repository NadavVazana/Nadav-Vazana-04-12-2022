export const favoriteService = {
    addFavorite,
    query,
    removeFavorite,
    isFavorite
}

const FAV_KEY = 'favDB'


function query() {
    if (!localStorage.getItem(FAV_KEY))
        return []
    return JSON.parse(localStorage.getItem(FAV_KEY))}

    

function isFavorite(location) {
    let favorites = localStorage.getItem(FAV_KEY)
    if (!favorites) return false
    favorites = JSON.parse(favorites)

    const isFavorite = favorites.find(fav => fav.location.locationName === location.LocalizedName)
    return !!isFavorite}


function addFavorite(favorite) {
    favorite.dateAdded = new Date().toLocaleDateString()
    let favorites = localStorage.getItem(FAV_KEY)
    if (!favorites) {
        favorites = []
    }
    else {
        favorites = JSON.parse(favorites)
    }

    favorites.unshift(favorite)
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites))}


function removeFavorite(locationName) {
    let favorites = localStorage.getItem(FAV_KEY)
    if (!favorites) return
    favorites = JSON.parse(favorites)
    favorites = favorites.filter(favorite => favorite.location.locationName !== locationName)
    localStorage.setItem(FAV_KEY, JSON.stringify(favorites))}

