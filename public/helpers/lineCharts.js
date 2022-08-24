import { cpuStatsLineData } from './chartsData.js';
import { updateCpuTimeFrame } from './vmstatReader.js';

// const cpuStatsLineContainer = document.getElementById('cpu-stats-line-chart');
const cpuStatsLineContainer = document.getElementById('cpu-stats-line-chart');
const ctxCpuLine = cpuStatsLineContainer.getContext('2d');
export const cpuStatsLineSetup =
  cpuStatsLineContainer.nextSibling.querySelector('#cpuUsageTimeFrame');

// TODO: maybe rewrite this variable to be self-contained with its functions
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
        min: 0,
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

export function selectTimeFrame(value) {
  // Returns selected time frame's value
  console.log(value);
  // Updates time frame value for cpu line timed chart
  updateCpuTimeFrame(value);
  // TODO: save value to localStorage
}
