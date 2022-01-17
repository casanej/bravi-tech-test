import styled from 'styled-components';

export const ContainerStyled = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1200px;
    min-height: 100vh;
    margin: 0 auto;
    padding: 10px 0;

    @media (max-width: 1220px) {
        width: 95%;
    }
`