import { HTMLAttributes, ReactElement, ReactNode } from "react";
import { css } from "@linaria/core";

import { CloseCircleIcon } from "@fe/icons/close-circle-icon";
import { merge } from "@fe/utils/merge-classnames";

export type PillProps = {
  children?: ReactNode;
  className?: string;
  before?: ReactElement;
  after?: ReactElement;
  onDelete?: () => void;
  deleteClassName?: string;
};

const pillClass = css`
  display: inline-flex;
  white-space: nowrap;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  padding: 0.25rem 0.5rem;
  height: 2rem;
  background-color: var(--blinkGray50);
  border: 1px solid var(--blinkGray100);
  color: var(--blinkTextPrimary);

  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkGray700);
    border-color: var(--blinkGray700);
  }
`;

const deleteButtonClass = css`
  border-radius: 9999px;
  padding: 0;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 1px var(--blinkDoubleFocusRing);
  }
`;

const deleteIconClass = css`
  width: 1.25rem;
  height: 1.25rem;
`;

export function Pill({
  children,
  before,
  after,
  onDelete,
  deleteClassName,
  className,
  ...rest
}: PillProps & HTMLAttributes<HTMLSpanElement>) {
  return (
    <span {...rest} className={merge(pillClass, className)}>
      {before}
      {children}
      {after}
      {onDelete ? (
        <button className={merge(deleteButtonClass, deleteClassName)}>
          <CloseCircleIcon className={deleteIconClass} />
        </button>
      ) : null}
    </span>
  );
}

Pill.displayName = "Pill";
