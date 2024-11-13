import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";

export const generateMetadata = async ({
  params,
}: {
  params: { id: string };
}) => {
  const { id } = params;
  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) {
    return {
      title: "Page Not Found | SparkUp",
      description: "The page you are looking for does not exist.",
    };
  }

  return {
    title: `${post.title} | SparkUp`,
    description:
      post.description || "Explore SparkUp for innovative startup ideas.",
  };
};
