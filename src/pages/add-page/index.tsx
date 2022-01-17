import { Button, TextField } from '@mui/material';
import { PalletModel, theme } from 'assets';
import { Container } from 'components';
import React, { ReactElement, useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { AddThemePageStyled } from './index.style';

export const AddThemePage = (): ReactElement => {
    const { addPallet } = useContext(ThemeContext);
    const [name, setName] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#000000');
    const [primaryTextColor, setPrimaryTextColor] = useState('#000000');
    const [secondaryTextColor, setSecondaryTextColor] = useState('#000000');
    const [accentColor, setAccentColor] = useState('#000000');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;

        switch (name) {
        case 'name':
            setName(value);
            break;
        case 'background-color':
            setBackgroundColor(value);
            break;
        case 'primary-text-color':
            setPrimaryTextColor(value);
            break;
        case 'secondary-text-color':
            setSecondaryTextColor(value);
            break;
        case 'accent-color':
            setAccentColor(value);
            break;
        default:
            break;
        }
    }

    const handleSaveTheme = () => {
        const palletAdd = {} as PalletModel;

        palletAdd.name = name || 'Unnamed Theme';
        palletAdd['background-color'] = backgroundColor;
        palletAdd['primary-text-color'] = primaryTextColor;
        palletAdd['secondary-text-color'] = secondaryTextColor;
        palletAdd['accent-color'] = accentColor;

        if (addPallet) {
            addPallet(palletAdd);
            setName('')
            setBackgroundColor('#000000')
            setPrimaryTextColor('#000000')
            setSecondaryTextColor('#000000')
            setAccentColor('#000000')
        }

    }

    return (
        <Container>
            <AddThemePageStyled>
                <TextField type='text' name='name' variant='outlined' label='Nome' placeholder='Unnamed theme' value={name} onChange={handleChange} />
                <TextField type='color' name='background-color' variant='outlined' label='Background Color' value={backgroundColor} onChange={handleChange} />
                <TextField type='color' name='primary-text-color' variant='outlined' label='Primary Text Color' value={primaryTextColor} onChange={handleChange} />
                <TextField type='color' name='secondary-text-color' variant='outlined' label='Secondary Text Color' value={secondaryTextColor} onChange={handleChange} />
                <TextField type='color' name='accent-color' variant='outlined' label='Accent Color' value={accentColor} onChange={handleChange} />

                <Button variant='contained' color='success' fullWidth onClick={handleSaveTheme}>Save Theme</Button>

                <Link to={'/'}>
                    <Button variant='contained' color='warning'>Voltar</Button>
                </Link>

            </AddThemePageStyled>
        </Container>
    );
};
