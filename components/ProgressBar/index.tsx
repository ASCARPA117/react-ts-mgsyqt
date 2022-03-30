import React, { useEffect, useState } from 'react';
import './style.css';

type Props = {
  percentage: number;
};

export const ProgressBar = ({ percentage }: Props) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const to = setTimeout(() => setValue(percentage), 500);
    return () => clearTimeout(to);
  }, [percentage]);
  return (
    <div className="progress-bar-outer">
      <div style={{ width: value + '%' }} className="progress-bar-inner"></div>
    </div>
  );
};
