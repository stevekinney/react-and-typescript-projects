import { ColorSlider } from './ColorSlider';
import { RGBColorType } from './types';

export const ColorSliders = ({ red, green, blue }: RGBColorType) => {
  return (
    <section className="color-sliders">
      <ColorSlider id="red-slider" label="Red" value={red} />
      <ColorSlider id="green-slider" label="Green" value={green} />
      <ColorSlider id="blue-slider" label="Blue" value={blue} />
    </section>
  );
};
