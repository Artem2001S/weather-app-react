import About from 'pages/About';
import Home from 'pages/Home';
import Weather from 'pages/Weather';

export const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/about',
    exact: true,
    component: About,
  },
  {
    path: '/weather/:lat/:lon',
    exact: true,
    component: Weather,
  },
];
