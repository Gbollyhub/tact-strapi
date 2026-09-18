import type { Struct, Schema } from '@strapi/strapi';

export interface PartnersListPartnersList extends Struct.ComponentSchema {
  collectionName: 'components_partners_list_partners_lists';
  info: {
    displayName: 'PartnersList';
  };
  attributes: {
    Logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'partners-list.partners-list': PartnersListPartnersList;
    }
  }
}
