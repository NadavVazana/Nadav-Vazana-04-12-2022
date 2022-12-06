import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useDispatch, useSelector } from 'react-redux';
import { setLocation } from '../store/location/location.action';
import { setCurrentWeather, setForecast } from '../store/weather/weather.action';
import { useNavigate } from 'react-router-dom';
import { removeFavorite } from '../store/favorite/favorite.action';
import { useState } from 'react';





export default function FavoriteTable() {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [context, setContext] = useState({ pos: { x: 0, y: 0 }, isOpen: false, favorite: null })
    const { temp } = useSelector(state => state.weatherModule)
    const { favorites } = useSelector(state => state.favoriteModule)


    const onFavoriteClick = async ({ location }) => {
        const loc = await dispatch(setLocation(location.locationName))
        await dispatch(setCurrentWeather(loc.locationKey))
        await dispatch(setForecast(loc.locationKey))
        navigate('/')
    }

    const handleRightClick = (ev, favorite) => {
        ev.preventDefault()
        const pageX = ev.pageX
        const pageY = ev.pageY
        setContext({ pos: { x: pageX, y: pageY }, isOpen: true, favorite })
    }

    window.onclick = () => setContext({ isOpen: false })
    return (
        <section className="fav-table">
            {context.isOpen && <div onClick={(ev) => {
                ev.stopPropagation()
                dispatch(removeFavorite(context.favorite.location.locationName))
            }} style={{ position: 'fixed', left: context.pos.x, top: context.pos.y }} className="context-menu">
                <img src={require('../assets/imgs/trash.svg').default} alt="trash" />
                <h1>Remove</h1>
            </div>}



            <TableContainer className='favorite-table' component={Paper}>


                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow className='head-row'>
                            <TableCell>ID</TableCell>
                            <TableCell align="right">Location</TableCell>
                            <TableCell align="right">Current Weather</TableCell>
                            <TableCell align="right">{temp === 'c' ? 'Celsius' : 'Fahrenheit'}</TableCell>
                            <TableCell align="right">Date Added</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {favorites.map((favorite) => (
                            <TableRow

                                onContextMenu={(event) => handleRightClick(event, favorite)}
                                onClick={() => onFavoriteClick(favorite)}
                                key={favorite.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell component="th" scope="row">
                                    {favorite.id}
                                </TableCell>
                                <TableCell align="right">{favorite.location.locationName}</TableCell>
                                <TableCell align="right">{favorite.weather.weatherDescription}</TableCell>
                                <TableCell align="right">{temp === 'c' ? favorite.weather.celsius : favorite.weather.fahrenheit}</TableCell>
                                <TableCell align="right">{favorite.dateAdded}</TableCell>

                            </TableRow>

                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </section>
    );
}