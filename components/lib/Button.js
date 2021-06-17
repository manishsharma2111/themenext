import styled from 'styled-components';

const Button = styled.button`
    color: ${(props) => props.theme.text};
    border: 2px solid ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    font-size: 1.25em;
    margin: 1em;
    padding: 0.5em 1em;
    border-radius: 6.5px;
`;
export default Button;
