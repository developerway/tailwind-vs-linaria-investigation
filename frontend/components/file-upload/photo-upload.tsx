import React, { ChangeEvent } from "react";
import { css } from "@linaria/core";

import { AvatarImage } from "@fe/components/avatar";
import { NormalToLargeButton } from "@fe/components/button";
import { EmptyAvatarRounded } from "@fe/icons/empty-avatar";
import { merge } from "@fe/utils/merge-classnames";

type PhotoUploadProps = {
  id: string;
  className?: string;
  onFileChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  url?: string;
  name?: string;
};

const containerClass = css`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  align-items: center;
  position: relative;
  background-color: var(--blinkGray50);
  dark:background-color: var(--blinkGray900);
  border-radius: 0.5rem;
  padding: 1rem 0.5rem;
`;

const avatarClass = css`
  width: 6.25rem;
  height: 6.25rem;
  border-radius: 50%;
  margin-bottom: 0.75rem;
`;

const uploadButtonClass = css`
  appearance: secondary;
`;

const removeButtonClass = css`
  appearance: text;
  color: var(--blinkCoral400);
  dark:color: var(--blinkCoral300);
`;

const fileInputClass = css`
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
`;

export const PhotoUpload = ({
  id,
  className,
  onFileChange,
  url,
  name,
}: PhotoUploadProps) => {
  const fileUploadRef = React.useRef<HTMLInputElement>(null);
  return (
    <div className={merge(containerClass, className)}>
      {url ? (
        <AvatarImage className={avatarClass} src={url} alt={name || ""} />
      ) : (
        <EmptyAvatarRounded className={avatarClass} />
      )}

      <NormalToLargeButton
        className={uploadButtonClass}
        onClick={() => fileUploadRef.current?.click()}
      >
        Upload photo
      </NormalToLargeButton>

      <NormalToLargeButton className={removeButtonClass}>
        Remove photo
      </NormalToLargeButton>

      <input
        tabIndex={-1}
        ref={fileUploadRef}
        type="file"
        id={id}
        onChange={onFileChange}
        accept=".jpg, .png, .gif"
        className={fileInputClass}
      />
    </div>
  );
};

PhotoUpload.displayName = "PhotoUpload";
