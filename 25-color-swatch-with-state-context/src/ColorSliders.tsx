import { ChangeEvent, Dispatch, useContext } from 'react';
import { ColorSlider } from './ColorSlider';
import { RGBContext } from './context';
import { AdjustmentAction } from './reducer';
import { RGBColorType } from './types';

interface ColorSidersProps extends RGBColorType {
  dispatch: Dispatch<AdjustmentAction>;
}

export const ColorSliders = () => {
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
      <ColorSlider
        id="red-slider"
        label="Red"
        value={red}
        onChange={adjustRed}
      />
      <ColorSlider
        id="green-slider"
        label="Green"
        value={green}
        onChange={adjustGreen}
      />
      <ColorSlider
        id="blue-slider"
        label="Blue"
        value={blue}
        onChange={adjustBlue}
      />
    </section>
  );
};
