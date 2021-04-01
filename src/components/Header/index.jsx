import React from 'react';
import { NavLink } from 'react-router-dom';
import { Col, Row } from 'reactstrap';
import "./Header.scss";

Header.propTypes = {};

function Header(props) {
    return (
        <header className="header">
            <Row className="justify-content-between">
                <Col xs="auto">
                    <a
                        href="#"
                        className="header__link header__title"
                        target="_blank"
                    >
                        LiemNH
                    </a>
                </Col>
                <Col xs="auto">
                    <NavLink
                        exact
                        className="header__link"
                        to="/photos"
                        activeClassName="header__link--active"
                    >
                        Redux Project
                    </NavLink>
                </Col>
            </Row>
        </header>
    );
}

export default Header;
