import React from 'react';

type PageProps = {
  className?: string;
};

export const Page: React.FC<PageProps> = ({ className, children }) => {
  return <div className={`page ${className ? className : ''}`}>{children}</div>;
};
