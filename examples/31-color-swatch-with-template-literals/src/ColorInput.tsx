import { AdjustmentInputProps } from './ColorAdjustment';

export const ColorInput = ({
  id,
  label,
  value,
  onChange
}: AdjustmentInputProps) => {
  return (
    <div className="color-input">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
