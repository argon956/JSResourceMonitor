import { cpuStatsLineData } from './chartsData.js';

const ctxCpuLine = document
  .getElementById('cpu-stats-line-chart')
  .getContext('2d');

let delayed;

export const cpuStatsLineChart = new Chart(ctxCpuLine, {
  type: 'line',
  data: cpuStatsLineData,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'CPU Usage Timed Line Chart',
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time (seconds)',
        },
      },
      y: {
        display: true,
        stacked: true,
        max: 100,
        title: {
          display: true,
          text: 'Usage (%)',
        },
      },
    },
    datasets: {
      line: {
        pointRadius: 0, // disable for all `'line'` datasets
      },
    },
    elements: {
      point: {
        radius: 0, // default to disabled in all datasets
      },
    },
    spanGaps: true,
  },
  parsing: false,
  normalize: true,
});

export function selectTimeFrame(e) {
  e.preventDefault();
}
