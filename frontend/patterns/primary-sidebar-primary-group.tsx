import { css } from "@linaria/core";
import { Badge } from "@fe/components/badge";
import {
  CollapsibleSubgroupRight,
  NavigationGroup,
} from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularItem } from "@fe/components/sidebar/navigation-items";
import { ClipboardIcon } from "@fe/icons/clipboard-icon";
import { DashboardIcon } from "@fe/icons/dashboard-icon";
import { FileIcon } from "@fe/icons/file-icon";
import { HomeIcon } from "@fe/icons/home-icon";
import { InboxIcon } from "@fe/icons/inbox-icon";
import { PercentageIcon } from "@fe/icons/percentage-icon";
import { SettingsIcon } from "@fe/icons/settings-icon";

const iconStyle = css`
  width: 2rem;
  height: 2rem;

  @media (min-width: 640px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const subItemStyle = css`
  padding-left: 3rem;
`;

export const PrimarySidebarPrimaryGroup = ({ ...props }) => {
  return (
    <NavigationGroup header="general" {...props}>
      <SidebarRegularItem href="/" before={<HomeIcon className={iconStyle} />}>
        Home
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={<InboxIcon className={iconStyle} />}
        after={<Badge text="24" size="small" />}
      >
        Inbox
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={<PercentageIcon className={iconStyle} />}
      >
        Reporting
      </SidebarRegularItem>
      <SidebarRegularItem
        href="#"
        before={<DashboardIcon className={iconStyle} />}
      >
        Dashboard
      </SidebarRegularItem>
      <CollapsibleSubgroupRight
        text="Tasks"
        icon={<ClipboardIcon className={iconStyle} />}
      >
        <SidebarRegularItem
          href="#"
          className={subItemStyle}
          after={<Badge text="1" size="small" />}
        >
          Todo
        </SidebarRegularItem>
        <SidebarRegularItem
          href="#"
          className={subItemStyle}
          after={<Badge text="11" size="small" />}
        >
          In progress
        </SidebarRegularItem>
        <SidebarRegularItem
          href="#"
          className={subItemStyle}
          after={<Badge text="56" size="small" />}
        >
          Done
        </SidebarRegularItem>
      </CollapsibleSubgroupRight>
      <SidebarRegularItem href="#" before={<FileIcon className={iconStyle} />}>
        Documents
      </SidebarRegularItem>
      <SidebarRegularItem
        href="/settings"
        before={<SettingsIcon className={iconStyle} />}
      >
        Settings
      </SidebarRegularItem>
    </NavigationGroup>
  );
};
