import type { CollectionConfig } from "payload";

export const Images: CollectionConfig = {
    slug: 'images',
    labels: {
        singular: {
            en: 'Image',
            uk: 'Медиа',
            ru: 'Медиа',
        },
        plural: {
            en: 'Images',
            uk: 'Медиа',
            ru: 'Медиа',
        },
    },
    upload: true,
    admin: {
        defaultColumns: ['folder', 'filename', 'alt'],
        group: {
            en: 'Content',
            uk: 'Контент',
            ru: 'Контент',
        },
        // useAsTitle: 'folder', // (optional) pick a field to display as title
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: false,
            label: {
                en: 'Alt Text',
                uk: 'Альт-текст',
                ru: 'Альт-текст',
            },
            admin: {
                placeholder: {
                    en: 'Enter alt text',
                    uk: 'Введіть альт-текст',
                    ru: 'Введите альт-текст',
                },
            },
        },
        {
            name: 'folder',
            type: 'text', // or 'relationship' if you have a separate "folders" collection
            label: {
                en: 'Folder Name',
                uk: 'Назва теки',
                ru: 'Имя папки',
            },
            required: false,
            admin: {
                placeholder: {
                    en: 'Enter folder name',
                    uk: 'Введіть назву теки',
                    ru: 'Введите имя папки',
                },
            },
        },
    ],
};
