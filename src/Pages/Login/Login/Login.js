import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/Authprovider/Authprovider';
import { toast } from 'react-hot-toast'
import useTitle from '../../../hooks/useTitle';

const Login = () => {
    const [error, setError] = useState('')

    useTitle('Login')

    const navigate = useNavigate()

    const location = useLocation()

    const { logIn, setLoading } = useContext(AuthContext)
    const handleLogIn = (event) => {

        const from = location.state?.from?.pathname || "/";

        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value

        logIn(email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                form.reset()
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your Email is Not Verified! Verify Your Email Address')
                }

            })
            .catch(error => setError(error.message))
            .finally(() => { setLoading(false) })
    }
    return (
        <div>
            <Form onSubmit={handleLogIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
            <Form.Text className="text-danger">
                {error}
            </Form.Text>
        </div>
    );
};

export default Login;