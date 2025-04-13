import { HTMLAttributes, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { css } from "@linaria/core";

const tableCell = css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: var(--blinkGray700);
  text-align: left;
`;

export const TableCell = ({
  children,
  className,
  ...props
}: TdHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <td {...props} className={`${tableCell} ${className || ""}`}>
      {children}
    </td>
  );
};

const tableHeadCell = css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  color: var(--blinkGray900);
  font-size: 0.875rem;
  text-align: left;

  @media (prefers-color-scheme: dark) {
    border-bottom: 1px solid var(--blinkNeutral800);
  }
`;

export const TableHeadCell = ({
  children,
  className,
  ...props
}: ThHTMLAttributes<HTMLTableCellElement>) => {
  return (
    <th {...props} className={`${tableHeadCell} ${className || ""}`}>
      {children}
    </th>
  );
};

const tableRow = css`
  border-bottom: 1px solid var(--blinkGray100);

  &:last-child {
    border-bottom: 0;
  }

  @media (prefers-color-scheme: dark) {
    border-bottom: 0;
  }
`;

export const TableRow = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableRowElement>) => {
  return (
    <tr {...props} className={`${tableRow} ${className || ""}`}>
      {children}
    </tr>
  );
};

const table = css`
  width: 100%;
  border-collapse: collapse;
`;

export const Table = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableElement>) => {
  return (
    <table {...props} className={`${table} ${className || ""}`}>
      {children}
    </table>
  );
};

export const TableBody = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tbody {...props} className={className || ""}>
      {children}
    </tbody>
  );
};

export const TableHead = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <thead {...props} className={className || ""}>
      {children}
    </thead>
  );
};

export const TableFoot = ({
  children,
  className,
  ...props
}: HTMLAttributes<HTMLTableSectionElement>) => {
  return (
    <tfoot {...props} className={className || ""}>
      {children}
    </tfoot>
  );
};
