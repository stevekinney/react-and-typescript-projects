export interface ColorInputProps {
  id: string;
  label: string;
  value: number;
}

export const ColorSlider = ({ id, label, value }: ColorInputProps) => {
  return (
    <div className="color-slider">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="range" min="0" max="255" value={value} />
    </div>
  );
};
