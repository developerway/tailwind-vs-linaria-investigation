import { ReactNode } from "react";
import { css } from "@linaria/core";

import { merge } from "@fe/utils/merge-classnames";

const layoutContainer = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--blinkGray50);
  gap: 0.125rem;
  color: var(--blinkNeutral900);

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  .dark & {
    background-color: var(--blinkNeutral900);
    color: var(--blinkNeutral50);
  }
`;

const contentContainer = css`
  display: flex;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
`;

const headingContainer = css`
  height: 6rem;
  padding: 1.5rem;
`;

const bodyContainer = css`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-bottom: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const bodyContent = css`
  background-color: var(--blinkNeutral50);
  flex: 1;
  padding-top: 1.75rem;
  padding-bottom: 1.75rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  border-radius: 0.5rem;
  overflow-x: auto;

  .dark & {
    background-color: var(--blinkNeutral800);
  }
`;

export const Layout = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge(layoutContainer, className)} {...rest}>
      {children}
    </div>
  );
};

export const Content = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge(contentContainer, className)} {...rest}>
      {children}
    </div>
  );
};

export const ContentHeading = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge(headingContainer, className)} {...rest}>
      {children}
    </div>
  );
};

export const ContentBody = ({
  children,
  className,
  ...rest
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div className={merge(bodyContainer, className)} {...rest}>
      <div className={bodyContent}>{children}</div>
    </div>
  );
};
