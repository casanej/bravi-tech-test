import styled from 'styled-components';

export const CardThemeStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    flex: 1 1 292px;
    max-width: 292px;
`;

export const CardThemeTitle = styled.h2``;

export const CardThemeColor = styled.div<{ color: string; name: string; }>`
    width: 100%;
    height: 30px;
    background-color: ${props => props.color};
    border: 1px solid #fff;
    border-radius: 3px;

    &:after {
        content:' ${props => props.name}';
        padding: 0 10px;
        line-height: 1.5rem;
    }
`;

export const CardThemeAction = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
`;