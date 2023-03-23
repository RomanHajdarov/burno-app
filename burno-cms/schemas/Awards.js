import { defineField, defineType } from "sanity";

export default defineType({
    name: 'awards',
    title: 'Awards',
    type: 'document',
    fields: [

      defineField ({
        name: 'karusselImage',
        title: 'karusselbild',
        type: 'image',
        options:{
            hotspot:true,
        }

      }),
    ],
})