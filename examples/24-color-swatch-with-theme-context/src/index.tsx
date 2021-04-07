import { render } from 'react-dom';

import Application from './Application';

import './style.scss';
import { ThemeProvider } from './theme-context';

const rootElement = document.getElementById('root');
render(
  <ThemeProvider>
    <Application />
  </ThemeProvider>,
  rootElement
);
