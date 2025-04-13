import { css } from "@linaria/core";
import { AvatarImage } from "@fe/components/avatar";
import { Badge } from "@fe/components/badge";
import { Button, NormalToLargeButton } from "@fe/components/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@fe/components/dropdown-menu";
import { NavigationGroup } from "@fe/components/sidebar/navigation-groups";
import { SidebarIconItem } from "@fe/components/sidebar/navigation-items";
import { ClipboardIcon } from "@fe/icons/clipboard-icon";
import { DashboardIcon } from "@fe/icons/dashboard-icon";
import { FileIcon } from "@fe/icons/file-icon";
import { HelpCircleIcon } from "@fe/icons/help-circle-icon";
import { HomeIcon } from "@fe/icons/home-icon";
import { InboxIcon } from "@fe/icons/inbox-icon";
import { LogOutIcon } from "@fe/icons/log-out-icon";
import { ProductLogo } from "@fe/icons/logos/product-logo";
import { PercentageIcon } from "@fe/icons/percentage-icon";
import { PlusIcon } from "@fe/icons/plus-icon";
import { SettingsIcon } from "@fe/icons/settings-icon";

const logoStyle = css`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

const createButtonStyle = css`
  @media (min-width: 640px) {
    width: 2rem;
    height: 2.125rem;
  }
`;

const iconStyle = css`
  width: 2rem;
  height: 2rem;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const plusIconStyle = css`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const avatarButtonStyle = css`
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  padding: 0;
  flex-shrink: 0;

  @media (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const avatarImageStyle = css`
  width: 3.5rem;
  height: 3.5rem;
  flex-shrink: 0;
  border-radius: 9999px;

  @media (min-width: 640px) {
    width: 2rem;
    height: 2rem;
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

const flexGrowStyle = css`
  flex-grow: 1;
`;

export const PrimarySidebarCollapsed = () => {
  return (
    <>
      <ProductLogo className={logoStyle} />

      <NormalToLargeButton
        appearance="secondary"
        className={createButtonStyle}
        before={<PlusIcon className={plusIconStyle} />}
        title="Create"
      />

      <NavigationGroup>
        <SidebarIconItem
          href="#"
          before={<HomeIcon className={iconStyle} />}
          title="Home"
        />

        <SidebarIconItem
          href="#"
          before={
            <span className="relative">
              <InboxIcon className={iconStyle} />

              <Badge size="xsmall" className="absolute top-0 right-0" />
            </span>
          }
          title="Inbox"
        />

        <SidebarIconItem
          href="#"
          before={<PercentageIcon className={iconStyle} />}
          title="Reporting"
        />

        <SidebarIconItem
          href="#"
          before={<DashboardIcon className={iconStyle} />}
          title="Dashboard"
        />

        <SidebarIconItem
          href="#"
          before={<ClipboardIcon className={iconStyle} />}
          title="Tasks"
        />

        <SidebarIconItem
          href="#"
          before={<FileIcon className={iconStyle} />}
          title="Documents"
        />

        <SidebarIconItem
          href="#"
          before={<SettingsIcon className={iconStyle} />}
          title="Settings"
        />
      </NavigationGroup>
      <div className={flexGrowStyle} />

      <NavigationGroup>
        <SidebarIconItem
          href="#"
          before={<HelpCircleIcon className={iconStyle} />}
          title="Help"
        />

        <DropdownMenu
          trigger={
            <DropdownMenuTrigger>
              <Button appearance="text" className={avatarButtonStyle}>
                <AvatarImage
                  className={avatarImageStyle}
                  src="https://images.unsplash.com/photo-1694239400333-0051c92d420f?q=80&w=128&h=128&auto=format&fit=crop"
                  alt="Sheera.Gottstein"
                />
              </Button>
            </DropdownMenuTrigger>
          }
        >
          <DropdownMenuContent side="right" align="end">
            <DropdownMenuItem
              asChild
              before={<LogOutIcon className={logoutIconStyle} />}
            >
              <a href="#">Log out</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </NavigationGroup>
    </>
  );
};
