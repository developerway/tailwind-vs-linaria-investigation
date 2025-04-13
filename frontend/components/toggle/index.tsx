import { ButtonHTMLAttributes } from "react";
import { css } from "@linaria/core";
import * as Switch from "@radix-ui/react-switch";

const toggleBase = css`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  border-radius: 9999px;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--blinkBlue400),
      0 0 0 4px var(--blinkBlue200);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &[data-state="checked"] {
    background-color: var(--blinkGreen400);
  }

  &[data-state="unchecked"] {
    background-color: var(--blinkNeutral200);
  }

  @media (prefers-color-scheme: dark) {
    &[data-state="unchecked"] {
      background-color: var(--blinkGray300);
    }
  }
`;

const thumbBase = css`
  background-color: var(--blinkNeutral50);
  border-radius: 9999px;
  transition: transform 100ms;

  &[data-state="unchecked"] {
    transform: translateX(0);
  }
`;

const narrowToggleNormal = css`
  width: 2rem;
  height: 0.625rem;

  &:focus-visible {
    ring-offset: 1rem;
  }
`;

const narrowToggleNormalThumb = css`
  width: 1rem;
  height: 1rem;
  border: 1px solid var(--blinkGray200);
  margin-left: 0;
  margin-right: 0;

  &[data-state="checked"] {
    transform: translateX(1rem);
  }
`;

const narrowToggleLarge = css`
  width: 3rem;
  height: 0.75rem;

  &:focus-visible {
    ring-offset: 1rem;
  }
`;

const narrowToggleLargeThumb = css`
  width: 1.5rem;
  height: 1.5rem;
  border: 1px solid var(--blinkGray200);
  margin-left: 0;
  margin-right: 0;

  &[data-state="checked"] {
    transform: translateX(1.5rem);
  }
`;

const wideToggleNormal = css`
  width: 2rem;
  height: 1.25rem;
`;

const wideToggleNormalThumb = css`
  width: 1rem;
  height: 1rem;
  margin-left: 0.125rem;
  margin-right: 0.125rem;

  &[data-state="checked"] {
    transform: translateX(0.75rem);
  }
`;

const wideToggleLarge = css`
  width: 3rem;
  height: 1.75rem;
`;

const wideToggleLargeThumb = css`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: 0.1875rem;
  margin-right: 0.1875rem;

  &[data-state="checked"] {
    transform: translateX(1.125rem);
  }
`;

const normalToLargeWideToggle = css`
  width: 4.125rem;
  height: 2.375rem;

  @media (min-width: 640px) {
    width: 2rem;
    height: 1.25rem;
  }
`;

const normalToLargeWideToggleThumb = css`
  width: 2rem;
  height: 2rem;
  margin-left: 0.1875rem;
  margin-right: 0.1875rem;

  &[data-state="checked"] {
    transform: translateX(1.75rem);
  }

  @media (min-width: 640px) {
    width: 1rem;
    height: 1rem;
    margin-left: 0.125rem;
    margin-right: 0.125rem;

    &[data-state="checked"] {
      transform: translateX(0.75rem);
    }
  }
`;

const largerToXLargeWideToggle = css`
  width: 4.75rem;
  height: 2.8rem;

  @media (min-width: 640px) {
    width: 3rem;
    height: 1.75rem;
  }
`;

const largerToXLargeWideToggleThumb = css`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 0.1875rem;
  margin-right: 0.1875rem;

  &[data-state="checked"] {
    transform: translateX(1.9rem);
  }

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;

    &[data-state="checked"] {
      transform: translateX(1.125rem);
    }
  }
`;

const normalToLargeNarrowToggle = css`
  width: 4.125rem;
  height: 1rem;

  &:focus-visible {
    ring-offset: 1rem;
  }

  @media (min-width: 640px) {
    width: 2rem;
    height: 0.625rem;
  }
`;

const normalToLargeNarrowToggleThumb = css`
  width: 2rem;
  height: 2rem;
  border: 1px solid var(--blinkGray200);
  margin-left: 0;
  margin-right: 0;

  &[data-state="checked"] {
    transform: translateX(2.125rem);
  }

  @media (min-width: 640px) {
    width: 1rem;
    height: 1rem;

    &[data-state="checked"] {
      transform: translateX(1rem);
    }
  }
`;

const largerToXLargeNarrowToggle = css`
  width: 4.75rem;
  height: 1.25rem;

  &:focus-visible {
    ring-offset: 1rem;
  }

  @media (min-width: 640px) {
    width: 3rem;
    height: 0.75rem;
  }
`;

const largerToXLargeNarrowToggleThumb = css`
  width: 2.5rem;
  height: 2.5rem;
  border: 1px solid var(--blinkGray200);
  margin-left: 0;
  margin-right: 0;

  &[data-state="checked"] {
    transform: translateX(2.25rem);
  }

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;

    &[data-state="checked"] {
      transform: translateX(1.5rem);
    }
  }
`;

const ToggleBase = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Switch.Root {...props} className={`${toggleBase} ${className || ""}`} />
  );
};

const ThumbBase = ({ className, ...props }: Switch.SwitchThumbProps) => {
  return (
    <Switch.Thumb {...props} className={`${thumbBase} ${className || ""}`} />
  );
};

export const NarrowToggleNormal = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={`${narrowToggleNormal} ${className || ""}`}
      {...props}
    >
      <ThumbBase className={narrowToggleNormalThumb} />
    </ToggleBase>
  );
};

export const NarrowToggleLarge = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={`${narrowToggleLarge} ${className || ""}`}
      {...props}
    >
      <ThumbBase className={narrowToggleLargeThumb} />
    </ToggleBase>
  );
};

export const WideToggleNormal = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase className={`${wideToggleNormal} ${className || ""}`} {...props}>
      <ThumbBase className={wideToggleNormalThumb} />
    </ToggleBase>
  );
};

export const WideToggleLarge = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase className={`${wideToggleLarge} ${className || ""}`} {...props}>
      <ThumbBase className={wideToggleLargeThumb} />
    </ToggleBase>
  );
};

export const NormalToLargeWideToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={`${normalToLargeWideToggle} ${className || ""}`}
      {...props}
    >
      <ThumbBase className={normalToLargeWideToggleThumb} />
    </ToggleBase>
  );
};

export const LargerToXLargeWideToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={`${largerToXLargeWideToggle} ${className || ""}`}
      {...props}
    >
      <ThumbBase className={largerToXLargeWideToggleThumb} />
    </ToggleBase>
  );
};

export const NormalToLargeNarrowToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={`${normalToLargeNarrowToggle} ${className || ""}`}
      {...props}
    >
      <ThumbBase className={normalToLargeNarrowToggleThumb} />
    </ToggleBase>
  );
};

export const LargerToXLargeNarrowToggle = ({
  className,
  ...props
}: Switch.SwitchProps & ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <ToggleBase
      className={`${largerToXLargeNarrowToggle} ${className || ""}`}
      {...props}
    >
      <ThumbBase className={largerToXLargeNarrowToggleThumb} />
    </ToggleBase>
  );
};
