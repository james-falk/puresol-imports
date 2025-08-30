import React from 'react';

interface GoldTagProps {
  children: React.ReactNode;
  className?: string;
}

const GoldTag: React.FC<GoldTagProps> = ({ children, className = '' }) => {
  return (
    <div className={`inline-block ${className}`}>
      <h2 className="font-bold tracking-tight text-primary-500">{children}</h2>
    </div>
  );
};

export { GoldTag };
