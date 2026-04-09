import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("Error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <h2 className="text-center p-8 text-red-600">
          Something went wrong.
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;