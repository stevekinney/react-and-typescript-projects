import * as React from 'react';

export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table>
      <tbody>{children}</tbody>
    </table>
  );
};

export const TableRow = ({
  heading,
  value
}: {
  heading: string;
  value: string | number;
}) => {
  return (
    <tr>
      <th>{heading}</th>
      <td>{value}</td>
    </tr>
  );
};
