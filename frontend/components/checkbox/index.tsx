"use client";
import React from "react";
import { css } from "@linaria/core";
import {
  CheckmarkIcon,
  CheckmarkIndeterminateIcon,
} from "@fe/icons/checkbox-icon";
import * as CheckboxPrimitives from "@radix-ui/react-checkbox";

const checkboxBaseClass = css`
  /* General appearance styles */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 0.125rem;
  border: 1px solid var(--blinkGreen300);
  background-color: var(--blinkGray50);

  /* Checked styles */
  &[data-state="checked"] {
    background-color: var(--blinkGreen100);
    border-color: var(--blinkGreen100);
    color: var(--blinkGreen800);
  }

  &[data-state="indeterminate"] {
    background-color: var(--blinkGreen100);
    border-color: var(--blinkGreen100);
    color: var(--blinkGreen800);
  }

  /* Disabled styles */
  &:disabled {
    cursor: not-allowed;
    background-color: var(--blinkNeutral200);
    color: var(--blinkGray300);
    border-color: var(--blinkGray200);
  }

  &[data-state="checked"]:disabled {
    background-color: var(--blinkNeutral100);
    border-color: var(--blinkGray200);
    color: var(--blinkNeutral300);
  }

  &[data-state="indeterminate"]:disabled {
    background-color: var(--blinkNeutral100);
    border-color: var(--blinkGray200);
    color: var(--blinkNeutral300);
  }

  /* Dark mode styles */
  &.dark {
    background-color: var(--blinkGray900);
  }

  &[data-state="checked"].dark {
    background-color: var(--blinkGreen300);
    border-color: var(--blinkGreen100);
  }

  &[data-state="indeterminate"].dark {
    background-color: var(--blinkGreen300);
    border-color: var(--blinkGreen100);
  }

  &:disabled.dark {
    background-color: var(--blinkNeutral600);
    color: var(--blinkNeutral600);
    border-color: var(--blinkNeutral600);
  }

  &[data-state="checked"]:disabled.dark {
    background-color: var(--blinkGray900);
    border-color: var(--blinkNeutral600);
    color: var(--blinkNeutral600);
  }

  &[data-state="indeterminate"]:disabled.dark {
    background-color: var(--blinkGray900);
    border-color: var(--blinkNeutral600);
    color: var(--blinkNeutral600);
  }
`;

const checkboxClass = css`
  height: 1.125rem;
  width: 1.125rem;
`;

const normalToLargeCheckboxClass = css`
  height: 1.5rem;
  width: 1.5rem;

  @media (min-width: 640px) {
    height: 1.125rem;
    width: 1.125rem;
  }
`;

const indicatorClass = css`
  width: 1rem;
  height: 1rem;

  @media (min-width: 640px) {
    width: 1rem;
    height: 1rem;
  }
`;

const largeIndicatorClass = css`
  width: 1.5rem;
  height: 1.5rem;

  @media (min-width: 640px) {
    width: 1rem;
    height: 1rem;
  }
`;

function CheckboxBase({
  className,
  ...props
}: CheckboxPrimitives.CheckboxProps) {
  return (
    <CheckboxPrimitives.Root
      className={`${checkboxBaseClass} ${className || ""}`}
      {...props}
    />
  );
}

export const Checkbox = ({
  className,
  ...props
}: CheckboxPrimitives.CheckboxProps) => {
  return (
    <CheckboxBase {...props} className={`${checkboxClass} ${className || ""}`}>
      <CheckboxPrimitives.Indicator>
        {props.checked === "indeterminate" ? (
          <CheckmarkIndeterminateIcon className={indicatorClass} />
        ) : (
          <CheckmarkIcon className={indicatorClass} />
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxBase>
  );
};

export const NormalToLargeCheckbox = ({
  className,
  ...props
}: CheckboxPrimitives.CheckboxProps) => {
  return (
    <CheckboxBase
      {...props}
      className={`${normalToLargeCheckboxClass} ${className || ""}`}
    >
      <CheckboxPrimitives.Indicator>
        {props.checked === "indeterminate" ? (
          <CheckmarkIndeterminateIcon className={largeIndicatorClass} />
        ) : (
          <CheckmarkIcon className={largeIndicatorClass} />
        )}
      </CheckboxPrimitives.Indicator>
    </CheckboxBase>
  );
};
