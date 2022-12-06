import { Favorites } from "./pages/favorites";
import { HomePage } from "./pages/home-page";


export const routes = [
    {
        path: '/',
        element: <HomePage />,
        label: 'Home 🏡'
    },
    {
        path: '/favorites',
        element: <Favorites />,
        label: 'Favorites ⭐'
    }
]