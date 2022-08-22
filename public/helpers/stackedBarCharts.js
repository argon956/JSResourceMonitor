import { memoryStatsBarData } from './chartsData.js';

const ctxMemory = document
  .getElementById('memory-stats-chart')
  .getContext('2d');

export const memoryStatsBarChart = new Chart(ctxMemory, {
  type: 'bar',
  data: memoryStatsBarData,
  options: {
    plugins: {
      title: {
        display: true,
        text: 'Memory Usage - Stacked',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
        min: 0,
        max: 18,
      },
    },
  },
  parsing: false,
  normalize: true,
});
