import React, { ReactNode } from 'react';
import './style.css';

type Props = {
  className?: string;
  type: TextType;
  children: ReactNode;
};
type TextType = 'h1' | 'h2' |'h3' |'h4' |'p' | 'span' ;

export const Text = ({ className, type, children }: Props) => {
  const Component = type;
  return <Component className={className}>{children}</Component>;
};
