import React from 'react'
import { ErrorProvider } from '../../context/ErrorContext'
import Component1 from './Component1'

const Page1 = () => {

    return (
        <ErrorProvider>
            <p>Page 1</p>
            <Component1></Component1>
        </ErrorProvider>
    )
}

export default Page1;