import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div style={{ height: '40px', color: '#ff7c5b' }} className='d-flex justify-content-center'>
            <Spinner animation="border" />
        </div>
    );
};

export default Loading;