import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to indicate an error has occurred
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error or perform any other error handling here
    console.error(error);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return <div>Something went wrong.</div>;
    }

    // Render children normally if no error has occurred
    return this.props.children;
  }
}
// export default ErrorBoundary;
