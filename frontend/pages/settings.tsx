import { useEffect, useState } from "react";
import { css } from "@linaria/core";

import { TabButton, TabContent, TabsList, TabsRoot } from "@fe/components/tabs";
import { FixedWidthPrimarySidebarSPA } from "@fe/patterns/fixed-width-primary-sidebar-spa";
import {
  Content,
  ContentBody,
  ContentHeading,
} from "@fe/patterns/layout-components";
import { SettingsNotificationsTable } from "@fe/patterns/settings-notifications-table";
import { TopbarForSidebarContentLayout } from "@fe/patterns/topbar-for-sidebar-content-layout";
import { updateTitle } from "@fe/utils/update-title";

const container = css`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--blinkGray50);
  gap: 0.125rem;
  color: var(--blinkNeutral900);

  @media (min-width: 1024px) {
    flex-direction: row;
  }

  .dark & {
    background-color: var(--blinkNeutral900);
    color: var(--blinkNeutral50);
  }
`;

const mainContent = css`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
`;

const contentContainer = css`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

const pageTitle = css`
  font-size: 3rem;
  line-height: 1;
  font-style: italic;
  font-family: var(--font-blink-title);
  color: var(--blinkNeutral900);

  .dark & {
    color: var(--blinkNeutral50);
  }
`;

const tabsContainer = css`
  margin-bottom: 1.5rem;
`;

const tabContent = css`
  padding-top: 1rem;
  padding-bottom: 1rem;
`;

export const SettingsPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateTitle("Study project: Settings");
  }, []);

  return (
    <div className={container}>
      <FixedWidthPrimarySidebarSPA />

      <div className={mainContent}>
        <TopbarForSidebarContentLayout search={search} setSearch={setSearch} />

        <div className={contentContainer}>
          <Content>
            <ContentHeading>
              <h1 className={pageTitle}>Settings</h1>
            </ContentHeading>
            <ContentBody>
              <TabsRoot defaultValue="notifications">
                <TabsList className={tabsContainer}>
                  <TabButton value="account-details">Account details</TabButton>
                  <TabButton value="personal-profile">
                    Personal Profile
                  </TabButton>
                  <TabButton value="email-settings">Email Settings</TabButton>
                  <TabButton value="notifications">Notifications</TabButton>
                </TabsList>
                <div className={tabContent}>
                  <TabContent value="account-details">
                    Content for Account details
                  </TabContent>
                  <TabContent value="personal-profile">
                    Content for Settings Profile
                  </TabContent>
                  <TabContent value="email-settings">
                    Content for Email Settings
                  </TabContent>
                  <TabContent value="notifications">
                    <SettingsNotificationsTable />
                  </TabContent>
                </div>
              </TabsRoot>
            </ContentBody>
          </Content>
        </div>
      </div>
    </div>
  );
};
