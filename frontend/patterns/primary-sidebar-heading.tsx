import { css } from "@linaria/core";
import { Badge } from "@fe/components/badge";
import { Button } from "@fe/components/button";
import { SidebarHeading } from "@fe/components/sidebar/navigation-items";
import { Tooltip } from "@fe/components/tooltip";
import { BellIcon } from "@fe/icons/bell-icon";
import { ProductLogo } from "@fe/icons/logos/product-logo";
import { Link } from "@fe/utils/link";

const logoStyle = css`
  width: 2rem;
  height: 2rem;
`;

const buttonStyle = css`
  padding: 0;
  width: 4rem;
  height: 4rem;
  position: relative;

  @media (min-width: 640px) {
    width: 2rem;
    height: 2rem;
  }
`;

const badgeStyle = css`
  position: absolute;
  top: 1rem;
  right: 1rem;

  @media (min-width: 640px) {
    top: 0.25rem;
    right: 0.375rem;
  }
`;

const bellIconStyle = css`
  width: 2rem;
  height: 2rem;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const headingTextStyle = css`
  font-weight: 500;
  font-size: 1.25rem;
`;

const heading2Style = css`
  @media (min-width: 1024px) {
    padding-right: 2rem;
  }
`;

export const PrimarySidebarHeading = () => {
  return (
    <SidebarHeading
      before={
        <Link href="/login">
          <ProductLogo className={logoStyle} />
        </Link>
      }
      after={
        <Tooltip text="Notifications" position="right">
          <Button appearance="text" className={buttonStyle}>
            <Badge size="xsmall" className={badgeStyle} />

            <BellIcon className={bellIconStyle} />
          </Button>
        </Tooltip>
      }
    >
      <span className={headingTextStyle}>Settings</span>
    </SidebarHeading>
  );
};

export const PrimarySidebarHeading2 = () => {
  return (
    <SidebarHeading
      className={heading2Style}
      before={<ProductLogo className={logoStyle} />}
      after={
        <Tooltip text="Notifications" position="right">
          <Button appearance="text" className={buttonStyle}>
            <Badge size="xsmall" className={badgeStyle} />

            <BellIcon className={bellIconStyle} />
          </Button>
        </Tooltip>
      }
    >
      <span className={headingTextStyle}>Settings</span>
    </SidebarHeading>
  );
};
