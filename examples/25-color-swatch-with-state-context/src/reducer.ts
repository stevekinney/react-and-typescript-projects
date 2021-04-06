import { RGBColorType } from './types';

export type AdjustmentAction = {
  type: 'ADJUST_RED' | 'ADJUST_GREEN' | 'ADJUST_BLUE';
  payload: number;
};

export const reducer = (
  state: RGBColorType,
  action: AdjustmentAction
): RGBColorType => {
  if (action.type === 'ADJUST_RED') {
    return { ...state, red: action.payload };
  }

  if (action.type === 'ADJUST_GREEN') {
    return { ...state, green: action.payload };
  }

  if (action.type === 'ADJUST_BLUE') {
    return { ...state, blue: action.payload };
  }

  return state;
};
