import * as React from 'react';

import { ChangeEvent, useContext } from 'react';
import { ColorSlider } from './ColorSlider';
import { RGBContext } from './context';

export interface AdjustmentInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ColorAdjustmentProps {
  Adjustment: React.ComponentType<AdjustmentInputProps>;
}

export const ColorAdjustment = ({ Adjustment }: ColorAdjustmentProps) => {
  const { red, green, blue, dispatch } = useContext(RGBContext);

  const adjustRed = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_RED', payload: +event.target.value });
  };

  const adjustGreen = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_GREEN', payload: +event.target.value });
  };

  const adjustBlue = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'ADJUST_BLUE', payload: +event.target.value });
  };

  return (
    <section className="color-sliders">
      <Adjustment
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <Adjustment
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <Adjustment
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
