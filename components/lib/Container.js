import styled from 'styled-components';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    color: ${(props) => props.theme.text};
    background-color: ${(props) => props.theme.background};
`;

export default Container;
