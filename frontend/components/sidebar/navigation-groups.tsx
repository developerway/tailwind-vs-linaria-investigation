import React, { ReactNode } from "react";
import { css } from "@linaria/core";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";
import { ChevronDownIcon } from "@fe/icons/chevron-down-icon";
import { ChevronRightIcon } from "@fe/icons/chevron-right-icon";
import * as CollapsiblePrimitives from "@radix-ui/react-collapsible";

type NavigationGroupProps = {
  left?: ReactNode;
  right?: ReactNode;
  header?: string;
  children: ReactNode;
  className?: string;
  divider?: "top" | "bottom";
};

const navigationGroupBase = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  flex-shrink: 0;
`;

const dividerTop = css`
  padding-top: 0.5rem;
  border-top: 1px solid var(--blinkGray100);

  @media (prefers-color-scheme: dark) {
    border-top-color: var(--blinkGray700);
  }
`;

const dividerBottom = css`
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--blinkGray100);

  @media (prefers-color-scheme: dark) {
    border-bottom-color: var(--blinkGray700);
  }
`;

const headerContainer = css`
  min-height: 2.125rem;
  display: flex;
  align-items: center;

  [data-sidebar-open="false"] & {
    display: none;
  }
`;

const headerText = css`
  font-size: 0.75rem;
  color: var(--blinkGray600);
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  flex-grow: 1;
  text-transform: uppercase;
`;

export const NavigationGroup = ({
  header,
  children,
  right,
  left,
  divider,
  className,
  ...props
}: NavigationGroupProps) => {
  return (
    <div
      className={`${navigationGroupBase} ${divider === "top" ? dividerTop : ""} ${divider === "bottom" ? dividerBottom : ""} ${className || ""}`}
      {...props}
    >
      {header || left || right ? (
        <div className={headerContainer}>
          {left}
          <span className={headerText}>{header}</span>
        </div>
      ) : null}
      {children}
    </div>
  );
};

type ItemWithSubNavigationProps = {
  text: string;
  children: ReactNode;
  initialOpen?: boolean;
};

const collapsibleSubgroupLeft = css`
  width: 100%;

  [data-sidebar-open="false"] & {
    display: none;
  }
`;

const collapsibleContent = css`
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const iconStyle = css`
  width: 2rem;
  height: 2rem;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CollapsibleSubgroupLeft = ({
  text,
  children,
  initialOpen = false,
}: ItemWithSubNavigationProps) => {
  const [open, setOpen] = React.useState(initialOpen);

  return (
    <CollapsiblePrimitives.Root
      className={collapsibleSubgroupLeft}
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsiblePrimitives.Trigger asChild>
        <SidebarRegularItem
          className="w-full"
          before={
            open ? (
              <ChevronDownIcon className={iconStyle} />
            ) : (
              <ChevronRightIcon className={iconStyle} />
            )
          }
          role="button"
          aria-expanded={open}
          aria-controls="collapsible-content-left"
        >
          {text}
        </SidebarRegularItem>
      </CollapsiblePrimitives.Trigger>

      <CollapsiblePrimitives.Content
        id="collapsible-content-left"
        className={collapsibleContent}
      >
        {children}
      </CollapsiblePrimitives.Content>
    </CollapsiblePrimitives.Root>
  );
};

const collapsibleSubgroupRight = css`
  width: 100%;
`;

export const CollapsibleSubgroupRight = ({
  text,
  icon,
  children,
  initialOpen = false,
}: ItemWithSubNavigationProps & { icon?: ReactNode }) => {
  const [open, setOpen] = React.useState(initialOpen);

  return (
    <CollapsiblePrimitives.Root
      className={collapsibleSubgroupRight}
      open={open}
      onOpenChange={setOpen}
    >
      <CollapsiblePrimitives.Trigger asChild>
        <SidebarRegularItem
          className="w-full"
          before={icon}
          after={
            open ? (
              <ChevronDownIcon className={iconStyle} />
            ) : (
              <ChevronRightIcon className={iconStyle} />
            )
          }
          role="button"
          aria-expanded={open}
          aria-controls="collapsible-content-right"
        >
          {text}
        </SidebarRegularItem>
      </CollapsiblePrimitives.Trigger>

      <CollapsiblePrimitives.Content
        id="collapsible-content-right"
        className={collapsibleContent}
      >
        {children}
      </CollapsiblePrimitives.Content>
    </CollapsiblePrimitives.Root>
  );
};
