import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { BsGithub, BsGoogle, BsFacebook, BsYoutube, BsTwitter, BsWhatsapp, BsFillArrowRightSquareFill } from "react-icons/bs";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { GoogleAuthProvider } from 'firebase/auth';
import { AuthContext } from '../../contexts/Authprovider/Authprovider';

const RightSideNav = () => {

    const { googleSignInProvider } = useContext(AuthContext)

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleSignInProvider(googleProvider)
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handleGoogleSignIn} className='mb-2' variant="outline-danger"><BsGoogle></BsGoogle> Login with Google</Button>
                <Button variant="outline-dark"><BsGithub></BsGithub> Login with Github</Button>
            </ButtonGroup>
            <div className='mt-3'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2'><BsFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><BsYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><BsWhatsapp /> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><BsTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2'><BsFillArrowRightSquareFill /> Terms & Condition</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;