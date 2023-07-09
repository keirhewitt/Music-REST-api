import React from "react";

class ErrorBoundary extends React.Component {
    state = { hasError: false }

    static getDerivedStateFromError(error) {
        return { hasError: true }
    }

    componentDidCatch(error, info) {
        console.log(error, info)
    }

    render() {
        if (this.state.hasError) {
            return <div className='w-5/6 flex m-auto h-screen'>
                <p className="m-auto h-10 w-30">{this.props.fallback}</p>
            </div>
        }
        return this.props.children
    }
}

export default ErrorBoundary