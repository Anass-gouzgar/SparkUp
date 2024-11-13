const sanityClient = require("@sanity/client").default;

const client = sanityClient({
  projectId: "42mb8euy", // Replace with your project ID
  dataset: "production", // Replace with your dataset (e.g., 'production')
  useCdn: false,
  token:
    "skVKxO2DATUVDXAN9FO3UqISBXy9PEEsgj2sCfuJ1Paiw4g8jlP42c7dnW8J1XmE20tWNUoHLHGUkVNuLgN8XghnKtIR5fIURYmiuPwzwozv6Iirq7N0HMlsRjcakfGve3WctnjOKS0nJRsezGOQUukMaUr1pYar5btaY7uGNHeDrqxbMPw6", // Replace with a token that has delete permissions
});

async function deleteAllPlaylists() {
  try {
    // Fetch all playlist documents
    const playlists = await client.fetch('*[_type == "playlist"]');
    if (playlists.length === 0) {
      console.log("No playlists found to delete.");
      return;
    }

    // Create delete operations for each playlist
    const deleteOps = playlists.map((playlist) => client.delete(playlist._id));

    // Execute all delete operations in parallel
    await Promise.all(deleteOps);
    console.log("All playlist documents have been deleted.");
  } catch (error) {
    console.error("Error deleting playlists:", error);
  }
}

deleteAllPlaylists();
