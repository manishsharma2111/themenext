import styled from 'styled-components';
import { useField } from 'formik';

export const Input = styled.input`
    width: ${(props) => (props.width ? props.width : '26vw')};
    padding: 1em;
    margin: 0.5em;
    color: ${(props) => props.theme.text};
    background: ${(props) => props.theme.background};
    border: 3px solid ${(props) => props.theme.text};
    border-radius: 3px;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: ${(props) => props.theme.text};
        font-size: 1.3em;
    }
    :-ms-input-placeholder {
        color: ${(props) => props.theme.text};
        font-size: 1.3em;
    }
`;
export const Label = styled.label`
    margin-bottom: 0.5em;
    color: ${(props) => props.theme.text};
    display: block;
`;

export const TextField = ({ name, label, ...props }) => {
    const [field, meta, helpers] = useField(name);

    return (
        <>
            <Label>
                {label}
                <Input name={name} {...field} {...props} />
            </Label>
            {meta.touched && meta.error ? (
                <p style={{ color: 'red' }}>{meta.error}</p>
            ) : null}
        </>
    );
};
