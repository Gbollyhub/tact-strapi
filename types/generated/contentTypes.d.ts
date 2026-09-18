import type { Struct, Schema } from '@strapi/strapi';

export interface PluginUploadFile extends Struct.CollectionTypeSchema {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    alternativeText: Schema.Attribute.String;
    caption: Schema.Attribute.String;
    width: Schema.Attribute.Integer;
    height: Schema.Attribute.Integer;
    formats: Schema.Attribute.JSON;
    hash: Schema.Attribute.String & Schema.Attribute.Required;
    ext: Schema.Attribute.String;
    mime: Schema.Attribute.String & Schema.Attribute.Required;
    size: Schema.Attribute.Decimal & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
    previewUrl: Schema.Attribute.String;
    provider: Schema.Attribute.String & Schema.Attribute.Required;
    provider_metadata: Schema.Attribute.JSON;
    related: Schema.Attribute.Relation<'morphToMany'>;
    folder: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'> &
      Schema.Attribute.Private;
    folderPath: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.file'
    >;
  };
}

export interface PluginUploadFolder extends Struct.CollectionTypeSchema {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    pathId: Schema.Attribute.Integer &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    parent: Schema.Attribute.Relation<'manyToOne', 'plugin::upload.folder'>;
    children: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.folder'>;
    files: Schema.Attribute.Relation<'oneToMany', 'plugin::upload.file'>;
    path: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::upload.folder'
    >;
  };
}

export interface PluginI18NLocale extends Struct.CollectionTypeSchema {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Schema.Attribute.String & Schema.Attribute.Unique;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::i18n.locale'
    >;
  };
}

export interface PluginContentReleasesRelease
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String & Schema.Attribute.Required;
    releasedAt: Schema.Attribute.DateTime;
    scheduledAt: Schema.Attribute.DateTime;
    timezone: Schema.Attribute.String;
    status: Schema.Attribute.Enumeration<
      ['ready', 'blocked', 'failed', 'done', 'empty']
    > &
      Schema.Attribute.Required;
    actions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release'
    >;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Schema.Attribute.Enumeration<['publish', 'unpublish']> &
      Schema.Attribute.Required;
    contentType: Schema.Attribute.String & Schema.Attribute.Required;
    entryDocumentId: Schema.Attribute.String;
    locale: Schema.Attribute.String;
    release: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::content-releases.release'
    >;
    isEntryValid: Schema.Attribute.Boolean;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflow
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows';
  info: {
    name: 'Workflow';
    description: '';
    singularName: 'workflow';
    pluralName: 'workflows';
    displayName: 'Workflow';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique;
    stages: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
    contentTypes: Schema.Attribute.JSON &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'[]'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow'
    >;
  };
}

export interface PluginReviewWorkflowsWorkflowStage
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_workflows_stages';
  info: {
    name: 'Workflow Stage';
    description: '';
    singularName: 'workflow-stage';
    pluralName: 'workflow-stages';
    displayName: 'Stages';
  };
  options: {
    version: '1.1.0';
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String;
    color: Schema.Attribute.String & Schema.Attribute.DefaultTo<'#4945FF'>;
    workflow: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::review-workflows.workflow'
    >;
    permissions: Schema.Attribute.Relation<'manyToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::review-workflows.workflow-stage'
    >;
  };
}

export interface PluginUsersPermissionsPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String & Schema.Attribute.Required;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
  };
}

export interface PluginUsersPermissionsRole
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Schema.Attribute.String;
    type: Schema.Attribute.String & Schema.Attribute.Unique;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.role'
    >;
  };
}

export interface PluginUsersPermissionsUser
  extends Struct.CollectionTypeSchema {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    timestamps: true;
    draftAndPublish: false;
  };
  attributes: {
    username: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Schema.Attribute.String;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmationToken: Schema.Attribute.String & Schema.Attribute.Private;
    confirmed: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    blocked: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    role: Schema.Attribute.Relation<
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'plugin::users-permissions.user'
    >;
  };
}

export interface ApiAboutPageAboutPage extends Struct.SingleTypeSchema {
  collectionName: 'about_pages';
  info: {
    singularName: 'about-page';
    pluralName: 'about-pages';
    displayName: 'About Page';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.Text;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    AboutWriteUp: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::about-page.about-page'
    >;
  };
}

export interface ApiAchievementAchievement extends Struct.CollectionTypeSchema {
  collectionName: 'achievements';
  info: {
    singularName: 'achievement';
    pluralName: 'achievements';
    displayName: 'Achievement';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Figure: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::achievement.achievement'
    >;
  };
}

export interface ApiBursaryBursary extends Struct.SingleTypeSchema {
  collectionName: 'bursaries';
  info: {
    singularName: 'bursary';
    pluralName: 'bursaries';
    displayName: 'Bursary';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.Text;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionTitle: Schema.Attribute.String;
    BursaryCardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    BursaryCardTitle: Schema.Attribute.String;
    BursaryCardDescription: Schema.Attribute.Text;
    BursaryCardLink: Schema.Attribute.String;
    SectionBody: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bursary.bursary'
    >;
  };
}

export interface ApiBursaryHighlightBursaryHighlight
  extends Struct.CollectionTypeSchema {
  collectionName: 'bursary_highlights';
  info: {
    singularName: 'bursary-highlight';
    pluralName: 'bursary-highlights';
    displayName: 'Bursary Highlight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    VideoUrl: Schema.Attribute.String;
    VideoSnapshot: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::bursary-highlight.bursary-highlight'
    >;
  };
}

export interface ApiCampaignMediaKitCampaignMediaKit
  extends Struct.SingleTypeSchema {
  collectionName: 'campaign_media_kits';
  info: {
    singularName: 'campaign-media-kit';
    pluralName: 'campaign-media-kits';
    displayName: 'Campaign Media Kit';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    DownloadLink: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::campaign-media-kit.campaign-media-kit'
    >;
  };
}

export interface ApiConstituentsMonthlyFinancialAssistanceConstituentsMonthlyFinancialAssistance
  extends Struct.SingleTypeSchema {
  collectionName: 'constituents_monthly_financial_assistances';
  info: {
    singularName: 'constituents-monthly-financial-assistance';
    pluralName: 'constituents-monthly-financial-assistances';
    displayName: 'Constituents Monthly Financial Assistance';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.Text;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionHeader: Schema.Attribute.String;
    SectionBody: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::constituents-monthly-financial-assistance.constituents-monthly-financial-assistance'
    >;
  };
}

export interface ApiContactAddressContactAddress
  extends Struct.CollectionTypeSchema {
  collectionName: 'contact_addresses';
  info: {
    singularName: 'contact-address';
    pluralName: 'contact-addresses';
    displayName: 'Contact Address';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Office: Schema.Attribute.String;
    Address: Schema.Attribute.Text;
    PhoneNumber: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-address.contact-address'
    >;
  };
}

export interface ApiContactPageContactPage extends Struct.SingleTypeSchema {
  collectionName: 'contact_pages';
  info: {
    singularName: 'contact-page';
    pluralName: 'contact-pages';
    displayName: 'Contact Page';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.Text;
    FAQImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::contact-page.contact-page'
    >;
  };
}

export interface ApiCovid19FinancialReliefFundCovid19FinancialReliefFund
  extends Struct.SingleTypeSchema {
  collectionName: 'covid_19_financial_relief_funds';
  info: {
    singularName: 'covid-19-financial-relief-fund';
    pluralName: 'covid-19-financial-relief-funds';
    displayName: 'Covid-19 Financial Relief Fund';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.Text;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionTitle: Schema.Attribute.String;
    CardImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    CardTitle: Schema.Attribute.String;
    CardDescription: Schema.Attribute.Text;
    Cardlink: Schema.Attribute.String;
    SectionBody: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::covid-19-financial-relief-fund.covid-19-financial-relief-fund'
    >;
  };
}

export interface ApiEventTemplate1EventTemplate1
  extends Struct.SingleTypeSchema {
  collectionName: 'event_template_1s';
  info: {
    singularName: 'event-template-1';
    pluralName: 'event-template-1s';
    displayName: 'Event Template 1';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    ShowEntryClosingDate: Schema.Attribute.Boolean;
    EntryClosingDate: Schema.Attribute.DateTime;
    HeroImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    InfoCardTitle: Schema.Attribute.String;
    InfoCardDescription: Schema.Attribute.Text;
    InfoCardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FormCode: Schema.Attribute.Text;
    PartnersList: Schema.Attribute.Component<
      'partners-list.partners-list',
      false
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::event-template-1.event-template-1'
    >;
  };
}

export interface ApiEventTemplate2EventTemplate2
  extends Struct.SingleTypeSchema {
  collectionName: 'event_template_2s';
  info: {
    singularName: 'event-template-2';
    pluralName: 'event-template-2s';
    displayName: 'Event Template 2';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    ShowEntryClosingDate: Schema.Attribute.Boolean;
    EntryClosingDate: Schema.Attribute.DateTime;
    HeroImages: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    HeroButton: Schema.Attribute.String;
    InfoCardTitle: Schema.Attribute.String;
    InfoCardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    FormCode: Schema.Attribute.Text;
    InfoCardDescription: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::event-template-2.event-template-2'
    >;
  };
}

export interface ApiFacilitationFacilitation
  extends Struct.CollectionTypeSchema {
  collectionName: 'facilitations';
  info: {
    singularName: 'facilitation';
    pluralName: 'facilitations';
    displayName: 'Facilitation';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Schema.Attribute.String;
    PostDate: Schema.Attribute.DateTime;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Tag: Schema.Attribute.Enumeration<
      [
        'Education',
        'Electrification',
        'Water',
        'Health',
        'YouthSportsTechnology',
        'Market',
        'RoadConstructions',
      ]
    >;
    Body: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::facilitation.facilitation'
    >;
  };
}

export interface ApiFaqFaq extends Struct.CollectionTypeSchema {
  collectionName: 'faqs';
  info: {
    singularName: 'faq';
    pluralName: 'faqs';
    displayName: 'Faq';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Schema.Attribute.String;
    Summary: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::faq.faq'>;
  };
}

export interface ApiFooterFooter extends Struct.SingleTypeSchema {
  collectionName: 'footers';
  info: {
    singularName: 'footer';
    pluralName: 'footers';
    displayName: 'footer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    Summary: Schema.Attribute.Text & Schema.Attribute.Required;
    EmailAddress: Schema.Attribute.String & Schema.Attribute.Required;
    PhoneNumber: Schema.Attribute.String & Schema.Attribute.Required;
    FootText: Schema.Attribute.String & Schema.Attribute.Required;
    FacebookLink: Schema.Attribute.String & Schema.Attribute.Required;
    TwitterLink: Schema.Attribute.String & Schema.Attribute.Required;
    InstagramLink: Schema.Attribute.String & Schema.Attribute.Required;
    YoutubeLink: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::footer.footer'>;
  };
}

export interface ApiGalleryGallery extends Struct.CollectionTypeSchema {
  collectionName: 'galleries';
  info: {
    singularName: 'gallery';
    pluralName: 'galleries';
    displayName: 'Gallery';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Schema.Attribute.String;
    PostDate: Schema.Attribute.DateTime;
    Images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::gallery.gallery'
    >;
  };
}

export interface ApiGlobalGlobal extends Struct.SingleTypeSchema {
  collectionName: 'globals';
  info: {
    singularName: 'global';
    pluralName: 'globals';
    displayName: 'global';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    SiteLogo: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    SiteColor: Schema.Attribute.String & Schema.Attribute.Required;
    SiteBannerBackground: Schema.Attribute.Media<'images' | 'files'> &
      Schema.Attribute.Required;
    AuthorCardImage: Schema.Attribute.Media<'files' | 'images'> &
      Schema.Attribute.Required;
    AuthorCardTitle: Schema.Attribute.String & Schema.Attribute.Required;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::global.global'>;
  };
}

export interface ApiHomepageHomepage extends Struct.SingleTypeSchema {
  collectionName: 'homepages';
  info: {
    singularName: 'homepage';
    pluralName: 'homepages';
    displayName: 'Homepage';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.String;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionText1: Schema.Attribute.String;
    SectionText2: Schema.Attribute.String;
    SectionText3: Schema.Attribute.Text;
    Section1CovidRefliefFundNumber: Schema.Attribute.String;
    Section1CovidRefliefFundCaption: Schema.Attribute.String;
    Section1SailNumber: Schema.Attribute.String;
    Section1SailCaption: Schema.Attribute.String;
    Section1MSMENumber: Schema.Attribute.String;
    Section1MSMECaption: Schema.Attribute.String;
    Section1BursaryNumber: Schema.Attribute.String;
    Section1BursaryCaption: Schema.Attribute.String;
    Section2Text1: Schema.Attribute.String;
    Section2Text2: Schema.Attribute.String;
    Section2FeaturedPostDate: Schema.Attribute.String;
    Section2FeaturedPostTitle: Schema.Attribute.String;
    Section2FeaturedPostDescription: Schema.Attribute.Text;
    Section2FeaturedPostRegisterLink: Schema.Attribute.String;
    Section2FeaturedPostMoreLink: Schema.Attribute.String;
    Section2FeaturedPostImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    Section2ListPost1Link: Schema.Attribute.String;
    Section2ListPost1Date: Schema.Attribute.String;
    Section2ListPost1Title: Schema.Attribute.String;
    Section2ListPost2Link: Schema.Attribute.String;
    Section2ListPost2Date: Schema.Attribute.String;
    Section2ListPost2Title: Schema.Attribute.String;
    Section2ListPost3Link: Schema.Attribute.String;
    Section2ListPost3Date: Schema.Attribute.String;
    Section2ListPost3Title: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::homepage.homepage'
    >;
  };
}

export interface ApiLegislativeActivityLegislativeActivity
  extends Struct.CollectionTypeSchema {
  collectionName: 'legislative_activities';
  info: {
    singularName: 'legislative-activity';
    pluralName: 'legislative-activities';
    displayName: 'Legislative Activity';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Schema.Attribute.String;
    HeroSummary: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    PostDate: Schema.Attribute.DateTime;
    Tags: Schema.Attribute.Enumeration<['Bills', 'Motions', 'Petitions']>;
    Body: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::legislative-activity.legislative-activity'
    >;
  };
}

export interface ApiMsmeMsme extends Struct.SingleTypeSchema {
  collectionName: 'msmes';
  info: {
    singularName: 'msme';
    pluralName: 'msmes';
    displayName: 'MSME';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.Text;
    HeroImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionTitle: Schema.Attribute.String;
    MSMECardImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    MSMECardTitle: Schema.Attribute.String;
    MSMECardDescription: Schema.Attribute.Text;
    MSMECardLink: Schema.Attribute.String;
    SectionBody: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::msme.msme'>;
  };
}

export interface ApiMsmeHighlightMsmeHighlight
  extends Struct.CollectionTypeSchema {
  collectionName: 'msme_highlights';
  info: {
    singularName: 'msme-highlight';
    pluralName: 'msme-highlights';
    displayName: 'Msme Highlight';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    VideoUrl: Schema.Attribute.String;
    VideoSnapshot: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::msme-highlight.msme-highlight'
    >;
  };
}

export interface ApiNeedAssessmentNeedAssessment
  extends Struct.SingleTypeSchema {
  collectionName: 'need_assessments';
  info: {
    singularName: 'need-assessment';
    pluralName: 'need-assessments';
    displayName: 'Need Assessment';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    Text3: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    SectionTitle: Schema.Attribute.String;
    SectionBody: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::need-assessment.need-assessment'
    >;
  };
}

export interface ApiPartnerPartner extends Struct.CollectionTypeSchema {
  collectionName: 'partners';
  info: {
    singularName: 'partner';
    pluralName: 'partners';
    displayName: 'Partner';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    PartnerUrl: Schema.Attribute.String;
    PartnerLogo: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::partner.partner'
    >;
  };
}

export interface ApiPressPress extends Struct.CollectionTypeSchema {
  collectionName: 'presses';
  info: {
    singularName: 'press';
    pluralName: 'presses';
    displayName: 'Press';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Schema.Attribute.String;
    PressDate: Schema.Attribute.DateTime;
    Subtitle: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Body: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::press.press'>;
  };
}

export interface ApiResourceResource extends Struct.CollectionTypeSchema {
  collectionName: 'resources';
  info: {
    singularName: 'resource';
    pluralName: 'resources';
    displayName: 'Resource';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    URL: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::resource.resource'
    >;
  };
}

export interface ApiSailSail extends Struct.SingleTypeSchema {
  collectionName: 'sails';
  info: {
    singularName: 'sail';
    pluralName: 'sails';
    displayName: 'SAIL';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text1: Schema.Attribute.String;
    Text2: Schema.Attribute.String;
    HeroLogo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    HeroVideoUrl: Schema.Attribute.String;
    SectionTitle: Schema.Attribute.String;
    SectionImage: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    PostSectionHeading1: Schema.Attribute.String;
    PostSectionHeading2: Schema.Attribute.String;
    PostSectionDescription: Schema.Attribute.Text;
    SectionBody: Schema.Attribute.RichText;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'api::sail.sail'>;
  };
}

export interface ApiSailProgrammeSailProgramme
  extends Struct.CollectionTypeSchema {
  collectionName: 'sail_programmes';
  info: {
    singularName: 'sail-programme';
    pluralName: 'sail-programmes';
    displayName: 'Sail Programme';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Title: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Description: Schema.Attribute.Text;
    Url: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::sail-programme.sail-programme'
    >;
  };
}

export interface ApiTactProgrammeTactProgramme
  extends Struct.CollectionTypeSchema {
  collectionName: 'tact_programmes';
  info: {
    singularName: 'tact-programme';
    pluralName: 'tact-programmes';
    displayName: 'Tact Programme';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Url: Schema.Attribute.String;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
    Summary: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::tact-programme.tact-programme'
    >;
  };
}

export interface ApiTestimonialTestimonial extends Struct.CollectionTypeSchema {
  collectionName: 'testimonials';
  info: {
    singularName: 'testimonial';
    pluralName: 'testimonials';
    displayName: 'Testimonial';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Text: Schema.Attribute.Text;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
  };
}

export interface AdminPermission extends Struct.CollectionTypeSchema {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    subject: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<{}>;
    conditions: Schema.Attribute.JSON & Schema.Attribute.DefaultTo<[]>;
    role: Schema.Attribute.Relation<'manyToOne', 'admin::role'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
  };
}

export interface AdminUser extends Struct.CollectionTypeSchema {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Schema.Attribute.String;
    email: Schema.Attribute.Email &
      Schema.Attribute.Required &
      Schema.Attribute.Private &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Schema.Attribute.Password &
      Schema.Attribute.Private &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Schema.Attribute.String & Schema.Attribute.Private;
    registrationToken: Schema.Attribute.String & Schema.Attribute.Private;
    isActive: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    roles: Schema.Attribute.Relation<'manyToMany', 'admin::role'> &
      Schema.Attribute.Private;
    blocked: Schema.Attribute.Boolean &
      Schema.Attribute.Private &
      Schema.Attribute.DefaultTo<false>;
    preferedLanguage: Schema.Attribute.String;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::user'>;
  };
}

export interface AdminRole extends Struct.CollectionTypeSchema {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String;
    users: Schema.Attribute.Relation<'manyToMany', 'admin::user'>;
    permissions: Schema.Attribute.Relation<'oneToMany', 'admin::permission'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::role'>;
  };
}

export interface AdminApiToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    type: Schema.Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'read-only'>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<'oneToMany', 'admin::api-token'>;
  };
}

export interface AdminApiTokenPermission extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::api-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::api-token-permission'
    >;
  };
}

export interface AdminTransferToken extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.Unique &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Schema.Attribute.String &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Schema.Attribute.DefaultTo<''>;
    accessKey: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Schema.Attribute.DateTime;
    permissions: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Schema.Attribute.DateTime;
    lifespan: Schema.Attribute.BigInteger;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token'
    >;
  };
}

export interface AdminTransferTokenPermission
  extends Struct.CollectionTypeSchema {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Schema.Attribute.Relation<'manyToOne', 'admin::transfer-token'>;
    createdAt: Schema.Attribute.DateTime;
    updatedAt: Schema.Attribute.DateTime;
    publishedAt: Schema.Attribute.DateTime;
    createdBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    updatedBy: Schema.Attribute.Relation<'oneToOne', 'admin::user'> &
      Schema.Attribute.Private;
    locale: Schema.Attribute.String;
    localizations: Schema.Attribute.Relation<
      'oneToMany',
      'admin::transfer-token-permission'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ContentTypeSchemas {
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::review-workflows.workflow': PluginReviewWorkflowsWorkflow;
      'plugin::review-workflows.workflow-stage': PluginReviewWorkflowsWorkflowStage;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'api::about-page.about-page': ApiAboutPageAboutPage;
      'api::achievement.achievement': ApiAchievementAchievement;
      'api::bursary.bursary': ApiBursaryBursary;
      'api::bursary-highlight.bursary-highlight': ApiBursaryHighlightBursaryHighlight;
      'api::campaign-media-kit.campaign-media-kit': ApiCampaignMediaKitCampaignMediaKit;
      'api::constituents-monthly-financial-assistance.constituents-monthly-financial-assistance': ApiConstituentsMonthlyFinancialAssistanceConstituentsMonthlyFinancialAssistance;
      'api::contact-address.contact-address': ApiContactAddressContactAddress;
      'api::contact-page.contact-page': ApiContactPageContactPage;
      'api::covid-19-financial-relief-fund.covid-19-financial-relief-fund': ApiCovid19FinancialReliefFundCovid19FinancialReliefFund;
      'api::event-template-1.event-template-1': ApiEventTemplate1EventTemplate1;
      'api::event-template-2.event-template-2': ApiEventTemplate2EventTemplate2;
      'api::facilitation.facilitation': ApiFacilitationFacilitation;
      'api::faq.faq': ApiFaqFaq;
      'api::footer.footer': ApiFooterFooter;
      'api::gallery.gallery': ApiGalleryGallery;
      'api::global.global': ApiGlobalGlobal;
      'api::homepage.homepage': ApiHomepageHomepage;
      'api::legislative-activity.legislative-activity': ApiLegislativeActivityLegislativeActivity;
      'api::msme.msme': ApiMsmeMsme;
      'api::msme-highlight.msme-highlight': ApiMsmeHighlightMsmeHighlight;
      'api::need-assessment.need-assessment': ApiNeedAssessmentNeedAssessment;
      'api::partner.partner': ApiPartnerPartner;
      'api::press.press': ApiPressPress;
      'api::resource.resource': ApiResourceResource;
      'api::sail.sail': ApiSailSail;
      'api::sail-programme.sail-programme': ApiSailProgrammeSailProgramme;
      'api::tact-programme.tact-programme': ApiTactProgrammeTactProgramme;
      'api::testimonial.testimonial': ApiTestimonialTestimonial;
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
    }
  }
}
