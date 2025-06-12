import type { CollectionConfig } from 'payload'


const TeamMembers: CollectionConfig = {
    slug: 'team-members',
    admin: {
        useAsTitle: 'name',
        defaultColumns: ['name', 'designation', 'updatedAt'],
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true,
            label: 'Name',
        },
        {
            name: 'designation',
            type: 'text',
            required: true,
            label: 'Designation',
        },
        {
            name: 'image',
            type: 'upload',
            relationTo: 'images',
            required: false,
            label: 'Profile Image',
        },
        {
            name: 'socialLinks',
            type: 'array',
            label: 'Social Links',
            fields: [
                {
                    name: 'platform',
                    type: 'select',
                    required: true,
                    options: [
                        { label: 'LinkedIn', value: 'linkedin' },
                        { label: 'Twitter', value: 'twitter' },
                        { label: 'Instagram', value: 'instagram' },
                        { label: 'Facebook', value: 'facebook' },
                        { label: 'GitHub', value: 'github' },
                        { label: 'Website', value: 'website' },
                        { label: 'Other', value: 'other' },
                    ],
                },
                {
                    name: 'url',
                    type: 'text',
                    required: true,
                    // @ts-ignore
                    validate: (val: string | URL) => {
                        if (!val) return 'URL is required'
                        try {
                            new URL(val)
                            return true
                        } catch {
                            return 'Please enter a valid URL'
                        }
                    },
                },
                {
                    name: 'customPlatformName',
                    type: 'text',
                    admin: {
                        condition: (data, siblingData) => siblingData.platform === 'other',
                    },
                    label: 'Platform Name',
                },
            ],
        },
        {
            name: 'displayOrder',
            type: 'number',
            label: 'Display Order',
            admin: {
                description: 'Used to control the order in which team members appear',
            },
        },
        {
            name: 'isActive',
            type: 'checkbox',
            label: 'Active',
            defaultValue: true,
            admin: {
                description: 'Uncheck to hide this team member from the website',
            },
        },
        {
            name: 'bio',
            type: 'richText',
            label: 'Biography',
            admin: {
                description: 'Optional detailed biography',
            },
        },
    ],
    hooks: {
        beforeChange: [
            ({ data }) => {
                // Auto-generate display order if not provided
                if (data.displayOrder === undefined || data.displayOrder === null) {
                    data.displayOrder = Date.now()
                }
                return data
            },
        ],
    },
}

export default TeamMembers