import { css } from "@linaria/core";
import { HTMLAttributes, ReactNode } from "react";

import { Button } from "@fe/components/button";
import { CloseIcon } from "@fe/icons/close-icon";
import { merge } from "@fe/utils/merge-classnames";
import * as DialogPrimitives from "@radix-ui/react-dialog";

type DialogProps = {
  trigger?: ReactNode;
  size?: "small" | "medium" | "large";
};

const overlay = css`
  background-color: rgba(59, 64, 60, 0.4);
  position: fixed;
  inset: 0;

  &:focus-visible {
    ring-offset: 0;
    ring: 0;
  }

  &[data-state="open"] {
    animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .dark & {
    background-color: rgba(59, 64, 60, 0.8);
  }

  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const dialogContainer = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 0;

  @media (min-width: 640px) {
    justify-content: center;
    padding: 2rem;
  }
`;

const dialogContent = css`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  background-color: var(--blinkNeutral50);
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  position: relative;
  width: 100%;
  max-height: 96%;
  box-shadow:
    0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  &[data-state="open"] {
    animation: slide-in-bottom 400ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  .dark & {
    background-color: var(--blinkNeutral800);
  }

  @media (min-width: 640px) {
    width: 28.75rem;
    max-width: 90%;
    border-bottom-left-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;

    &[data-state="open"] {
      animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
    }
  }

  @keyframes slide-in-bottom {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }

  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;

const dialogContentMedium = css`
  @media (min-width: 640px) {
    width: 37.5rem;
  }
`;

const dialogContentLarge = css`
  @media (min-width: 640px) {
    width: 53.25rem;
  }
`;

const dialogTitle = css`
  font-family: var(--font-blink-title);
  font-size: 2.25rem;
  font-style: italic;
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const dialogClose = css`
  position: absolute;
  color: var(--blinkNeutral900);
  top: 0.5rem;
  right: 0.5rem;

  .dark & {
    color: var(--blinkNeutral50);
  }

  @media (min-width: 640px) {
    .group[data-size="medium"] & {
      top: 1rem;
      right: 1rem;
    }

    .group[data-size="large"] & {
      top: 1.5rem;
      right: 1.5rem;
    }
  }
`;

const closeButton = css`
  width: 2.5rem;
  height: 2.5rem;
  padding: 0.5rem;
  border-radius: 9999px;
`;

const closeIcon = css`
  width: 1.5rem;
  height: 1.5rem;
`;

const dialogBody = css`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const dialogFooter = css`
  padding: 1.5rem;
`;

const dialogDescription = css`
  font-size: 0.875rem;
  color: var(--blinkNeutral500);

  .dark & {
    color: var(--blinkGray400);
  }
`;

export const Dialog = ({
  trigger,
  size = "medium",
  children,
  ...props
}: DialogPrimitives.DialogProps & DialogProps) => {
  const getContentClassName = () => {
    let className: string = dialogContent;

    if (size === "medium") {
      className += " " + dialogContentMedium;
    } else if (size === "large") {
      className += " " + dialogContentLarge;
    }

    return className;
  };

  return (
    <DialogPrimitives.Root {...props}>
      <DialogPrimitives.Trigger asChild>{trigger}</DialogPrimitives.Trigger>
      <DialogPrimitives.Portal>
        <DialogPrimitives.Overlay className={overlay} />

        <div className={dialogContainer}>
          <DialogPrimitives.Content
            className={getContentClassName()}
            data-size={size}
          >
            {children}
          </DialogPrimitives.Content>
        </div>
      </DialogPrimitives.Portal>
    </DialogPrimitives.Root>
  );
};

export const DialogTitle = ({
  className,
  ...props
}: DialogPrimitives.DialogTitleProps) => (
  <DialogPrimitives.Title
    className={merge(dialogTitle, className)}
    {...props}
  />
);

export const DialogClose = ({
  className,
  ...props
}: DialogPrimitives.DialogCloseProps) => (
  <DialogPrimitives.Close
    asChild
    className={merge(dialogClose, className)}
    {...props}
  >
    <Button appearance="text" className={closeButton}>
      <CloseIcon className={closeIcon} />
    </Button>
  </DialogPrimitives.Close>
);

export const DialogBody = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={merge(dialogBody, className)} {...props} />
);

export const DialogFooter = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={merge(dialogFooter, className)} {...props} />
);

export const DialogDescription = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => (
  <div className={merge(dialogDescription, className)} {...props} />
);
