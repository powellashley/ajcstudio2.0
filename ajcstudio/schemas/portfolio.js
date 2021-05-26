export default {
    name: 'portfolio',
    title: 'Portfolio',
    type: 'document',
    fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 96,
        },
    },
    {
        name: 'place',
        title: 'Place',
        type: 'string',
    },
    {
        name: "areaofFocus",
        title: "Area of Focus",
        type: "string",
        options: {
            list: [
                {value: "Decorative", title: "Decorative"},
                {value: "Commercial", title: "Commercial"},
                {value: "Architectural", title: "Architectural"},
                {value: "Hospitality", title: "Hospitality"},
                {value: "Transport", title: "Transport"},
            ],
        }
    },
    {
        name: "projectType",
        title: "Project Type",
        type: "string",
        options: {
            list: [
                {value: "Personal Project", title: "Personal Project"},
                {value: "Freelance Project", title: "Freelance Project"},
                {value: "University Project", title: "University Project"},
            ],
        },
    },
    {
        name: 'date',
        title: 'Date',
        type: 'string',
    },
    {
        name: 'mainImage',
        title: 'Portfolio Page image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    {
        name: 'mainImagecaption',
        title: 'Main Image Caption',
        type: 'string',
    },
    {
        name: 'body',
        title: 'Project Overview',
        type: 'blockContent',
    },
    {
        name: 'bodyImage',
        title: 'Body Image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    {
        name: 'bodyImagetext',
        title: 'Body Image Caption',
        type: 'string',
    },
    {
        name: 'brief',
        title: 'Project Brief',
        type: 'blockContent',
    },
    {
        name: 'rationale',
        title: 'Project Rationale',
        type: 'blockContent',
    },
    {
        name: 'response',
        title: 'Project Response',
        type: 'blockContent',
    },
    {
        name: 'bodyImage2',
        title: 'Body Image 2',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    {
        name: 'bodyImage2text',
        title: 'Body Image 2 Caption',
        type: 'string',
    },

    {
        name: 'galleryImage1',
        title: 'Gallery 1 image',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    {
      name: "caption1",
      type: "text",
    },
    {
        name: 'galleryImage2',
        title: 'Gallery 2 image',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    {
      name: "caption2",
      type: "text",
    },
    {
        name: 'galleryImage3',
        title: 'Gallery 3 image',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    {
      name: "caption3",
      type: "text",
    },
    {
      name: 'galleryImage4',
      title: 'Gallery 4 image',
      type: 'image',
      options: {
        hotspot: true,
      },
  },
  {
    name: "caption4",
    type: "text",
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