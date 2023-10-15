// Import your Client Component
import HomePage from "./home-page";

export default function Page() {
  // Fetch data directly in a Server Component
  /* const recentPosts = await getPosts(); */
  // Forward fetched data to your Client Component
  return <HomePage /* recentPosts={recentPosts} */ />;
}
