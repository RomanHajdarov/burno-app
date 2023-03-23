import { defineField, defineType } from "sanity";

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
      defineField({
        name: 'verewigung',
        title: 'unterschrift',
        type: 'string',
      }),
    ],
})