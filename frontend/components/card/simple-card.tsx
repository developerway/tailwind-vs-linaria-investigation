import React, { HTMLAttributes, LinkHTMLAttributes } from "react";
import { css } from "@linaria/core";

const cardClass = css`
  background-color: var(--blinkNeutral50);
  border: 1px solid var(--blinkGray100);
  border-radius: 0.5rem;
  &.dark {
    background-color: var(--blinkNeutral800);
    border-color: var(--blinkNeutral900);
  }
`;

const cardHeaderClass = css`
  background-color: var(--blinkGreen50);
  padding: 1rem;
  border-radius: 0.5rem 0.5rem 0 0;
  font-size: 1rem;
  &.dark {
    background-color: var(--blinkGray900);
  }
`;

const cardContentClass = css`
  padding: 1rem;
`;

const cardContentLinkClass = css`
  display: block;
  padding: 1rem;
  &:hover {
    background-color: rgba(var(--blinkGreen300), 0.3);
  }
  &:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
  &:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }
  &:only-child {
    border-radius: 0.5rem;
  }
  &:focus-visible {
    ring-color: var(--blinkGreen300);
    ring-offset: 0;
  }
  border-color: var(--blinkGreen300);
`;

const cardFooterFullClass = css`
  background-color: var(--blinkGreen50);
  padding: 1rem;
  border-radius: 0 0 0.5rem 0.5rem;
  &.dark {
    background-color: var(--blinkGray900);
  }
`;

const cardFooterLightClass = css`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const cardImageClass = css`
  object-fit: cover;
  flex-shrink: 0;
  height: auto;
`;

export const Card = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={`${cardClass} ${className || ""}`} />;
};

export const CardHeader = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={`${cardHeaderClass} ${className || ""}`} />;
};

export const CardContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`${cardContentClass} ${className || ""}`} />
  );
};

export const CardContentLink = ({
  className,
  ...props
}: LinkHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a {...props} className={`${cardContentLinkClass} ${className || ""}`} />
  );
};

export const CardFooterFull = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`${cardFooterFullClass} ${className || ""}`} />
  );
};

export const CardFooterLight = ({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div {...props} className={`${cardFooterLightClass} ${className || ""}`} />
  );
};

export const CardImage = ({
  className,
  src,
  alt,
  ...props
}: HTMLAttributes<HTMLImageElement> & { src: string; alt?: string }) => {
  return (
    <img
      {...props}
      className={`${cardImageClass} ${className || ""}`}
      src={src}
      alt={alt}
    />
  );
};
