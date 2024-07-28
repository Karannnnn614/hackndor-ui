import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { styled, Theme, useTheme } from '@mui/material/styles';

import Chart, { useChart } from '@/components/chart';

const CHART_HEIGHT = 400;
const LEGEND_HEIGHT = 72;

const StyledChart = styled(Chart)(({ theme }) => ({
  height: CHART_HEIGHT,
  '& .apexcharts-canvas, .apexcharts-inner, svg, foreignObject': {
    height: `100% !important`,
  },
  '& .apexcharts-legend': {
    height: LEGEND_HEIGHT,
    borderTop: `dashed 1px ${theme.palette.divider}`,
    top: `calc(${CHART_HEIGHT - LEGEND_HEIGHT}px) !important`,
  },
}));

interface Series {
  name: string;
  data: number[];
}

interface ChartData {
  series: Series[];
  colors?: string[];
  categories: string[];
  options?: object;
}

interface ResolvedRequestTrackSummaryProps {
  title: string;
  subheader?: string;
  chart: ChartData;
}

export default function ResolvedRequestTrackSummary({
  title,
  subheader,
  chart,
}: ResolvedRequestTrackSummaryProps) {
  const theme = useTheme<Theme>();

  const { series, colors, categories, options } = chart;

  const chartOptions = useChart({
    colors,
    stroke: {
      width: 2,
    },
    fill: {
      opacity: 0.48,
    },
    legend: {
      floating: true,
      position: 'bottom',
      horizontalAlign: 'center',
    },
    xaxis: {
      categories,
      labels: {
        style: {
          colors: [...Array(6)].map(() => theme.palette.text.secondary),
        },
      },
    },
    ...options,
  });

  return (
    <Card>
      <CardHeader title={title} subheader={subheader} sx={{ mb: 5 }} />
      <StyledChart
        dir="ltr"
        type="radar"
        series={series}
        options={chartOptions}
        width="100%"
        height={340}
      />
    </Card>
  );
}
