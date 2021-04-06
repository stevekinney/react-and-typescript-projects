import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorAdjustment } from './ColorAdjustment';
import { ColorInput } from './ColorInput';
import { ColorSlider } from './ColorSlider';

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
      <ColorAdjustment Adjustment={ColorInput} />
      <ColorAdjustment Adjustment={ColorSlider} />
    </main>
  );
};

export default Application;
