import type { CollectionConfig } from 'payload';

export const Folders: CollectionConfig = {
  slug: 'folders',
  access: {
    read: () => true,
  },
  labels: {
    singular: {
      en: 'Folder',
      uk: 'Папка',
    },
    plural: {
      en: 'Folders',
      uk: 'Папки',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'parent', 'updatedAt'],
    group: {
      en: 'Content',
      uk: 'Контент',
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Folder Name',
        uk: 'Назва папки',
      },
      admin: {
        placeholder: {
          en: 'Enter folder name',
          uk: 'Введіть назву папки',
        },
      },
    },
    {
      name: 'parent',
      type: 'relationship',
      relationTo: 'folders',
      required: false,
      hasMany: false,
      label: {
        en: 'Parent Folder',
        uk: 'Батьківська папка',
      },
      admin: {
        description: {
          en: 'Leave empty for root level folder',
          uk: 'Залиште порожнім для папки кореневого рівня',
        },
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: false,
      label: {
        en: 'Description',
        uk: 'Опис',
      },
    },
  ],
};
