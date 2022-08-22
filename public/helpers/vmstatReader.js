import {
  cpuStatsDoughnutChart,
  // cpuStatsDoughnutChartCopy,
} from './doughnutCharts.js';
import { memoryStatsBarChart } from './stackedBarCharts.js';
import { cpuStatsLineChart } from './lineCharts.js';

const cpuStats = {
  us: 0,
  sy: 0,
  id: 0,
  wa: 0,
  st: 0,
};
const memoryStats = {
  swpd: 0,
  free: 0,
  buff: 0,
  cache: 0,
};
let ws = new WebSocket('ws://localhost:4080');
// Counts seconds to populate timed charts
let tMinus = 0;

ws.onopen = function (e) {
  console.log('[open] Connection established');
  console.log('Sending to server');
  ws.send('My name is John');
};

ws.onmessage = function (event) {
  // console.log(`[message] Data received from server: ${event.data}`);

  // Populate dataArray with number values only
  let dataArray = event.data.split(/(\w+)/).filter(elem => elem.match(/(\d+)/));
  let cpuStatsArray = dataArray.splice(dataArray.length - 5, dataArray.length);
  let memoryStatsArray = dataArray.splice(2, 4);

  // console.log(event.data);
  console.log(cpuStats);
  console.log(memoryStats);

  if (cpuStatsArray.length != 0) {
    // Populate cpuStats' values
    for (const key in cpuStats) {
      if (Object.hasOwnProperty.call(cpuStats, key)) {
        cpuStats[key] = parseInt(cpuStatsArray[0]);
        cpuStatsArray.shift();
      }
    }

    cpuStatsDoughnutChart.data.datasets[0].data = [
      cpuStats.us,
      cpuStats.sy,
      cpuStats.wa,
      cpuStats.id - cpuStats.wa,
    ];
    cpuStatsDoughnutChart.update();

    // cpuStatsDoughnutChartCopy.data.datasets[0].data = [
    //   cpuStats.us,
    //   cpuStats.sy,
    //   cpuStats.wa,
    //   cpuStats.id - cpuStats.wa,
    // ];
    // cpuStatsDoughnutChartCopy.update();

    if (tMinus <= 30) {
      // Add new T-'tMinus' label at start of array, and add new data at the end of arrays
      if (tMinus == 0) {
        for (let index = 1; index < 31; index++) {
          cpuStatsLineChart.data.labels.unshift(`T-${index}`);
        }
      }
      // if (tMinus != 0) {
      //   cpuStatsLineChart.data.labels.unshift(`T-${tMinus}`);
      // }
    } else {
      // Remove first element on the arrays of data
      cpuStatsLineChart.data.datasets.forEach(dataset => {
        dataset.data.shift();
        return dataset;
      });
    }

    cpuStatsLineChart.data.datasets[0].data.push(cpuStats.us);
    cpuStatsLineChart.data.datasets[1].data.push(cpuStats.sy);
    cpuStatsLineChart.data.datasets[2].data.push(cpuStats.wa);
    cpuStatsLineChart.data.datasets[3].data.push(cpuStats.id);

    if (tMinus % 10 == 0) {
      cpuStatsLineChart.update();
    }
    tMinus++;
  }

  if (memoryStatsArray.length != 0) {
    for (const key in memoryStats) {
      if (Object.hasOwnProperty.call(memoryStats, key)) {
        // memoryStats[key] = parseInt(memoryStatsArray[0]);
        memoryStats[key] = memoryStatsArray[0];
        memoryStatsArray.shift();
      }
    }
    let memItem = 0;
    for (const key in memoryStats) {
      if (Object.hasOwnProperty.call(memoryStats, key)) {
        memoryStatsBarChart.data.datasets[memItem].data = memoryStats[key];
        memItem++;
      }
    }
    memoryStatsBarChart.update();
  }
};

ws.onclose = function (event) {
  if (event.wasClean) {
    console.log(
      `[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`
    );
  } else {
    // e.g. server process killed or network down
    // event.code is usually 1006 in this case
    console.log('[close] Connection died');
  }
};

ws.onerror = function (error) {
  console.log(`[error] ${error.message}`);
};
