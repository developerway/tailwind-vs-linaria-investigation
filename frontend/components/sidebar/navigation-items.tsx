import React, { HTMLAttributes, ReactNode } from "react";
import { css } from "@linaria/core";
import { Tooltip } from "@fe/components/tooltip";
import { Link } from "@fe/utils/link";
import { usePath } from "@fe/utils/use-client-router";

type SidebarItemProps = {
  before?: ReactNode;
  after?: ReactNode;
  children?: ReactNode;
  href?: string;
  onClick?: () => void;
  isActive?: boolean;
  className?: string;
  ariaLabel?: string;
} & HTMLAttributes<HTMLElement>;

const baseItem = css`
  display: flex;
  align-items: center;
  min-height: 3.375rem;
  border-radius: 0.25rem;

  &:focus-visible {
    outline: none;
    box-shadow:
      0 0 0 2px var(--blinkBlue400),
      0 0 0 4px var(--blinkBlue200);
    ring-offset: 0;
  }

  @media (min-width: 640px) {
    min-height: 2.125rem;
  }
`;

const activeItem = css`
  background-color: var(--blinkGray200);

  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkGray700);
  }
`;

const interactiveItem = css`
  &:hover {
    background-color: var(--blinkGray100);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: var(--blinkGray800);
    }
  }
`;

const beforeContainer = css`
  flex-shrink: 0;
  display: inline-flex;
`;

const childrenContainer = css`
  flex-grow: 1;
  display: inline-flex;

  [data-sidebar-open="false"] & {
    display: none;
  }
`;

const afterContainer = css`
  flex-shrink: 0;
  display: inline-flex;

  [data-sidebar-open="false"] & {
    display: none;
  }
`;

export const SidebarBaseItem = React.forwardRef(
  (
    {
      before,
      after,
      children,
      href,
      onClick,
      isActive,
      className,
      ...rest
    }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    const Component = href ? "a" : onClick ? "button" : "span";
    return (
      <Component
        ref={ref}
        className={`${baseItem} ${isActive ? activeItem : ""} ${href || onClick ? interactiveItem : ""} ${className || ""}`}
        href={href}
        onClick={onClick}
        tabIndex={0}
        role={onClick ? "button" : undefined}
        {...rest}
      >
        {before && <span className={beforeContainer}>{before}</span>}
        <span className={childrenContainer}>{children}</span>
        {after && <span className={afterContainer}>{after}</span>}
      </Component>
    );
  },
);

export const SidebarLinkItem = React.forwardRef(
  (
    {
      before,
      after,
      children,
      href,
      onClick,
      isActive,
      className,
      ...rest
    }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    const Component = href ? Link : onClick ? "button" : "span";
    return (
      <Component
        ref={ref}
        className={`${baseItem} ${isActive ? activeItem : ""} ${href || onClick ? interactiveItem : ""} ${className || ""}`}
        href={href}
        onClick={onClick}
        tabIndex={0}
        role={onClick ? "button" : undefined}
        {...rest}
      >
        {before && <span className={beforeContainer}>{before}</span>}
        <span className={childrenContainer}>{children}</span>
        {after && <span className={afterContainer}>{after}</span>}
      </Component>
    );
  },
);

const iconItem = css`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 2rem;
  min-height: 2.125rem;
  border-radius: 0.25rem;

  &:hover {
    background-color: var(--blinkGray100);
  }

  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: var(--blinkGray800);
    }
  }
`;

export const SidebarIconItem = ({
  className,
  title,
  ...props
}: SidebarItemProps & { title: string }) => {
  return (
    <Tooltip text={title} position="right">
      <SidebarBaseItem
        className={`${iconItem} ${className || ""}`}
        aria-label={title}
        {...props}
      />
    </Tooltip>
  );
};

const regularItem = css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.75rem;

  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`;

export const SidebarRegularItem = React.forwardRef(
  (
    { className, ...props }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    return (
      <SidebarBaseItem
        ref={ref}
        className={`${regularItem} ${className || ""}`}
        {...props}
      />
    );
  },
);

const regularLinkItem = css`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  gap: 0.75rem;
  cursor: pointer;

  @media (min-width: 640px) {
    gap: 0.5rem;
  }
`;

export const SidebarRegularLinkItem = React.forwardRef(
  (
    { className, ...props }: SidebarItemProps,
    ref: React.ForwardedRef<never>,
  ) => {
    const path = usePath();
    return (
      <SidebarLinkItem
        ref={ref}
        className={`${regularLinkItem} ${className || ""}`}
        isActive={props.href === path}
        {...props}
      />
    );
  },
);

type SidebarHeadingProps = {
  children?: ReactNode;
  before?: ReactNode;
  after?: ReactNode;
  className?: string;
};

const heading = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SidebarHeading = ({
  before,
  after,
  children,
  className,
  ...rest
}: SidebarHeadingProps) => {
  return (
    <div className={`${heading} ${className || ""}`} {...rest}>
      {before && <span className={beforeContainer}>{before}</span>}
      <span className={childrenContainer}>{children}</span>
      {after && <span className={beforeContainer}>{after}</span>}
    </div>
  );
};
