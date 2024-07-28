import { SVGColor } from '../SVGColor';

const icon = (name: string) => (
  <SVGColor
    src={`/assets/icons/navbar/${name}.svg`}
    sx={{ width: 1, height: 1 }}
  />
);

const navConfig = [
  {
    title: 'dashboard',
    path: '/',
    icon: icon('ic_analytics'),
  },
  {
    title: 'user',
    path: '/user',
    icon: icon('ic_user'),
  },
  {
    title: 'Schedule',
    path: '/schedule',
    icon: icon('ic_user'),
  },
  {
    title: 'Task Status',
    path: '/task-status',
    icon: icon('ic_user'),
  },
  {
    title: 'Vehicle Schedule',
    path: '/vehicle-schedule',
    icon: icon('ic_user'),
  },
  {
    title: 'Monitoring',
    path: '/monitoring',
    icon: icon('ic_user'),
  },
  {
    title: 'Fuel Usage',
    path: '/fuel-usage',
    icon: icon('ic_user'),
  },
  {
    title: 'Performance track',
    path: '/performance-track',
    icon: icon('ic_user'),
  },
];

export default navConfig;
