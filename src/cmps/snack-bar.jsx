import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { closeSnackbar } from '../store/favorite/favorite.action';

export default function PositionedSnackbar() {
    const dispatch = useDispatch()
    const { snack } = useSelector(state => state.favoriteModule)

    const [state, setState] = React.useState({
        open: false,
        vertical: 'bottom',
        horizontal: 'right',

    });

    useEffect(() => {
        if (snack.isOpen)
            setState(prevState => ({ ...prevState, open: snack.isOpen }))
    }, [snack])

    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        dispatch(closeSnackbar())
        setState({ ...state, open: false });
    };

    return (
        <div className='snackbar'>
            <Snackbar
                autoHideDuration={4000}
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                message={snack.msg}
                key={vertical + horizontal}
            />
        </div>
    );
}
