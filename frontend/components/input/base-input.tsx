import { InputHTMLAttributes } from "react";
import { css } from "@linaria/core";
import { merge } from "@fe/utils/merge-classnames";

const baseClass = css`
  rounded: true;
  padding: 0.625rem 0.75rem;
  width: 100%;
  border: 1px solid var(--blinkGray100);
  background-color: var(--blinkGray50);
  color: var(--blinkTextSecondary);
  &:hover {
    background-color: var(--blinkGray100);
  }
  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px var(--blinkDoubleFocusRing);
  }
  &:disabled {
    cursor: not-allowed;
    background-color: var(--blinkNeutral200);
    color: var(--blinkNeutral50);
    border-color: var(--blinkNeutral200);
  }
  &::placeholder {
    color: var(--blinkTextSubdued);
  }
  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkGray900);
    border-color: var(--blinkGray900);
    color: var(--blinkNeutral50);
    &:hover {
      background-color: var(--blinkGray800);
    }
    &:disabled {
      background-color: var(--blinkNeutral600);
      border-color: var(--blinkNeutral600);
      color: var(--blinkNeutral400);
      &::placeholder {
        color: var(--blinkNeutral500);
      }
    }
  }
`;

const baseInputClass = css`
  height: 2.5rem;
  font-size: 0.875rem;
`;

const normalToLargeInputClass = css`
  height: 3.5rem;
  font-size: 1.125rem;
  @media (min-width: 640px) {
    height: 2.5rem;
    font-size: 0.875rem;
  }
`;

const Base = ({
  className,
  type = "text",
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input type={type} className={merge(baseClass, className)} {...props} />
  );
};

export const BaseInput = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <Base {...props} className={merge(baseInputClass, className)} />;
};

export const NormalToLargeInput = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <Base {...props} className={merge(normalToLargeInputClass, className)} />
  );
};
