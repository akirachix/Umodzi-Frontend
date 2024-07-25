import React from 'react';
import { Bar } from 'react-chartjs-2';
 import { Chart } from 'chart.js/auto';
 import './index.css'
import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers';


const BarChart = () => {
  const data = {
    
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
      
        label: 'Statistics  ',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(0,0,255)',
        borderColor: 'rgba(#302EA8)',
        borderWidth: 1,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  return (
    <div className='linechart'>
  <Bar data={data} options={options} />;
  </div>
  )
};
export default BarChart;