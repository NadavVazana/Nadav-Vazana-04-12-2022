import { Button } from '@mui/material'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { toggleTemp } from '../store/system/ststem.action'


export const Header = () => {
    
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { temp } = useSelector(state => state.weatherModule)
    const { isDark } = useSelector(state => state.systemModule)
    const [isMenu, setMenu] = useState(false)

    const handleTempToggle = () => {
        dispatch(toggleTemp())
    }

    return (
        <section className={isDark ? 'header dark' : 'header'}>
            <div onClick={() => navigate('/')} className="header-left">
                <img src={require('../assets/imgs/logo.svg').default} alt="logo" />
                <h1 >Weather<span>.</span></h1>
            </div>
            <div className="header-right">
                <nav>
                    <NavLink to={'/'}>Home</NavLink>
                    <NavLink to={'/favorites'} > Favorites</NavLink>
                    <Button onClick={handleTempToggle}>{temp === 'c' ? 'Fahrenheit' : 'Celsius'}</Button>
                </nav>

                {isMenu && <div className="mobile-menu">
                    <Button className='close-btn' onClick={() => setMenu(false)}>X</Button>
                    <NavLink onClick={() => setMenu(false)} to={'/'}>Home</NavLink>
                    <NavLink onClick={() => setMenu(false)} to={'/favorites'} > Favorites</NavLink>
                    <Button onClick={() => { handleTempToggle(); setMenu(false) }}>{temp === 'c' ? 'Fahrenheit' : 'Celsius'}</Button>
                </div>}

                <img className='hamburger' onClick={() => setMenu(prevState => !prevState)} src={require('../assets/imgs/hamburger.svg').default} alt="" />
            </div>
        </section>
    )
}