import React, { ReactNode } from 'react';
import './style.css';
import { ContainerBar, budgetStatus } from '../Card';

type Props = {};

export const Container = () => {
  return (
    
    <div className="budget-container">
      {budgetStatus.map(({ id, percentage }) => (
        <ContainerBar key={id} percentage={percentage} />
      ))}
    </div>
  );
};
