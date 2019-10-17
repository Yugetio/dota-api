import React from 'react';

import ErrorIndicator from '../error-indicator';

const ErrorBoundry = (props) => {

  if (props.hasError) {
    return <ErrorIndicator />
  }

  return props.children;
};


export default ErrorBoundry;
