export default {
    name: "blog",
    title: "Blog",
    type: "document",
    fields: [
    {
        name: "title",
        type: "string",
    },
    {
        name: "date",
        type: "string",
    },
    {
        name: 'mainImage',
        title: 'Main image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
    },
    {
        name: "tags",
        type: "array",
        of: [
            {
                type: "string",
            },
        ],
        options: {
            layout: "tags",
        },
    },
],
};