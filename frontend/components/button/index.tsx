import React, { ButtonHTMLAttributes, ReactElement, ReactNode } from "react";
import { css } from "@linaria/core";

import { merge } from "@fe/utils/merge-classnames";

// Base styles
const buttonBase = css`
  display: inline-flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  flex-shrink: 0;

  &:focus-visible {
    outline: 0;
    box-shadow:
      0 0 0 2px var(--blinkNeutral50),
      0 0 0 4px var(--blinkNeutral900);
  }

  .dark &:focus-visible {
    box-shadow:
      0 0 0 2px var(--blinkGray900),
      0 0 0 4px var(--blinkNeutral50);
  }
`;

// Appearance styles
const primaryStyle = css`
  background-color: var(--blinkNeutral900);
  color: var(--blinkGray50);

  &:hover {
    background-color: var(--blinkGray900);
  }

  &:disabled {
    background-color: var(--blinkNeutral300);
    color: var(--blinkNeutral50);
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px transparent,
      0 0 0 4px var(--blinkNeutral900);
  }

  .dark & {
    background-color: var(--blinkGray50);
    color: var(--blinkGreen900);

    &:hover {
      background-color: var(--blinkGray400);
    }

    &:disabled {
      background-color: var(--blinkGray400);
      color: var(--blinkNeutral400);
    }
  }
`;

const secondaryStyle = css`
  background-color: var(--blinkGray600);
  color: var(--blinkGray50);

  &:hover {
    background-color: var(--blinkGray900);
  }

  &:disabled {
    background-color: var(--blinkNeutral300);
    color: var(--blinkNeutral50);
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px transparent,
      0 0 0 4px var(--blinkNeutral900);
  }

  .dark & {
    background-color: var(--blinkGray400);
    color: var(--blinkGreen900);

    &:hover {
      background-color: var(--blinkGray100);
    }

    &:disabled {
      background-color: var(--blinkGray400);
      color: var(--blinkNeutral400);
    }
  }
`;

const textStyle = css`
  background-color: transparent;
  color: var(--blinkGreen900b);

  &:hover {
    background-color: var(--blinkGray200);
  }

  &:disabled {
    color: var(--blinkGray400);

    &:hover {
      background-color: transparent;
    }
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px transparent,
      0 0 0 4px var(--blinkNeutral900);
  }

  .dark & {
    color: var(--blinkNeutral50);

    &:hover {
      background-color: var(--blinkGray800);
    }

    &:disabled {
      color: var(--blinkNeutral500);

      &:hover {
        background-color: transparent;
      }
    }
  }
`;

const linkStyle = css`
  text-decoration: underline;
  text-underline-offset: 2px;
  background-color: transparent;
  color: var(--blinkGreen900b);

  &:hover {
    background-color: var(--blinkGray200);
  }

  &:disabled {
    &:hover {
      background-color: transparent;
    }
    color: var(--blinkGray400);
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px transparent,
      0 0 0 4px var(--blinkNeutral900);
  }

  .dark & {
    color: var(--blinkNeutral50);

    &:hover {
      background-color: var(--blinkGray800);
    }

    &:disabled {
      &:hover {
        background-color: transparent;
      }
      color: var(--blinkNeutral500);
    }
  }
`;

const dangerStyle = css`
  background-color: var(--blinkNeutral50);
  color: var(--blinkCoral400);
  border: 1px solid var(--blinkCoral400);

  &:hover {
    background-color: rgba(var(--blinkCoral50-rgb), 0.2);
  }

  &:disabled {
    background-color: var(--blinkNeutral300);
    color: var(--blinkNeutral50);
  }

  &:focus-visible {
    box-shadow:
      0 0 0 2px transparent,
      0 0 0 4px var(--blinkNeutral900);
  }

  .dark & {
    background-color: var(--blinkGray900);
    color: var(--blinkNeutral50);
    border-color: var(--blinkCoral300);

    &:hover {
      background-color: var(--blinkGray800);
    }

    &:disabled {
      background-color: var(--blinkGray400);
      color: var(--blinkNeutral400);
    }
  }
`;

// Size styles
const regularSize = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 2.5rem;
`;

const smallSize = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  height: 2rem;
`;

const largeSize = css`
  font-size: 1rem;
  line-height: 1.5rem;
  height: 2.75rem;
`;

const xlargeSize = css`
  font-size: 1.125rem;
  line-height: 1.75rem;
  height: 3.5rem;
`;

const smallToLargeSize = css`
  height: 2.75rem;
  font-size: 1rem;
  line-height: 1.5rem;
  width: 100%;
  display: flex;

  @media (min-width: 640px) {
    height: 2rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: auto;
    display: inline-flex;
  }
`;

const normalToLargeSize = css`
  height: 3.5rem;
  font-size: 1.125rem;
  line-height: 1.75rem;
  width: 100%;
  display: flex;

  @media (min-width: 640px) {
    height: 2.5rem;
    font-size: 0.875rem;
    line-height: 1.25rem;
    width: auto;
    display: inline-flex;
  }
`;

// Appearance mapping
const appearanceStyles = {
  primary: primaryStyle,
  secondary: secondaryStyle,
  text: textStyle,
  link: linkStyle,
  danger: dangerStyle,
};

type Appearance = keyof typeof appearanceStyles;

type ButtonProps = {
  as?: "button" | "span";
  appearance?: Appearance;
  children?: ReactNode;
  before?: ReactElement;
  after?: ReactElement;
};

const BaseButton = React.forwardRef(
  (
    {
      as = "button",
      appearance = "primary",
      children,
      before,
      after,
      className,
      ...rest
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    const Component = as;
    return (
      <Component
        ref={ref}
        type="button"
        className={merge(buttonBase, appearanceStyles[appearance], className)}
        {...rest}
      >
        {before}
        {children}
        {after}
      </Component>
    );
  },
);

export const Button = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(regularSize, className)}
        {...props}
      />
    );
  },
);

export const SmallButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(smallSize, className)}
        {...props}
      />
    );
  },
);

export const LargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(largeSize, className)}
        {...props}
      />
    );
  },
);

export const XLargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(xlargeSize, className)}
        {...props}
      />
    );
  },
);

export const SmallToLargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(smallToLargeSize, className)}
        {...props}
      />
    );
  },
);

export const NormalToLargeButton = React.forwardRef(
  (
    {
      className,
      ...props
    }: ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>,
    ref: React.Ref<HTMLButtonElement>,
  ) => {
    return (
      <BaseButton
        ref={ref}
        className={merge(normalToLargeSize, className)}
        {...props}
      />
    );
  },
);
