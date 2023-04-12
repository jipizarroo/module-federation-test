import React from "react";

const RemoteComponent = ({
    remote,
    module,
    scope = "default",
    fallback = null,
    remoteUrl,
    // Any props needed by the Remote app can be passed through
    ...props
  }) => {
    // Custom hook for getting the URL for a particular remote
    const remoteUrl = useRemoteUrl(remote);
    // Lazy loading the remote component
    const Component = React.lazy(loadComponent(remote, remoteUrl, module, scope));
    // Wrapping the remote component in an ErrorBoundary and React.Suspense to safely render the component
    return (
      <ErrorBoundary>
        <React.Suspense fallback={fallback}>
          <Component {...props} />
        </React.Suspense>
      </ErrorBoundary>
    );
  };