import { css } from "@linaria/core";
import { Badge } from "@fe/components/badge";
import {
  CollapsibleSubgroupRight,
  NavigationGroup,
} from "@fe/components/sidebar/navigation-groups";
import { SidebarRegularLinkItem } from "@fe/components/sidebar/navigation-items";
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

export const PrimarySidebarPrimaryGroupSPA = ({ ...props }) => {
  return (
    <NavigationGroup header="general" {...props}>
      <SidebarRegularLinkItem
        href="/"
        before={<HomeIcon className={iconStyle} />}
      >
        Home
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="/inbox"
        before={<InboxIcon className={iconStyle} />}
        after={<Badge text="24" size="small" />}
      >
        Inbox
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="#"
        before={<PercentageIcon className={iconStyle} />}
      >
        Reporting
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="#"
        before={<DashboardIcon className={iconStyle} />}
      >
        Dashboard
      </SidebarRegularLinkItem>
      <CollapsibleSubgroupRight
        text="Tasks"
        icon={<ClipboardIcon className={iconStyle} />}
      >
        <SidebarRegularLinkItem
          href="#"
          className={subItemStyle}
          after={<Badge text="1" size="small" />}
        >
          Todo
        </SidebarRegularLinkItem>
        <SidebarRegularLinkItem
          href="#"
          className={subItemStyle}
          after={<Badge text="11" size="small" />}
        >
          In progress
        </SidebarRegularLinkItem>
        <SidebarRegularLinkItem
          href="#"
          className={subItemStyle}
          after={<Badge text="56" size="small" />}
        >
          Done
        </SidebarRegularLinkItem>
      </CollapsibleSubgroupRight>
      <SidebarRegularLinkItem
        href="#"
        before={<FileIcon className={iconStyle} />}
      >
        Documents
      </SidebarRegularLinkItem>
      <SidebarRegularLinkItem
        href="/settings"
        before={<SettingsIcon className={iconStyle} />}
      >
        Settings
      </SidebarRegularLinkItem>
    </NavigationGroup>
  );
};
