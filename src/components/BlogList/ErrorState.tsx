// src/components/BlogList/ErrorState.tsx
import React from 'react';

interface ErrorStateProps {
  error: string;
  onRetry: () => void;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => {
  return (
    <div className="dispatch-error">
      <div>error loading posts</div>
      <div className="error-detail">{error}</div>
      <button onClick={onRetry}>try again</button>
    </div>
  );
};

export default ErrorState;
