import { Component, type ErrorInfo, type ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export default class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error("Uncaught error:", error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 text-center">
          <p className="text-lg font-light text-muted-foreground">
            Etwas ist schiefgelaufen. Bitte laden Sie die Seite neu.
          </p>
          <button
            className="text-sm text-accent underline underline-offset-4"
            onClick={() => window.location.reload()}
          >
            Seite neu laden
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
