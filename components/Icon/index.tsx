import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon: any;
  className?: string;
  danger?: boolean;
};

export const Icon = ({ icon, className, danger }: Props) => {
  const classNames = ['icon', className, danger && 'danger']
    .filter(Boolean)
    .join(' ');
  return <FontAwesomeIcon icon={icon} className={classNames}></FontAwesomeIcon>;
};
