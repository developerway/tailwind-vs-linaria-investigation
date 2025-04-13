import { css } from "@linaria/core";
import { AppleLogo } from "@fe/icons/logos/apple-logo";
import { GithubLogo } from "@fe/icons/logos/github-logo";
import { GoogleLogo } from "@fe/icons/logos/google-logo";

const container = css`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
`;

const socialButton = css`
  border: 1px solid;
  border-color: var(--blinkGray100);
  box-shadow: 0 0 24px 0px rgba(0, 0, 0, 0.04);
  min-height: 3.5rem;
  display: flex;
  gap: 0.5rem;
  color: var(--blinkNeutral900);
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  line-height: 1;
  background-color: var(--blinkNeutral50);

  &:hover {
    background-color: var(--blinkGray200);
  }

  .dark & {
    border-color: var(--blinkNeutral900);
    color: var(--blinkNeutral50);
    background-color: var(--blinkNeutral800);

    &:hover {
      background-color: var(--blinkGray800);
    }
  }

  @media (min-width: 640px) {
    min-height: 2.5rem;
  }
`;

export const SocialSignIn = () => {
  return (
    <div className={container}>
      <a href="#" className={socialButton}>
        <AppleLogo /> Continue with Apple
      </a>
      <a href="#" className={socialButton}>
        <GoogleLogo />
        Continue with Google
      </a>
      <a href="#" className={socialButton}>
        <GithubLogo />
        Continue with Github
      </a>
    </div>
  );
};
