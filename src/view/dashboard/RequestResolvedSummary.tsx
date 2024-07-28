import Chart, { useChart } from '@/components/chart';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';

interface ChartData {
  labels: string[];
  colors?: string[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: { fill: string; [key: string]: any }[];
  options?: object;
}

interface RequestResolvedSummaryProps {
  title: string;
  subheader?: string;
  chart: ChartData;
}

export default function RequestResolvedSummary({
  title,
  subheader,
  chart,
}: RequestResolvedSummaryProps) {
  const { labels, colors, series, options } = chart;

  const chartOptions = useChart({
    colors,
    plotOptions: {
      bar: {
        columnWidth: '16%',
      },
    },
    fill: {
      type: series.map((i) => i.fill),
    },
    labels,
    xaxis: {
      type: 'datetime',
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: (value: number) => {
          if (typeof value !== 'undefined') {
            return `${value.toFixed(0)} visits`;
          }

          return value;
        },
      },
    },
    ...options,
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} />

      <Box sx={{ p: 3, pb: 1 }}>
        <Chart
          dir="ltr"
          type="line"
          series={series}
          options={chartOptions}
          width="100%"
          height={364}
        />
      </Box>
    </Card>
  );
}
