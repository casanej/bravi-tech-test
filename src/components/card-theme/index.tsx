import { Button } from '@mui/material';
import { PalletModel } from 'assets';
import React, { ReactElement, useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { CardThemeAction, CardThemeColor, CardThemeStyled, CardThemeTitle } from './index.style';

interface Props {
    theme: PalletModel;
}

export const CardTheme = (props: Props): ReactElement => {
    const { changePallet, currentPallet, deletePallet } = useContext(ThemeContext);

    const handleThemeChange = () => {
        if (changePallet) changePallet(props.theme.id);
    }

    const handleDeleteTheme = () => {
        if (deletePallet) deletePallet(props.theme);
    }

    return (
        <CardThemeStyled>
            <CardThemeTitle>{props.theme.name}</CardThemeTitle>
            <CardThemeColor color={props.theme['background-color']} name='background-color' />
            <CardThemeColor color={props.theme['primary-text-color']} name='primary-text-color' />
            <CardThemeColor color={props.theme['secondary-text-color']} name='secondary-text-color' />
            <CardThemeColor color={props.theme['accent-color']} name='accent-color' />
            <CardThemeAction>
                <Link to={`/edit-theme/${props.theme.id}`} style={{ width: '100%' }}>
                    <Button variant='contained' color='warning' fullWidth>Edit</Button>
                </Link>
                <Button variant='contained' color='success' fullWidth disabled={currentPallet.id === props.theme.id} onClick={handleThemeChange}>Select</Button>
                <Button variant='contained' color='error' fullWidth disabled={currentPallet.id === props.theme.id} onClick={handleDeleteTheme}>Delete</Button>
            </CardThemeAction>
        </CardThemeStyled>
    );
};
