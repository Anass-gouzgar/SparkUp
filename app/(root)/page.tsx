import SearchForm from "../../components/SearchForm";
import StartupCard, {StartupTypeCard} from "@/components/StartupCard";
import { STARTUPS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive } from "@/sanity/lib/live";
import { auth } from "@/auth";
import Faq from "@/components/Faq";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null}

  const session = await auth()


const {data: posts} = await sanityFetch({query: STARTUPS_QUERY, params})

  return (
    <div className="">
      <section className="blue_container">
        <h1 className="heading ">
          Present
           Your Startup, <br />
          Connect with entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl">
          Showcase Your Startup, Share Ideas, Gain Recognition, and Connect with
          Innovators.
        </p>
        <SearchForm query={query} />
      </section>

      {/* //! cards container  */}

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All Startaps"}
        </p>

        {/* //! cards container  */}

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
      <Faq/>
      <SanityLive />
    </div>
  );
}