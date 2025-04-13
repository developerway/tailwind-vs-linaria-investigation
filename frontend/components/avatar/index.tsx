import { HTMLAttributes, ReactNode } from "react";
import { css } from "@linaria/core";

const avatarImageClass = css``;

type AvatarImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export const AvatarImage = ({
  src,
  alt,
  className,
  ...props
}: AvatarImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      {...props}
      className={`${avatarImageClass} ${className || ""}`}
    />
  );
};

const avatarFallbackClass = css`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--blinkGreen400);
  color: var(--blinkGreen700);
`;

type AvatarFallbackProps = {
  className?: string;
  children?: ReactNode;
};

export const AvatarFallback = ({
  className,
  children,
  ...props
}: AvatarFallbackProps & HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={`${avatarFallbackClass} ${className || ""}`} {...props}>
      {children}
    </div>
  );
};
