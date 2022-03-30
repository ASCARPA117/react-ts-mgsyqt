import React, { ReactNode } from 'react';
import { Paper } from '../Paper';
import { ProgressBar } from '../ProgressBar';
import './style.css';
import { Header } from '../Header';

export const budgetStatus = [
  {
    id: 1,
    percentage: 60,
  },
  {
    id: 2,
    percentage: 40,
  },
  {
    id: 3,
    percentage: 100,
  },
];

type Props = {
  percentage: number;
  children?: any;
};

export const ContainerBar = ({ percentage }: Props) => {
  return (
    <Paper className="container-bar" error={false}>
      <Header />
      <ProgressBar percentage={percentage} />
    </Paper>
  );
};
