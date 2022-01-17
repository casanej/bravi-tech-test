import { Button } from '@mui/material';
import { CardTheme, Container } from 'components'
import React, { ReactElement, useContext } from 'react'
import { Link } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import { CardsContent, HomePageStyled } from './index.style';

export const HomePage = (): ReactElement => {
    const { pallet } = useContext(ThemeContext);

    return <Container>
        <HomePageStyled>
            <CardsContent>
                {
                    pallet.map(theme => {
                        return <CardTheme key={theme.id} theme={theme} />
                    })
                }
            </CardsContent>
            <Link to={'/add-theme'}>
                <Button variant='contained' color='primary' fullWidth>Add Theme</Button>
            </Link>
            <Link to={'/example'}>
                <Button variant='contained' color='secondary' fullWidth>Example Page</Button>
            </Link>
        </HomePageStyled>
    </Container>;
};
