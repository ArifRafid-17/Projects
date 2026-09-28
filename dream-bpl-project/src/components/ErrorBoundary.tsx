import { Component } from "react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
interface State {
  failed: boolean;
}

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { failed: false };

  static getDerivedStateFromError(): State {
    return { failed: true };
  }

  render() {
    if (this.state.failed) {
      return (
        <div role="alert" className="alert alert-error m-6 justify-center">
          Could not load players. Please refresh the page.
        </div>
      );
    }
    return this.props.children;
  }
}
