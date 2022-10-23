import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Outlet } from 'react-router-dom';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg="2" className='d-none d-lg-block'>
                        <LeftSideNav></LeftSideNav>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                    <Col lg="3">
                        <RightSideNav></RightSideNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;