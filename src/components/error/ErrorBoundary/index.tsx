import React from 'react';
import DefaultError from '../DefaultError';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// https://ko.legacy.reactjs.org/docs/error-boundaries.html
// props 타입으로 ErrorBoundaryProps 사용, state 타입으로 ErrorBoundaryState를 사용
class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props); 
    this.state = { 
      hasError: false,
      error: null
    };    
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
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
        <DefaultError />
      )            
    }        

    return this.props.children;
  }
}

export default ErrorBoundary;
