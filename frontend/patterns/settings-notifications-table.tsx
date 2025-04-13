import { css } from "@linaria/core";
import { NormalToLargeCheckbox } from "@fe/components/checkbox";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@fe/components/table";

const heading = css`
  font-style: italic;
  font-family: var(--font-blink-title);
  font-size: 2.25rem;
  color: var(--blinkGreen700);

  .dark & {
    color: var(--blinkGreen100);
  }
`;

const tableContainer = css`
  width: 100%;
  overflow: auto;
`;

const table = css`
  min-width: 34rem;
  margin-bottom: 4rem;
`;

const tableHeadCell = css`
  width: 5rem;
`;

const cellTitle = css`
  display: block;
  font-size: 1.125rem;
  color: var(--blinkNeutral900);

  .dark & {
    color: var(--blinkNeutral50);
  }
`;

const cellDescription = css`
  color: var(--blinkNeutral500);
  font-size: 1rem;

  .dark & {
    color: var(--blinkGray400);
  }
`;

const checkboxWrapper = css`
  margin-top: 0.5rem;
`;

export const SettingsNotificationsTable = () => {
  return (
    <>
      <h2 className={heading}>General</h2>
      <div className={tableContainer}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableHeadCell></TableHeadCell>
              <TableHeadCell className={tableHeadCell}>Push</TableHeadCell>
              <TableHeadCell className={tableHeadCell}>Email</TableHeadCell>
              <TableHeadCell className={tableHeadCell}>SMS</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>Your account security</span>
                <span className={cellDescription}>
                  Notifications about your account security
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="security-push"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="security-email"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="security-sms"
                  className={checkboxWrapper}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>
                  Interviews, reviews and surveys
                </span>
                <span className={cellDescription}>
                  Invitations to test new features and give feedback
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="interviews-push"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="interviews-email"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="interviews-sms"
                  className={checkboxWrapper}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>Marketing and promotional</span>
                <span className={cellDescription}>
                  News, offers and promotions
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="marketing-push"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="marketing-email"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="marketing-sms"
                  className={checkboxWrapper}
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>Our campaigns</span>
                <span className={cellDescription}>
                  Updates about the causes we care about
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="campaigns-push"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="campaigns-email"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="campaigns-sms"
                  className={checkboxWrapper}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <h2 className={heading}>Social</h2>
      <div className={tableContainer}>
        <Table className={table}>
          <TableHead>
            <TableRow>
              <TableHeadCell></TableHeadCell>
              <TableHeadCell className={tableHeadCell}>Push</TableHeadCell>
              <TableHeadCell className={tableHeadCell}>Email</TableHeadCell>
              <TableHeadCell className={tableHeadCell}>SMS</TableHeadCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>Comments and likes</span>
                <span className={cellDescription}>
                  When someone reacts to your posts
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="comments-push"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="comments-email"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="comments-sms"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>Reminders</span>
                <span className={cellDescription}>
                  When you have an event coming up
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="reminders-push"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="reminders-email"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="reminders-sms"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>Updates from friends</span>
                <span className={cellDescription}>
                  What is happening in your network
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="updates-push"
                  className={checkboxWrapper}
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="updates-email"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="updates-sms"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <span className={cellTitle}>Friend requests</span>
                <span className={cellDescription}>
                  When someone wants to connect
                </span>
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="friend-requests-push"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="friend-requests-email"
                  className={checkboxWrapper}
                  defaultChecked
                />
              </TableCell>
              <TableCell>
                <NormalToLargeCheckbox
                  id="friend-requests-sms"
                  className={checkboxWrapper}
                />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};
