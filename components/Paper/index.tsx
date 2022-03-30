import React, { ReactNode } from 'react';
import './style.css';

type Props = {
  children: ReactNode;
  error?: boolean;
  className?: string;
};

export const Paper = ({ error, children, className }: Props) => {
  const classNames = ['paper', className, error && 'error']
    .filter(Boolean)
    .join(' ');
  return <div className={classNames}>{children}</div>;
};
