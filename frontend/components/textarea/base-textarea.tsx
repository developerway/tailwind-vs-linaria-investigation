import { TextareaHTMLAttributes } from "react";
import { css } from "@linaria/core";

const baseTextarea = css`
  display: block;
  color: var(--blinkGray700);
  border-radius: 0.25rem;
  height: 9rem;
  min-height: 2.5rem;
  padding-top: 0.625rem;
  padding-bottom: 0.625rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  width: 100%;
  font-size: 1.125rem;
  background-color: var(--blinkGray50);
  border: 1px solid var(--blinkGray100);

  &:hover {
    background-color: var(--blinkGray100);
  }

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--blinkBlue400),
      0 0 0 4px var(--blinkBlue200);
    ring-offset: 0;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: var(--blinkNeutral200);
    color: var(--blinkNeutral50);
    border-color: var(--blinkNeutral200);
  }

  &::placeholder {
    color: var(--blinkGray600);
  }

  @media (min-width: 640px) {
    font-size: 0.875rem;
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
    }

    &:disabled::placeholder {
      color: var(--blinkNeutral500);
    }
  }
`;

export function BaseTextarea({
  className,
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea className={`${baseTextarea} ${className || ""}`} {...props} />
  );
}

BaseTextarea.displayName = "BaseTextarea";
