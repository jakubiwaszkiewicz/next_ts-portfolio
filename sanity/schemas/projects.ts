import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    defineField(
      {
        name: 'title',
        title: 'title',
        description: 'Title of the project',
        type: "string"
      },
    ),
    defineField(
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
          hotspot: true,
        }
      }
    ),
    defineField(
      {
        name: 'summary',
        title: 'Summary',
        type: 'text',
      }
    ),
    defineField(
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{ type: "reference", to: { type: "skills" } }],
      }
    ),
    defineField(
      {
        name: 'linkToBuild',
        title: 'LinkToBuild',
        type: 'url',
      }
    ),
  ]
})
