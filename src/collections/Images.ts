import type { CollectionConfig } from "payload";

export const Images: CollectionConfig = {
    slug: 'images',
    access: {
      read: () => true
    },
    labels: {
        singular: {
            en: 'Image',
            uk: 'Медиа',
        },
        plural: {
            en: 'Images',
            uk: 'Медиа',
        },
    },
    upload: {
        imageSizes: [
            {
                name: 'thumbnail',
                width: 640,
                withoutEnlargement: true,
                formatOptions: { format: 'webp', options: { quality: 75 } },
            },
            {
                name: 'card',
                width: 1600,
                withoutEnlargement: true,
                formatOptions: { format: 'webp', options: { quality: 82 } },
            },
        ],
    },
    admin: {
        defaultColumns: ['folder', 'filename', 'alt'],
        group: {
            en: 'Content',
            uk: 'Контент',
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
            },
            admin: {
                placeholder: {
                    en: 'Enter alt text',
                    uk: 'Введіть альт-текст',
                },
            },
        },
        {
            name: 'folder',
            type: 'text',
            label: {
                en: 'Folder Name',
                uk: 'Назва теки',
            },
            required: false,
            admin: {
                placeholder: {
                    en: 'Enter folder name',
                    uk: 'Введіть назву теки',
                },
            },
        },
    ],
};
