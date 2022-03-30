import React, { ReactNode } from 'react';
import './style.css';
import { Text } from '../Text';
import { Paper } from '../Paper';
import { Icon } from '../Icon';
import {
  faCheckCircle,
  faExclamationTriangle,
  faListAlt,
  faSyncAlt,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

type Props = {
  error: boolean;
  title: string;
  value: number;
  icon?: any;
  danger?:boolean
};

export const kpis = [
  {
    id: 1,
    icon: faListAlt,
    title: 'Total projects',
    value: 5,
    error: false,
  },
  {
    id: 2,
    icon: faCheckCircle,
    title: 'Completed',
    value: 1,
    error: false,
  },
  {
    id: 3,
    icon: faSyncAlt,
    title: 'Ongoing',
    value: 3,
    error: false,
  },
  {
    id: 4,
    icon: faExclamationTriangle,
    title: 'Delayed',
    value: 1,
    error: true,
    danger: true,
  },
  {
    id: 5,
    icon: faUsers,
    title: 'Employees',
    value: 5,
    error: false,
  },
];

export const KPI = ({ title, value, error, icon, danger }: Props) => {
  return (
    <Paper className="KPI" error={error}>
      <Icon icon={icon} danger={danger} />
      <div className="inner-container">
        <Text type="p" className="big">
          {value}
        </Text>
        <Text type="p" className="small">
          {title}
        </Text>
      </div>
    </Paper>
  );
};

