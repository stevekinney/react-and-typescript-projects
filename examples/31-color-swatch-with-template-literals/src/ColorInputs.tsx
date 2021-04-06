import { ColorInput } from './ColorInput';
import { RGBColorType } from './types';

export const ColorInputs = ({ red, green, blue }: RGBColorType) => {
  return (
    <section className="color-inputs">
      <ColorInput id="red-input" label="Red" value={red} />
      <ColorInput id="green-input" label="Green" value={green} />
      <ColorInput id="blue-input" label="Blue" value={blue} />
    </section>
  );
};
