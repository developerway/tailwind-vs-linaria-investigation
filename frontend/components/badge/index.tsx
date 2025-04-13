import { HTMLAttributes } from "react";
import { css } from "@linaria/core";
import { merge } from "@fe/utils/merge-classnames";

export type BadgeProps = {
  className?: string;
  size?: "default" | "small" | "xsmall";
  text?: string;
};

const badgeBaseClass = css`
  display: inline-flex;
  gap: 0.25rem;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
`;

const badgeSizeDefault = css`
  min-width: 1.5rem;
  height: 1.5rem;
  padding: 0.25rem 0.5rem;
  font-size: 0.875rem;
`;

const badgeSizeSmall = css`
  min-width: 1rem;
  height: 1rem;
  padding: 0.125rem 0.25rem;
  font-size: 0.75rem;
`;

const badgeSizeXSmall = css`
  min-width: 0.5rem;
  height: 0.5rem;
  padding: 0.125rem;
  font-size: 0.5rem;
`;

const badgeClass = css`
  color: var(--blinkNeutral50);
  background-color: var(--blinkCoral400);
`;

export const BadgeBase = ({
  className,
  size = "default",
  text,
  ...rest
}: BadgeProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <span
      {...rest}
      className={merge(
        badgeBaseClass,
        size === "xsmall" ? badgeSizeXSmall : "",
        size === "small" ? badgeSizeSmall : "",
        size === "default" ? badgeSizeDefault : "",
        className,
      )}
    >
      {text}
    </span>
  );
};

export const Badge = ({
  className,
  ...props
}: BadgeProps & HTMLAttributes<HTMLSpanElement>) => {
  return <BadgeBase className={merge(badgeClass, className)} {...props} />;
};
