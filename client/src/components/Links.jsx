import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const UserLink = styled.div.attrs({
    className: 'collapse navbar-collapse'
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Swordfishtrombones - Music REST API
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/music/lp" className="nav-link">
                                List LPs
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/music/lp/create" className="nav-link">
                                Create LP
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/music/lp/random" className="nav-link">
                                Random LP
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/user/login" className="nav-link">
                                Login
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/user/register" className="nav-link">
                                Register
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links;