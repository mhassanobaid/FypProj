import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const UserChar = {
  xAxis: [
    {
      label: 'Number of Tours',
    },
  ],
  width: 500,
  height: 400,
};

const dataset = [
  {
    user: 'John',
    tours: 15,
    month: 'Jan',
  },

  {
    user: 'John',
    tours: 12,
    month: 'Feb',
  },
  {
    user: 'John',
    tours: 8,
    month: 'Mar',
  },
  {
    user: 'Jane',
    tours: 20,
    month: 'April',
  },
  {
    user: 'Jane',
    tours: 18,
    month: 'May',
  },
  {
    user: 'Jane',
    tours: 15,
    month: 'June',
  },
  {
    user: 'Jane',
    tours: 15,
    month: 'july',
  },
  {
    user: 'Jane',
    tours: 15,
    month: 'Aug',
  },
  {
    user: 'Jane',
    tours: 15,
    month: 'Sep',
  },
  {
    user: 'Jane',
    tours: 15,
    month: 'Oct',
  },
  {
    user: 'Jane',
    tours: 15,
    month: 'Nov',
  },
  {
    user: 'Jane',
    tours: 21   ,
    month: 'Dec',
  },
  // Add more data as needed
];

const valueFormatter = (value) => `${value} Tours`;

export default function HorizontalBars() {
  return (
    <BarChart
      dataset={dataset}
      yAxis={[{ scaleType: 'band', dataKey: 'month' }]}
      series={[
        {
          dataKey: 'tours',
          label: 'Number of Tours',
          valueFormatter,
        },
      ]}
      layout="horizontal"
      {...UserChar}
    />
  );
}