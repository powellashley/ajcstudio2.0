export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'email',
        title: 'Contact Email',
        type: 'string',
    },
    {
        name: 'phone',
        title: 'Contact Number',
        type: 'string',
    },
    {
        name: 'contactImage',
        title: 'Contact Page image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
};