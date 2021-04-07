import * as React from 'react';
import { CharacterType } from './characters';

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

type TableRowProps = {
  heading: Capitalize<keyof CharacterType>;
  value: CharacterType[keyof CharacterType];
};

export const TableRow = ({ heading, value }: TableRowProps) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
