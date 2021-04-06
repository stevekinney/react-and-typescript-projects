import { ChangeEvent } from 'react';

export interface ColorInputProps {
  id: string;
  label: string;
  value: number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const ColorSlider = ({
  id,
  label,
  value,
  onChange
}: ColorInputProps) => {
  return (
    <div className="color-slider">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="range"
        min="0"
        max="255"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
