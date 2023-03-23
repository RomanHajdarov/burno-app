import { defineField, defineType } from "sanity";

export default defineType({
    name: 'Result',
    title: 'Ergebnis',
    type: 'document',
    fields: [
      defineField({
        name: 'title',
        title: 'Ergebnis des Projektes',
        type: 'string',
      }),

      defineField ({
        name: 'mainImage',
        title: 'ladevorgang',
        type: 'image',
      }),

        defineField({
          name: 'result',
          title: 'Ergebnis der Fettverbrennung',
          type: 'string',
      }),

      
    ]
})