import * as React from 'react';

import { ColorSwatch } from './ColorSwatch';
import { ColorInputs } from './ColorInputs';
import { ColorSliders } from './ColorSliders';

import { toRGB } from './utilities';
import { reducer } from './reducer';

const Application = () => {
  const [rgb, dispatch] = React.useReducer(reducer, {
    red: 0,
    green: 0,
    blue: 0
  });

  return (
    <main
      style={{
        borderColor: toRGB(rgb)
      }}
    >
      <ColorSwatch {...rgb} />
      <ColorInputs {...rgb} />
      <ColorSliders {...rgb} dispatch={dispatch} />
    </main>
  );
};

export default Application;
