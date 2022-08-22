import * as Utils from './chartUtils.js';

export const cpuStatsDoughnutData = {
  labels: ['User + Nice', 'System', 'I/O Wait', 'Idle'],
  datasets: [
    {
      label: 'CPU Usage (%)',
      data: [60, 30, 5, 5],
      backgroundColor: [
        Utils.CHART_COLORS.blue,
        Utils.CHART_COLORS.orange,
        Utils.CHART_COLORS.red,
        Utils.CHART_COLORS.transparent,
      ],
      borderColor: [
        Utils.CHART_COLORS.blue,
        Utils.CHART_COLORS.orange,
        Utils.CHART_COLORS.red,
        Utils.CHART_COLORS.tBlack,
      ],
    },
  ],
};

export const memoryStatsBarData = {
  labels: ['RAM (KB)'],
  datasets: [
    {
      label: 'Swap (ZRAM / Swapfile)',
      data: '25',
      backgroundColor: Utils.CHART_COLORS.red,
      borderColor: Utils.CHART_COLORS.red,
    },
    {
      label: 'Free',
      data: '40',
      backgroundColor: Utils.CHART_COLORS.green,
      borderColor: Utils.CHART_COLORS.green,
    },
    {
      label: 'Buffer',
      data: '3',
      backgroundColor: Utils.CHART_COLORS.orange,
      borderColor: Utils.CHART_COLORS.orange,
    },
    {
      label: 'Cached',
      data: '29',
      backgroundColor: Utils.CHART_COLORS.yellow,
      borderColor: Utils.CHART_COLORS.yellow,
    },
  ],
};

export const cpuStatsLineData = {
  labels: ['T'], // Set these from T-10 to T
  datasets: [
    // ['User + Nice', 'System', 'I/O Wait', 'Idle']
    {
      label: 'User + Nice',
      backgroundColor: Utils.CHART_COLORS.blue,
      borderColor: Utils.CHART_COLORS.blue,
      data: ['60'],
      fill: true,
    },
    {
      label: 'System',
      backgroundColor: Utils.CHART_COLORS.orange,
      borderColor: Utils.CHART_COLORS.orange,
      data: ['30'],
      fill: true,
    },
    {
      label: 'I/O Wait',
      backgroundColor: Utils.CHART_COLORS.red,
      borderColor: Utils.CHART_COLORS.red,
      data: ['5'],
      fill: true,
    },
    {
      label: 'Idle',
      backgroundColor: Utils.CHART_COLORS.transparent,
      borderColor: Utils.CHART_COLORS.tBlack,
      data: ['5'],
      fill: true,
    },
  ],
};
