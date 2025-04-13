import React from "react";
import { css } from "@linaria/core";

import { merge } from "@fe/utils/merge-classnames";
import * as DialogPrimitives from "@radix-ui/react-dialog";

const overlayClass = css`
  position: fixed;
  background-color: var(--buGray900);
  opacity: 0.05;
  inset: 0;
`;

const contentBaseClass = css`
  position: fixed;
  top: 0;
  background-color: var(--blinkNeutral50);
  background-color: var(--blinkNeutral800);
  height: 100%;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const leftPositionClass = css`
  left: 0;
  width: 22rem;
  max-width: 90%;
  animation: slide-in-left 0.3s ease-out;
`;

const rightPositionClass = css`
  right: 0;
  width: 22rem;
  max-width: 90%;
  animation: slide-in-right 0.3s ease-out;
`;

type DrawerProps = {
  children: React.ReactNode;
  trigger: React.ReactNode;
  position?: "left" | "right";
};

export const Drawer = ({
  trigger,
  position = "left",
  ...props
}: DialogPrimitives.DialogProps & DrawerProps) => {
  return (
    <>
      <DialogPrimitives.Root {...props}>
        <DialogPrimitives.Trigger asChild>{trigger}</DialogPrimitives.Trigger>

        <DialogPrimitives.Portal>
          <DialogPrimitives.Overlay className={overlayClass} />

          <DialogPrimitives.Content
            className={merge(
              contentBaseClass,
              position === "left" && leftPositionClass,
              position === "right" && rightPositionClass,
            )}
          >
            {props.children}
          </DialogPrimitives.Content>
        </DialogPrimitives.Portal>
      </DialogPrimitives.Root>
    </>
  );
};
