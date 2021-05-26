export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    { 
        name: 'aboutpgImage',
        title: 'About image',
        type: 'image',
        options: {
          hotspot: true,
        },
      },
    {
        name: 'aboutintro',
        title: 'About Intro',
        type: 'string',
    },
    {
        name: 'aboutpara1',
        title: 'Background Paragraph',
        type: 'blockContent',
    },
    {
        name: 'interesttitle1',
        title: 'Title 1',
        type: 'string',
    },
    {
        name: 'interestbody1',
        title: 'Interest 1',
        type: 'string',
    },
    {
        name: 'interesttitle2',
        title: 'Title 2',
        type: 'string',
    },
    {
        name: 'interestbody2',
        title: 'Interest 2',
        type: 'string',
    },
    {
        name: 'interesttitle3',
        title: 'Title 3',
        type: 'string',
    },
    {
        name: 'interestbody3',
        title: 'Interest 3',
        type: 'string',
    },
    ],
};