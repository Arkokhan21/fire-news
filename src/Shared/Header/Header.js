import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Image from 'react-bootstrap/Image'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navbar className='mb-3' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand><Link className='text-decoration-none' to='/'>Fire News</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">All News</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <div>
                                {user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                        <button onClick={handleLogOut} className='btn btn-primary mx-2'>Log Out</button>
                                    </>
                                    :
                                    <>
                                        <Link className='text-decoration-none me-3' to='/login'>Login</Link>
                                        <Link className='text-decoration-none me-3' to='/register'>Register</Link>
                                    </>}
                            </div>
                            <Link to='/profile'>
                                {user?.photoURL ? <Image roundedCircle style={{ height: '30px' }} src={user?.photoURL}></Image> : <FaUser></FaUser>}
                            </Link>
                            <div className='d-lg-none'>
                                <LeftSideNav></LeftSideNav>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;