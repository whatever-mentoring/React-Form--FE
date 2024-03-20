import React from 'react';
import DefaultError from '../DefaultError';
import * as Sentry from "@sentry/react";

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// https://ko.legacy.reactjs.org/docs/error-boundaries.html
// props 타입으로 ErrorBoundaryProps 사용, state 타입으로 ErrorBoundaryState를 사용
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props); 
    this.state = this.initState();
  }

  initState(): ErrorBoundaryState {
    return { 
      hasError: false,
      error: null
    };    
  }

  resetState() {
    this.setState(this.initState());
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    Sentry.withScope((scope) => {
      scope.setLevel("fatal");
      Sentry.captureException(error);
    });

    return { 
      hasError: true,
      error
    };
  }

  render() {
    if (this.state.hasError) {      
      // if (this.state.error === '미로그인 에러 코드') {      
      //  return <AuthError />
      // }
      // if (this.state.error === '네트워크 에러 코드') {      
      //   return <NetworkError />
      // }
      // if (this.state.error === '500 에러 코드') {      
      //   return <ServerError />
      // }      
      return (
        <DefaultError onResetError={this.resetState} />
      )            
    }        

    return this.props.children;
  }
}

export default ErrorBoundary;
