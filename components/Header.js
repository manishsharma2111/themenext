import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Sun, Moon, Bell, Home, List, X } from '@styled-icons/feather';
import { useTheme } from '../theme/themeContext';

const Container = styled.div`
    width: '100%';
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.text};
    padding: 1.5em;
    background-color: ${(props) => props.theme.background};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
`;

const icon = css`
    color: ${(props) => props.theme.text};
    cursor: pointer;
`;

const StyledSun = styled(Sun)`
    ${icon}
`;

const StyledMoon = styled(Moon)`
    ${icon}
`;

const Header = () => {
    const [open, setOpen] = useState(false);

    const [mount, setMount] = useState(false);
    const { theme, toggleTheme } = useTheme();
    console.log(theme);
    const handleOnClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        setMount(true);
    }, []);

    if (!mount) return null;

    return (
        <>
            <Container>
                <div>
                    {open ? (
                        <X size={'1.9em'} onClick={handleOnClick} />
                    ) : (
                        <List size={'1.9em'} onClick={handleOnClick} />
                    )}
                </div>

                <div>
                    <Home size={'1.9em'} />
                    <Bell style={{ paddingInline: '3.2em' }} size={'1.9em'} />
                    {theme === 'dark' ? (
                        <StyledSun
                            size={'1.9em'}
                            onClick={() => toggleTheme('light')}
                        />
                    ) : (
                        <StyledMoon
                            size={'1.9em'}
                            onClick={() => toggleTheme('dark')}
                        />
                    )}
                </div>
            </Container>
        </>
    );
};

export default Header;
