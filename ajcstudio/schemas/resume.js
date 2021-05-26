export default {
    name: 'resume',
    title: 'Resume',
    type: 'document',
    fields: [
    {
        name: 'title',
        title: 'Title',
        type: 'string',
    },
    {
        name: 'location',
        title: 'Location',
        type: 'string',
    },
    {
        name: 'contact',
        title: 'Contact',
        type: 'string',
    },
    {
        name: 'email',
        title: 'Email',
        type: 'string',
    },
    {
        name: 'role',
        title: 'Role',
        type: 'string',
    },
    {
        name: 'profile',
        title: 'Profile',
        type: 'blockContent',
    },
    {
        name: 'digitalskills',
        title: 'Skills',
        type: 'blockContent',
    },
    {
        name: 'personalskills',
        title: 'Skills',
        type: 'blockContent',
    },
    {
        name: 'industryexperience',
        title: 'Industry Experience',
        type: 'blockContent',
    },
    {
        name: 'education',
        title: 'Education',
        type: 'blockContent',
    },
    {
        name: 'experience',
        title: 'Experience',
        type: 'blockContent',
    },
    {
        name: 'cvimagecaption',
        title: 'Image Caption',
        type: 'string',
    },
    {
        name: 'cvImage1',
        title: 'Image1',
        type: 'image',
        options: {
          hotspot: true,
        },
    },
    ],
};