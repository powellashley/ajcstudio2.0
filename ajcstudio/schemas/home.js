export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'hometxt',
        title: 'Home Text',
        type: 'string',
    },
    {
        name: 'homepgImage',
        title: 'Home image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    ],
};