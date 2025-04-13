import { ReactNode } from "react";
import { css } from "@linaria/core";
import * as TabsPrimitives from "@radix-ui/react-tabs";

const tabsRoot = css`
  &[data-orientation="vertical"] {
    width: 100%;
  }

  @media (min-width: 640px) {
    &[data-orientation="vertical"] {
      display: flex;
      width: auto;
    }
  }
`;

export const TabsRoot = ({
  children,
  className,
  appearance = "full",
  ...props
}: TabsPrimitives.TabsProps & {
  appearance?: "full" | "reduced" | "minimal" | "vertical";
}) => {
  return (
    <TabsPrimitives.Root
      {...props}
      data-appearance={appearance}
      orientation={appearance === "vertical" ? "vertical" : "horizontal"}
      className={`${tabsRoot} ${className || ""}`}
    >
      {children}
    </TabsPrimitives.Root>
  );
};

const tabsList = css`
  display: flex;
  overflow-x: auto;
  padding: 0.25rem;
  margin: -0.25rem;
  width: 100%;

  @media (min-width: 640px) {
    [data-appearance="vertical"] & {
      flex-direction: column;
      overflow-y: auto;
      width: 14rem;
    }
  }
`;

export const TabsList = ({
  children,
  className,
  ...props
}: TabsPrimitives.TabsListProps) => {
  return (
    <TabsPrimitives.List
      {...props}
      className={`${tabsList} ${className || ""}`}
    >
      {children}
    </TabsPrimitives.List>
  );
};

type TabButton = {
  after?: ReactNode;
  before?: ReactNode;
} & TabsPrimitives.TabsTriggerProps;

const tabButton = css`
  height: 3.375rem;
  display: flex;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  flex-shrink: 0;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--blinkBlue400),
      0 0 0 4px var(--blinkBlue200);
  }

  &[data-state="active"] {
    background-color: var(--blinkGray200);
    z-index: 10;
  }

  /* Full appearance */
  [data-appearance="full"] & {
    border: 1px solid var(--blinkGray100);

    &:first-child {
      border-top-left-radius: 0.5rem;
      border-bottom-left-radius: 0.5rem;
    }

    &:last-child {
      border-top-right-radius: 0.5rem;
      border-bottom-right-radius: 0.5rem;
    }

    &:not(:first-child) {
      border-left: 0;
    }

    @media (prefers-color-scheme: dark) {
      background-color: var(--blinkNeutral800);
      border-color: var(--blinkGray900);

      &[data-state="active"] {
        background-color: var(--blinkGray700);
      }
    }
  }

  /* Reduced appearance */
  [data-appearance="reduced"] & {
    &[data-state="active"] {
      border-radius: 0.25rem;
    }

    @media (prefers-color-scheme: dark) {
      &[data-state="active"] {
        background-color: var(--blinkGray700);
      }
    }
  }

  /* Minimal appearance */
  [data-appearance="minimal"] & {
    border-top-left-radius: 0.125rem;
    border-top-right-radius: 0.125rem;
    border-bottom: 1px solid var(--blinkGray100);

    &[data-state="active"] {
      border-color: var(--blinkGreen100);
      background-color: transparent;
      border-bottom-width: 3px;
      border-top-width: 2px;
      border-top-color: transparent;
    }

    @media (prefers-color-scheme: dark) {
      border-bottom-color: var(--blinkNeutral800);
    }
  }

  /* Vertical appearance */
  [data-appearance="vertical"] & {
    &[data-state="active"] {
      border-radius: 0.25rem;
    }

    @media (min-width: 640px) {
      justify-content: flex-start;
      height: 2.375rem;
    }

    @media (prefers-color-scheme: dark) {
      &[data-state="active"] {
        background-color: var(--blinkGray700);
      }
    }
  }
`;

const tabButtonContent = css`
  display: flex;
  flex-grow: 1;
  justify-content: center;

  [data-appearance="minimal"] & {
    flex-grow: 0;
  }

  @media (min-width: 640px) {
    [data-appearance="vertical"] & {
      justify-content: flex-start;
    }
  }
`;

export const TabButton = ({
  after,
  before,
  children,
  className,
  ...props
}: TabButton) => {
  return (
    <TabsPrimitives.Trigger
      {...props}
      className={`${tabButton} ${className || ""}`}
    >
      {before}
      <span className={tabButtonContent}>{children}</span>
      {after}
    </TabsPrimitives.Trigger>
  );
};

export const TabContent = ({
  children,
  className,
  ...props
}: TabsPrimitives.TabsContentProps) => {
  return (
    <TabsPrimitives.Content {...props} className={className || ""}>
      {children}
    </TabsPrimitives.Content>
  );
};
