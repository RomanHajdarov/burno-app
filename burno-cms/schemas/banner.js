import { defineField, defineType } from "sanity";

export default defineType({
    name: 'banner',
    title: 'Banner',
    type: 'document',
    fields: [
      defineField({
        name: 'banner',
        title: 'slogan',
        type: 'string',
      }),

      defineField ({
        name: 'mainImage',
        title: 'Bild der App',
        type: 'image',

      }),
    ],
})