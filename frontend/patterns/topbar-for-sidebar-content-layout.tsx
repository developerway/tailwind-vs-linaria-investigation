import { css } from "@linaria/core";
import React from "react";

import { Button, NormalToLargeButton } from "@fe/components/button";
import { Drawer } from "@fe/components/drawer";
import { InputWithIconsNormalToLarge } from "@fe/components/input/input-with-icons";
import { WideToggleLarge } from "@fe/components/toggle";
import { DotsVerticalIcon } from "@fe/icons/dots-vertical-icon";
import { DownloadIcon } from "@fe/icons/download-icon";
import { PlusIcon } from "@fe/icons/plus-icon";
import { SearchIcon } from "@fe/icons/search-icon";

const container = css`
  @media (min-width: 1024px) {
    background-color: var(--blinkNeutral50);

    .dark & {
      background-color: var(--blinkNeutral800);
    }
  }
`;

const nav = css`
  height: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  top: 0.75rem;
  right: 0;
  left: 3rem;

  @media (min-width: 1024px) {
    height: 4rem;
    top: 0;
    left: 0;
    position: relative;
  }
`;

const title = css`
  font-size: 1.5rem;
  color: var(--blinkNeutral900);
  font-style: italic;
  font-family: var(--font-blink-title);

  .dark & {
    color: var(--blinkNeutral50);
  }
`;

const desktopControls = css`
  gap: 0.75rem;
  display: none;

  @media (min-width: 1024px) {
    display: flex;
  }
`;

const toggleWrapper = css`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const mobileMenuButton = css`
  display: block;

  @media (min-width: 1024px) {
    display: none;
  }
`;

const menuButtonStyle = css`
  width: 3rem;
  height: 3rem;

  @media (min-width: 1024px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const menuIconStyle = css`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;

  @media (min-width: 1024px) {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const iconStyle = css`
  width: 1.5rem;
  height: 1.5rem;

  @media (min-width: 1024px) {
    width: 1rem;
    height: 1rem;
  }
`;

const drawerContent = css`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TopbarForSidebarContentLayout = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (val: string) => void;
}) => {
  return (
    <div className={container}>
      <nav aria-label="Main Navigation" className={nav}>
        <div className={title}>
          <a href="#">My Dashboards</a>
        </div>
        <div className={desktopControls}>
          <InputWithIconsNormalToLarge
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            before={<SearchIcon className={iconStyle} />}
          />
          <Button
            appearance="secondary"
            after={<PlusIcon className={iconStyle} />}
          >
            Add widget
          </Button>
          <div className={toggleWrapper}>
            <WideToggleLarge id="larger-toggle2" defaultChecked />

            <label className="Label" htmlFor="larger-toggle2">
              Light
            </label>
          </div>
        </div>
        <div className={mobileMenuButton}>
          <Drawer
            position="right"
            trigger={
              <Button appearance="text" className={menuButtonStyle}>
                <DotsVerticalIcon className={menuIconStyle} />
              </Button>
            }
          >
            <div className={drawerContent}>
              <InputWithIconsNormalToLarge
                placeholder="Search..."
                before={<SearchIcon className={iconStyle} />}
              />

              <NormalToLargeButton
                appearance="secondary"
                after={<DownloadIcon className={iconStyle} />}
              >
                Download
              </NormalToLargeButton>
              <NormalToLargeButton
                appearance="primary"
                after={<PlusIcon className={iconStyle} />}
              >
                Create
              </NormalToLargeButton>
            </div>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};
