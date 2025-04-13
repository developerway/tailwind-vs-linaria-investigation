import { useEffect, useState } from "react";
import { css } from "@linaria/core";

import { Button } from "@fe/components/button";
import { Card, CardContent } from "@fe/components/card/simple-card";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@fe/components/dropdown-menu";
import { PillLightCoral, PillLightGreen } from "@fe/components/pill/colorful";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@fe/components/table";
import { tableData } from "@fe/data/website-statistics";
import { DollarIcon } from "@fe/icons/dollar-icon";
import { DotsVerticalIcon } from "@fe/icons/dots-vertical-icon";
import { EyeIcon } from "@fe/icons/eye-icon";
import { FixedWidthPrimarySidebarSPA } from "@fe/patterns/fixed-width-primary-sidebar-spa";
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

const scrollableContent = css`
  display: flex;
  flex: 1;
  height: 100%;
  overflow-y: auto;
  flex-direction: column;
  padding: 1.5rem;
  gap: 1.5rem;
`;

const cardGrid = css`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const iconContainer = css`
  padding: 0.5rem;
  border-radius: 9999px;
  display: inline-block;
  background-color: var(--blinkGreen50);

  .dark & {
    background-color: var(--blinkGray900);
  }
`;

const cardTitle = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  color: var(--blinkNeutral900);

  .dark & {
    color: var(--blinkNeutral50);
  }
`;

const cardFooter = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const cardLabel = css`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: var(--blinkNeutral500);

  .dark & {
    color: var(--blinkGray400);
  }
`;

const pillStyles = css`
  height: 1.5rem;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const statsContainer = css`
  background-color: var(--blinkNeutral50);
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--blinkGray100);

  .dark & {
    background-color: var(--blinkNeutral800);
    border-color: var(--blinkNeutral900);
  }
`;

const statsTitle = css`
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: bold;
  padding-bottom: 1.5rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const tableWrapper = css`
  width: 100%;
  overflow: auto;
`;

const tableStyles = css`
  min-width: 44rem;
`;

const actionButton = css`
  width: 2.5rem;
`;

const actionIcon = css`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

const iconStyle = css`
  width: 2rem;
  height: 2rem;
  border-radius: 9999px;
`;

export const DashboardPage = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    updateTitle("Study project: Home");
  }, []);

  return (
    <div className={container}>
      <FixedWidthPrimarySidebarSPA />

      <div className={mainContent}>
        <TopbarForSidebarContentLayout setSearch={setSearch} search={search} />

        <div className={contentContainer}>
          <div className={scrollableContent}>
            <div className={cardGrid}>
              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className={iconContainer}>
                    <EyeIcon className={iconStyle} />
                  </div>
                  <h3 id="text-card-icon-action-title" className={cardTitle}>
                    32 567{" "}
                  </h3>
                  <div className={cardFooter}>
                    <p className={cardLabel}>Views last month</p>
                    <PillLightGreen className={pillStyles}>
                      10% ↑
                    </PillLightGreen>
                  </div>
                </CardContent>
              </Card>

              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className={iconContainer}>
                    <EyeIcon className={iconStyle} />
                  </div>
                  <h3 id="text-card-icon-action-title" className={cardTitle}>
                    11 334{" "}
                  </h3>
                  <div className={cardFooter}>
                    <p className={cardLabel}>Views last 7 days</p>
                    <PillLightGreen className={pillStyles}>
                      23% ↑
                    </PillLightGreen>
                  </div>
                </CardContent>
              </Card>

              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className={iconContainer}>
                    <DollarIcon className={iconStyle} />
                  </div>
                  <h3 id="text-card-icon-action-title" className={cardTitle}>
                    11 035
                  </h3>
                  <div className={cardFooter}>
                    <p className={cardLabel}>Revenue last year</p>
                    <PillLightCoral className={pillStyles}>
                      12% ↓
                    </PillLightCoral>
                  </div>
                </CardContent>
              </Card>

              <Card role="region" aria-labelledby="text-card-icon-action-title">
                <CardContent>
                  <div className={iconContainer}>
                    <DollarIcon className={iconStyle} />
                  </div>
                  <h3 id="text-card-icon-action-title" className={cardTitle}>
                    800
                  </h3>
                  <div className={cardFooter}>
                    <p className={cardLabel}>Revenue last month</p>
                    <PillLightCoral className={pillStyles}>6% ↓</PillLightCoral>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className={statsContainer}>
              <h3 className={statsTitle}>
                Website statistics last three month
              </h3>
              <div className={tableWrapper}>
                <Table className={tableStyles}>
                  <TableHead>
                    <TableRow>
                      <TableHeadCell>Source</TableHeadCell>
                      <TableHeadCell>Visitors</TableHeadCell>
                      <TableHeadCell>Revenue</TableHeadCell>
                      <TableHeadCell>Status</TableHeadCell>
                      <TableHeadCell>Action</TableHeadCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tableData.map((row, index) => (
                      <TableRow key={index}>
                        <TableCell>{row.source}</TableCell>
                        <TableCell>{row.visitors}</TableCell>
                        <TableCell>{row.revenue}</TableCell>
                        <TableCell>
                          {row.status === "up" ? (
                            <PillLightGreen>{row.statusText}</PillLightGreen>
                          ) : (
                            <PillLightCoral>{row.statusText}</PillLightCoral>
                          )}
                        </TableCell>
                        <TableCell>
                          <DropdownMenu
                            trigger={
                              <DropdownMenuTrigger>
                                <Button
                                  appearance="text"
                                  className={actionButton}
                                >
                                  <DotsVerticalIcon className={actionIcon} />
                                </Button>
                              </DropdownMenuTrigger>
                            }
                          >
                            <DropdownMenuContent>
                              <DropdownMenuItem>View details</DropdownMenuItem>
                              <DropdownMenuItem>
                                Add to watchlist
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
