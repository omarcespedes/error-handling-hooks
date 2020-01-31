import React, { useEffect, useContext } from 'react'
import { ErrorContext } from '../../context/ErrorContext'

const Component2 = () => {
    const { errorState, handleErrorResponse, clearErrors } = useContext(ErrorContext)
    
    useEffect(() => {
        setTimeout(() => {
            handleErrorResponse({
                response: {
                    status: 404
                }
            })
        }, 3000)

        setTimeout(() => {
            handleErrorResponse({
                response: {
                    status: 500
                }
            })
        }, 2000)
    }, [])    

    return (
        <div>
            <p>component 2</p>
            <ul>
                {errorState.map(error => {
                    return <li>{error.message}</li>
                })}
            </ul>
            <button onClick={() => clearErrors()}>Clear component 2</button>
        </div>
    )
}

export default Component2;