import React, { Component } from 'react';
import styled from 'styled-components';

/* Component imports */
import Logo from './Logo';
import Links from './Links';

const Container = styled.div.attrs({
    className: 'container',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    padding: 10px 20px 10px 20px;
`

class Navbar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default Navbar;