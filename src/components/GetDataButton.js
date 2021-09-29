import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const GetDataButton = () => {
    const { isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button /*onClick={() => getData()}*/>
            Get Data          
         </button>
        )
    )
}

export default GetDataButton
