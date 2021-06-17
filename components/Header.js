import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Sun, Moon, Bell, Home, List, X } from '@styled-icons/feather';

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
    const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
    const [open, setOpen] = useState(false);

    const handleOnClick = () => {
        setOpen(!open);
    };
    useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem('theme', activeTheme);
    }, [activeTheme]);

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
                    {activeTheme === 'dark' ? (
                        <StyledSun
                            size={'1.9em'}
                            onClick={() => setActiveTheme('light')}
                        />
                    ) : (
                        <StyledMoon
                            size={'1.9em'}
                            onClick={() => setActiveTheme('dark')}
                        />
                    )}
                </div>
            </Container>
        </>
    );
};

export default Header;
