import { createGlobalStyle, DefaultTheme } from 'styled-components';
import { PalletModel, defaultPallet } from './pallets';

export * from './pallets'

declare module 'styled-components' {
    export interface DefaultTheme {
        pallet: PalletModel[];
        currentPallet: PalletModel;
        addPallet?: (pallet: PalletModel) => void;
        editPallet?: (pallet: PalletModel) => void;
        deletePallet: (pallet: PalletModel) => void;
        changePallet?: (pallet: number) => void;
    }
}

interface GlobalStyleProps {
    readonly theme: PalletModel;
}

export const GlobalStyle = createGlobalStyle<GlobalStyleProps>`

    @mixin for-max-size($range) {
        $boundary-xs: 599px;
        $boundary-sm: 600px;
        $boundary-md: 900px;
        $boundary-lg: 1200px;
        $boundary-xl: 1800px;

        @if $range == xs { @media (max-width: $boundary-xs) { @content; } }
        @else if $range == sm { @media (min-width: $boundary-sm) { @content; } }
        @else if $range == md { @media (min-width: $boundary-md) { @content; } }
        @else if $range == lg { @media (min-width: $boundary-lg) { @content; } }
        @else if $range == xl { @media (min-width: $boundary-xl) { @content; } }
    }

    * {
        margin: 0;
        padding: 0;
    }

    *, ::after, ::before {
        box-sizing: border-box;
    }
    
    body {
        background-image: linear-gradient(to bottom, #47bac2, #40b0ca, #4ca5ce, #6198cb, #778bc2);
        color: #E2E2E2;
        font-family: sans-serif;
        font-size: 14px;
        width: 100%;
        height: 100vh;
    }

    a {
        text-decoration: none;
        cursor: pointer;
        color: inherit;
    }

    #root {
        height: 100vh;
        width: 100vw;
        overflow-x: hidden;
        position: relative;
        justify-content: flex-start;
        align-items: flex-start;
    }
`

export const theme = {
    pallet: [defaultPallet],
    currentPallet: defaultPallet,
} as DefaultTheme

