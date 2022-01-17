/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { createContext, ReactElement, useEffect, useState } from 'react';

interface ThemeContextProps {
    handleCheckboxUpdate?: () => void;
    registerField?: (ref: HTMLInputElement) => void;
}

const defaultState: ThemeContextProps = {}

export const ThemeContext = createContext<ThemeContextProps>(defaultState);

interface Props {
    children: React.ReactNode;
}

export const ThemeProvider = (props: Props): ReactElement => {

    return (
        <>{props.children}</>
    );
};
