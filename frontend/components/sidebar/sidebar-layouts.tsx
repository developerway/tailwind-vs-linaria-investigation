import React, { ReactNode } from "react";
import { css } from "@linaria/core";
import { Transition } from "react-transition-group";
import { Button } from "@fe/components/button";
import { DoubleChevronsLeftIcon } from "@fe/icons/double-chevrons-left-icon";
import { DoubleChevronsRightIcon } from "@fe/icons/double-chevrons-right-icon";
import { MenuIcon } from "@fe/icons/menu-icon";
import * as DialogPrimitives from "@radix-ui/react-dialog";

const secondarySidebar = css`
  width: 4.25rem;
  background-color: var(--blinkNeutral50);
  height: 100%;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;

  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkNeutral800);
  }
`;

export const SecondarySidebar = ({
  children,
  className,
  ...rest
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div className={`${secondarySidebar} ${className || ""}`} {...rest}>
      {children}
    </div>
  );
};

const mobileMenuContainer = css`
  display: flex;
  padding-top: 0.75rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const mobileMenuButton = css`
  width: 2.75rem;
  height: 2.75rem;
  padding: 0;
  display: inline-flex;
`;

const menuIcon = css`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
`;

const dialogOverlay = css`
  position: fixed;
  inset: 0;
  background-color: var(--buGray900);
  opacity: 0.05;
`;

const dialogContent = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 22rem;
  max-width: 90%;
  background-color: var(--blinkNeutral50);
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  animation: slideInLeft 0.3s ease-out;

  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkNeutral800);
  }

  @keyframes slideInLeft {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const primarySidebar = css`
  width: 16.25rem;
  background-color: var(--blinkNeutral50);
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  display: none;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 1024px) {
    display: flex;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkNeutral800);
  }
`;

export const PrimarySidebar = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <>
      <DialogPrimitives.Root>
        <div className={mobileMenuContainer}>
          <DialogPrimitives.Trigger asChild>
            <Button
              appearance="text"
              className={mobileMenuButton}
              aria-label="Open sidebar"
              aria-controls="primary-sidebar-content"
            >
              <MenuIcon className={menuIcon} />
            </Button>
          </DialogPrimitives.Trigger>
        </div>
        <DialogPrimitives.Portal>
          <DialogPrimitives.Overlay className={dialogOverlay} />

          <DialogPrimitives.Content
            id="primary-sidebar-content"
            className={`${dialogContent} ${className || ""}`}
          >
            {children}
          </DialogPrimitives.Content>
        </DialogPrimitives.Portal>
      </DialogPrimitives.Root>

      <div className={`${primarySidebar} ${className || ""}`}>{children}</div>
    </>
  );
};

const collapsibleSidebarContainer = css`
  display: none;
  transition: all 0.3s;
  overflow: hidden;

  @media (min-width: 1024px) {
    display: block;
  }
`;

const collapsibleSidebarInner = css`
  background-color: var(--blinkNeutral50);
  height: 100%;
  overflow-y: auto;
  padding: 1rem;
  display: none;
  flex-direction: column;
  gap: 1.5rem;
  position: relative;

  @media (min-width: 1024px) {
    display: flex;
  }

  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkNeutral800);
  }

  [data-sidebar-open="true"] & {
    width: 16.25rem;
  }

  [data-sidebar-open="false"] & {
    align-items: center;
  }
`;

const toggleButton = css`
  padding: 0;
  width: 4rem;
  height: 4rem;

  [data-sidebar-open="true"] & {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  @media (min-width: 640px) {
    width: 2rem;
    height: 2rem;
  }
`;

const toggleIcon = css`
  width: 2rem;
  height: 2rem;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const CollapsiblePrimarySidebar = ({
  children,
  collapsedElements,
  className,
}: {
  children: ReactNode;
  collapsedElements: ReactNode;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = React.useState(true);

  return (
    <>
      <DialogPrimitives.Root>
        <div className={mobileMenuContainer}>
          <DialogPrimitives.Trigger asChild>
            <Button
              appearance="text"
              className={mobileMenuButton}
              aria-label="Open sidebar"
              aria-controls="collapsible-primary-sidebar-content"
            >
              <MenuIcon className={menuIcon} />
            </Button>
          </DialogPrimitives.Trigger>
        </div>
        <DialogPrimitives.Portal>
          <DialogPrimitives.Overlay className={dialogOverlay} />

          <DialogPrimitives.Content
            id="collapsible-primary-sidebar-content"
            className={`${dialogContent} z-50 ${className || ""}`}
          >
            {children}
          </DialogPrimitives.Content>
        </DialogPrimitives.Portal>
      </DialogPrimitives.Root>
      <Transition in={isOpen} timeout={300}>
        {(state) => {
          return (
            <div
              data-sidebar-open={state !== "exited" ? "true" : "false"}
              className={`${collapsibleSidebarContainer} ${isOpen ? "w-[16.25rem]" : "w-[4.25rem]"} ${className || ""}`}
            >
              <div className={collapsibleSidebarInner}>
                <Button
                  appearance="text"
                  className={toggleButton}
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                  aria-label={isOpen ? "Collapse sidebar" : "Expand sidebar"}
                  aria-expanded={isOpen}
                >
                  {state !== "exited" ? (
                    <DoubleChevronsLeftIcon className={toggleIcon} />
                  ) : (
                    <DoubleChevronsRightIcon className={toggleIcon} />
                  )}
                </Button>
                {state === "exited" ? collapsedElements : children}
              </div>
            </div>
          );
        }}
      </Transition>
    </>
  );
};
