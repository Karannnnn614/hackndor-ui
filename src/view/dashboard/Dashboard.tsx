/* eslint-disable @next/next/no-img-element */

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Unstable_Grid2';

import AreaWiseRequest from './AreaWiseRequest';
import RequestResolvedSummary from './RequestResolvedSummary';
import RequestTypeSummary from './RequestTypeSummary';
import ResolvedRequestTrackSummary from './ResolvedRequestTrackSummary';
import WidgetSummary from './WidgetSummary';

export default function Dashboard() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Hi, Welcome back 👋
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="New Users"
            total={1352831}
            color="info"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Item Request"
            total={1723315}
            color="warning"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />
            }
          />
        </Grid>

        <Grid xs={12} sm={6} md={3}>
          <WidgetSummary
            title="Resolved Request"
            total={234}
            color="error"
            icon={
              <img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />
            }
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <RequestResolvedSummary
            title="Request Resolved"
            subheader="(+43%) than last year"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <RequestTypeSummary
            title="Request Type"
            chart={{
              series: [
                { label: 'Electricity', value: 4344 },
                { label: 'Water', value: 5435 },
                { label: 'Garbage', value: 1443 },
                { label: 'Road', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AreaWiseRequest
            title="Area wise Request "
            subheader="(+43%) than last year"
            chart={{
              series: [
                { label: 'Vijay Nagar', value: 400 },
                { label: 'Palasia', value: 430 },
                { label: 'Bicholi Mardana', value: 448 },
                { label: 'Sudama Nagar', value: 470 },
                { label: 'Tilak Nagar', value: 540 },
                { label: 'Navlakha', value: 580 },
                { label: 'Khajrana', value: 690 },
                { label: 'Nipania', value: 1100 },
                { label: 'Sukhlia', value: 1200 },
                { label: 'LIG', value: 1380 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <ResolvedRequestTrackSummary
            title="Resolved Request Track"
            chart={{
              categories: ['Electricity', 'Water', 'Garbage', 'Road'],
              series: [
                { name: 'Team A', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Team B', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Team C', data: [44, 76, 78, 13, 43, 10] },
              ],
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
