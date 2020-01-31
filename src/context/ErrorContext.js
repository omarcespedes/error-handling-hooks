import React, { useState } from 'react'

export const ErrorContext = React.createContext({})

export const ErrorProvider = ({children}) => {
    const [errorState, setErrorState] = useState([{message: 'test message'}])

    const clearErrors = () => setErrorState([])
    const handleErrorResponse = (error) => {
        let message;

        if (error.response) {
          // Handle 5xx errors
          const response = error.response;
          if (response.status >= 500) {
            switch (response.status) {
              case 500: // Internal Server Error
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'The server encountered an error processing the request. Try again later.';
                }
                break;
              case 501: // Not Implemented
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'The server does not know how to respond to that request.';
                }
                break;
              case 502: // Bad Gateway
              case 503: // Service Unavailable
              case 504: // Gateway Timeout
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'The server could not be reached or is not responding. Try again later.';
                }
                break;
              default:
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'Something went wrong while talking with the server. Try again later.';
                }
            }
          }
          else if (response.status >= 400) {
            switch (response.status) {
              case 401: // Unauthorized (not authenticated)
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'You must be logged in to do that action.';
                }
                break;
              case 403: // Forbidden (not authorized)
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'Your permissions do not permit you to do that action.';
                }
                break;
              case 404: // Not Found
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'No data for that resource was found.';
                }
                break;
              case 422: // Unprocessable Entity
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'There are errors in your request, check your inputs and try again.';
                }
                break;
              default:
                if (response.data && response.data.err) {
                  message = response.data.err;
                }
                else {
                  message = 'A problem with your request has occurred. Try again later.';
                }
            }
          }
          else if (response.data && response.data.err) {
            message = response.data.err;
          }
          else {
            message = 'A temporary problem has caused your request to fail. Try again later.';
          }
        }
        // Error with the request (no server response)
        else if (error.request) {
          message = 'Something went wrong while talking to the server';
        }
        // Raw Axios or other error describing the problem (technical) || Unknown failure
        else {
          message = error.message || 'Something went wrong unexpectedly';
        }

        setErrorState(errState => {
            const newState = [...errState]
            newState.push({message})
            setErrorState(newState)
        })
    }


    return (
        <ErrorContext.Provider value={{
            errorState,
            handleErrorResponse,
            clearErrors
        }}>
            {children}
        </ErrorContext.Provider>
    )
    
}

