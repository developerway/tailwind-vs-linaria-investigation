import { css } from "@linaria/core";

import { NormalToLargeButton } from "@fe/components/button";
import { NormalToLargeInput } from "@fe/components/input/base-input";
import { InputWithIconsNormalToLarge } from "@fe/components/input/input-with-icons";
import { EyeOffIcon } from "@fe/icons/eye-off-icon";

const formContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

const formGroup = css`
  margin-bottom: 1rem;
`;

const inputLabel = css`
  display: block;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;

  @media (min-width: 640px) {
    font-size: 0.75rem;
  }
`;

const fullWidth = css`
  width: 100%;
`;

const forgotPasswordLink = css`
  font-size: 0.875rem;
  text-decoration: underline;
  line-height: 1;

  &:hover {
    text-decoration: none;
  }
`;

const iconStyle = css`
  width: 1.5rem;
  height: 1.5rem;
  color: var(--blinkNeutral500);

  @media (min-width: 640px) {
    width: 1rem;
    height: 1rem;
  }

  .dark & {
    color: var(--blinkGray400);
  }
`;

export const EmailSignIn = () => {
  return (
    <form className={formContainer}>
      <div>
        <label htmlFor="email" className={inputLabel}>
          * Email
        </label>
        <NormalToLargeInput
          placeholder="Enter email address"
          id="email"
          aria-required="true"
          className={fullWidth}
        />
      </div>
      <div>
        <label htmlFor="password" className={inputLabel}>
          * Password
        </label>
        <InputWithIconsNormalToLarge
          placeholder="Enter password"
          id="password"
          aria-required="true"
          after={<EyeOffIcon className={iconStyle} />}
        />
      </div>
      <div className={formGroup}>
        <a href="#" className={forgotPasswordLink}>
          Forgot password?
        </a>
      </div>
      <NormalToLargeButton className={fullWidth}>Login</NormalToLargeButton>
    </form>
  );
};
