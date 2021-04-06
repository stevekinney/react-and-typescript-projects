import { RGBColorType } from './types';

export const ColorSwatch = ({ red, green, blue }: RGBColorType) => {
  return (
    <div
      className="color-swatch"
      style={{
        backgroundColor: `rgb(${red}, ${green}, ${blue})`
      }}
    ></div>
  );
};
