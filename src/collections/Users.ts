import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: {
      en: 'User',
      uk: 'Користувач',
      ru: 'Пользователь',
    },
    plural: {
      en: 'Users',
      uk: 'Користувачі',
      ru: 'Пользователи',
    },
  },
  admin: {
    useAsTitle: 'email',
    group: {
      en: 'Admin',
      uk: 'Адмін',
      ru: 'Админ',
    },
  },
  auth: true,
  fields: [
    // Email is automatically added by Payload for auth collections
    // Add more fields as needed, each can have labels/placeholder with en/uk/ru
  ],
};
