import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import { KPI, kpis } from './components/KPI';
import { ContainerBar, budgetStatus } from './components/Card';
import { Container } from './components/ContainerBar';

const App = () => {
  return (
    <div className="page">
      <div className="KPI-row">
        {kpis.map((kpi) => (
          <KPI key={kpi.id} {...kpi} />
        ))}
      </div>
      <Container />
    </div>
  );
};
render(<App />, document.getElementById('root'));
