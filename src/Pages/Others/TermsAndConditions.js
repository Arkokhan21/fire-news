import React from 'react';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
    return (
        <div>
            <h2>This is Our Terms and Conditions</h2>
            <p>Go back to <Link to='/register' className='text-decoration-none'>Register</Link></p>
        </div>
    );
};

export default TermsAndConditions;