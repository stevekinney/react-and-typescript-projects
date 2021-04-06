import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { ThemeContext } from './theme-context';

const Application = () => {
  const themes = React.useContext(ThemeContext);

  return (
    <main
      style={{
        ...themes.dark
      }}
    >
      <ColorSwatch />
      {/* <ColorInputs {...rgb} /> */}
      <ColorSliders />
    </main>
  );
};

export default Application;
