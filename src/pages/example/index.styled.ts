import { Link } from '@mui/material';
import { Container } from 'components';
import styled from 'styled-components';

export const ExamplePageStyled = styled.div`
    background-color: ${props => props.theme.currentPallet['background-color']};
`;

export const ExampleMenu = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px 0;
    display: flex;
    flex-direction: row;
    gap: 30px;
`

export const ExampleContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    color: ${props => props.theme.currentPallet['primary-text-color']};

    h1 {
        color: ${props => props.theme.currentPallet['secondary-text-color']}; 
    }

    p {
        text-align: justify;
    }
`

export const ExampleMenuLinks = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;

    > a {

    }
`

export const Blockquote = styled.div`
    position: relative;
	margin: 30px 0;
	padding: 30px 20px;
    text-align: justify;
	background: #e2e2e2 no-repeat left / 100px;
	border-radius: 5px;
	border: 2px solid white;
	box-shadow: 2px 2px 4px hsl(0 0% 0% / 20%);
	text-indent: 1.6em;
    color: ${props => props.theme.currentPallet['accent-color']};

    &::before {
        content: "";
        pointer-events: none;
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        border-radius: 5px;
        box-shadow:
            inset -2px -2px 1px hsl(0 0% 100%),
            inset 2px 2px 4px hsl(0 0% 0% / 20%);
    }

    &::after {
        content: "❝";
        position: absolute;
        z-index: 1;
        left: 50%;
        top: -2px;
        transform: translate(-50%, -50%);
        width: 1.3em;
        height: 1.3em;
        background: white;
        box-shadow: 0 4px 5px -1px hsla(0 0% 0% / 20%);
        border-radius: 999px;
        display: grid;
        place-content: center;
        padding-top: .5em;
        color: ${props => props.theme.currentPallet['accent-color']};
        font-size: 36px;
        font-style: normal;
        text-indent: 0;
    }
`

export const LinkItem = styled(Link)``;