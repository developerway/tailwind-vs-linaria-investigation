import { css } from "@linaria/core";
import { InputHTMLAttributes, ReactElement } from "react";

import { BaseInput, NormalToLargeInput } from "@fe/components/input/base-input";
import { merge } from "@fe/utils/merge-classnames";

type InputWithIconsProps = {
  className?: string;
  before?: ReactElement;
  after?: ReactElement;
};

const container = css`
  position: relative;
  width: 100%;
`;

const iconBeforeWrapper = css`
  position: absolute;
  top: 0;
  left: 0.25rem;
  min-width: 2rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const iconAfterWrapper = css`
  position: absolute;
  top: 0;
  right: 0.25rem;
  min-width: 2rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const inputWithBeforeIcon = css`
  padding-left: 2.25rem;
`;

const inputWithAfterIcon = css`
  padding-right: 2.25rem;
`;

const nlIconBeforeWrapper = css`
  position: absolute;
  top: 0;
  left: 0.25rem;
  min-width: 2.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    min-width: 2rem;
    height: 2.5rem;
  }
`;

const nlIconAfterWrapper = css`
  position: absolute;
  top: 0;
  right: 0.25rem;
  min-width: 2.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    min-width: 2rem;
    height: 2.5rem;
  }
`;

const nlInputWithBeforeIcon = css`
  padding-left: 2.75rem;

  @media (min-width: 640px) {
    padding-left: 2.25rem;
  }
`;

const nlInputWithAfterIcon = css`
  padding-right: 2.75rem;

  @media (min-width: 640px) {
    padding-right: 2.25rem;
  }
`;

export const InputWithIcons = ({
  before,
  after,
  className,
  ...props
}: InputWithIconsProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={container}>
      {before && <div className={iconBeforeWrapper}>{before}</div>}
      <BaseInput
        {...props}
        className={merge(
          before ? inputWithBeforeIcon : "",
          after ? inputWithAfterIcon : "",
          className,
        )}
      />

      {after && <div className={iconAfterWrapper}>{after}</div>}
    </div>
  );
};

export const InputWithIconsNormalToLarge = ({
  before,
  after,
  className,
  ...props
}: InputWithIconsProps & InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={container}>
      {before && <div className={nlIconBeforeWrapper}>{before}</div>}
      <NormalToLargeInput
        {...props}
        className={merge(
          before ? nlInputWithBeforeIcon : "",
          after ? nlInputWithAfterIcon : "",
          className,
        )}
      />

      {after && <div className={nlIconAfterWrapper}>{after}</div>}
    </div>
  );
};
