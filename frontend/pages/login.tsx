import { useEffect } from "react";
import { css } from "@linaria/core";

import { ProductLogo } from "@fe/icons/logos/product-logo";
import { EmailSignIn } from "@fe/patterns/email-sign-in";
import { SocialSignIn } from "@fe/patterns/social-sign-in";
import { Link } from "@fe/utils/link";
import { updateTitle } from "@fe/utils/update-title";

const container = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-items: center;
  justify-content: center;
  overflow: auto;
`;

const innerContainer = css`
  width: 100%;
  max-height: 100%;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 640px) {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
`;

const contentContainer = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3.75rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  align-items: center;

  @media (min-width: 640px) {
    width: 52rem;
    max-width: 90%;
  }
`;

const headerContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: center;

  @media (min-width: 640px) {
    gap: 1.5rem;
  }
`;

const logoLink = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const title = css`
  font-family: var(--font-blink-title);
  font-size: 3rem;
  line-height: 1;
  font-style: italic;
  text-align: center;
`;

const subText = css`
  font-size: 0.875rem;
  line-height: 1;
`;

const signUpLink = css`
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }
`;

const formContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const formSection = css`
  width: 100%;
  flex-grow: 1;

  @media (min-width: 768px) {
    max-width: 18rem;
  }
`;

const divider = css`
  font-size: 0.875rem;
  text-transform: uppercase;
  line-height: 1;
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    height: 100%;
    flex-direction: column;
    min-height: 18rem;
    min-width: 4rem;
    margin-top: 0;
    margin-bottom: 0;
  }
`;

const dividerLine = css`
  flex-grow: 1;
  border-top-width: 1px;

  @media (min-width: 768px) {
    border-top-width: 0;
    border-left-width: 1px;
  }
`;

const socialSection = css`
  width: 100%;
  flex-grow: 1;

  @media (min-width: 768px) {
    max-width: 18rem;
    padding-top: 1.25rem;
    padding-bottom: 1.25rem;
  }
`;

export const LoginPage = () => {
  useEffect(() => {
    updateTitle("Study project: Login");
  }, []);

  return (
    <div className={container}>
      <div className={innerContainer}>
        <div className={contentContainer}>
          <div className={headerContainer}>
            <Link href="/" className={logoLink}>
              <ProductLogo />
            </Link>
            <h1 className={title}>
              <Link href="/">Welcome to Product!</Link>
            </h1>
            <p className={subText}>
              Don't have an account?{" "}
              <a href="#" className={signUpLink}>
                Sign up
              </a>
            </p>
          </div>
          <div className={formContainer}>
            <div className={formSection}>
              <EmailSignIn />
            </div>
            <div className={divider}>
              <div className={dividerLine}></div>
              or
              <div className={dividerLine}></div>
            </div>
            <div className={socialSection}>
              <SocialSignIn />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
