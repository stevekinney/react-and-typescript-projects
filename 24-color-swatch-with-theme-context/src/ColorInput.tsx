export interface ColorInputProps {
  id: string;
  label: string;
  value: number;
}

export const ColorInput = ({ id, label, value }: ColorInputProps) => {
  return (
    <div className="color-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type="number" min="0" max="255" value={value} />
    </div>
  );
};
