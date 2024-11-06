import { defineQuery } from "groq";

export const STARTUPS_QUERY = defineQuery(`*[_type == "startup" && 
  defined(slug.current)]
  | order(_createdAt desc)
  {
  author -> {_id, image,name , bio, username},
    _id,
    slug,
    _createdAt 
    , views,
    description,
    category,
    image
}`)