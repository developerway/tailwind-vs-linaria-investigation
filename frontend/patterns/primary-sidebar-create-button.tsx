import { css } from "@linaria/core";
import { NormalToLargeButton } from "@fe/components/button";
import { EditIcon } from "@fe/icons/edit-icon";

const iconStyle = css`
  width: 1.5rem;
  height: 1.5rem;

  @media (min-width: 640px) {
    width: 1rem;
    height: 1rem;
  }
`;

const createTextStyle = css`
  .group-data-[sidebar-open="false"] & {
    display: none;
  }
`;

export const PrimarySidebarCreateButton = () => {
  return (
    <NormalToLargeButton
      appearance="secondary"
      before={<EditIcon className={iconStyle} />}
    >
      <span className={createTextStyle}>Create</span>
    </NormalToLargeButton>
  );
};
