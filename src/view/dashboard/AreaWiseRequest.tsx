/* eslint-disable @typescript-eslint/no-explicit-any */
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

import Chart, { useChart } from '@/components/chart';
import { fNumber } from '@/utils';

interface ChartData {
  label: string;
  value: number;
}

interface ChartProp {
  colors?: string[];
  series: ChartData[];
  options?: any;
}

interface AreaWiseRequestProps {
  title: string;
  subheader?: string;
  chart: ChartProp;
}

export default function AreaWiseRequest({
  title,
  subheader,
  chart,
}: AreaWiseRequestProps) {
  const { colors, series, options } = chart;

  const chartSeries = series.map((i) => i.value);

  const chartOptions = useChart({
    colors,
    tooltip: {
      marker: { show: false },
      y: {
        formatter: (value: number) => fNumber(value),
        title: {
          formatter: () => '',
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: '28%',
        borderRadius: 2,
      },
    },
    xaxis: {
      categories: series.map((i) => i.label),
    },
    ...options,
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ mx: 3 }}>
        <Chart
          dir="ltr"
          type="bar"
          series={[{ data: chartSeries }]}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}
