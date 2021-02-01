import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid darkorchid;
    border-radius: 1.25rem;
    
    button {
        border-radius: 0 0 1.25rem 1.25rem;
    }

    img {
        max-height: 15.625rem;
        object-fit: cover;
        border-radius: 1.25rem 1.25rem 0 0;
    }

    div {
        font-family: Arial, Helvetica, sans-serif;
        padding: 1rem;
        height: 100%;
    }
`;