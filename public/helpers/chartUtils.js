// import colorLib from '@kurkle/color';

const COLORS = [
  '#4dc9f6',
  '#f67019',
  '#f53794',
  '#537bc4',
  '#acc236',
  '#166a8f',
  '#00a950',
  '#58595b',
  '#8549ba',
];

export function color(index) {
  return COLORS[index % COLORS.length];
}

export function transparentize(value, opacity) {
  var alpha = opacity === undefined ? 0.5 : 1 - opacity;
  return colorLib(value).alpha(alpha).rgbString();
}

export const CHART_COLORS = {
  red: '#ec1349',
  orange: '#e67e22',
  yellow: '#f1c40f',
  green: '#16a085',
  blue: '#2980b9',
  purple: '#b90df2',
  grey: 'rgb(201, 203, 207)',
  black: 'rgba(0,0,0,1)',
  tBlack: 'rgba(0,0,0,0.05)',
  transparent: 'rgba(0,0,0,0)',
};

const NAMED_COLORS = [
  CHART_COLORS.red,
  CHART_COLORS.orange,
  CHART_COLORS.yellow,
  CHART_COLORS.green,
  CHART_COLORS.blue,
  CHART_COLORS.purple,
  CHART_COLORS.grey,
  CHART_COLORS.black,
  CHART_COLORS.transparent,
];

export function namedColor(index) {
  return NAMED_COLORS[index % NAMED_COLORS.length];
}
