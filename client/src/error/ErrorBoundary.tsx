import React, { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  fallback?: string;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  /* If hasError === true, render fallback string, else return children inside <ErrorBoundary /> tag */
  public render() {
    if (this.state.hasError) {
        return <div className='w-5/6 flex m-auto h-screen'>
            <p className="m-auto h-10 w-30">{this.props.fallback}</p>
        </div>
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
