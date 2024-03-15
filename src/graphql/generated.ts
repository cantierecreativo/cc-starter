import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BooleanType: { input: boolean; output: boolean; }
  CustomData: { input: Record<string, unknown>; output: Record<string, unknown>; }
  DateTime: { input: string; output: string; }
  FloatType: { input: number; output: number; }
  IntType: { input: number; output: number; }
  ItemId: { input: string; output: string; }
  JsonField: { input: unknown; output: unknown; }
  MetaTagAttributes: { input: Record<string, string>; output: Record<string, string>; }
  UploadId: { input: string; output: string; }
};

export type AboutIntroModelIntroductionTextField = {
  __typename?: 'AboutIntroModelIntroductionTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 💁 About Intro (about_intro) */
export type AboutIntroRecord = RecordInterface & {
  __typename?: 'AboutIntroRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  header: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  images: Array<ImageAltTitleFileField>;
  introductionText?: Maybe<AboutIntroModelIntroductionTextField>;
  preHeader?: Maybe<Scalars['String']['output']>;
  subheader?: Maybe<Scalars['String']['output']>;
};


/** Block of type 💁 About Intro (about_intro) */
export type AboutIntroRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 💁 About Intro (about_intro) */
export type AboutIntroRecordSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 📚 All Posts Section (all_posts_section) */
export type AllPostsSectionRecord = RecordInterface & {
  __typename?: 'AllPostsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 📚 All Posts Section (all_posts_section) */
export type AllPostsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📲 CTA App Download (app_cta) */
export type AppCtaRecord = RecordInterface & {
  __typename?: 'AppCtaRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  appstoreUrl?: Maybe<Scalars['String']['output']>;
  googlePlayUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  text?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 📲 CTA App Download (app_cta) */
export type AppCtaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📲 CTA App Download (app_cta) */
export type AppCtaRecordTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 📎 Allegato (attachment) */
export type AttachmentRecord = RecordInterface & {
  __typename?: 'AttachmentRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  file: FileField;
  id: Scalars['ItemId']['output'];
  title: Scalars['String']['output'];
};


/** Block of type 📎 Allegato (attachment) */
export type AttachmentRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🖇️ Blocco allegati (attachments_block) */
export type AttachmentsBlockRecord = RecordInterface & {
  __typename?: 'AttachmentsBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  attachmentPrefix?: Maybe<Scalars['String']['output']>;
  attachmentText?: Maybe<Scalars['String']['output']>;
  attachmentTitle?: Maybe<Scalars['String']['output']>;
  attachments: Array<AttachmentRecord>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 🖇️ Blocco allegati (attachments_block) */
export type AttachmentsBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🖇️ Blocco allegati (attachments_block) */
export type AttachmentsBlockRecordAttachmentTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BannerCtaModelLinkField = ExternalLinkRecord | InternalLinkRecord;

export type BannerCtaModelTextField = {
  __typename?: 'BannerCtaModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 📕 Banner CTA (banner_cta) */
export type BannerCtaRecord = RecordInterface & {
  __typename?: 'BannerCtaRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  bannerCtaImage?: Maybe<ImageAltTitleFileField>;
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<BannerCtaModelLinkField>;
  text?: Maybe<BannerCtaModelTextField>;
  title: Scalars['String']['output'];
};


/** Block of type 📕 Banner CTA (banner_cta) */
export type BannerCtaRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📓 Lista blog (blog_list) */
export type BlogListRecord = RecordInterface & {
  __typename?: 'BlogListRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blogPost: Array<PostRecord>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 📓 Lista blog (blog_list) */
export type BlogListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Boolean fields */
export type BooleanFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type 🏢 Brand (brand) */
export type BrandRecord = RecordInterface & {
  __typename?: 'BrandRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  brandLogo: FileField;
  brandName: Scalars['String']['output'];
  brandUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 🏢 Brand (brand) */
export type BrandRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🏢 Brands Section (brand_section) */
export type BrandSectionRecord = RecordInterface & {
  __typename?: 'BrandSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  brand: Array<BrandRecord>;
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 🏢 Brands Section (brand_section) */
export type BrandSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🎯 Button (button) */
export type ButtonRecord = RecordInterface & {
  __typename?: 'ButtonRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  primary?: Maybe<Scalars['BooleanType']['output']>;
  url?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🎯 Button (button) */
export type ButtonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ChangeLogModelContentField = {
  __typename?: 'ChangeLogModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type ChangeLogModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ChangeLogModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ChangeLogModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  timeOfRelease?: InputMaybe<DateTimeFilter>;
  versionName?: InputMaybe<StringFilter>;
};

export enum ChangeLogModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TimeOfReleaseAsc = 'timeOfRelease_ASC',
  TimeOfReleaseDesc = 'timeOfRelease_DESC',
  VersionNameAsc = 'versionName_ASC',
  VersionNameDesc = 'versionName_DESC'
}

/** Record of type Changelog entry (change_log) */
export type ChangeLogRecord = RecordInterface & {
  __typename?: 'ChangeLogRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: ChangeLogModelContentField;
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  timeOfRelease: Scalars['DateTime']['output'];
  versionName: Scalars['String']['output'];
};


/** Record of type Changelog entry (change_log) */
export type ChangeLogRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📝 Changelog Section (changelog_section) */
export type ChangelogSectionRecord = RecordInterface & {
  __typename?: 'ChangelogSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featuredVersions: Array<ChangeLogRecord>;
  id: Scalars['ItemId']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 📝 Changelog Section (changelog_section) */
export type ChangelogSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📝 Changelog Section (changelog_section) */
export type ChangelogSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type CollectionMetadata = {
  __typename?: 'CollectionMetadata';
  count: Scalars['IntType']['output'];
};

export enum ColorBucketType {
  Black = 'black',
  Blue = 'blue',
  Brown = 'brown',
  Cyan = 'cyan',
  Green = 'green',
  Grey = 'grey',
  Orange = 'orange',
  Pink = 'pink',
  Purple = 'purple',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export type ColorField = {
  __typename?: 'ColorField';
  alpha: Scalars['IntType']['output'];
  blue: Scalars['IntType']['output'];
  cssRgb: Scalars['String']['output'];
  green: Scalars['IntType']['output'];
  hex: Scalars['String']['output'];
  red: Scalars['IntType']['output'];
};

/** Block of type ✉️ Blocco testo contatti (contact_text_block) */
export type ContactTextBlockRecord = RecordInterface & {
  __typename?: 'ContactTextBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<TextSimpleBlockRecord>;
  id: Scalars['ItemId']['output'];
  prefix: Scalars['String']['output'];
  textContactBlock?: Maybe<Scalars['String']['output']>;
  titleContactBlock?: Maybe<Scalars['String']['output']>;
};


/** Block of type ✉️ Blocco testo contatti (contact_text_block) */
export type ContactTextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type ✉️ Blocco testo contatti (contact_text_block) */
export type ContactTextBlockRecordTextContactBlockArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by creation datetime */
export type CreatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Block of type 📸 CTA Button with image (cta_button_with_image) */
export type CtaButtonWithImageRecord = RecordInterface & {
  __typename?: 'CtaButtonWithImageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttonLabel: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  image: ImageAltTitleFileField;
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type 📸 CTA Button with image (cta_button_with_image) */
export type CtaButtonWithImageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📸 CTA Button with image (cta_button_with_image) */
export type CtaButtonWithImageRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter DateTime fields */
export type DateTimeFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type DetailSectionModelDetailsField = {
  __typename?: 'DetailSectionModelDetailsField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type DetailSectionModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type 📄 Detail section (detail_section) */
export type DetailSectionRecord = RecordInterface & {
  __typename?: 'DetailSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  details: DetailSectionModelDetailsField;
  id: Scalars['ItemId']['output'];
  image: ImageAltTitleFileField;
  imagePosition?: Maybe<Scalars['BooleanType']['output']>;
  link?: Maybe<DetailSectionModelLinkField>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 📄 Detail section (detail_section) */
export type DetailSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Documentation Home (documentation_home) */
export type DocumentationHomeRecord = RecordInterface & {
  __typename?: 'DocumentationHomeRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featuredPages: Array<DocumentationPageRecord>;
  footerText?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  logo: FileField;
  subheader?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Record of type Documentation Home (documentation_home) */
export type DocumentationHomeRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type DocumentationPageModelContentField = {
  __typename?: 'DocumentationPageModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type DocumentationPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<DocumentationPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<DocumentationPageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  parent?: InputMaybe<ParentFilter>;
  position?: InputMaybe<PositionFilter>;
  seoMeta?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  subtitle?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum DocumentationPageModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  SubtitleAsc = 'subtitle_ASC',
  SubtitleDesc = 'subtitle_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Documentation Page (documentation_page) */
export type DocumentationPageRecord = RecordInterface & {
  __typename?: 'DocumentationPageRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  children?: Maybe<Array<Maybe<DocumentationPageRecord>>>;
  content: DocumentationPageModelContentField;
  id: Scalars['ItemId']['output'];
  parent?: Maybe<DocumentationPageRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  seoMeta?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Record of type Documentation Page (documentation_page) */
export type DocumentationPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type ElementsListModelElementsField = PostRecord | ProductRecord;

/** Block of type 🧱 Lista Elementi (elements_list) */
export type ElementsListRecord = RecordInterface & {
  __typename?: 'ElementsListRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  elements: Array<ElementsListModelElementsField>;
  id: Scalars['ItemId']['output'];
  itemsPrefix?: Maybe<Scalars['String']['output']>;
  itemsText?: Maybe<Scalars['String']['output']>;
  itemsTitle?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🧱 Lista Elementi (elements_list) */
export type ElementsListRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🧱 Lista Elementi (elements_list) */
export type ElementsListRecordItemsTextArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ExternalLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ExternalLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ExternalLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
  url?: InputMaybe<StringFilter>;
};

export enum ExternalLinkModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC',
  UrlAsc = 'url_ASC',
  UrlDesc = 'url_DESC'
}

/** Record of type External Link (external_link) */
export type ExternalLinkRecord = RecordInterface & {
  __typename?: 'ExternalLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  url: Scalars['String']['output'];
};


/** Record of type External Link (external_link) */
export type ExternalLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type ❓ FAQ Section (faq_section) */
export type FaqSectionRecord = RecordInterface & {
  __typename?: 'FaqSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  questions: Array<QuestionRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type ❓ FAQ Section (faq_section) */
export type FaqSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type ❓ FAQ Section (faq_section) */
export type FaqSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum FaviconType {
  AppleTouchIcon = 'appleTouchIcon',
  Icon = 'icon',
  MsApplication = 'msApplication'
}

/** Block of type 📋 Feature list section (feature_list_section) */
export type FeatureListSectionRecord = RecordInterface & {
  __typename?: 'FeatureListSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  feature: Array<FeatureRecord>;
  featuresHeader?: Maybe<Scalars['String']['output']>;
  featuresSubheader?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 📋 Feature list section (feature_list_section) */
export type FeatureListSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📋 Feature list section (feature_list_section) */
export type FeatureListSectionRecordFeaturesSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type ⭐ Feature (feature) */
export type FeatureRecord = RecordInterface & {
  __typename?: 'FeatureRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  featureDescription: Scalars['String']['output'];
  featureIcon: FileField;
  featureTitle: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type ⭐ Feature (feature) */
export type FeatureRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type ⭐ Feature (feature) */
export type FeatureRecordFeatureDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 📰 Featured Pages (featured_pages_section) */
export type FeaturedPagesSectionRecord = RecordInterface & {
  __typename?: 'FeaturedPagesSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  featuredPages: Array<PageRecord>;
  featuredPagesHeader?: Maybe<Scalars['String']['output']>;
  featuredPagesSubheader?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 📰 Featured Pages (featured_pages_section) */
export type FeaturedPagesSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📰 Featured Pages (featured_pages_section) */
export type FeaturedPagesSectionRecordFeaturedPagesSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FileField = FileFieldInterface & {
  __typename?: 'FileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type FileFieldInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height?: Maybe<Scalars['IntType']['output']>;
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width?: Maybe<Scalars['IntType']['output']>;
};


export type FileFieldInterfaceAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type FileFieldInterfaceCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type FileFieldInterfaceTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type FileFieldInterfaceUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Specifies how to filter Single-file/image fields */
export type FileFilter = {
  /** Search for records with an exact match. The specified value must be an Upload ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that have one of the specified uploads */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be an Upload ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Filter records that do not have one of the specified uploads */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter Floating-point fields */
export type FloatFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['FloatType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['FloatType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['FloatType']['input']>;
};

/** Block of type 🐦 Form (form_block) */
export type FormBlockRecord = RecordInterface & {
  __typename?: 'FormBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  textForm?: Maybe<Scalars['String']['output']>;
  titleForm?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🐦 Form (form_block) */
export type FormBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🐦 Form (form_block) */
export type FormBlockRecordTextFormArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Block of type 🖼️ Galleria (gallery_section) */
export type GallerySectionRecord = RecordInterface & {
  __typename?: 'GallerySectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  galleryImages: Array<ImageBlockRecord>;
  id: Scalars['ItemId']['output'];
};


/** Block of type 🖼️ Galleria (gallery_section) */
export type GallerySectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type GlobalSeoField = {
  __typename?: 'GlobalSeoField';
  facebookPageUrl?: Maybe<Scalars['String']['output']>;
  fallbackSeo?: Maybe<SeoField>;
  siteName?: Maybe<Scalars['String']['output']>;
  titleSuffix?: Maybe<Scalars['String']['output']>;
  twitterAccount?: Maybe<Scalars['String']['output']>;
};

/** Block of type 🚀 Intestazione (hero_section) */
export type HeroSectionRecord = RecordInterface & {
  __typename?: 'HeroSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttons: Array<ButtonRecord>;
  displayOptions: Scalars['String']['output'];
  heroImage: ImageAltTitleFileField;
  heroSubtitle?: Maybe<Scalars['String']['output']>;
  heroTitle: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
};


/** Block of type 🚀 Intestazione (hero_section) */
export type HeroSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🚀 Intestazione (hero_section) */
export type HeroSectionRecordHeroSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroSectionRecordNonNullMultiLocaleField = {
  __typename?: 'HeroSectionRecordNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: HeroSectionRecord;
};

export type ImageAltTitleFileField = FileFieldInterface & {
  __typename?: 'ImageAltTitleFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt: Scalars['String']['output'];
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: FocalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


export type ImageAltTitleFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type ImageAltTitleFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type ImageAltTitleFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageAltTitleFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

/** Block of type 🌅 Blocco immagine (image_block) */
export type ImageBlockRecord = RecordInterface & {
  __typename?: 'ImageBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  imageAsset: ImageAltTitleFileField;
  imageDescription?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🌅 Blocco immagine (image_block) */
export type ImageBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🌅 Blocco immagine (image_block) */
export type ImageBlockRecordImageDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageFileField = FileFieldInterface & {
  __typename?: 'ImageFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint: FocalPoint;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage: ResponsiveImage;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video?: Maybe<UploadVideoField>;
  width: Scalars['IntType']['output'];
};


export type ImageFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type ImageFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type ImageFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type ImageFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export type ImgixParams = {
  /**
   * Aspect Ratio
   *
   * Specifies an aspect ratio to maintain when resizing and cropping the image
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/ar)
   */
  ar?: InputMaybe<Scalars['String']['input']>;
  /**
   * Automatic
   *
   * Applies automatic enhancements to images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/auto)
   */
  auto?: InputMaybe<Array<ImgixParamsAuto>>;
  /**
   * Background Color
   *
   * Colors the background of padded and partially-transparent images.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/bg)
   */
  bg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Background Removal
   *
   * Removes background from image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/rendering/background-removal/bg-remove)
   */
  bgRemove?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Blend
   *
   * Specifies the location of the blend image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend)
   */
  blend?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Align
   *
   * Changes the blend alignment relative to the parent image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-align)
   */
  blendAlign?: InputMaybe<Array<ImgixParamsBlendAlign>>;
  /**
   * Blend Alpha
   *
   * Changes the alpha of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-alpha)
   */
  blendAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Color
   *
   * Specifies a color to use when applying the blend.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-color)
   */
  blendColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Blend Crop
   *
   * Specifies the type of crop for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-crop)
   */
  blendCrop?: InputMaybe<Array<ImgixParamsBlendCrop>>;
  /**
   * Blend Fit
   *
   * Specifies the fit mode for blend images.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-fit)
   */
  blendFit?: InputMaybe<ImgixParamsBlendFit>;
  /**
   * Blend Height
   *
   * Adjusts the height of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-h)
   */
  blendH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend Mode
   *
   * Sets the blend mode for a blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-mode)
   */
  blendMode?: InputMaybe<ImgixParamsBlendMode>;
  /**
   * Blend Padding
   *
   * Applies padding to the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-pad)
   */
  blendPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Size
   *
   * Adjusts the size of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-size)
   */
  blendSize?: InputMaybe<ImgixParamsBlendSize>;
  /**
   * Blend Width
   *
   * Adjusts the width of the blend image.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-w)
   */
  blendW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Blend X Position
   *
   * Adjusts the x-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-x)
   */
  blendX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Blend Y Position
   *
   * Adjusts the y-offset of the blend image relative to its parent.
   *
   * Depends on: `blend`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/blending/blend-y)
   */
  blendY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Gaussian Blur
   *
   * Applies a gaussian blur to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/blur)
   */
  blur?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Size & Color
   *
   * Applies a border to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border)
   */
  border?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Bottom
   *
   * Sets bottom border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-bottom)
   */
  borderBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Left
   *
   * Sets left border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-left)
   */
  borderLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Outer Border Radius
   *
   * Sets the outer radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius)
   */
  borderRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Inner Border Radius
   *
   * Sets the inner radius of the image's border in pixels.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner)
   */
  borderRadiusInner?: InputMaybe<Scalars['String']['input']>;
  /**
   * Border Right
   *
   * Sets right border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-right)
   */
  borderRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Border Top
   *
   * Sets top border of an image.
   *
   * Depends on: `border`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/border-top)
   */
  borderTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Brightness
   *
   * Adjusts the brightness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/bri)
   */
  bri?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Client Hints
   *
   * Sets one or more Client-Hints headers
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/ch)
   */
  ch?: InputMaybe<Array<ImgixParamsCh>>;
  /**
   * Chroma Subsampling
   *
   * Specifies the output chroma subsampling rate.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/chromasub)
   */
  chromasub?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Quantization
   *
   * Limits the number of unique colors in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/colorquant)
   */
  colorquant?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Palette Color Count
   *
   * Specifies how many colors to include in a palette-extraction response.
   *
   * Depends on: `palette`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/colors)
   */
  colors?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Contrast
   *
   * Adjusts the contrast of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/con)
   */
  con?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Corner Radius
   *
   * Specifies the radius value for a rounded corner mask.
   *
   * Depends on: `mask=corners`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/corner-radius)
   */
  cornerRadius?: InputMaybe<Scalars['String']['input']>;
  /**
   * Crop Mode
   *
   * Specifies how to crop an image.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/crop)
   */
  crop?: InputMaybe<Array<ImgixParamsCrop>>;
  /**
   * Color Space
   *
   * Specifies the color space of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/cs)
   */
  cs?: InputMaybe<ImgixParamsCs>;
  /**
   * Download
   *
   * Forces a URL to use send-file in its response.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dl)
   */
  dl?: InputMaybe<Scalars['String']['input']>;
  /**
   * Dots Per Inch
   *
   * Sets the DPI value in the EXIF header.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/dpi)
   */
  dpi?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Device Pixel Ratio
   *
   * Adjusts the device-pixel ratio of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/dpr)
   */
  dpr?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Duotone
   *
   * Applies a duotone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone)
   */
  duotone?: InputMaybe<Scalars['String']['input']>;
  /**
   * Duotone Alpha
   *
   * Changes the alpha of the duotone effect atop the source image.
   *
   * Depends on: `duotone`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/duotone-alpha)
   */
  duotoneAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Exposure
   *
   * Adjusts the exposure of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/exp)
   */
  exp?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Url Expiration Timestamp
   *
   * A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/expires)
   */
  expires?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Index
   *
   * Selects a face to crop to.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faceindex)
   */
  faceindex?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Face Padding
   *
   * Adjusts padding around a selected face.
   *
   * Depends on: `fit=facearea`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/facepad)
   */
  facepad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Json Face Data
   *
   * Specifies that face data should be included in output when combined with `fm=json`.
   *
   * Depends on: `fm=json`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/face-detection/faces)
   */
  faces?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Fill Mode
   *
   * Determines how to fill in additional space created by the fit setting
   *
   * Depends on: `fit`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill)
   */
  fill?: InputMaybe<ImgixParamsFill>;
  /**
   * Fill Color
   *
   * Sets the fill color for images with additional space created by the fit setting
   *
   * Depends on: `fill=solid`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/fill-color)
   */
  fillColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Resize Fit Mode
   *
   * Specifies how to map the source image to the output image dimensions.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/fit)
   */
  fit?: InputMaybe<ImgixParamsFit>;
  /**
   * Flip Axis
   *
   * Flips an image on a specified axis.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/flip)
   */
  flip?: InputMaybe<ImgixParamsFlip>;
  /**
   * Output Format
   *
   * Changes the format of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/fm)
   */
  fm?: InputMaybe<ImgixParamsFm>;
  /**
   * Focal Point Debug
   *
   * Displays crosshairs identifying the location of the set focal point
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug)
   */
  fpDebug?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Focal Point X Position
   *
   * Sets the relative horizontal value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x)
   */
  fpX?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Y Position
   *
   * Sets the relative vertical value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y)
   */
  fpY?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Focal Point Zoom
   *
   * Sets the relative zoom value for the focal point of an image
   *
   * Depends on: `fit=crop`, `crop=focalpoint`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z)
   */
  fpZ?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frames Per Second
   *
   * Specifies the framerate of the generated image.
   */
  fps?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Selection
   *
   * Specifies the frame of an animated image to use.
   */
  frame?: InputMaybe<Scalars['String']['input']>;
  /**
   * Gamma
   *
   * Adjusts the gamma of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/gam)
   */
  gam?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Animated Gif Quality
   *
   * Depends on: `fm=gif`
   */
  gifQ?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Grid Colors
   *
   * Sets grid colors for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridColors?: InputMaybe<Scalars['String']['input']>;
  /**
   * Grid Size
   *
   * Sets grid size for the transparency checkerboard grid.
   *
   * Depends on: `transparency`
   */
  gridSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Height
   *
   * Adjusts the height of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/h)
   */
  h?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Highlight
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/high)
   */
  high?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Halftone
   *
   * Applies a half-tone effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/htn)
   */
  htn?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Hue Shift
   *
   * Adjusts the hue of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/hue)
   */
  hue?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Frame Interval
   *
   * Displays every Nth frame starting with the first frame.
   */
  interval?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Invert
   *
   * Inverts the colors on the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/invert)
   */
  invert?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Iptc Passthrough
   *
   * Determine if IPTC data should be passed for JPEG images.
   */
  iptc?: InputMaybe<ImgixParamsIptc>;
  /**
   * Animation Loop Count
   *
   * Specifies the number of times an animated image should repeat. A value of 0 means infinite looping.
   */
  loop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Lossless Compression
   *
   * Specifies that the output image should be a lossless variant.
   *
   * Depends on: `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/lossless)
   */
  lossless?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Watermark Image Url
   *
   * Specifies the location of the watermark image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark)
   */
  mark?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Alignment Mode
   *
   * Changes the watermark alignment relative to the parent image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-align)
   */
  markAlign?: InputMaybe<Array<ImgixParamsMarkAlign>>;
  /**
   * Watermark Alpha
   *
   * Changes the alpha of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-alpha)
   */
  markAlpha?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Base Url
   *
   * Changes base URL of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-base)
   */
  markBase?: InputMaybe<Scalars['String']['input']>;
  /**
   * Watermark Fit Mode
   *
   * Specifies the fit mode for watermark images.
   *
   * Depends on: `mark`, `markw`, `markh`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-fit)
   */
  markFit?: InputMaybe<ImgixParamsMarkFit>;
  /**
   * Watermark Height
   *
   * Adjusts the height of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-h)
   */
  markH?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Padding
   *
   * Applies padding to the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-pad)
   */
  markPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Rotation
   *
   * Rotates a watermark or tiled watermarks by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-rot)
   */
  markRot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark Scale
   *
   * Adjusts the scale of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-scale)
   */
  markScale?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Tile
   *
   * Adds tiled watermark.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-tile)
   */
  markTile?: InputMaybe<ImgixParamsMarkTile>;
  /**
   * Watermark Width
   *
   * Adjusts the width of the watermark image.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-w)
   */
  markW?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Watermark X Position
   *
   * Adjusts the x-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-x)
   */
  markX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Watermark Y Position
   *
   * Adjusts the y-offset of the watermark image relative to its parent.
   *
   * Depends on: `mark`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/watermark/mark-y)
   */
  markY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Mask Type
   *
   * Defines the type of mask and specifies the URL if that type is selected.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask)
   */
  mask?: InputMaybe<Scalars['String']['input']>;
  /**
   * Mask Background Color
   *
   * Colors the background of the transparent mask area of images
   *
   * Depends on: `mask`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/mask/mask-bg)
   */
  maskBg?: InputMaybe<Scalars['String']['input']>;
  /**
   * Maximum Height
   *
   * Specifies the maximum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-height)
   */
  maxH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Maximum Width
   *
   * Specifies the maximum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/max-width)
   */
  maxW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Height
   *
   * Specifies the minimum height of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-height)
   */
  minH?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Minimum Width
   *
   * Specifies the minimum width of the output image in pixels.
   *
   * Depends on: `fit=crop`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/min-width)
   */
  minW?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Monochrome
   *
   * Applies a monochrome effect to the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/monochrome)
   */
  monochrome?: InputMaybe<Scalars['String']['input']>;
  /**
   * Noise Reduction Bound
   *
   * Reduces the noise in an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nr)
   */
  nr?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Noise Reduction Sharpen
   *
   * Provides a threshold by which to sharpen an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/noise-reduction/nrs)
   */
  nrs?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Orientation
   *
   * Changes the image orientation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/orient)
   */
  orient?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding
   *
   * Pads an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad)
   */
  pad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Bottom
   *
   * Sets bottom padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom)
   */
  padBottom?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Left
   *
   * Sets left padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-left)
   */
  padLeft?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Right
   *
   * Sets right padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-right)
   */
  padRight?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Padding Top
   *
   * Sets top padding of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/border-and-padding/pad-top)
   */
  padTop?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Pdf Page Number
   *
   * Selects a page from a PDF for display.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/page)
   */
  page?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Color Palette Extraction
   *
   * Specifies an output format for palette-extraction.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/palette)
   */
  palette?: InputMaybe<ImgixParamsPalette>;
  /**
   * Pdf Annotation
   *
   * Enables or disables PDF annotation.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/pdf/pdf-annotation)
   */
  pdfAnnotation?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Css Prefix
   *
   * Specifies a CSS prefix for all classes in palette-extraction.
   *
   * Depends on: `palette=css`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/color-palette/prefix)
   */
  prefix?: InputMaybe<Scalars['String']['input']>;
  /**
   * Pixellate
   *
   * Applies a pixelation effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/px)
   */
  px?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Output Quality
   *
   * Adjusts the quality of an output image.
   *
   * Depends on: `fm=jpg`, `fm=pjpg`, `fm=webp`, `fm=jxr`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/format/q)
   */
  q?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Source Rectangle Region
   *
   * Crops an image to a specified rectangle.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/rect)
   */
  rect?: InputMaybe<Scalars['String']['input']>;
  /**
   * Reverse
   *
   * Reverses the frame order on the source animation.
   */
  reverse?: InputMaybe<Scalars['BooleanType']['input']>;
  /**
   * Rotation
   *
   * Rotates an image by a specified number of degrees.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/rotation/rot)
   */
  rot?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Saturation
   *
   * Adjusts the saturation of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sat)
   */
  sat?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Sepia Tone
   *
   * Applies a sepia effect to an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/stylize/sepia)
   */
  sepia?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Shadow
   *
   * Adjusts the highlights of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/shad)
   */
  shad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Sharpen
   *
   * Adjusts the sharpness of the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/sharp)
   */
  sharp?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Frame Skip
   *
   * Skips every Nth frame starting with the first frame.
   */
  skip?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Transparency
   *
   * Adds checkerboard behind images which support transparency.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/fill/transparency)
   */
  transparency?: InputMaybe<ImgixParamsTransparency>;
  /**
   * Trim Image
   *
   * Trims the source image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim)
   */
  trim?: InputMaybe<ImgixParamsTrim>;
  /**
   * Trim Color
   *
   * Specifies a trim color on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-color)
   */
  trimColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Trim Mean Difference
   *
   * Specifies the mean difference on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-md)
   */
  trimMd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Padding
   *
   * Pads the area of the source image before trimming.
   *
   * Depends on: `trim`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-pad)
   */
  trimPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Trim Standard Deviation
   *
   * Specifies the standard deviation on a trim operation.
   *
   * Depends on: `trim=auto`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-sd)
   */
  trimSd?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Trim Tolerance
   *
   * Specifies the tolerance on a trim operation.
   *
   * Depends on: `trim=color`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/trim/trim-tol)
   */
  trimTol?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text String
   *
   * Sets the text string to render.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt)
   */
  txt?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Align
   *
   * Sets the vertical and horizontal alignment of rendered text relative to the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-align)
   */
  txtAlign?: InputMaybe<Array<ImgixParamsTxtAlign>>;
  /**
   * Text Clipping Mode
   *
   * Sets the clipping properties of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-clip)
   */
  txtClip?: InputMaybe<Array<ImgixParamsTxtClip>>;
  /**
   * Text Color
   *
   * Specifies the color of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-color)
   */
  txtColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Fit Mode
   *
   * Specifies the fit approach for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-fit)
   */
  txtFit?: InputMaybe<ImgixParamsTxtFit>;
  /**
   * Text Font
   *
   * Selects a font for rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-font)
   */
  txtFont?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Leading
   *
   * Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-lead)
   */
  txtLead?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Ligatures
   *
   * Controls the level of ligature substitution
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-lig)
   */
  txtLig?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline
   *
   * Outlines the rendered text with a specified color.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line)
   */
  txtLine?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Outline Color
   *
   * Specifies a text outline color.
   *
   * Depends on: `txt`, `txtline`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-line-color)
   */
  txtLineColor?: InputMaybe<Scalars['String']['input']>;
  /**
   * Text Padding
   *
   * Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-pad)
   */
  txtPad?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Shadow
   *
   * Applies a shadow to rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-shad)
   */
  txtShad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Text Font Size
   *
   * Sets the font size of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-size)
   */
  txtSize?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Tracking
   *
   * Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/typesetting/txt-track)
   */
  txtTrack?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Width
   *
   * Sets the width of rendered text.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-width)
   */
  txtWidth?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text X Position
   *
   * Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-x)
   */
  txtX?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Text Y Position
   *
   * Sets the vertical (y) position of the text in pixels relative to the top edge of the base image.
   *
   * Depends on: `txt`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/text/txt-y)
   */
  txtY?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask
   *
   * Sharpens the source image using an unsharp mask.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usm)
   */
  usm?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Unsharp Mask Radius
   *
   * Specifies the radius for an unsharp mask operation.
   *
   * Depends on: `usm`
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/usmrad)
   */
  usmrad?: InputMaybe<Scalars['FloatType']['input']>;
  /**
   * Vibrance
   *
   * Adjusts the vibrance of an image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/adjustment/vib)
   */
  vib?: InputMaybe<Scalars['IntType']['input']>;
  /**
   * Image Width
   *
   * Adjusts the width of the output image.
   *
   * [Open Imgix reference »](https://docs.imgix.com/apis/url/size/w)
   */
  w?: InputMaybe<Scalars['FloatType']['input']>;
};

export enum ImgixParamsAuto {
  Compress = 'compress',
  Enhance = 'enhance',
  Format = 'format',
  Redeye = 'redeye'
}

export enum ImgixParamsBlendAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendCrop {
  Bottom = 'bottom',
  Faces = 'faces',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsBlendFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsBlendMode {
  Burn = 'burn',
  Color = 'color',
  Darken = 'darken',
  Difference = 'difference',
  Dodge = 'dodge',
  Exclusion = 'exclusion',
  Hardlight = 'hardlight',
  Hue = 'hue',
  Lighten = 'lighten',
  Luminosity = 'luminosity',
  Multiply = 'multiply',
  Normal = 'normal',
  Overlay = 'overlay',
  Saturation = 'saturation',
  Screen = 'screen',
  Softlight = 'softlight'
}

export enum ImgixParamsBlendSize {
  Inherit = 'inherit'
}

export enum ImgixParamsCh {
  Dpr = 'dpr',
  SaveData = 'saveData',
  Width = 'width'
}

export enum ImgixParamsCrop {
  Bottom = 'bottom',
  Edges = 'edges',
  Entropy = 'entropy',
  Faces = 'faces',
  Focalpoint = 'focalpoint',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsCs {
  Adobergb1998 = 'adobergb1998',
  Srgb = 'srgb',
  Strip = 'strip',
  Tinysrgb = 'tinysrgb'
}

export enum ImgixParamsFill {
  Blur = 'blur',
  Solid = 'solid'
}

export enum ImgixParamsFit {
  Clamp = 'clamp',
  Clip = 'clip',
  Crop = 'crop',
  Facearea = 'facearea',
  Fill = 'fill',
  Fillmax = 'fillmax',
  Max = 'max',
  Min = 'min',
  Scale = 'scale'
}

export enum ImgixParamsFlip {
  H = 'h',
  Hv = 'hv',
  V = 'v'
}

export enum ImgixParamsFm {
  Avif = 'avif',
  Blurhash = 'blurhash',
  Gif = 'gif',
  Jp2 = 'jp2',
  Jpg = 'jpg',
  Json = 'json',
  Jxr = 'jxr',
  Mp4 = 'mp4',
  Pjpg = 'pjpg',
  Png = 'png',
  Png8 = 'png8',
  Png32 = 'png32',
  Webm = 'webm',
  Webp = 'webp'
}

export enum ImgixParamsIptc {
  Allow = 'allow',
  Block = 'block'
}

export enum ImgixParamsMarkAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsMarkFit {
  Clip = 'clip',
  Crop = 'crop',
  Fill = 'fill',
  Max = 'max',
  Scale = 'scale'
}

export enum ImgixParamsMarkTile {
  Grid = 'grid'
}

export enum ImgixParamsPalette {
  Css = 'css',
  Json = 'json'
}

export enum ImgixParamsTransparency {
  Grid = 'grid'
}

export enum ImgixParamsTrim {
  Auto = 'auto',
  Color = 'color'
}

export enum ImgixParamsTxtAlign {
  Bottom = 'bottom',
  Center = 'center',
  Left = 'left',
  Middle = 'middle',
  Right = 'right',
  Top = 'top'
}

export enum ImgixParamsTxtClip {
  Ellipsis = 'ellipsis',
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

export enum ImgixParamsTxtFit {
  Max = 'max'
}

/** Specifies how to filter by usage */
export type InUseFilter = {
  /** Search uploads that are currently used by some record or not */
  eq?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Specifies how to filter Integer fields */
export type IntegerFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type InternalLinkModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<InternalLinkModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<InternalLinkModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  label?: InputMaybe<StringFilter>;
  page?: InputMaybe<LinkFilter>;
};

export enum InternalLinkModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

/** Record of type Internal Link (internal_link) */
export type InternalLinkRecord = RecordInterface & {
  __typename?: 'InternalLinkRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  page: PageRecord;
};


/** Record of type Internal Link (internal_link) */
export type InternalLinkRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by linking fields */
export type InverseRelationshipFieldFilterBetweenPostAndTag = {
  /** Filter linking records that reference current record in at least one of the specified fields */
  anyIn?: InputMaybe<Array<PostModelFieldsReferencingTagModel>>;
  /** Filter linking records that do not reference current record in any of the specified fields */
  notIn?: InputMaybe<Array<PostModelFieldsReferencingTagModel>>;
};

/** Specifies how to filter linking records */
export type InverseRelationshipFilterBetweenPostAndTag = {
  /** Specifies how to filter by linking fields */
  fields?: InputMaybe<InverseRelationshipFieldFilterBetweenPostAndTag>;
  /** Specifies how to filter by linking locales */
  locales?: InputMaybe<LinkingLocalesFilter>;
};

/** Specifies how to filter by ID */
export type ItemIdFilter = {
  /** Search the record with the specified ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude the record with the specified ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Search records that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

export enum ItemStatus {
  Draft = 'draft',
  Published = 'published',
  Updated = 'updated'
}

/** Specifies how to filter JSON fields */
export type JsonFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

/** Block of type 🗝️ Key Value (key_value) */
export type KeyValueRecord = RecordInterface & {
  __typename?: 'KeyValueRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  key: Scalars['String']['output'];
  star?: Maybe<Scalars['BooleanType']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};


/** Block of type 🗝️ Key Value (key_value) */
export type KeyValueRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Record of type Language Preset (language_preset) */
export type LanguagePresetRecord = RecordInterface & {
  __typename?: 'LanguagePresetRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  defaultLangRoot?: Maybe<Scalars['BooleanType']['output']>;
  id: Scalars['ItemId']['output'];
  languageRedirect?: Maybe<Scalars['BooleanType']['output']>;
};


/** Record of type Language Preset (language_preset) */
export type LanguagePresetRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type LayoutModelMenuField = MenuDropdownRecord | MenuItemRecord;

export type LayoutModelMenuFieldListListNonNullMultiLocaleField = {
  __typename?: 'LayoutModelMenuFieldListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<LayoutModelMenuField>;
};

export type LayoutModelNotificationField = {
  __typename?: 'LayoutModelNotificationField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Record of type Layout (layout) */
export type LayoutRecord = RecordInterface & {
  __typename?: 'LayoutRecord';
  _allFooterSubtitleLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allIubendaPolicyIdLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allMenuLocales?: Maybe<Array<LayoutModelMenuFieldListListNonNullMultiLocaleField>>;
  _allTextNewsletterLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allTitleNewsletterLocales?: Maybe<Array<StringMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  address?: Maybe<Scalars['String']['output']>;
  colorReverseBanner?: Maybe<Scalars['BooleanType']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebookPixelId?: Maybe<Scalars['String']['output']>;
  footerLinks: Array<PageRecord>;
  footerLogo?: Maybe<FileField>;
  footerSubtitle?: Maybe<Scalars['String']['output']>;
  googleAnalyticsId?: Maybe<Scalars['String']['output']>;
  googleMaps?: Maybe<Scalars['String']['output']>;
  googleTagManagerId?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  iubendaPolicyId?: Maybe<Scalars['String']['output']>;
  iubendaSiteId?: Maybe<Scalars['String']['output']>;
  iva?: Maybe<Scalars['String']['output']>;
  logo: FileField;
  mainColor: ColorField;
  menu: Array<LayoutModelMenuField>;
  notification?: Maybe<LayoutModelNotificationField>;
  phone?: Maybe<Scalars['String']['output']>;
  rea?: Maybe<Scalars['String']['output']>;
  socialMediaLinks: Array<SocialMediaIconRecord>;
  textNewsletter?: Maybe<Scalars['String']['output']>;
  theme?: Maybe<Scalars['String']['output']>;
  titleNewsletter?: Maybe<Scalars['String']['output']>;
  urlNewsletter?: Maybe<Scalars['String']['output']>;
};


/** Record of type Layout (layout) */
export type LayoutRecord_AllFooterSubtitleLocalesArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Layout (layout) */
export type LayoutRecord_AllIubendaPolicyIdLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Layout (layout) */
export type LayoutRecord_AllMenuLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Layout (layout) */
export type LayoutRecord_AllTextNewsletterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Layout (layout) */
export type LayoutRecord_AllTitleNewsletterLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Layout (layout) */
export type LayoutRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Layout (layout) */
export type LayoutRecordFooterSubtitleArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Layout (layout) */
export type LayoutRecordIubendaPolicyIdArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Layout (layout) */
export type LayoutRecordMenuArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Layout (layout) */
export type LayoutRecordTextNewsletterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Layout (layout) */
export type LayoutRecordTitleNewsletterArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type LegalPageModelContentField = {
  __typename?: 'LegalPageModelContentField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type LegalPageModelContentFieldNonNullMultiLocaleField = {
  __typename?: 'LegalPageModelContentFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: LegalPageModelContentField;
};

export type LegalPageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<LegalPageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<LegalPageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum LegalPageModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Legal Page (legal_page) */
export type LegalPageRecord = RecordInterface & {
  __typename?: 'LegalPageRecord';
  _allContentLocales?: Maybe<Array<LegalPageModelContentFieldNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  content: LegalPageModelContentField;
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type Legal Page (legal_page) */
export type LegalPageRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Legal Page (legal_page) */
export type LegalPageRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Legal Page (legal_page) */
export type LegalPageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Legal Page (legal_page) */
export type LegalPageRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Legal Page (legal_page) */
export type LegalPageRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type LinkBlockModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type 🔗 Link Block (link_block) */
export type LinkBlockRecord = RecordInterface & {
  __typename?: 'LinkBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  link?: Maybe<LinkBlockModelLinkField>;
};


/** Block of type 🔗 Link Block (link_block) */
export type LinkBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Single-link fields */
export type LinkFilter = {
  /** Search for records with an exact match. The specified value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records linked to one of the specified records */
  in?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Exclude records with an exact match. The specified value must be a Record ID */
  neq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records not linked to one of the specified records */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Linking locales */
export enum LinkingLocale {
  NonLocalized = '_nonLocalized',
  De = 'de',
  En = 'en',
  It = 'it'
}

/** Specifies how to filter by linking locales */
export type LinkingLocalesFilter = {
  /** Filter linking records that link to current record in at least one of the specified locales */
  anyIn?: InputMaybe<Array<LinkingLocale>>;
  /** Filter linking records that do not link to current record in any of the specified locales */
  notIn?: InputMaybe<Array<LinkingLocale>>;
};

/** Specifies how to filter Multiple-links fields */
export type LinksFilter = {
  /** Filter records linked to all of the specified records. The specified values must be Record IDs */
  allIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records linked to at least one of the specified records. The specified values must be Record IDs */
  anyIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Search for records with an exact match. The specified values must be Record IDs */
  eq?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records not linked to any of the specified records. The specified values must be Record IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ItemId']['input']>>>;
};

/** Specifies how to filter by locale */
export type LocalesFilter = {
  /** Filter records that are localized in all the specified locales */
  allIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are localized in at least one of the specified locales */
  anyIn?: InputMaybe<Array<SiteLocale>>;
  /** Filter records that are not localized in any of the specified locales */
  notIn?: InputMaybe<Array<SiteLocale>>;
};

/** Block of type ➡️ Elemento Mega Menu (mega_menu_item) */
export type MegaMenuItemRecord = RecordInterface & {
  __typename?: 'MegaMenuItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  menuImage: FileField;
  page: PageRecord;
  title: Scalars['String']['output'];
};


/** Block of type ➡️ Elemento Mega Menu (mega_menu_item) */
export type MegaMenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🔽 Menu a tendina (menu_dropdown) */
export type MenuDropdownRecord = RecordInterface & {
  __typename?: 'MenuDropdownRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  dropdownType?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  items: Array<MenuItemRecord>;
  megaItems: Array<MegaMenuItemRecord>;
  title: Scalars['String']['output'];
};


/** Block of type 🔽 Menu a tendina (menu_dropdown) */
export type MenuDropdownRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type ➡️ Elemento menu (menu_item) */
export type MenuItemRecord = RecordInterface & {
  __typename?: 'MenuItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  page: PageRecord;
  title: Scalars['String']['output'];
};


/** Block of type ➡️ Elemento menu (menu_item) */
export type MenuItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🃏 Card multiple (multiple_card) */
export type MultipleCardRecord = RecordInterface & {
  __typename?: 'MultipleCardRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  multipleImages: Array<ImageBlockRecord>;
};


/** Block of type 🃏 Card multiple (multiple_card) */
export type MultipleCardRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export enum MuxThumbnailFormatType {
  Gif = 'gif',
  Jpg = 'jpg',
  Png = 'png'
}

/** Block of type 📬 CTA Newsletter Subscription (newsletter_subscription) */
export type NewsletterSubscriptionRecord = RecordInterface & {
  __typename?: 'NewsletterSubscriptionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  buttonLabel: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  subtitle: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Block of type 📬 CTA Newsletter Subscription (newsletter_subscription) */
export type NewsletterSubscriptionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📬 CTA Newsletter Subscription (newsletter_subscription) */
export type NewsletterSubscriptionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by image orientation */
export type OrientationFilter = {
  /** Search uploads with the specified orientation */
  eq?: InputMaybe<UploadOrientation>;
  /** Exclude uploads with the specified orientation */
  neq?: InputMaybe<UploadOrientation>;
};

export type PageModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PageModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  abstract?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  indexModel?: InputMaybe<StringFilter>;
  isHome?: InputMaybe<BooleanFilter>;
  isIndex?: InputMaybe<BooleanFilter>;
  label?: InputMaybe<StringFilter>;
  previewImage?: InputMaybe<FileFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoMeta?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum PageModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IndexModelAsc = 'indexModel_ASC',
  IndexModelDesc = 'indexModel_DESC',
  IsHomeAsc = 'isHome_ASC',
  IsHomeDesc = 'isHome_DESC',
  IsIndexAsc = 'isIndex_ASC',
  IsIndexDesc = 'isIndex_DESC',
  LabelAsc = 'label_ASC',
  LabelDesc = 'label_DESC'
}

/** Record of type Pagine (page) */
export type PageRecord = RecordInterface & {
  __typename?: 'PageRecord';
  _allHeroLocales?: Maybe<Array<HeroSectionRecordNonNullMultiLocaleField>>;
  _allLabelLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allSectionsLocales?: Maybe<Array<SectionWrapRecordListListNonNullMultiLocaleField>>;
  _allSeoMetaLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  abstract?: Maybe<Scalars['String']['output']>;
  hero: HeroSectionRecord;
  id: Scalars['ItemId']['output'];
  indexModel?: Maybe<Scalars['String']['output']>;
  isHome?: Maybe<Scalars['BooleanType']['output']>;
  isIndex?: Maybe<Scalars['BooleanType']['output']>;
  label: Scalars['String']['output'];
  previewImage: ImageAltTitleFileField;
  sections: Array<SectionWrapRecord>;
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoMeta?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
};


/** Record of type Pagine (page) */
export type PageRecord_AllHeroLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Pagine (page) */
export type PageRecord_AllLabelLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Pagine (page) */
export type PageRecord_AllSectionsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Pagine (page) */
export type PageRecord_AllSeoMetaLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Pagine (page) */
export type PageRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Pagine (page) */
export type PageRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagine (page) */
export type PageRecordAbstractArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Pagine (page) */
export type PageRecordHeroArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagine (page) */
export type PageRecordLabelArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagine (page) */
export type PageRecordSectionsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagine (page) */
export type PageRecordSeoMetaArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pagine (page) */
export type PageRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by parent (tree-like collections only) */
export type ParentFilter = {
  /** Filter records children of the specified record. Value must be a Record ID */
  eq?: InputMaybe<Scalars['ItemId']['input']>;
  /** Filter records with a parent record or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type PersonModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PersonModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  areaOfInterest?: InputMaybe<StringFilter>;
  bio?: InputMaybe<StringFilter>;
  description?: InputMaybe<TextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  name?: InputMaybe<StringFilter>;
  picture?: InputMaybe<FileFilter>;
  slug?: InputMaybe<SlugFilter>;
};

export enum PersonModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  AreaOfInterestAsc = 'areaOfInterest_ASC',
  AreaOfInterestDesc = 'areaOfInterest_DESC',
  BioAsc = 'bio_ASC',
  BioDesc = 'bio_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC'
}

/** Record of type Person (person) */
export type PersonRecord = RecordInterface & {
  __typename?: 'PersonRecord';
  _allAreaOfInterestLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allBioLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allDescriptionLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allNameLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  areaOfInterest?: Maybe<Scalars['String']['output']>;
  bio: Scalars['String']['output'];
  description: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  name: Scalars['String']['output'];
  picture: ImageFileField;
  slug: Scalars['String']['output'];
};


/** Record of type Person (person) */
export type PersonRecord_AllAreaOfInterestLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Person (person) */
export type PersonRecord_AllBioLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Person (person) */
export type PersonRecord_AllDescriptionLocalesArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Person (person) */
export type PersonRecord_AllNameLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Person (person) */
export type PersonRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Person (person) */
export type PersonRecordAreaOfInterestArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Person (person) */
export type PersonRecordBioArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Person (person) */
export type PersonRecordDescriptionArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Person (person) */
export type PersonRecordNameArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by position (sorted and tree-like collections) */
export type PositionFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Filter records with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type PostModelContentBlocksField = AttachmentsBlockRecord | GallerySectionRecord | ImageBlockRecord | VideoSectionRecord;

export type PostModelContentField = {
  __typename?: 'PostModelContentField';
  blocks: Array<PostModelContentBlocksField>;
  links: Array<PostRecord>;
  value: Scalars['JsonField']['output'];
};

export type PostModelContentFieldNonNullMultiLocaleField = {
  __typename?: 'PostModelContentFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: PostModelContentField;
};

/** Linking fields */
export enum PostModelFieldsReferencingTagModel {
  PostTags = 'post_tags'
}

export type PostModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PostModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  abstract?: InputMaybe<TextFilter>;
  blogImage?: InputMaybe<FileFilter>;
  blogImageHover?: InputMaybe<FileFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoTags?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  tags?: InputMaybe<LinksFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum PostModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Blog Post (post) */
export type PostRecord = RecordInterface & {
  __typename?: 'PostRecord';
  _allAbstractLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allContentLocales?: Maybe<Array<PostModelContentFieldNonNullMultiLocaleField>>;
  _allSeoTagsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  abstract?: Maybe<Scalars['String']['output']>;
  blogImage: FileField;
  blogImageHover?: Maybe<ImageFileField>;
  content: PostModelContentField;
  id: Scalars['ItemId']['output'];
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoTags?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  tags: Array<TagRecord>;
  title: Scalars['String']['output'];
};


/** Record of type Blog Post (post) */
export type PostRecord_AllAbstractLocalesArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Blog Post (post) */
export type PostRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Blog Post (post) */
export type PostRecord_AllSeoTagsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Blog Post (post) */
export type PostRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Blog Post (post) */
export type PostRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Blog Post (post) */
export type PostRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Blog Post (post) */
export type PostRecordAbstractArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Blog Post (post) */
export type PostRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Blog Post (post) */
export type PostRecordSeoTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Blog Post (post) */
export type PostRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Blog Post (post) */
export type PostRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 💰 Pricing section (pricing_section) */
export type PricingSectionRecord = RecordInterface & {
  __typename?: 'PricingSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOption: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  plans: Array<PricingTierRecord>;
  pricingSectionHeader: Scalars['String']['output'];
  pricingSectionSubheader?: Maybe<Scalars['String']['output']>;
};


/** Block of type 💰 Pricing section (pricing_section) */
export type PricingSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 💰 Pricing section (pricing_section) */
export type PricingSectionRecordPricingSectionSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type PricingTierModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<PricingTierModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<PricingTierModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  monthlyPrice?: InputMaybe<IntegerFilter>;
  planFeatures?: InputMaybe<StringFilter>;
  slug?: InputMaybe<SlugFilter>;
  tierDescription?: InputMaybe<StructuredTextFilter>;
  tierName?: InputMaybe<StringFilter>;
  yearlyPrice?: InputMaybe<FloatFilter>;
};

export enum PricingTierModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MonthlyPriceAsc = 'monthlyPrice_ASC',
  MonthlyPriceDesc = 'monthlyPrice_DESC',
  PlanFeaturesAsc = 'planFeatures_ASC',
  PlanFeaturesDesc = 'planFeatures_DESC',
  TierNameAsc = 'tierName_ASC',
  TierNameDesc = 'tierName_DESC',
  YearlyPriceAsc = 'yearlyPrice_ASC',
  YearlyPriceDesc = 'yearlyPrice_DESC'
}

export type PricingTierModelTierDescriptionField = {
  __typename?: 'PricingTierModelTierDescriptionField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type PricingTierModelTierDescriptionFieldNonNullMultiLocaleField = {
  __typename?: 'PricingTierModelTierDescriptionFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: PricingTierModelTierDescriptionField;
};

/** Record of type Pricing Tier (pricing_tier) */
export type PricingTierRecord = RecordInterface & {
  __typename?: 'PricingTierRecord';
  _allTierDescriptionLocales?: Maybe<Array<PricingTierModelTierDescriptionFieldNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  monthlyPrice: Scalars['IntType']['output'];
  planFeatures: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  tierDescription: PricingTierModelTierDescriptionField;
  tierName: Scalars['String']['output'];
  yearlyPrice: Scalars['FloatType']['output'];
};


/** Record of type Pricing Tier (pricing_tier) */
export type PricingTierRecord_AllTierDescriptionLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Pricing Tier (pricing_tier) */
export type PricingTierRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Pricing Tier (pricing_tier) */
export type PricingTierRecordTierDescriptionArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type ProductDetailModelLinkField = ExternalLinkRecord | InternalLinkRecord;

/** Block of type 📕 Product Detail (product_detail) */
export type ProductDetailRecord = RecordInterface & {
  __typename?: 'ProductDetailRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ItemId']['output'];
  imageDescription?: Maybe<Scalars['String']['output']>;
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<ProductDetailModelLinkField>;
  logo?: Maybe<FileField>;
  productDetailImage?: Maybe<ImageAltTitleFileField>;
  title: Scalars['String']['output'];
  values: Array<KeyValueRecord>;
};


/** Block of type 📕 Product Detail (product_detail) */
export type ProductDetailRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📕 Product Detail (product_detail) */
export type ProductDetailRecordDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Block of type 📕 Product Detail (product_detail) */
export type ProductDetailRecordImageDescriptionArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ProductModelContentBlocksField = AttachmentsBlockRecord | GallerySectionRecord | ImageBlockRecord | VideoSectionRecord;

export type ProductModelContentField = {
  __typename?: 'ProductModelContentField';
  blocks: Array<ProductModelContentBlocksField>;
  links: Array<PostRecord>;
  value: Scalars['JsonField']['output'];
};

export type ProductModelContentFieldMultiLocaleField = {
  __typename?: 'ProductModelContentFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<ProductModelContentField>;
};

export type ProductModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<ProductModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  abstract?: InputMaybe<TextFilter>;
  content?: InputMaybe<StructuredTextFilter>;
  id?: InputMaybe<ItemIdFilter>;
  productImage?: InputMaybe<FileFilter>;
  seoAnalysis?: InputMaybe<JsonFilter>;
  seoTags?: InputMaybe<SeoFilter>;
  slug?: InputMaybe<SlugFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum ProductModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

/** Record of type Product (product) */
export type ProductRecord = RecordInterface & {
  __typename?: 'ProductRecord';
  _allAbstractLocales?: Maybe<Array<StringMultiLocaleField>>;
  _allContentLocales?: Maybe<Array<ProductModelContentFieldMultiLocaleField>>;
  _allSeoTagsLocales?: Maybe<Array<SeoFieldMultiLocaleField>>;
  _allSlugLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _allTitleLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  abstract?: Maybe<Scalars['String']['output']>;
  content?: Maybe<ProductModelContentField>;
  id: Scalars['ItemId']['output'];
  productImage: ImageAltTitleFileField;
  seoAnalysis?: Maybe<Scalars['JsonField']['output']>;
  seoTags?: Maybe<SeoField>;
  slug: Scalars['String']['output'];
  title: Scalars['String']['output'];
};


/** Record of type Product (product) */
export type ProductRecord_AllAbstractLocalesArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Product (product) */
export type ProductRecord_AllContentLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Product (product) */
export type ProductRecord_AllSeoTagsLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Product (product) */
export type ProductRecord_AllSlugLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Product (product) */
export type ProductRecord_AllTitleLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Product (product) */
export type ProductRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecordAbstractArgs = {
  locale?: InputMaybe<SiteLocale>;
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};


/** Record of type Product (product) */
export type ProductRecordContentArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecordSeoTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecordSlugArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Product (product) */
export type ProductRecordTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by publication datetime */
export type PublishedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** The query root for this schema */
export type Query = {
  __typename?: 'Query';
  /** Returns meta information regarding a record collection */
  _allChangeLogsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allDocumentationPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allExternalLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allInternalLinksMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allLegalPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPagesMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPeopleMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPostsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allPricingTiersMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allProductsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allRouteItemsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTagsMeta: CollectionMetadata;
  /** Returns meta information regarding a record collection */
  _allTestimonialsMeta: CollectionMetadata;
  /** Returns meta information regarding an assets collection */
  _allUploadsMeta: CollectionMetadata;
  /** Returns the single instance record */
  _site: Site;
  /** Returns a collection of records */
  allChangeLogs: Array<ChangeLogRecord>;
  /** Returns a collection of records */
  allDocumentationPages: Array<DocumentationPageRecord>;
  /** Returns a collection of records */
  allExternalLinks: Array<ExternalLinkRecord>;
  /** Returns a collection of records */
  allInternalLinks: Array<InternalLinkRecord>;
  /** Returns a collection of records */
  allLegalPages: Array<LegalPageRecord>;
  /** Returns a collection of records */
  allPages: Array<PageRecord>;
  /** Returns a collection of records */
  allPeople: Array<PersonRecord>;
  /** Returns a collection of records */
  allPosts: Array<PostRecord>;
  /** Returns a collection of records */
  allPricingTiers: Array<PricingTierRecord>;
  /** Returns a collection of records */
  allProducts: Array<ProductRecord>;
  /** Returns a collection of records */
  allRouteItems: Array<RouteItemRecord>;
  /** Returns a collection of records */
  allTags: Array<TagRecord>;
  /** Returns a collection of records */
  allTestimonials: Array<TestimonialRecord>;
  /** Returns a collection of assets */
  allUploads: Array<FileField>;
  /** Returns a specific record */
  changeLog?: Maybe<ChangeLogRecord>;
  /** Returns the single instance record */
  documentationHome?: Maybe<DocumentationHomeRecord>;
  /** Returns a specific record */
  documentationPage?: Maybe<DocumentationPageRecord>;
  /** Returns a specific record */
  externalLink?: Maybe<ExternalLinkRecord>;
  /** Returns a specific record */
  internalLink?: Maybe<InternalLinkRecord>;
  /** Returns the single instance record */
  languagePreset?: Maybe<LanguagePresetRecord>;
  /** Returns the single instance record */
  layout?: Maybe<LayoutRecord>;
  /** Returns a specific record */
  legalPage?: Maybe<LegalPageRecord>;
  /** Returns a specific record */
  page?: Maybe<PageRecord>;
  /** Returns a specific record */
  person?: Maybe<PersonRecord>;
  /** Returns a specific record */
  post?: Maybe<PostRecord>;
  /** Returns a specific record */
  pricingTier?: Maybe<PricingTierRecord>;
  /** Returns a specific record */
  product?: Maybe<ProductRecord>;
  /** Returns a specific record */
  routeItem?: Maybe<RouteItemRecord>;
  /** Returns a specific record */
  tag?: Maybe<TagRecord>;
  /** Returns a specific record */
  testimonial?: Maybe<TestimonialRecord>;
  /** Returns a specific asset */
  upload?: Maybe<FileField>;
};


/** The query root for this schema */
export type Query_AllChangeLogsMetaArgs = {
  filter?: InputMaybe<ChangeLogModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllDocumentationPagesMetaArgs = {
  filter?: InputMaybe<DocumentationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllExternalLinksMetaArgs = {
  filter?: InputMaybe<ExternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllInternalLinksMetaArgs = {
  filter?: InputMaybe<InternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllLegalPagesMetaArgs = {
  filter?: InputMaybe<LegalPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPagesMetaArgs = {
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPeopleMetaArgs = {
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPostsMetaArgs = {
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllPricingTiersMetaArgs = {
  filter?: InputMaybe<PricingTierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllProductsMetaArgs = {
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllRouteItemsMetaArgs = {
  filter?: InputMaybe<RouteItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTagsMetaArgs = {
  filter?: InputMaybe<TagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllTestimonialsMetaArgs = {
  filter?: InputMaybe<TestimonialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_AllUploadsMetaArgs = {
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type Query_SiteArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryAllChangeLogsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ChangeLogModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ChangeLogModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllDocumentationPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DocumentationPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentationPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllExternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllInternalLinksArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllLegalPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LegalPageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LegalPageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPagesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPeopleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllPricingTiersArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PricingTierModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PricingTierModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllProductsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllRouteItemsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RouteItemModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RouteItemModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTagsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TagModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TagModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllTestimonialsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryAllUploadsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
};


/** The query root for this schema */
export type QueryChangeLogArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ChangeLogModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ChangeLogModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryDocumentationHomeArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryDocumentationPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<DocumentationPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<DocumentationPageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryExternalLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ExternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ExternalLinkModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryInternalLinkArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<InternalLinkModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<InternalLinkModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryLanguagePresetArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryLayoutArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


/** The query root for this schema */
export type QueryLegalPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<LegalPageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<LegalPageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PageModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PageModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPersonArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PersonModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PersonModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPostArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryPricingTierArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PricingTierModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PricingTierModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryProductArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<ProductModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<ProductModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryRouteItemArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<RouteItemModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<RouteItemModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TagModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TagModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryTestimonialArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<TestimonialModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<TestimonialModelOrderBy>>>;
};


/** The query root for this schema */
export type QueryUploadArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<UploadFilter>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<UploadOrderBy>>>;
};

export type QuestionModelAnswerBlocksField = CtaButtonWithImageRecord | NewsletterSubscriptionRecord;

export type QuestionModelAnswerField = {
  __typename?: 'QuestionModelAnswerField';
  blocks: Array<QuestionModelAnswerBlocksField>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type ❓Question (question) */
export type QuestionRecord = RecordInterface & {
  __typename?: 'QuestionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  answer: QuestionModelAnswerField;
  id: Scalars['ItemId']['output'];
  question: Scalars['String']['output'];
};


/** Block of type ❓Question (question) */
export type QuestionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type RecordInterface = {
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
};


export type RecordInterface_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🔄 Redirect Section (redirect_section) */
export type RedirectSectionRecord = RecordInterface & {
  __typename?: 'RedirectSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slugToRedirectTo: Scalars['String']['output'];
};


/** Block of type 🔄 Redirect Section (redirect_section) */
export type RedirectSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by upload type */
export type ResolutionFilter = {
  /** Search uploads with the specified resolution */
  eq?: InputMaybe<ResolutionType>;
  /** Search uploads with the specified resolutions */
  in?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
  /** Exclude uploads with the specified resolution */
  neq?: InputMaybe<ResolutionType>;
  /** Search uploads without the specified resolutions */
  notIn?: InputMaybe<Array<InputMaybe<ResolutionType>>>;
};

export enum ResolutionType {
  Icon = 'icon',
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
}

export type ResponsiveImage = {
  __typename?: 'ResponsiveImage';
  alt?: Maybe<Scalars['String']['output']>;
  aspectRatio: Scalars['FloatType']['output'];
  base64?: Maybe<Scalars['String']['output']>;
  bgColor?: Maybe<Scalars['String']['output']>;
  height: Scalars['IntType']['output'];
  sizes: Scalars['String']['output'];
  src: Scalars['String']['output'];
  srcSet: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  webpSrcSet: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

/** Block of type 💬 Testimonials Section (review_section) */
export type ReviewSectionRecord = RecordInterface & {
  __typename?: 'ReviewSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  reviewSectionHeader: Scalars['String']['output'];
  reviewSectionSubheader?: Maybe<Scalars['String']['output']>;
  reviews: Array<TestimonialRecord>;
};


/** Block of type 💬 Testimonials Section (review_section) */
export type ReviewSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 💬 Testimonials Section (review_section) */
export type ReviewSectionRecordReviewSectionSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type RouteItemModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<RouteItemModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<RouteItemModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  associatedModel?: InputMaybe<StringFilter>;
  id?: InputMaybe<ItemIdFilter>;
  isDynamic?: InputMaybe<BooleanFilter>;
  isHome?: InputMaybe<BooleanFilter>;
  parent?: InputMaybe<ParentFilter>;
  position?: InputMaybe<PositionFilter>;
  reference?: InputMaybe<LinkFilter>;
  title?: InputMaybe<StringFilter>;
};

export enum RouteItemModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  AssociatedModelAsc = 'associatedModel_ASC',
  AssociatedModelDesc = 'associatedModel_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  IsDynamicAsc = 'isDynamic_ASC',
  IsDynamicDesc = 'isDynamic_DESC',
  IsHomeAsc = 'isHome_ASC',
  IsHomeDesc = 'isHome_DESC',
  PositionAsc = 'position_ASC',
  PositionDesc = 'position_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC'
}

export type RouteItemModelReferenceField = PageRecord | PostRecord;

/** Record of type Route Item (route_item) */
export type RouteItemRecord = RecordInterface & {
  __typename?: 'RouteItemRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  associatedModel?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<RouteItemRecord>>>;
  id: Scalars['ItemId']['output'];
  isDynamic?: Maybe<Scalars['BooleanType']['output']>;
  isHome?: Maybe<Scalars['BooleanType']['output']>;
  parent?: Maybe<RouteItemRecord>;
  position?: Maybe<Scalars['IntType']['output']>;
  reference?: Maybe<RouteItemModelReferenceField>;
  title: Scalars['String']['output'];
};


/** Record of type Route Item (route_item) */
export type RouteItemRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SectionWrapModelBlocksField = AttachmentsBlockRecord | BannerCtaRecord | ContactTextBlockRecord | DetailSectionRecord | ElementsListRecord | FaqSectionRecord | FeatureListSectionRecord | FeaturedPagesSectionRecord | FormBlockRecord | GallerySectionRecord | ImageBlockRecord | MultipleCardRecord | ProductDetailRecord | SimpleTextRecord | SlideshowRecord | TextBlockRecord | VideoSectionRecord;

/** Block of type ⚓ Sezione (section_wrap) */
export type SectionWrapRecord = RecordInterface & {
  __typename?: 'SectionWrapRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  blocks: Array<SectionWrapModelBlocksField>;
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  style?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type ⚓ Sezione (section_wrap) */
export type SectionWrapRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type SectionWrapRecordListListNonNullMultiLocaleField = {
  __typename?: 'SectionWrapRecordListListNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Array<SectionWrapRecord>;
};

export type SeoField = {
  __typename?: 'SeoField';
  description?: Maybe<Scalars['String']['output']>;
  image?: Maybe<FileField>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  twitterCard?: Maybe<Scalars['String']['output']>;
};

export type SeoFieldMultiLocaleField = {
  __typename?: 'SeoFieldMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<SeoField>;
};

/** Specifies how to filter SEO meta tags fields */
export type SeoFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type SimpleTextModelTextContentField = {
  __typename?: 'SimpleTextModelTextContentField';
  blocks: Array<LinkBlockRecord>;
  links: Array<SimpleTextModelTextContentLinksField>;
  value: Scalars['JsonField']['output'];
};

export type SimpleTextModelTextContentLinksField = PageRecord | PostRecord;

/** Block of type ✏️ Simple text block (simple_text) */
export type SimpleTextRecord = RecordInterface & {
  __typename?: 'SimpleTextRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  textContent?: Maybe<SimpleTextModelTextContentField>;
};


/** Block of type ✏️ Simple text block (simple_text) */
export type SimpleTextRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

export type Site = {
  __typename?: 'Site';
  favicon?: Maybe<FileField>;
  faviconMetaTags: Array<Tag>;
  globalSeo?: Maybe<GlobalSeoField>;
  locales: Array<SiteLocale>;
  noIndex?: Maybe<Scalars['BooleanType']['output']>;
};


export type SiteFaviconMetaTagsArgs = {
  variants?: InputMaybe<Array<InputMaybe<FaviconType>>>;
};


export type SiteGlobalSeoArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export enum SiteLocale {
  De = 'de',
  En = 'en',
  It = 'it'
}

/** Block of type 📸 Slide (slide) */
export type SlideRecord = RecordInterface & {
  __typename?: 'SlideRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  image: ImageAltTitleFileField;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};


/** Block of type 📸 Slide (slide) */
export type SlideRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 🪧 Slideshow (slideshow) */
export type SlideshowRecord = RecordInterface & {
  __typename?: 'SlideshowRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slides: Array<SlideRecord>;
};


/** Block of type 🪧 Slideshow (slideshow) */
export type SlideshowRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter Slug fields */
export type SlugFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that have one of the specified slugs */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do have one of the specified slugs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Block of type 🌐 Social Media Icon (social_media_icon) */
export type SocialMediaIconRecord = RecordInterface & {
  __typename?: 'SocialMediaIconRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  icon: FileField;
  id: Scalars['ItemId']['output'];
  name?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
};


/** Block of type 🌐 Social Media Icon (social_media_icon) */
export type SocialMediaIconRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📈 Stat (statistic) */
export type StatisticRecord = RecordInterface & {
  __typename?: 'StatisticRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  icon: FileField;
  id: Scalars['ItemId']['output'];
  label: Scalars['String']['output'];
  quantity: Scalars['IntType']['output'];
};


/** Block of type 📈 Stat (statistic) */
export type StatisticRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 📈 Stats Section (stats_section) */
export type StatsSectionRecord = RecordInterface & {
  __typename?: 'StatsSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  statistic: Array<StatisticRecord>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 📈 Stats Section (stats_section) */
export type StatsSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📈 Stats Section (stats_section) */
export type StatsSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by status */
export type StatusFilter = {
  /** Search the record with the specified status */
  eq?: InputMaybe<ItemStatus>;
  /** Search records with the specified statuses */
  in?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
  /** Exclude the record with the specified status */
  neq?: InputMaybe<ItemStatus>;
  /** Search records without the specified statuses */
  notIn?: InputMaybe<Array<InputMaybe<ItemStatus>>>;
};

/** Specifies how to filter Single-line string fields */
export type StringFilter = {
  /** Search for records with an exact match */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records that equal one of the specified values */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records with an exact match */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Filter records that do not equal one of the specified values */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type StringMatchesFilter = {
  caseSensitive?: InputMaybe<Scalars['BooleanType']['input']>;
  pattern: Scalars['String']['input'];
  regexp?: InputMaybe<Scalars['BooleanType']['input']>;
};

export type StringMultiLocaleField = {
  __typename?: 'StringMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value?: Maybe<Scalars['String']['output']>;
};

export type StringNonNullMultiLocaleField = {
  __typename?: 'StringNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: Scalars['String']['output'];
};

/** Specifies how to filter Structured Text fields values */
export type StructuredTextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or single empty paragraph) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type Tag = {
  __typename?: 'Tag';
  attributes?: Maybe<Scalars['MetaTagAttributes']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  tag: Scalars['String']['output'];
};

export type TagModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TagModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TagModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  slug?: InputMaybe<SlugFilter>;
  tag?: InputMaybe<StringFilter>;
};

export enum TagModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  TagAsc = 'tag_ASC',
  TagDesc = 'tag_DESC'
}

/** Record of type Tag (tag) */
export type TagRecord = RecordInterface & {
  __typename?: 'TagRecord';
  _allReferencingPosts: Array<PostRecord>;
  /** Returns meta information regarding a record collection */
  _allReferencingPostsMeta: CollectionMetadata;
  _allTagLocales?: Maybe<Array<StringNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  slug: Scalars['String']['output'];
  tag: Scalars['String']['output'];
};


/** Record of type Tag (tag) */
export type TagRecord_AllReferencingPostsArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  filter?: InputMaybe<PostModelFilter>;
  first?: InputMaybe<Scalars['IntType']['input']>;
  locale?: InputMaybe<SiteLocale>;
  orderBy?: InputMaybe<Array<InputMaybe<PostModelOrderBy>>>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPostAndTag>;
};


/** Record of type Tag (tag) */
export type TagRecord_AllReferencingPostsMetaArgs = {
  filter?: InputMaybe<PostModelFilter>;
  locale?: InputMaybe<SiteLocale>;
  through?: InputMaybe<InverseRelationshipFilterBetweenPostAndTag>;
};


/** Record of type Tag (tag) */
export type TagRecord_AllTagLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Tag (tag) */
export type TagRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Tag (tag) */
export type TagRecordTagArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Block of type 👥 Team Section (team_section) */
export type TeamSectionRecord = RecordInterface & {
  __typename?: 'TeamSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  showcasedMembers: Array<Scalars['String']['output']>;
  subtitle?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};


/** Block of type 👥 Team Section (team_section) */
export type TeamSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 👥 Team Section (team_section) */
export type TeamSectionRecordSubtitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TestimonialModelFilter = {
  AND?: InputMaybe<Array<InputMaybe<TestimonialModelFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<TestimonialModelFilter>>>;
  _createdAt?: InputMaybe<CreatedAtFilter>;
  _firstPublishedAt?: InputMaybe<PublishedAtFilter>;
  _isValid?: InputMaybe<BooleanFilter>;
  _locales?: InputMaybe<LocalesFilter>;
  _publicationScheduledAt?: InputMaybe<PublishedAtFilter>;
  _publishedAt?: InputMaybe<PublishedAtFilter>;
  _status?: InputMaybe<StatusFilter>;
  _unpublishingScheduledAt?: InputMaybe<PublishedAtFilter>;
  _updatedAt?: InputMaybe<UpdatedAtFilter>;
  id?: InputMaybe<ItemIdFilter>;
  rating?: InputMaybe<IntegerFilter>;
  review?: InputMaybe<StructuredTextFilter>;
  reviewerName?: InputMaybe<StringFilter>;
  reviewerPicture?: InputMaybe<FileFilter>;
  reviewerTitle?: InputMaybe<StringFilter>;
};

export enum TestimonialModelOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  FirstPublishedAtAsc = '_firstPublishedAt_ASC',
  FirstPublishedAtDesc = '_firstPublishedAt_DESC',
  IsValidAsc = '_isValid_ASC',
  IsValidDesc = '_isValid_DESC',
  PublicationScheduledAtAsc = '_publicationScheduledAt_ASC',
  PublicationScheduledAtDesc = '_publicationScheduledAt_DESC',
  PublishedAtAsc = '_publishedAt_ASC',
  PublishedAtDesc = '_publishedAt_DESC',
  StatusAsc = '_status_ASC',
  StatusDesc = '_status_DESC',
  UnpublishingScheduledAtAsc = '_unpublishingScheduledAt_ASC',
  UnpublishingScheduledAtDesc = '_unpublishingScheduledAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  RatingAsc = 'rating_ASC',
  RatingDesc = 'rating_DESC',
  ReviewerNameAsc = 'reviewerName_ASC',
  ReviewerNameDesc = 'reviewerName_DESC',
  ReviewerTitleAsc = 'reviewerTitle_ASC',
  ReviewerTitleDesc = 'reviewerTitle_DESC'
}

export type TestimonialModelReviewField = {
  __typename?: 'TestimonialModelReviewField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

export type TestimonialModelReviewFieldNonNullMultiLocaleField = {
  __typename?: 'TestimonialModelReviewFieldNonNullMultiLocaleField';
  locale?: Maybe<SiteLocale>;
  value: TestimonialModelReviewField;
};

/** Record of type Testimonial (testimonial) */
export type TestimonialRecord = RecordInterface & {
  __typename?: 'TestimonialRecord';
  _allReviewLocales?: Maybe<Array<TestimonialModelReviewFieldNonNullMultiLocaleField>>;
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _locales: Array<SiteLocale>;
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  rating: Scalars['IntType']['output'];
  review: TestimonialModelReviewField;
  reviewerName: Scalars['String']['output'];
  reviewerPicture: ImageFileField;
  reviewerTitle?: Maybe<Scalars['String']['output']>;
};


/** Record of type Testimonial (testimonial) */
export type TestimonialRecord_AllReviewLocalesArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
};


/** Record of type Testimonial (testimonial) */
export type TestimonialRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Record of type Testimonial (testimonial) */
export type TestimonialRecordReviewArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

export type TextBlockModelLinkField = ExternalLinkRecord | InternalLinkRecord;

export type TextBlockModelTextField = {
  __typename?: 'TextBlockModelTextField';
  blocks: Array<Scalars['String']['output']>;
  links: Array<Scalars['String']['output']>;
  value: Scalars['JsonField']['output'];
};

/** Block of type 📝 Blocco testo (text_block) */
export type TextBlockRecord = RecordInterface & {
  __typename?: 'TextBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  displayOptions: Scalars['String']['output'];
  id: Scalars['ItemId']['output'];
  label?: Maybe<Scalars['String']['output']>;
  link?: Maybe<TextBlockModelLinkField>;
  text?: Maybe<TextBlockModelTextField>;
  title: Scalars['String']['output'];
};


/** Block of type 📝 Blocco testo (text_block) */
export type TextBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📝 Blocco testo (text_block) */
export type TextBlockRecordTitleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter text fields */
export type TextFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not [DEPRECATED] */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field set as blank (null or empty string) */
  isBlank?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with the specified field present (neither null, nor empty string) */
  isPresent?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude records based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Block of type 🅰️ Testo semplice (text_simple_block) */
export type TextSimpleBlockRecord = RecordInterface & {
  __typename?: 'TextSimpleBlockRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  id: Scalars['ItemId']['output'];
  textSimple?: Maybe<Scalars['String']['output']>;
  titleSimple: Scalars['String']['output'];
};


/** Block of type 🅰️ Testo semplice (text_simple_block) */
export type TextSimpleBlockRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 🅰️ Testo semplice (text_simple_block) */
export type TextSimpleBlockRecordTextSimpleArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Specifies how to filter by upload type */
export type TypeFilter = {
  /** Search uploads with the specified type */
  eq?: InputMaybe<UploadType>;
  /** Search uploads with the specified types */
  in?: InputMaybe<Array<InputMaybe<UploadType>>>;
  /** Exclude uploads with the specified type */
  neq?: InputMaybe<UploadType>;
  /** Search uploads without the specified types */
  notIn?: InputMaybe<Array<InputMaybe<UploadType>>>;
};

/** Specifies how to filter by update datetime */
export type UpdatedAtFilter = {
  /** Filter records with a value that's within the specified minute range. Seconds and milliseconds are truncated from the argument. */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter records with a value that's strictly greater than the one specified. Seconds and milliseconds are truncated from the argument. */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's greater than or equal to than the one specified. Seconds and milliseconds are truncated from the argument. */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less than the one specified. Seconds and milliseconds are truncated from the argument. */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's less or equal than the one specified. Seconds and milliseconds are truncated from the argument. */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter records with a value that's outside the specified minute range. Seconds and milliseconds are truncated from the argument. */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by default alt */
export type UploadAltFilter = {
  /** Search the uploads with the specified alt */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search uploads with the specified values as default alt */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the uploads with the specified alt */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search uploads that do not have the specified values as default alt */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by auhtor */
export type UploadAuthorFilter = {
  /** Filter uploads with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by basename */
export type UploadBasenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by colors */
export type UploadColorsFilter = {
  /** Filter uploads that have all of the specified colors */
  allIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have at least one of the specified colors */
  anyIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that have the specified colors */
  contains?: InputMaybe<ColorBucketType>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
  /** Filter uploads that do not have any of the specified colors */
  notIn?: InputMaybe<Array<InputMaybe<ColorBucketType>>>;
};

/** Specifies how to filter by copyright */
export type UploadCopyrightFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by creation datetime */
export type UploadCreatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

/** Specifies how to filter by filename */
export type UploadFilenameFilter = {
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export type UploadFilter = {
  AND?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  OR?: InputMaybe<Array<InputMaybe<UploadFilter>>>;
  _createdAt?: InputMaybe<UploadCreatedAtFilter>;
  _updatedAt?: InputMaybe<UploadUpdatedAtFilter>;
  alt?: InputMaybe<UploadAltFilter>;
  author?: InputMaybe<UploadAuthorFilter>;
  basename?: InputMaybe<UploadBasenameFilter>;
  colors?: InputMaybe<UploadColorsFilter>;
  copyright?: InputMaybe<UploadCopyrightFilter>;
  filename?: InputMaybe<UploadFilenameFilter>;
  format?: InputMaybe<UploadFormatFilter>;
  height?: InputMaybe<UploadHeightFilter>;
  id?: InputMaybe<UploadIdFilter>;
  inUse?: InputMaybe<InUseFilter>;
  md5?: InputMaybe<UploadMd5Filter>;
  mimeType?: InputMaybe<UploadMimeTypeFilter>;
  notes?: InputMaybe<UploadNotesFilter>;
  orientation?: InputMaybe<OrientationFilter>;
  resolution?: InputMaybe<ResolutionFilter>;
  size?: InputMaybe<UploadSizeFilter>;
  smartTags?: InputMaybe<UploadTagsFilter>;
  tags?: InputMaybe<UploadTagsFilter>;
  title?: InputMaybe<UploadTitleFilter>;
  type?: InputMaybe<TypeFilter>;
  width?: InputMaybe<UploadWidthFilter>;
};

/** Specifies how to filter by format */
export type UploadFormatFilter = {
  /** Search the asset with the specified format */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified formats */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified format */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified formats */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by height */
export type UploadHeightFilter = {
  /** Search assets with the specified height */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified height */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified height */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified height */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified height */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by ID */
export type UploadIdFilter = {
  /** Search the asset with the specified ID */
  eq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets with the specified IDs */
  in?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
  /** Exclude the asset with the specified ID */
  neq?: InputMaybe<Scalars['UploadId']['input']>;
  /** Search assets that do not have the specified IDs */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['UploadId']['input']>>>;
};

/** Specifies how to filter by MD5 */
export type UploadMd5Filter = {
  /** Search the asset with the specified MD5 */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified MD5s */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude the asset with the specified MD5 */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified MD5s */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

/** Specifies how to filter by mime type */
export type UploadMimeTypeFilter = {
  /** Search the asset with the specified mime type */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets with the specified mime types */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified mime type */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified mime types */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

/** Specifies how to filter by notes */
export type UploadNotesFilter = {
  /** Filter records with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadOrderBy {
  _CreatedAtAsc = '_createdAt_ASC',
  _CreatedAtDesc = '_createdAt_DESC',
  _UpdatedAtAsc = '_updatedAt_ASC',
  _UpdatedAtDesc = '_updatedAt_DESC',
  BasenameAsc = 'basename_ASC',
  BasenameDesc = 'basename_DESC',
  FilenameAsc = 'filename_ASC',
  FilenameDesc = 'filename_DESC',
  FormatAsc = 'format_ASC',
  FormatDesc = 'format_DESC',
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  MimeTypeAsc = 'mimeType_ASC',
  MimeTypeDesc = 'mimeType_DESC',
  ResolutionAsc = 'resolution_ASC',
  ResolutionDesc = 'resolution_DESC',
  SizeAsc = 'size_ASC',
  SizeDesc = 'size_DESC'
}

export enum UploadOrientation {
  Landscape = 'landscape',
  Portrait = 'portrait',
  Square = 'square'
}

/** Specifies how to filter by size */
export type UploadSizeFilter = {
  /** Search assets with the specified size (in bytes) */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified size (in bytes) */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified size (in bytes) */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified size (in bytes) */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified size (in bytes) */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

/** Specifies how to filter by tags */
export type UploadTagsFilter = {
  /** Filter uploads linked to all of the specified tags */
  allIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to at least one of the specified tags */
  anyIn?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads linked to the specified tag */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Array<Scalars['String']['input']>>;
  /** Filter uploads not linked to any of the specified tags */
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Specifies how to filter by default title */
export type UploadTitleFilter = {
  /** Search the asset with the specified title */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** Filter assets with the specified field defined (i.e. with any value) or not */
  exists?: InputMaybe<Scalars['BooleanType']['input']>;
  /** Search assets with the specified as default title */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Filter uploads based on a regular expression */
  matches?: InputMaybe<StringMatchesFilter>;
  /** Exclude the asset with the specified title */
  neq?: InputMaybe<Scalars['String']['input']>;
  /** Search assets that do not have the specified as default title */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** Exclude uploads based on a regular expression */
  notMatches?: InputMaybe<StringMatchesFilter>;
};

export enum UploadType {
  Archive = 'archive',
  Audio = 'audio',
  Image = 'image',
  Pdfdocument = 'pdfdocument',
  Presentation = 'presentation',
  Richtext = 'richtext',
  Spreadsheet = 'spreadsheet',
  Video = 'video'
}

/** Specifies how to filter by update datetime */
export type UploadUpdatedAtFilter = {
  /** Search for uploads with an exact match */
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's strictly greater than the one specified */
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's greater than or equal to the one specified */
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less than the one specified */
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  /** Filter uploads with a value that's less or equal than the one specified */
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  /** Exclude uploads with an exact match */
  neq?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UploadVideoField = {
  __typename?: 'UploadVideoField';
  alt?: Maybe<Scalars['String']['output']>;
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  duration?: Maybe<Scalars['Int']['output']>;
  framerate?: Maybe<Scalars['Int']['output']>;
  height: Scalars['IntType']['output'];
  mp4Url?: Maybe<Scalars['String']['output']>;
  muxAssetId: Scalars['String']['output'];
  muxPlaybackId: Scalars['String']['output'];
  streamingUrl: Scalars['String']['output'];
  thumbhash?: Maybe<Scalars['String']['output']>;
  thumbnailUrl: Scalars['String']['output'];
  title?: Maybe<Scalars['String']['output']>;
  width: Scalars['IntType']['output'];
};


export type UploadVideoFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type UploadVideoFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type UploadVideoFieldMp4UrlArgs = {
  exactRes?: InputMaybe<VideoMp4Res>;
  res?: InputMaybe<VideoMp4Res>;
};


export type UploadVideoFieldThumbnailUrlArgs = {
  format?: InputMaybe<MuxThumbnailFormatType>;
};


export type UploadVideoFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};

/** Specifies how to filter by width */
export type UploadWidthFilter = {
  /** Search assets with the specified width */
  eq?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger than the specified width */
  gt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  gte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets smaller than the specified width */
  lt?: InputMaybe<Scalars['IntType']['input']>;
  /** Search all assets larger or equal to the specified width */
  lte?: InputMaybe<Scalars['IntType']['input']>;
  /** Search assets that do not have the specified width */
  neq?: InputMaybe<Scalars['IntType']['input']>;
};

export type VideoField = {
  __typename?: 'VideoField';
  height: Scalars['IntType']['output'];
  provider: Scalars['String']['output'];
  providerUid: Scalars['String']['output'];
  thumbnailUrl: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  width: Scalars['IntType']['output'];
};

export type VideoFileField = FileFieldInterface & {
  __typename?: 'VideoFileField';
  _createdAt: Scalars['DateTime']['output'];
  /** The DatoCMS URL where you can edit this entity. To use this field, you need to set a X-Base-Editing-Url header in the request */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  alt?: Maybe<Scalars['String']['output']>;
  author?: Maybe<Scalars['String']['output']>;
  basename: Scalars['String']['output'];
  blurUpThumb?: Maybe<Scalars['String']['output']>;
  blurhash?: Maybe<Scalars['String']['output']>;
  colors: Array<ColorField>;
  copyright?: Maybe<Scalars['String']['output']>;
  customData: Scalars['CustomData']['output'];
  exifInfo: Scalars['CustomData']['output'];
  filename: Scalars['String']['output'];
  focalPoint?: Maybe<FocalPoint>;
  format: Scalars['String']['output'];
  height: Scalars['IntType']['output'];
  id: Scalars['UploadId']['output'];
  md5: Scalars['String']['output'];
  mimeType: Scalars['String']['output'];
  notes?: Maybe<Scalars['String']['output']>;
  responsiveImage?: Maybe<ResponsiveImage>;
  size: Scalars['IntType']['output'];
  smartTags: Array<Scalars['String']['output']>;
  tags: Array<Scalars['String']['output']>;
  thumbhash?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  url: Scalars['String']['output'];
  video: UploadVideoField;
  width: Scalars['IntType']['output'];
};


export type VideoFileFieldAltArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type VideoFileFieldBlurUpThumbArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
  punch?: Scalars['Float']['input'];
  quality?: Scalars['Int']['input'];
  size?: Scalars['Int']['input'];
};


export type VideoFileFieldCustomDataArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type VideoFileFieldFocalPointArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type VideoFileFieldResponsiveImageArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  imgixParams?: InputMaybe<ImgixParams>;
  locale?: InputMaybe<SiteLocale>;
  sizes?: InputMaybe<Scalars['String']['input']>;
};


export type VideoFileFieldTitleArgs = {
  fallbackLocales?: InputMaybe<Array<SiteLocale>>;
  locale?: InputMaybe<SiteLocale>;
};


export type VideoFileFieldUrlArgs = {
  imgixParams?: InputMaybe<ImgixParams>;
};

export enum VideoMp4Res {
  High = 'high',
  Low = 'low',
  Medium = 'medium'
}

/** Block of type 📹 Video (video_section) */
export type VideoSectionRecord = RecordInterface & {
  __typename?: 'VideoSectionRecord';
  _createdAt: Scalars['DateTime']['output'];
  /** Editing URL */
  _editingUrl?: Maybe<Scalars['String']['output']>;
  _firstPublishedAt?: Maybe<Scalars['DateTime']['output']>;
  _isValid: Scalars['BooleanType']['output'];
  _modelApiKey: Scalars['String']['output'];
  _publicationScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _publishedAt?: Maybe<Scalars['DateTime']['output']>;
  /** Generates SEO and Social card meta tags to be used in your frontend */
  _seoMetaTags: Array<Tag>;
  _status: ItemStatus;
  _unpublishingScheduledAt?: Maybe<Scalars['DateTime']['output']>;
  _updatedAt: Scalars['DateTime']['output'];
  externalVideo?: Maybe<VideoField>;
  id: Scalars['ItemId']['output'];
  internalVideo?: Maybe<VideoFileField>;
  videoHeader: Scalars['String']['output'];
  videoSubheader?: Maybe<Scalars['String']['output']>;
};


/** Block of type 📹 Video (video_section) */
export type VideoSectionRecord_SeoMetaTagsArgs = {
  locale?: InputMaybe<SiteLocale>;
};


/** Block of type 📹 Video (video_section) */
export type VideoSectionRecordVideoSubheaderArgs = {
  markdown?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FocalPoint = {
  __typename?: 'focalPoint';
  x: Scalars['FloatType']['output'];
  y: Scalars['FloatType']['output'];
};

export type AttachmentsBlockRecordFragment = { __typename: 'AttachmentsBlockRecord', id: string, _modelApiKey: string, attachmentPrefix?: string | null, attachmentTitle?: string | null, attachmentText?: string | null, attachments: Array<{ __typename?: 'AttachmentRecord', title: string, file: { __typename?: 'FileField', id: string, url: string } }> };

export type BannerCtaRecordFragment = { __typename?: 'BannerCtaRecord', id: string, _modelApiKey: string, displayOptions: string, label?: string | null, title: string, text?: { __typename?: 'BannerCtaModelTextField', value: unknown } | null, bannerCtaImage?: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, coverImage?: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null };

export type ChangelogQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type ChangelogQuery = { __typename?: 'Query', changeLog?: { __typename?: 'ChangeLogRecord', timeOfRelease: string, versionName: string, slug: string, content: { __typename?: 'ChangeLogModelContentField', value: unknown } } | null };

export type ContactTextBlockRecordFragment = { __typename?: 'ContactTextBlockRecord', id: string, _modelApiKey: string, prefix: string, titleContactBlock?: string | null, textContactBlock?: string | null, blocks: Array<{ __typename?: 'TextSimpleBlockRecord', id: string, _modelApiKey: string, titleSimple: string, textSimple?: string | null }> };

export type CustomColorQueryVariables = Exact<{ [key: string]: never; }>;


export type CustomColorQuery = { __typename?: 'Query', layout?: { __typename?: 'LayoutRecord', mainColor: { __typename?: 'ColorField', red: number, blue: number, green: number } } | null };

export type DetailSectionRecordFragment = { __typename?: 'DetailSectionRecord', _modelApiKey: string, id: string, imagePosition?: boolean | null, details: { __typename?: 'DetailSectionModelDetailsField', value: unknown }, image: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } };

export type DocumentationHomePageQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentationHomePageQuery = { __typename?: 'Query', documentationHome?: { __typename?: 'DocumentationHomeRecord', title: string, subheader?: string | null, _modelApiKey: string, id: string, featuredPages: Array<{ __typename?: 'DocumentationPageRecord', id: string, _modelApiKey: string, title: string, subtitle?: string | null, slug: string }> } | null };

export type DocumentationPageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type DocumentationPageQuery = { __typename?: 'Query', documentationPage?: { __typename?: 'DocumentationPageRecord', title: string, _modelApiKey: string, id: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown } } | null };

export type DocumentationSidebarQueryVariables = Exact<{ [key: string]: never; }>;


export type DocumentationSidebarQuery = { __typename?: 'Query', allDocumentationPages: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, children?: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown }, children?: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown }, children?: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown }, children?: Array<{ __typename?: 'DocumentationPageRecord', title: string, subtitle?: string | null, slug: string, id: string, _modelApiKey: string, content: { __typename?: 'DocumentationPageModelContentField', value: unknown } } | null> | null } | null> | null } | null> | null } | null> | null }>, documentationHome?: { __typename?: 'DocumentationHomeRecord', footerText?: string | null, logo: { __typename?: 'FileField', url: string, width?: number | null, height?: number | null } } | null };

export type ElementsListRecordFragment = { __typename?: 'ElementsListRecord', id: string, _modelApiKey: string, itemsPrefix?: string | null, itemsTitle?: string | null, itemsText?: string | null, elements: Array<{ __typename?: 'PostRecord', id: string, _modelApiKey: string, slug: string, abstract?: string | null, title: string, blogImage: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null } } | { __typename?: 'ProductRecord', id: string, _modelApiKey: string, abstract?: string | null, title: string, productImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

export type ExternalLinkFragment = { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string };

export type FaqSectionRecordFragment = { __typename?: 'FaqSectionRecord', _modelApiKey: string, displayOptions: string, id: string, title: string, subtitle?: string | null, questions: Array<{ __typename?: 'QuestionRecord', question: string, id: string, answer: { __typename?: 'QuestionModelAnswerField', value: unknown } }> };

export type FeatureListSectionRecordFragment = { __typename?: 'FeatureListSectionRecord', id: string, _modelApiKey: string, featuresHeader?: string | null, featuresSubheader?: string | null, feature: Array<{ __typename?: 'FeatureRecord', id: string, featureTitle: string, featureDescription: string, featureIcon: { __typename?: 'FileField', url: string } }> };

export type FeaturedPagesSectionRecordFragment = { __typename?: 'FeaturedPagesSectionRecord', _modelApiKey: string, id: string, featuredPagesHeader?: string | null, featuredPagesSubheader?: string | null, displayOptions: string, featuredPages: Array<{ __typename?: 'PageRecord', _modelApiKey: string, _publishedAt?: string | null, slug: string, id: string, title: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, hero: { __typename?: 'HeroSectionRecord', id: string, heroTitle: string, heroSubtitle?: string | null, heroImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } }> };

export type FooterQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type FooterQuery = { __typename?: 'Query', layout?: { __typename?: 'LayoutRecord', footerSubtitle?: string | null, address?: string | null, colorReverseBanner?: boolean | null, email?: string | null, facebookPixelId?: string | null, googleAnalyticsId?: string | null, googleTagManagerId?: string | null, id: string, iubendaPolicyId?: string | null, iubendaSiteId?: string | null, iva?: string | null, phone?: string | null, rea?: string | null, theme?: string | null, titleNewsletter?: string | null, textNewsletter?: string | null, urlNewsletter?: string | null, googleMaps?: string | null, footerLogo?: { __typename?: 'FileField', url: string, height?: number | null, width?: number | null } | null, socialMediaLinks: Array<{ __typename?: 'SocialMediaIconRecord', url: string, name?: string | null, id: string, icon: { __typename?: 'FileField', url: string, height?: number | null, width?: number | null } }>, footerLinks: Array<{ __typename?: 'PageRecord', _modelApiKey: string, id: string, slug: string, label: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null }> } | null };

export type FormBlockRecordFragment = { __typename?: 'FormBlockRecord', _modelApiKey: string, id: string, titleForm?: string | null, textForm?: string | null };

export type GallerySectionRecordFragment = { __typename: 'GallerySectionRecord', id: string, _modelApiKey: string, galleryImages: Array<{ __typename?: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

export type RoutesQueryQueryVariables = Exact<{ [key: string]: never; }>;


export type RoutesQueryQuery = { __typename?: 'Query', routes: Array<{ __typename?: 'RouteItemRecord', id: string, _modelApiKey: string, title: string, isHome?: boolean | null, isDynamic?: boolean | null, associatedModel?: string | null, children?: Array<{ __typename?: 'RouteItemRecord', id: string, _modelApiKey: string, title: string, isHome?: boolean | null, isDynamic?: boolean | null, associatedModel?: string | null, children?: Array<{ __typename?: 'RouteItemRecord', id: string, _modelApiKey: string, title: string, isHome?: boolean | null, isDynamic?: boolean | null, associatedModel?: string | null, children?: Array<{ __typename?: 'RouteItemRecord', id: string, _modelApiKey: string, title: string, isHome?: boolean | null, isDynamic?: boolean | null, associatedModel?: string | null } | null> | null } | null> | null } | null> | null }> };

export type RouteItemFragFragment = { __typename?: 'RouteItemRecord', id: string, _modelApiKey: string, title: string, isHome?: boolean | null, isDynamic?: boolean | null, associatedModel?: string | null };

export type ImageBlockRecordFragment = { __typename: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } };

export type InternalLinkFragment = { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } };

export type LayoutQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
}>;


export type LayoutQuery = { __typename?: 'Query', _site: { __typename?: 'Site', faviconMetaTags: Array<{ __typename?: 'Tag', tag: string, content?: string | null, attributes?: Record<string, string> | null }>, globalSeo?: { __typename?: 'GlobalSeoField', siteName?: string | null, titleSuffix?: string | null, twitterAccount?: string | null, facebookPageUrl?: string | null, fallbackSeo?: { __typename?: 'SeoField', title?: string | null, twitterCard?: string | null, description?: string | null, image?: { __typename?: 'FileField', url: string, width?: number | null, height?: number | null } | null } | null } | null } };

export type LegalQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type LegalQuery = { __typename?: 'Query', legalPage?: { __typename?: 'LegalPageRecord', content: { __typename?: 'LegalPageModelContentField', value: unknown } } | null };

export type LocalesQueryVariables = Exact<{ [key: string]: never; }>;


export type LocalesQuery = { __typename?: 'Query', _site: { __typename?: 'Site', locales: Array<SiteLocale> } };

export type MenuQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type MenuQuery = { __typename?: 'Query', layout?: { __typename?: 'LayoutRecord', logo: { __typename?: 'FileField', url: string, responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null }, menu: Array<{ __typename?: 'MenuDropdownRecord', id: string, title: string, _modelApiKey: string, dropdownType?: string | null, items: Array<{ __typename?: 'MenuItemRecord', id: string, title: string, _modelApiKey: string, page: { __typename?: 'PageRecord', slug: string, _modelApiKey: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } }>, megaItems: Array<{ __typename?: 'MegaMenuItemRecord', id: string, title: string, _modelApiKey: string, menuImage: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null }, page: { __typename?: 'PageRecord', slug: string, _modelApiKey: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } }> } | { __typename?: 'MenuItemRecord', id: string, title: string, _modelApiKey: string, page: { __typename?: 'PageRecord', slug: string, _modelApiKey: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } }>, notification?: { __typename?: 'LayoutModelNotificationField', value: unknown } | null } | null, _site: { __typename?: 'Site', locales: Array<SiteLocale> } };

export type DatoImage_ResponsiveImageFragment = { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null };

export type MultipleCardRecordFragment = { __typename?: 'MultipleCardRecord', id: string, _modelApiKey: string, multipleImages: Array<{ __typename?: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

export type PageQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageRecord', id: string, label: string, abstract?: string | null, _modelApiKey: string, isIndex?: boolean | null, isHome?: boolean | null, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, seo: Array<{ __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string }>, hero: { __typename?: 'HeroSectionRecord', _modelApiKey: string, id: string, heroSubtitle?: string | null, heroTitle: string, displayOptions: string, buttons: Array<{ __typename?: 'ButtonRecord', id: string, label: string, primary?: boolean | null, url?: string | null }>, heroImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }, sections: Array<{ __typename?: 'SectionWrapRecord', id: string, label?: string | null, _modelApiKey: string, title?: string | null, style?: string | null, blocks: Array<{ __typename: 'AttachmentsBlockRecord', id: string, _modelApiKey: string, attachmentPrefix?: string | null, attachmentTitle?: string | null, attachmentText?: string | null, attachments: Array<{ __typename?: 'AttachmentRecord', title: string, file: { __typename?: 'FileField', id: string, url: string } }> } | { __typename?: 'BannerCtaRecord', id: string, _modelApiKey: string, displayOptions: string, label?: string | null, title: string, text?: { __typename?: 'BannerCtaModelTextField', value: unknown } | null, bannerCtaImage?: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, coverImage?: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null } | { __typename?: 'ContactTextBlockRecord', id: string, _modelApiKey: string, prefix: string, titleContactBlock?: string | null, textContactBlock?: string | null, blocks: Array<{ __typename?: 'TextSimpleBlockRecord', id: string, _modelApiKey: string, titleSimple: string, textSimple?: string | null }> } | { __typename?: 'DetailSectionRecord', _modelApiKey: string, id: string, imagePosition?: boolean | null, details: { __typename?: 'DetailSectionModelDetailsField', value: unknown }, image: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } | { __typename?: 'ElementsListRecord', id: string, _modelApiKey: string, itemsPrefix?: string | null, itemsTitle?: string | null, itemsText?: string | null, elements: Array<{ __typename?: 'PostRecord', id: string, _modelApiKey: string, slug: string, abstract?: string | null, title: string, blogImage: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null } } | { __typename?: 'ProductRecord', id: string, _modelApiKey: string, abstract?: string | null, title: string, productImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename?: 'FaqSectionRecord', _modelApiKey: string, displayOptions: string, id: string, title: string, subtitle?: string | null, questions: Array<{ __typename?: 'QuestionRecord', question: string, id: string, answer: { __typename?: 'QuestionModelAnswerField', value: unknown } }> } | { __typename?: 'FeatureListSectionRecord', id: string, _modelApiKey: string, featuresHeader?: string | null, featuresSubheader?: string | null, feature: Array<{ __typename?: 'FeatureRecord', id: string, featureTitle: string, featureDescription: string, featureIcon: { __typename?: 'FileField', url: string } }> } | { __typename?: 'FeaturedPagesSectionRecord', _modelApiKey: string, id: string, featuredPagesHeader?: string | null, featuredPagesSubheader?: string | null, displayOptions: string, featuredPages: Array<{ __typename?: 'PageRecord', _modelApiKey: string, _publishedAt?: string | null, slug: string, id: string, title: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, hero: { __typename?: 'HeroSectionRecord', id: string, heroTitle: string, heroSubtitle?: string | null, heroImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } }> } | { __typename?: 'FormBlockRecord', _modelApiKey: string, id: string, titleForm?: string | null, textForm?: string | null } | { __typename: 'GallerySectionRecord', id: string, _modelApiKey: string, galleryImages: Array<{ __typename?: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } | { __typename?: 'MultipleCardRecord', id: string, _modelApiKey: string, multipleImages: Array<{ __typename?: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename?: 'ProductDetailRecord', id: string, title: string, description?: string | null, label?: string | null, _modelApiKey: string, imageDescription?: string | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null, productDetailImage?: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, logo?: { __typename?: 'FileField', url: string } | null, values: Array<{ __typename?: 'KeyValueRecord', id: string, key: string, value?: string | null, star?: boolean | null }> } | { __typename?: 'SimpleTextRecord' } | { __typename?: 'SlideshowRecord', id: string, _modelApiKey: string, slides: Array<{ __typename?: 'SlideRecord', id: string, title?: string | null, text?: string | null, image: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename: 'TextBlockRecord', id: string, _modelApiKey: string, displayOptions: string, label?: string | null, mainTitle: string, mainText?: { __typename?: 'TextBlockModelTextField', value: unknown } | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null } | { __typename: 'VideoSectionRecord', _modelApiKey: string, id: string, videoHeader: string, videoSubheader?: string | null, internalVideo?: { __typename?: 'VideoFileField', video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, blurUpThumb?: string | null, thumbnailUrl: string, muxAssetId: string, framerate?: number | null, duration?: number | null, streamingUrl: string, src?: string | null } } | null, externalVideo?: { __typename?: 'VideoField', url: string, provider: string, providerUid: string, thumbnailUrl: string } | null }> }> } | null };

export type PostQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
}>;


export type PostQuery = { __typename?: 'Query', post?: { __typename?: 'PostRecord', _publishedAt?: string | null, _modelApiKey: string, title: string, abstract?: string | null, blogImage: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null }, tags: Array<{ __typename?: 'TagRecord', id: string, tag: string, slug: string, _modelApiKey: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null }>, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, content: { __typename?: 'PostModelContentField', value: unknown, links: Array<{ __typename: 'PostRecord', _publishedAt?: string | null, slug: string, id: string, title: string, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null }>, blocks: Array<{ __typename: 'AttachmentsBlockRecord', id: string, _modelApiKey: string, attachmentPrefix?: string | null, attachmentTitle?: string | null, attachmentText?: string | null, attachments: Array<{ __typename?: 'AttachmentRecord', title: string, file: { __typename?: 'FileField', id: string, url: string } }> } | { __typename: 'GallerySectionRecord', id: string, _modelApiKey: string, galleryImages: Array<{ __typename?: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> } | { __typename: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } | { __typename: 'VideoSectionRecord', _modelApiKey: string, id: string, videoHeader: string, videoSubheader?: string | null, internalVideo?: { __typename?: 'VideoFileField', video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, blurUpThumb?: string | null, thumbnailUrl: string, muxAssetId: string, framerate?: number | null, duration?: number | null, streamingUrl: string, src?: string | null } } | null, externalVideo?: { __typename?: 'VideoField', url: string, provider: string, providerUid: string, thumbnailUrl: string } | null }> } } | null };

export type PostsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type PostsQuery = { __typename?: 'Query', allPosts: Array<{ __typename?: 'PostRecord', _publishedAt?: string | null, _modelApiKey: string, slug: string, id: string, title: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, blogImage: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null }, blogImageHover?: { __typename?: 'ImageFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null }>, _allPostsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type ProductDetailRecordFragment = { __typename?: 'ProductDetailRecord', id: string, title: string, description?: string | null, label?: string | null, _modelApiKey: string, imageDescription?: string | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null, productDetailImage?: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, logo?: { __typename?: 'FileField', url: string } | null, values: Array<{ __typename?: 'KeyValueRecord', id: string, key: string, value?: string | null, star?: boolean | null }> };

export type ProductsQueryVariables = Exact<{
  locale?: InputMaybe<SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type ProductsQuery = { __typename?: 'Query', allProducts: Array<{ __typename?: 'ProductRecord', _publishedAt?: string | null, _modelApiKey: string, slug: string, id: string, title: string, abstract?: string | null, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null, productImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }>, _allProductsMeta: { __typename?: 'CollectionMetadata', count: number } };

export type RImageFragment = { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null };

type WrapSectionBlocks_AttachmentsBlockRecord_Fragment = { __typename: 'AttachmentsBlockRecord', id: string, _modelApiKey: string, attachmentPrefix?: string | null, attachmentTitle?: string | null, attachmentText?: string | null, attachments: Array<{ __typename?: 'AttachmentRecord', title: string, file: { __typename?: 'FileField', id: string, url: string } }> };

type WrapSectionBlocks_BannerCtaRecord_Fragment = { __typename?: 'BannerCtaRecord', id: string, _modelApiKey: string, displayOptions: string, label?: string | null, title: string, text?: { __typename?: 'BannerCtaModelTextField', value: unknown } | null, bannerCtaImage?: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, coverImage?: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null };

type WrapSectionBlocks_ContactTextBlockRecord_Fragment = { __typename?: 'ContactTextBlockRecord', id: string, _modelApiKey: string, prefix: string, titleContactBlock?: string | null, textContactBlock?: string | null, blocks: Array<{ __typename?: 'TextSimpleBlockRecord', id: string, _modelApiKey: string, titleSimple: string, textSimple?: string | null }> };

type WrapSectionBlocks_DetailSectionRecord_Fragment = { __typename?: 'DetailSectionRecord', _modelApiKey: string, id: string, imagePosition?: boolean | null, details: { __typename?: 'DetailSectionModelDetailsField', value: unknown }, image: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } };

type WrapSectionBlocks_ElementsListRecord_Fragment = { __typename?: 'ElementsListRecord', id: string, _modelApiKey: string, itemsPrefix?: string | null, itemsTitle?: string | null, itemsText?: string | null, elements: Array<{ __typename?: 'PostRecord', id: string, _modelApiKey: string, slug: string, abstract?: string | null, title: string, blogImage: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } | null } } | { __typename?: 'ProductRecord', id: string, _modelApiKey: string, abstract?: string | null, title: string, productImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

type WrapSectionBlocks_FaqSectionRecord_Fragment = { __typename?: 'FaqSectionRecord', _modelApiKey: string, displayOptions: string, id: string, title: string, subtitle?: string | null, questions: Array<{ __typename?: 'QuestionRecord', question: string, id: string, answer: { __typename?: 'QuestionModelAnswerField', value: unknown } }> };

type WrapSectionBlocks_FeatureListSectionRecord_Fragment = { __typename?: 'FeatureListSectionRecord', id: string, _modelApiKey: string, featuresHeader?: string | null, featuresSubheader?: string | null, feature: Array<{ __typename?: 'FeatureRecord', id: string, featureTitle: string, featureDescription: string, featureIcon: { __typename?: 'FileField', url: string } }> };

type WrapSectionBlocks_FeaturedPagesSectionRecord_Fragment = { __typename?: 'FeaturedPagesSectionRecord', _modelApiKey: string, id: string, featuredPagesHeader?: string | null, featuredPagesSubheader?: string | null, displayOptions: string, featuredPages: Array<{ __typename?: 'PageRecord', _modelApiKey: string, _publishedAt?: string | null, slug: string, id: string, title: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null, hero: { __typename?: 'HeroSectionRecord', id: string, heroTitle: string, heroSubtitle?: string | null, heroImage: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } } }> };

type WrapSectionBlocks_FormBlockRecord_Fragment = { __typename?: 'FormBlockRecord', _modelApiKey: string, id: string, titleForm?: string | null, textForm?: string | null };

type WrapSectionBlocks_GallerySectionRecord_Fragment = { __typename: 'GallerySectionRecord', id: string, _modelApiKey: string, galleryImages: Array<{ __typename?: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

type WrapSectionBlocks_ImageBlockRecord_Fragment = { __typename: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } };

type WrapSectionBlocks_MultipleCardRecord_Fragment = { __typename?: 'MultipleCardRecord', id: string, _modelApiKey: string, multipleImages: Array<{ __typename?: 'ImageBlockRecord', id: string, _modelApiKey: string, imageDescription?: string | null, imageAsset: { __typename?: 'ImageAltTitleFileField', id: string, responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

type WrapSectionBlocks_ProductDetailRecord_Fragment = { __typename?: 'ProductDetailRecord', id: string, title: string, description?: string | null, label?: string | null, _modelApiKey: string, imageDescription?: string | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null, productDetailImage?: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } | null, logo?: { __typename?: 'FileField', url: string } | null, values: Array<{ __typename?: 'KeyValueRecord', id: string, key: string, value?: string | null, star?: boolean | null }> };

type WrapSectionBlocks_SimpleTextRecord_Fragment = { __typename?: 'SimpleTextRecord' };

type WrapSectionBlocks_SlideshowRecord_Fragment = { __typename?: 'SlideshowRecord', id: string, _modelApiKey: string, slides: Array<{ __typename?: 'SlideRecord', id: string, title?: string | null, text?: string | null, image: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

type WrapSectionBlocks_TextBlockRecord_Fragment = { __typename: 'TextBlockRecord', id: string, _modelApiKey: string, displayOptions: string, label?: string | null, mainTitle: string, mainText?: { __typename?: 'TextBlockModelTextField', value: unknown } | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null };

type WrapSectionBlocks_VideoSectionRecord_Fragment = { __typename: 'VideoSectionRecord', _modelApiKey: string, id: string, videoHeader: string, videoSubheader?: string | null, internalVideo?: { __typename?: 'VideoFileField', video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, blurUpThumb?: string | null, thumbnailUrl: string, muxAssetId: string, framerate?: number | null, duration?: number | null, streamingUrl: string, src?: string | null } } | null, externalVideo?: { __typename?: 'VideoField', url: string, provider: string, providerUid: string, thumbnailUrl: string } | null };

export type WrapSectionBlocksFragment = WrapSectionBlocks_AttachmentsBlockRecord_Fragment | WrapSectionBlocks_BannerCtaRecord_Fragment | WrapSectionBlocks_ContactTextBlockRecord_Fragment | WrapSectionBlocks_DetailSectionRecord_Fragment | WrapSectionBlocks_ElementsListRecord_Fragment | WrapSectionBlocks_FaqSectionRecord_Fragment | WrapSectionBlocks_FeatureListSectionRecord_Fragment | WrapSectionBlocks_FeaturedPagesSectionRecord_Fragment | WrapSectionBlocks_FormBlockRecord_Fragment | WrapSectionBlocks_GallerySectionRecord_Fragment | WrapSectionBlocks_ImageBlockRecord_Fragment | WrapSectionBlocks_MultipleCardRecord_Fragment | WrapSectionBlocks_ProductDetailRecord_Fragment | WrapSectionBlocks_SimpleTextRecord_Fragment | WrapSectionBlocks_SlideshowRecord_Fragment | WrapSectionBlocks_TextBlockRecord_Fragment | WrapSectionBlocks_VideoSectionRecord_Fragment;

export type SeoMetaFragmentFragment = { __typename?: 'Tag', attributes?: Record<string, string> | null, content?: string | null, tag: string };

export type SlideshowRecordFragment = { __typename?: 'SlideshowRecord', id: string, _modelApiKey: string, slides: Array<{ __typename?: 'SlideRecord', id: string, title?: string | null, text?: string | null, image: { __typename?: 'ImageAltTitleFileField', responsiveImage: { __typename?: 'ResponsiveImage', src: string, srcSet: string, base64?: string | null, width: number, height: number, alt?: string | null, title?: string | null } } }> };

export type TagQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
  locale?: InputMaybe<SiteLocale>;
  fallbackLocale?: InputMaybe<Array<SiteLocale> | SiteLocale>;
  skip?: InputMaybe<Scalars['IntType']['input']>;
}>;


export type TagQuery = { __typename?: 'Query', tag?: { __typename?: 'TagRecord', tag: string, _allReferencingPosts: Array<{ __typename?: 'PostRecord', _publishedAt?: string | null, slug: string, id: string, title: string, tags: Array<{ __typename?: 'TagRecord', tag: string }>, seoTags?: { __typename?: 'SeoField', description?: string | null, image?: { __typename?: 'FileField', responsiveImage?: { __typename?: 'ResponsiveImage', srcSet: string, webpSrcSet: string, sizes: string, src: string, width: number, height: number, aspectRatio: number, alt?: string | null, title?: string | null, bgColor?: string | null, base64?: string | null } | null } | null } | null }>, _allReferencingPostsMeta: { __typename?: 'CollectionMetadata', count: number } } | null };

export type TextBlockRecordFragment = { __typename: 'TextBlockRecord', id: string, _modelApiKey: string, displayOptions: string, label?: string | null, mainTitle: string, mainText?: { __typename?: 'TextBlockModelTextField', value: unknown } | null, link?: { __typename: 'ExternalLinkRecord', _modelApiKey: string, id: string, label: string, url: string } | { __typename: 'InternalLinkRecord', _modelApiKey: string, id: string, label: string, page: { __typename: 'PageRecord', _modelApiKey: string, id: string, slug: string, slugs?: Array<{ __typename?: 'StringNonNullMultiLocaleField', locale?: SiteLocale | null, value: string }> | null } } | null };

export type VideoSectionRecordFragment = { __typename: 'VideoSectionRecord', _modelApiKey: string, id: string, videoHeader: string, videoSubheader?: string | null, internalVideo?: { __typename?: 'VideoFileField', video: { __typename?: 'UploadVideoField', muxPlaybackId: string, title?: string | null, width: number, height: number, blurUpThumb?: string | null, thumbnailUrl: string, muxAssetId: string, framerate?: number | null, duration?: number | null, streamingUrl: string, src?: string | null } } | null, externalVideo?: { __typename?: 'VideoField', url: string, provider: string, providerUid: string, thumbnailUrl: string } | null };

export const RouteItemFragFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"routeItemFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RouteItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isHome"}},{"kind":"Field","name":{"kind":"Name","value":"isDynamic"}},{"kind":"Field","name":{"kind":"Name","value":"associatedModel"}}]}}]} as unknown as DocumentNode<RouteItemFragFragment, unknown>;
export const DatoImage_ResponsiveImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatoImage_responsiveImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<DatoImage_ResponsiveImageFragment, unknown>;
export const RImageFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<RImageFragment, unknown>;
export const ElementsListRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"elementsListRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ElementsListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPrefix"}},{"kind":"Field","name":{"kind":"Name","value":"itemsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"itemsText"}},{"kind":"Field","name":{"kind":"Name","value":"elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"blogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"productImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<ElementsListRecordFragment, unknown>;
export const ContactTextBlockRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"contactTextBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactTextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"titleContactBlock"}},{"kind":"Field","name":{"kind":"Name","value":"textContactBlock"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"titleSimple"}},{"kind":"Field","name":{"kind":"Name","value":"textSimple"}}]}}]}}]} as unknown as DocumentNode<ContactTextBlockRecordFragment, unknown>;
export const InternalLinkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"internalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<InternalLinkFragment, unknown>;
export const ExternalLinkFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"externalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<ExternalLinkFragment, unknown>;
export const ProductDetailRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productDetailRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDetailRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"productDetailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, 100vw, 400px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"star"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"internalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"externalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<ProductDetailRecordFragment, unknown>;
export const FeatureListSectionRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureListSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureListSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"featuresHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuresSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featureTitle"}},{"kind":"Field","name":{"kind":"Name","value":"featureDescription"}},{"kind":"Field","name":{"kind":"Name","value":"featureIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}}]} as unknown as DocumentNode<FeatureListSectionRecordFragment, unknown>;
export const SlideshowRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"slideshowRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SlideshowRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"720"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<SlideshowRecordFragment, unknown>;
export const MultipleCardRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"multipleCardRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MultipleCardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 25vw, 90vw, 400px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"3:4","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<MultipleCardRecordFragment, unknown>;
export const FeaturedPagesSectionRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featuredPagesSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedPagesSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPagesHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPagesSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroTitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<FeaturedPagesSectionRecordFragment, unknown>;
export const BannerCtaRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bannerCtaRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerCtaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:1024px) 60vw, 90vw, 990px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"bannerCtaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"100vw, 1500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"internalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"externalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<BannerCtaRecordFragment, unknown>;
export const TextBlockRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","alias":{"kind":"Name","value":"mainTitle"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"mainText"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"internalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"externalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]} as unknown as DocumentNode<TextBlockRecordFragment, unknown>;
export const ImageBlockRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<ImageBlockRecordFragment, unknown>;
export const GallerySectionRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gallerySectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GallerySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"galleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<GallerySectionRecordFragment, unknown>;
export const FormBlockRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"formBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"titleForm"}},{"kind":"Field","name":{"kind":"Name","value":"textForm"}}]}}]} as unknown as DocumentNode<FormBlockRecordFragment, unknown>;
export const FaqSectionRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"faqSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<FaqSectionRecordFragment, unknown>;
export const VideoSectionRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"videoSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"videoHeader"}},{"kind":"Field","name":{"kind":"Name","value":"videoSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"internalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurUpThumb"}},{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"mp4Url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"res"},"value":{"kind":"EnumValue","value":"medium"}}]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]},{"kind":"Field","name":{"kind":"Name","value":"muxAssetId"}},{"kind":"Field","name":{"kind":"Name","value":"framerate"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"streamingUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerUid"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}}]} as unknown as DocumentNode<VideoSectionRecordFragment, unknown>;
export const AttachmentsBlockRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"attachmentsBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentsBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentPrefix"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentText"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]} as unknown as DocumentNode<AttachmentsBlockRecordFragment, unknown>;
export const DetailSectionRecordFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"detailSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DetailSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagePosition"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<DetailSectionRecordFragment, unknown>;
export const WrapSectionBlocksFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"wrapSectionBlocks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionWrapModelBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ElementsListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"elementsListRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactTextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contactTextBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDetailRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productDetailRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureListSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureListSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SlideshowRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"slideshowRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MultipleCardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"multipleCardRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedPagesSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featuredPagesSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"bannerCtaRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"textBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GallerySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gallerySectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"formBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"faqSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"videoSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentsBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"attachmentsBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DetailSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"detailSectionRecord"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"internalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"externalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"elementsListRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ElementsListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPrefix"}},{"kind":"Field","name":{"kind":"Name","value":"itemsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"itemsText"}},{"kind":"Field","name":{"kind":"Name","value":"elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"blogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"productImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"contactTextBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactTextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"titleContactBlock"}},{"kind":"Field","name":{"kind":"Name","value":"textContactBlock"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"titleSimple"}},{"kind":"Field","name":{"kind":"Name","value":"textSimple"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productDetailRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDetailRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"productDetailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, 100vw, 400px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"star"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureListSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureListSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"featuresHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuresSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featureTitle"}},{"kind":"Field","name":{"kind":"Name","value":"featureDescription"}},{"kind":"Field","name":{"kind":"Name","value":"featureIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"slideshowRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SlideshowRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"720"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"multipleCardRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MultipleCardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 25vw, 90vw, 400px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"3:4","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featuredPagesSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedPagesSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPagesHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPagesSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroTitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bannerCtaRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerCtaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:1024px) 60vw, 90vw, 990px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"bannerCtaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"100vw, 1500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","alias":{"kind":"Name","value":"mainTitle"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"mainText"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gallerySectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GallerySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"galleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"formBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"titleForm"}},{"kind":"Field","name":{"kind":"Name","value":"textForm"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"faqSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"videoSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"videoHeader"}},{"kind":"Field","name":{"kind":"Name","value":"videoSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"internalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurUpThumb"}},{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"mp4Url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"res"},"value":{"kind":"EnumValue","value":"medium"}}]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]},{"kind":"Field","name":{"kind":"Name","value":"muxAssetId"}},{"kind":"Field","name":{"kind":"Name","value":"framerate"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"streamingUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerUid"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"attachmentsBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentsBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentPrefix"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentText"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"detailSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DetailSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagePosition"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]} as unknown as DocumentNode<WrapSectionBlocksFragment, unknown>;
export const SeoMetaFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"seoMetaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}}]} as unknown as DocumentNode<SeoMetaFragmentFragment, unknown>;
export const ChangelogDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Changelog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changeLog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"timeOfRelease"}},{"kind":"Field","name":{"kind":"Name","value":"versionName"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<ChangelogQuery, ChangelogQueryVariables>;
export const CustomColorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CustomColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"mainColor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"red"}},{"kind":"Field","name":{"kind":"Name","value":"blue"}},{"kind":"Field","name":{"kind":"Name","value":"green"}}]}}]}}]}}]} as unknown as DocumentNode<CustomColorQuery, CustomColorQueryVariables>;
export const DocumentationHomePageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentationHomePage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentationHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subheader"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}}]}}]}}]}}]} as unknown as DocumentNode<DocumentationHomePageQuery, DocumentationHomePageQueryVariables>;
export const DocumentationPageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentationPage"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"documentationPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<DocumentationPageQuery, DocumentationPageQueryVariables>;
export const DocumentationSidebarDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"DocumentationSidebar"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDocumentationPages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}}]}},{"kind":"Field","name":{"kind":"Name","value":"documentationHome"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footerText"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]} as unknown as DocumentNode<DocumentationSidebarQuery, DocumentationSidebarQueryVariables>;
export const FooterDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Footer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"footerSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"address"}},{"kind":"Field","name":{"kind":"Name","value":"colorReverseBanner"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"facebookPixelId"}},{"kind":"Field","name":{"kind":"Name","value":"footerSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"googleAnalyticsId"}},{"kind":"Field","name":{"kind":"Name","value":"googleTagManagerId"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"iubendaPolicyId"}},{"kind":"Field","name":{"kind":"Name","value":"iubendaSiteId"}},{"kind":"Field","name":{"kind":"Name","value":"iva"}},{"kind":"Field","name":{"kind":"Name","value":"phone"}},{"kind":"Field","name":{"kind":"Name","value":"rea"}},{"kind":"Field","name":{"kind":"Name","value":"theme"}},{"kind":"Field","name":{"kind":"Name","value":"titleNewsletter"}},{"kind":"Field","name":{"kind":"Name","value":"textNewsletter"}},{"kind":"Field","name":{"kind":"Name","value":"urlNewsletter"}},{"kind":"Field","name":{"kind":"Name","value":"googleMaps"}},{"kind":"Field","name":{"kind":"Name","value":"footerLogo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}},{"kind":"Field","name":{"kind":"Name","value":"socialMediaLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"icon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"width"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"footerLinks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"label"}}]}}]}}]}}]} as unknown as DocumentNode<FooterQuery, FooterQueryVariables>;
export const RoutesQueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RoutesQuery"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"routes"},"name":{"kind":"Name","value":"allRouteItems"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"parent"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"exists"},"value":{"kind":"BooleanValue","value":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"routeItemFrag"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"routeItemFrag"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"routeItemFrag"}},{"kind":"Field","name":{"kind":"Name","value":"children"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"routeItemFrag"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"routeItemFrag"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"RouteItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"isHome"}},{"kind":"Field","name":{"kind":"Name","value":"isDynamic"}},{"kind":"Field","name":{"kind":"Name","value":"associatedModel"}}]}}]} as unknown as DocumentNode<RoutesQueryQuery, RoutesQueryQueryVariables>;
export const LayoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"layout"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_site"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"faviconMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"}}]}},{"kind":"Field","name":{"kind":"Name","value":"globalSeo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"siteName"}},{"kind":"Field","name":{"kind":"Name","value":"titleSuffix"}},{"kind":"Field","name":{"kind":"Name","value":"twitterAccount"}},{"kind":"Field","name":{"kind":"Name","value":"facebookPageUrl"}},{"kind":"Field","name":{"kind":"Name","value":"fallbackSeo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"twitterCard"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"compress"},{"kind":"EnumValue","value":"format"}]}}]}}]},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<LayoutQuery, LayoutQueryVariables>;
export const LegalDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Legal"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"legalPage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}}]} as unknown as DocumentNode<LegalQuery, LegalQueryVariables>;
export const LocalesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Locales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locales"}}]}}]}}]} as unknown as DocumentNode<LocalesQuery, LocalesQueryVariables>;
export const MenuDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Menu"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"layout"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"DatoImage_responsiveImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"menu"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuDropdownRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"dropdownType"}},{"kind":"Field","name":{"kind":"Name","value":"items"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"megaItems"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MegaMenuItemRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"menuImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"300"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"notification"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_site"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locales"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"DatoImage_responsiveImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<MenuQuery, MenuQueryVariables>;
export const PageDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Page"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"page"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"isIndex"}},{"kind":"Field","name":{"kind":"Name","value":"isHome"}},{"kind":"Field","alias":{"kind":"Name","value":"seo"},"name":{"kind":"Name","value":"_seoMetaTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"seoMetaFragment"}}]}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"buttons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"primary"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroTitle"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"sections"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionWrapRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"style"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"wrapSectionBlocks"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"elementsListRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ElementsListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"itemsPrefix"}},{"kind":"Field","name":{"kind":"Name","value":"itemsTitle"}},{"kind":"Field","name":{"kind":"Name","value":"itemsText"}},{"kind":"Field","name":{"kind":"Name","value":"elements"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PostRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"blogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"productImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"contactTextBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactTextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"prefix"}},{"kind":"Field","name":{"kind":"Name","value":"titleContactBlock"}},{"kind":"Field","name":{"kind":"Name","value":"textContactBlock"}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"titleSimple"}},{"kind":"Field","name":{"kind":"Name","value":"textSimple"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"internalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"page"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"externalLink"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"productDetailRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDetailRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"productDetailImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, 100vw, 400px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"values"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"star"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featureListSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureListSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"featuresHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuresSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"feature"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featureTitle"}},{"kind":"Field","name":{"kind":"Name","value":"featureDescription"}},{"kind":"Field","name":{"kind":"Name","value":"featureIcon"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"slideshowRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SlideshowRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"slides"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"EnumValue","value":"format"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"h"},"value":{"kind":"IntValue","value":"720"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"multipleCardRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MultipleCardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"multipleImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 25vw, 90vw, 400px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"3:4","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"featuredPagesSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedPagesSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPagesHeader"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPagesSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"featuredPages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","alias":{"kind":"Name","value":"title"},"name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"hero"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"heroTitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroSubtitle"}},{"kind":"Field","name":{"kind":"Name","value":"heroImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"bannerCtaRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bannerCtaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:1024px) 60vw, 90vw, 990px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"coverImage"},"name":{"kind":"Name","value":"bannerCtaImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"100vw, 1500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"textBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"label"}},{"kind":"Field","alias":{"kind":"Name","value":"mainTitle"},"name":{"kind":"Name","value":"title"}},{"kind":"Field","alias":{"kind":"Name","value":"mainText"},"name":{"kind":"Name","value":"text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"link"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"InternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"internalLink"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ExternalLinkRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"externalLink"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gallerySectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GallerySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"galleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"formBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"titleForm"}},{"kind":"Field","name":{"kind":"Name","value":"textForm"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"faqSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"displayOptions"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"subtitle"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"answer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"videoSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"videoHeader"}},{"kind":"Field","name":{"kind":"Name","value":"videoSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"internalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurUpThumb"}},{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"mp4Url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"res"},"value":{"kind":"EnumValue","value":"medium"}}]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]},{"kind":"Field","name":{"kind":"Name","value":"muxAssetId"}},{"kind":"Field","name":{"kind":"Name","value":"framerate"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"streamingUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerUid"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"attachmentsBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentsBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentPrefix"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentText"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"detailSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DetailSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"details"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"imagePosition"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"seoMetaFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Tag"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"wrapSectionBlocks"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SectionWrapModelBlocksField"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ElementsListRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"elementsListRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContactTextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"contactTextBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ProductDetailRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"productDetailRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeatureListSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featureListSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SlideshowRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"slideshowRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MultipleCardRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"multipleCardRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FeaturedPagesSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"featuredPagesSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BannerCtaRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"bannerCtaRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"textBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GallerySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gallerySectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FormBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"formBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"FaqSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"faqSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"videoSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentsBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"attachmentsBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"DetailSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"detailSectionRecord"}}]}}]}}]} as unknown as DocumentNode<PageQuery, PageQueryVariables>;
export const PostDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Post"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"post"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"blogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"2:1","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allTagLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}}]}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"}},{"kind":"Field","name":{"kind":"Name","value":"links"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blocks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"imageBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentsBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"attachmentsBlockRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"videoSectionRecord"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GallerySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"gallerySectionRecord"}}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"imageBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"4:3","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"attachmentsBlockRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AttachmentsBlockRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentPrefix"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentTitle"}},{"kind":"Field","name":{"kind":"Name","value":"attachmentText"}},{"kind":"Field","name":{"kind":"Name","value":"attachments"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"videoSectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoSectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"videoHeader"}},{"kind":"Field","name":{"kind":"Name","value":"videoSubheader"}},{"kind":"Field","name":{"kind":"Name","value":"internalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"video"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"blurUpThumb"}},{"kind":"Field","alias":{"kind":"Name","value":"src"},"name":{"kind":"Name","value":"mp4Url"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"res"},"value":{"kind":"EnumValue","value":"medium"}}]},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"format"},"value":{"kind":"EnumValue","value":"jpg"}}]},{"kind":"Field","name":{"kind":"Name","value":"muxAssetId"}},{"kind":"Field","name":{"kind":"Name","value":"framerate"}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"muxPlaybackId"}},{"kind":"Field","name":{"kind":"Name","value":"streamingUrl"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"externalVideo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"}},{"kind":"Field","name":{"kind":"Name","value":"provider"}},{"kind":"Field","name":{"kind":"Name","value":"providerUid"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnailUrl"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"gallerySectionRecord"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GallerySectionRecord"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"galleryImages"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","name":{"kind":"Name","value":"imageDescription"}},{"kind":"Field","name":{"kind":"Name","value":"imageAsset"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 80vw, 100vw, 1200px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"max"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]} as unknown as DocumentNode<PostQuery, PostQueryVariables>;
export const PostsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Posts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"blogImageHover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allPostsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<PostsQuery, PostsQueryVariables>;
export const ProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Products"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allProducts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"_modelApiKey"}},{"kind":"Field","alias":{"kind":"Name","value":"slugs"},"name":{"kind":"Name","value":"_allSlugLocales"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"locale"}},{"kind":"Field","name":{"kind":"Name","value":"value"}}]}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"abstract"}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"productImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"sizes"},"value":{"kind":"StringValue","value":"(min-width:768px) 50vw, (min-width:1024px) 33vw, 100vw, 500px","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"imgixParams"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auto"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"format"},{"kind":"EnumValue","value":"compress"}]}},{"kind":"ObjectField","name":{"kind":"Name","value":"fit"},"value":{"kind":"EnumValue","value":"crop"}},{"kind":"ObjectField","name":{"kind":"Name","value":"ar"},"value":{"kind":"StringValue","value":"7:8","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"rImage"}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allProductsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"rImage"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ResponsiveImage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]} as unknown as DocumentNode<ProductsQuery, ProductsQueryVariables>;
export const TagDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tag"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"locale"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SiteLocale"}}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"skip"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IntType"}},"defaultValue":{"kind":"StringValue","value":"0","block":false}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"eq"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingPosts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"EnumValue","value":"_createdAt_DESC"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"StringValue","value":"100","block":false}},{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"fallbackLocales"},"value":{"kind":"Variable","name":{"kind":"Name","value":"fallbackLocale"}}},{"kind":"Argument","name":{"kind":"Name","value":"skip"},"value":{"kind":"Variable","name":{"kind":"Name","value":"skip"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_publishedAt"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tag"}}]}},{"kind":"Field","name":{"kind":"Name","value":"seoTags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"responsiveImage"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"srcSet"}},{"kind":"Field","name":{"kind":"Name","value":"webpSrcSet"}},{"kind":"Field","name":{"kind":"Name","value":"sizes"}},{"kind":"Field","name":{"kind":"Name","value":"src"}},{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"aspectRatio"}},{"kind":"Field","name":{"kind":"Name","value":"alt"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"bgColor"}},{"kind":"Field","name":{"kind":"Name","value":"base64"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"_allReferencingPostsMeta"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"locale"},"value":{"kind":"Variable","name":{"kind":"Name","value":"locale"}}},{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"isBlank"},"value":{"kind":"StringValue","value":"false","block":false}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"count"}}]}}]}}]}}]} as unknown as DocumentNode<TagQuery, TagQueryVariables>;