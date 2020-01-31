import React from 'react'
import { ErrorProvider } from '../../context/ErrorContext';
import Component2 from './Component2'

const Page2 = () => {
    return (
        <ErrorProvider>
            <p>Page 2</p>
            <Component2></Component2>
        </ErrorProvider>
    )
}

export default Page2;