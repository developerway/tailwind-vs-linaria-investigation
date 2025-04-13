import { ReactNode } from "react";
import { css } from "@linaria/core";
import * as TooltipPrimitives from "@radix-ui/react-tooltip";

type TooltipProps = {
  text: string;
  children: ReactNode;
  position?: "top" | "right" | "bottom" | "left";
};

const tooltipContent = css`
  background-color: var(--blinkNeutral800);
  border-radius: 0.25rem;
  padding: 0.5rem;
  color: var(--blinkNeutral50);
  font-size: 0.875rem;
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  max-width: 11rem;

  @media (prefers-color-scheme: dark) {
    background-color: var(--blinkNeutral50);
    color: var(--blinkNeutral800);
  }
`;

const tooltipArrow = css`
  fill: var(--blinkNeutral800);

  @media (prefers-color-scheme: dark) {
    fill: var(--blinkNeutral50);
  }
`;

export const Tooltip = ({ text, children, position }: TooltipProps) => {
  return (
    <TooltipPrimitives.Provider>
      <TooltipPrimitives.Root>
        <TooltipPrimitives.Trigger asChild>
          {children}
        </TooltipPrimitives.Trigger>
        <TooltipPrimitives.Portal>
          <TooltipPrimitives.Content
            className={tooltipContent}
            side={position}
            sideOffset={10}
          >
            {text}
            <TooltipPrimitives.Arrow className={tooltipArrow} />
          </TooltipPrimitives.Content>
        </TooltipPrimitives.Portal>
      </TooltipPrimitives.Root>
    </TooltipPrimitives.Provider>
  );
};
