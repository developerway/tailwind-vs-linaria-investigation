import { ReactNode, ReactElement } from "react";
import { css } from "@linaria/core";

import { merge } from "@fe/utils/merge-classnames";
import * as DropdownMenuPrimitives from "@radix-ui/react-dropdown-menu";

// Styles
const dropdownContent = css`
  background-color: var(--blinkNeutral50);
  border-radius: 0.25rem;
  box-shadow: 0 3px 24px 0px rgba(0, 0, 0, 0.13);
  min-width: 13.75rem;
  max-height: 24rem;
  overflow: auto;

  &:hover {
    ring: 0;
    ring-offset: 0;
  }

  &:focus {
    ring: 0;
    ring-offset: 0;
  }

  .dark & {
    background-color: var(--blinkNeutral800);
  }
`;

const menuItem = css`
  font-size: 0.875rem;
  color: var(--blinkNeutral500);
  cursor: pointer;

  &:hover,
  &:focus {
    background-color: var(--blinkGray100);
    ring: 0;
    ring-offset: 0;
  }

  &:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  &:last-child {
    border-bottom-left-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
  }

  .dark & {
    color: var(--blinkGray400);

    &:hover,
    &:focus {
      background-color: var(--blinkGray800);
    }
  }
`;

const menuItemInner = css`
  display: flex;
  padding: 0.5rem 0.75rem;
  gap: 0.25rem;
  align-items: center;
  height: 3rem;

  @media (min-width: 640px) {
    height: 2.5rem;
  }
`;

const iconContainer = css`
  flex-shrink: 0;
`;

const itemContent = css`
  flex-grow: 1;
`;

const separator = css`
  border-bottom: 1px solid var(--blinkGray100);
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
`;

const menuLabel = css`
  display: block;
  font-size: 0.875rem;
  color: var(--blinkNeutral700);
  padding: 0.5rem 0.75rem;

  .dark & {
    color: var(--blinkNeutral300);
  }
`;

type DropdownMenuProps = {
  trigger: ReactElement<DropdownMenuPrimitives.DropdownMenuTriggerProps>;
  children: ReactElement<DropdownMenuPrimitives.DropdownMenuContentProps>;
};

export const DropdownMenu = ({
  trigger,
  children,
  ...rest
}: DropdownMenuProps & DropdownMenuPrimitives.DropdownMenuProps) => {
  return (
    <DropdownMenuPrimitives.Root {...rest}>
      {trigger}
      {children}
    </DropdownMenuPrimitives.Root>
  );
};

export const DropdownMenuTrigger = (
  props: DropdownMenuPrimitives.DropdownMenuTriggerProps,
) => {
  return <DropdownMenuPrimitives.Trigger asChild {...props} />;
};

export const DropdownMenuContent = ({
  className,
  ...props
}: DropdownMenuPrimitives.DropdownMenuContentProps) => {
  return (
    <DropdownMenuPrimitives.Portal>
      <DropdownMenuPrimitives.Content
        className={merge(dropdownContent, className)}
        {...props}
      />
    </DropdownMenuPrimitives.Portal>
  );
};

type DropdownMenuItemProps = {
  before?: ReactNode;
  after?: ReactNode;
};

export const DropdownMenuItem = ({
  before,
  after,
  children,
  className,
  ...props
}: DropdownMenuItemProps & DropdownMenuPrimitives.DropdownMenuItemProps) => {
  return (
    <DropdownMenuPrimitives.Item
      className={merge(menuItem, className)}
      {...props}
    >
      <span className={menuItemInner}>
        {before && <span className={iconContainer}>{before}</span>}
        <span className={itemContent}>{children}</span>
        {after && <span className={iconContainer}>{after}</span>}
      </span>
    </DropdownMenuPrimitives.Item>
  );
};

export const DropdownMenuSeparator = ({
  className,
  ...props
}: DropdownMenuPrimitives.DropdownMenuSeparatorProps) => {
  return (
    <DropdownMenuPrimitives.Separator
      {...props}
      className={merge(separator, className)}
    />
  );
};

export const DropdownMenuLabel = ({
  className,
  ...props
}: DropdownMenuPrimitives.DropdownMenuLabelProps) => {
  return (
    <DropdownMenuPrimitives.Label
      {...props}
      className={merge(menuLabel, className)}
    />
  );
};
