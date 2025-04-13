import { css } from "@linaria/core";
import { AvatarImage } from "@fe/components/avatar";
import { NormalToLargeButton } from "@fe/components/button";
import { NavigationGroup } from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";
import { Tooltip } from "@fe/components/tooltip";
import { HelpCircleIcon } from "@fe/icons/help-circle-icon";
import { LogOutIcon } from "@fe/icons/log-out-icon";

const iconLarge = css`
  width: 2rem;
  height: 2rem;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const avatarStyle = css`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  border-radius: 9999px;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const logoutIconStyle = css`
  width: 2.5rem;
  height: 2.5rem;
  flex-shrink: 0;

  @media (min-width: 640px) {
    width: 1.25rem;
    height: 1.25rem;
  }
`;

const logoutButtonStyle = css`
  width: 3.5rem;

  @media (min-width: 640px) {
    width: 2.5rem;
  }
`;

export const PrimarySidebarBottomGroup = () => {
  return (
    <NavigationGroup divider="top">
      <SidebarRegularItem
        href="#"
        before={<HelpCircleIcon className={iconLarge} />}
      >
        Help
      </SidebarRegularItem>
      <SidebarRegularItem
        before={
          <AvatarImage
            className={avatarStyle}
            src="https://images.unsplash.com/photo-1694239400333-0051c92d420f?q=80&w=128&h=128&auto=format&fit=crop"
            alt="Sheera.Gottstein"
          />
        }
        after={
          <Tooltip text="Log out" position="right">
            <NormalToLargeButton
              appearance="text"
              className={logoutButtonStyle}
              title="Log out"
            >
              <LogOutIcon className={logoutIconStyle} />
            </NormalToLargeButton>
          </Tooltip>
        }
      >
        Sheera Gottstein
      </SidebarRegularItem>
    </NavigationGroup>
  );
};
