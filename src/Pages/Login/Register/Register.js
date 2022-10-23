import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';
import { toast } from 'react-hot-toast';

const Register = () => {
    const [error, setError] = useState('')

    const [accepted, setAccepted] = useState(false)

    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext)

    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const photoURL = form.photoURL.value
        const email = form.email.value
        const password = form.password.value

        createUser(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
                handleUpdateUserProfile(name, photoURL);
                handleVerifyEmail()
                toast.success('Check Your Email & Verify')
            })
            .catch(error => setError(error.message))
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked)
    }

    const handleVerifyEmail = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='photoURL' type="text" placeholder="Enter photoURL" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={handleAccepted} type="checkbox" label={<>Accept <Link to='/terms' className='text-decoration-none'>Terms and Conditions</Link></>} />
                </Form.Group>
                <Button variant="primary" type="submit" disabled={!accepted}>
                    Register
                </Button>
            </Form>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </div>
    );
};

export default Register;