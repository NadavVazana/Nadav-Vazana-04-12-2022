import { useSelector } from "react-redux"
import FavoriteTable from "../cmps/favorite-table"

export const Favorites = () => {
    const { favorites } = useSelector(state => state.favoriteModule)
    const { isDark } = useSelector(state => state.systemModule)


    return (
        <section className={isDark ? 'favorites dark' : 'favorites'}>
            {favorites.length ?
                <section>
                    <h1>Your Favorites</h1>
                    <h1 className="right-click-title">(Right click to remove)</h1>

                    <FavoriteTable />
                </section> : <h1>No Favorites...</h1>}
        </section>
    )
}