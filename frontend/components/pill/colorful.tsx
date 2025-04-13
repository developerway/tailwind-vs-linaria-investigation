import { HTMLAttributes } from "react";
import { Pill, PillProps } from "@fe/components/pill/base";
import { css } from "@linaria/core";

export const PillLightGold = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillLightGold} ${className || ""}`}
      deleteClassName={pillLightGoldDelete}
    />
  );
};

const pillLightGold = css`
  background-color: var(--blinkGold50);
  border-color: var(--blinkGold700);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkGold600);
    border-color: var(--blinkGold700);
  }
`;

const pillLightGoldDelete = css`
  &:hover {
    background-color: rgba(var(--blinkGold700), 0.2);
  }
`;

export const PillStrongGold = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillStrongGold} ${className || ""}`}
      deleteClassName={pillStrongGoldDelete}
    />
  );
};

const pillStrongGold = css`
  background-color: var(--blinkGold100);
  border-color: var(--blinkGold400);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkGold200);
    border-color: var(--blinkGold400);
  }
`;

const pillStrongGoldDelete = css`
  &:hover {
    background-color: rgba(var(--blinkGold400), 0.4);
  }
`;

export const PillLightGreen = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillLightGreen} ${className || ""}`}
      deleteClassName={pillLightGreenDelete}
    />
  );
};

const pillLightGreen = css`
  background-color: var(--blinkGreen100);
  border-color: var(--blinkGreen500);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkGreen400);
    border-color: var(--blinkGreen500);
  }
`;

const pillLightGreenDelete = css`
  &:hover {
    background-color: rgba(var(--blinkGreen400), 0.4);
  }
`;

export const PillStrongGreen = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillStrongGreen} ${className || ""}`}
      deleteClassName={pillStrongGreenDelete}
    />
  );
};

const pillStrongGreen = css`
  background-color: var(--blinkGreen200);
  border-color: var(--blinkGreen700);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkGreen500);
    border-color: var(--blinkGreen700);
  }
`;

const pillStrongGreenDelete = css`
  &:hover {
    background-color: rgba(var(--blinkGreen700), 0.2);
  }
`;

export const PillLightPeach = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillLightPeach} ${className || ""}`}
      deleteClassName={pillLightPeachDelete}
    />
  );
};

const pillLightPeach = css`
  background-color: var(--blinkPeach50);
  border-color: var(--blinkPeach500);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkPeach200);
    border-color: var(--blinkPeach600);
  }
`;

const pillLightPeachDelete = css`
  &:hover {
    background-color: rgba(var(--blinkPeach500), 0.4);
  }
`;

export const PillStrongPeach = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillStrongPeach} ${className || ""}`}
      deleteClassName={pillStrongPeachDelete}
    />
  );
};

const pillStrongPeach = css`
  background-color: var(--blinkPeach400);
  border-color: var(--blinkPeach700);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkPeach400);
    border-color: var(--blinkPeach700);
  }
`;

const pillStrongPeachDelete = css`
  &:hover {
    background-color: rgba(var(--blinkPeach700), 0.2);
  }
`;

export const PillLightOrange = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillLightOrange} ${className || ""}`}
      deleteClassName={pillLightOrangeDelete}
    />
  );
};

const pillLightOrange = css`
  background-color: var(--blinkOrange50);
  border-color: var(--blinkOrange100);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkOrange100);
    border-color: var(--blinkOrange100);
  }
`;

const pillLightOrangeDelete = css`
  &:hover {
    background-color: rgba(var(--blinkOrange100), 0.4);
  }
`;

export const PillStrongOrange = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillStrongOrange} ${className || ""}`}
      deleteClassName={pillStrongOrangeDelete}
    />
  );
};

const pillStrongOrange = css`
  background-color: var(--blinkOrange400);
  border-color: var(--blinkOrange800);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkOrange400);
    border-color: var(--blinkOrange800);
  }
`;

const pillStrongOrangeDelete = css`
  &:hover {
    background-color: rgba(var(--blinkOrange800), 0.2);
  }
`;

export const PillLightCoral = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillLightCoral} ${className || ""}`}
      deleteClassName={pillLightCoralDelete}
    />
  );
};

const pillLightCoral = css`
  background-color: var(--blinkCoral50);
  border-color: var(--blinkCoral300);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkCoral300);
    border-color: var(--blinkCoral300);
  }
`;

const pillLightCoralDelete = css`
  &:hover {
    background-color: rgba(var(--blinkCoral300), 0.4);
  }
`;

export const PillStrongCoral = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillStrongCoral} ${className || ""}`}
      deleteClassName={pillStrongCoralDelete}
    />
  );
};

const pillStrongCoral = css`
  background-color: var(--blinkCoral500);
  border-color: var(--blinkCoral600);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkCoral600);
    border-color: var(--blinkCoral600);
  }
`;

const pillStrongCoralDelete = css`
  &:hover {
    background-color: rgba(var(--blinkCoral600), 0.2);
  }
`;

export const PillLightPink = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillLightPink} ${className || ""}`}
      deleteClassName={pillLightPinkDelete}
    />
  );
};

const pillLightPink = css`
  background-color: var(--blinkPink50);
  border-color: var(--blinkPink300);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkPink200);
    border-color: var(--blinkPink300);
  }
`;

const pillLightPinkDelete = css`
  &:hover {
    background-color: rgba(var(--blinkPink300), 0.2);
  }
`;

export const PillStrongPink = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillStrongPink} ${className || ""}`}
      deleteClassName={pillStrongPinkDelete}
    />
  );
};

const pillStrongPink = css`
  background-color: var(--blinkPink100);
  border-color: var(--blinkPink800);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkPink300);
    border-color: var(--blinkPink800);
  }
`;

const pillStrongPinkDelete = css`
  &:hover {
    background-color: rgba(var(--blinkPink800), 0.2);
  }
`;

export const PillLightBlue = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillLightBlue} ${className || ""}`}
      deleteClassName={pillLightBlueDelete}
    />
  );
};

const pillLightBlue = css`
  background-color: var(--blinkBlue50);
  border-color: var(--blinkBlue400);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkBlue100);
    border-color: var(--blinkBlue400);
  }
`;

const pillLightBlueDelete = css`
  &:hover {
    background-color: rgba(var(--blinkBlue400), 0.4);
  }
`;

export const PillStrongBlue = ({
  className,
  ...props
}: PillProps & HTMLAttributes<HTMLSpanElement>) => {
  return (
    <Pill
      {...props}
      className={`${pillStrongBlue} ${className || ""}`}
      deleteClassName={pillStrongBlueDelete}
    />
  );
};

const pillStrongBlue = css`
  background-color: var(--blinkBlue500);
  border-color: var(--blinkBlue800);

  @media (prefers-color-scheme: dark) {
    color: var(--blinkNeutral900);
    background-color: var(--blinkBlue500);
    border-color: var(--blinkBlue800);
  }
`;

const pillStrongBlueDelete = css`
  &:hover {
    background-color: rgba(var(--blinkBlue800), 0.2);
  }
`;
