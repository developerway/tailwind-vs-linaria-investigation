import { css } from "@linaria/core";
import { NormalToLargeButton } from "@fe/components/button";
import { PhotoUpload } from "@fe/components/file-upload/photo-upload";
import { NormalToLargeInput } from "@fe/components/input/base-input";
import { BaseTextarea } from "@fe/components/textarea/base-textarea";

const formContainer = css`
  max-width: 34rem;
  margin-left: auto;
  margin-right: auto;
`;

const formGroup = css`
  margin-bottom: 1rem;
`;

const inputLabel = css`
  display: block;
  font-size: 0.75rem;
  margin-bottom: 0.25rem;
`;

const buttonGroup = css`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
  justify-content: flex-end;

  @media (min-width: 640px) {
    gap: 1rem;
    flex-direction: row;
  }
`;

const textButton = css`
  height: 3.5rem;
  font-size: 1.125rem;
  width: 100%;
  display: flex;

  @media (min-width: 640px) {
    height: 2.5rem;
    font-size: 0.875rem;
    width: auto;
    display: inline-flex;
  }
`;

const primaryButton = css`
  height: 3.5rem;
  font-size: 1.125rem;
  width: 100%;
  display: flex;

  @media (min-width: 640px) {
    height: 2.5rem;
    font-size: 0.875rem;
    width: auto;
    display: inline-flex;
  }
`;

export const SettingsProfileForm = ({ ...props }) => {
  return (
    <form className={formContainer} {...props}>
      <div className={formGroup}>
        <PhotoUpload
          id="profile-photo-upload"
          url="https://images.unsplash.com/photo-1694239400333-0051c92d420f?q=80&w=128&h=128&auto=format&fit=crop"
          name="Sheera.Gottstein"
          aria-label="Profile photo upload"
        />
      </div>
      <div className={formGroup}>
        <label htmlFor="name" className={inputLabel}>
          Name
        </label>
        <NormalToLargeInput
          defaultValue="Sheera Gottstein"
          id="name"
          aria-required="true"
        />
      </div>
      <div className={formGroup}>
        <label htmlFor="email" className={inputLabel}>
          Email
        </label>
        <NormalToLargeInput
          defaultValue="Sheera.Gottstein@gmail.com"
          id="email"
          type="email"
          aria-required="true"
        />
      </div>
      <div className={formGroup}>
        <label htmlFor="pronouns" className={inputLabel}>
          Pronouns
        </label>
        <NormalToLargeInput
          defaultValue="She/Her"
          id="pronouns"
          aria-required="true"
        />
      </div>
      <div className={formGroup}>
        <label htmlFor="bio" className={inputLabel}>
          Bio
        </label>
        <BaseTextarea
          defaultValue="Sheera is a human with a big heart. She's studied law, music and sociology, and she is currently working as a death doula and activist for imprisoned women."
          id="bio"
          aria-required="true"
        />
      </div>
      <div className={buttonGroup}>
        <NormalToLargeButton
          appearance="text"
          className={textButton}
          aria-label="Discard changes"
        >
          Discard
        </NormalToLargeButton>
        <NormalToLargeButton
          appearance="primary"
          className={primaryButton}
          aria-label="Save changes"
        >
          Save
        </NormalToLargeButton>
      </div>
    </form>
  );
};
