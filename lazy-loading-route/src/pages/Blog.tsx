import { useLoaderData } from "react-router";
import PostList from "../components/PostList";

export default function Blog() {
   const posts = useLoaderData();
   return <PostList posts={posts} />;
}

export function loader() {
   return fetch('https://jsonplaceholder.typicode.com/posts');
}