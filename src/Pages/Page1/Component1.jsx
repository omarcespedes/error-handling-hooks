import React, { useContext, useEffect } from 'react'
import { ErrorContext } from '../../context/ErrorContext';

const Component1 = () => {
    const { errorState, handleErrorResponse } = useContext(ErrorContext)
    
    useEffect(() => {
        setTimeout(() => {
            handleErrorResponse({
                response: {
                    status: 404
                }
            })
        }, 1000)
    }, [])    

    return (
        <div>
            <p>component 1</p>
            <ul>
                {errorState.map(error => {
                    return <li>{error.message}</li>
                })}
            </ul>
        </div>
    )
}

export default Component1;