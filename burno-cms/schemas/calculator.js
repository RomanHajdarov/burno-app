import { defineField, defineType } from "sanity";

export default defineType({
    name: 'calculator',
    title: 'Calculator',
    type: 'document',
    fields: [
      defineField({
        name: 'Ansprache',
        title: 'recheninfo',
        type: 'string',
      }),

      defineField ({
        name: 'mainImage',
        title: 'ladevorgang',
        type: 'image',

      }),
    ],
})