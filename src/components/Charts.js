import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            display: true
        },
        title: {
            display: false,
            text: 'Chart.js Line Chart',
        }
    },
};

export const data = {
    labels: ['Screens', 'PCs', 'Phones', ''],
    datasets: [
        {
            label: '# of Votes',
            data: [500,2200, 2562, 3000],
            backgroundColor: [
                '#E6E5E6',
                '#9013FE',
                '#007AFF',
                '#FB8832',
            ],
            borderWidth: 1,
        },
    ],
};

export function PieChart() {
    return <Pie options={options} data={data} />;
}


