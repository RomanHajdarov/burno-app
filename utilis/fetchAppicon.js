import {sanityClient} from "../library/sanity";
import { groq } from "next-sanity";

export const fetchAppicon = async () => {
    const query = groq`
    *[_type=="banner"] {
        ...
    }
    `;
   const Appicon = await sanityClient.fetch(query);
   return Appicon;
}; 