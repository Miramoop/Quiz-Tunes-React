import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary caught an error", error, errorInfo);
  }

  handleReset = () => {
    this.props.resetQuiz();
    this.setState({ hasError: false, error: null });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="error-boundary">
          <p>Something went wrong. Please try again later.</p>
          <button
            id="returnHomeButton"
            onClick={this.handleReset}
            aria-label="Return to HomePage"
          >
            Return to HomePage
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
